import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { checkoutOrderAction } from "../actions/orderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };

  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MoodYHHQpvzJOWKhpGmy0VjIpSgFfVjP3Me1WNAniKMNaqRyUmEbzYSxG1QkTvG4nH1fEClsZB4T6VWnnGPNcJO00KZZNvRnw"
        currency="TRY"
      >
        <button className="btn btn-outline-danger my-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckoutPage;
