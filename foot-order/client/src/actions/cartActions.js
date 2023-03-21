export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      ad: menu.ad,
      _id: menu.id,
      img: menu.img,
      ozellik: menu.ozellik,
      miktar: menu.miktar,
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * miktar,
      kategori: menu.kategori,
      desc: menu.desc,
    };
    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
