/* eslint-disable array-callback-return */
import * as ActionTypes from "./ActionTypes";
import { firestore, auth } from "../firebase/firebase";
import firebase from "firebase";

export const addProducts = (data) => ({
     type: ActionTypes.ADD_PRODUCTS,
     payload: data,
});
export const productsFailed = (error) => ({
     type: ActionTypes.PRODUCTS_FAILED,
     payload: error,
});
export const productsLoading = () => ({
     type: ActionTypes.PRODUCTS_LOADING,
});

export const fetchProducts = () => (dispatch) => {
     dispatch(productsLoading(true));
     return firestore
          .collection("products")
          .get()
          .then((snapshot) => {
               let products = [];
               snapshot.forEach((doc) => {
                    const data = doc.data();
                    const _id = doc.id;
                    products.push({ _id, ...data });
               });
               return products;
          })
          .then((products) => dispatch(addProducts(products)))
          .catch((error) => dispatch(productsFailed(error.message)));
};

export const addCart = (data) => ({
     type: ActionTypes.ADD_CART,
     payload: data,
});
export const cartFailed = (error) => ({
     type: ActionTypes.CART_FAILED,
     payload: error,
});
export const cartLoading = () => ({
     type: ActionTypes.CART_LOADING,
});

export const fetchCart = () => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     dispatch(cartLoading(true));
     return firestore
          .collection("users")
          .doc(auth.currentUser.uid)
          .get()
          .then((snapshot) => {
               return snapshot.data().cart;
          })
          .then((cart) => dispatch(addCart(cart)))
          .catch((error) => dispatch(cartFailed(error.message)));
};

export const postCart = (data) => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     return firestore
          .collection(`users`)
          .doc(auth.currentUser.uid)
          .update({
               cart: firebase.firestore.FieldValue.arrayUnion(data),
          })
          .then((data) => dispatch(fetchCart()))
          .catch((error) => dispatch(cartFailed(error.message)));
};

export const addOrders = (data) => ({
     type: ActionTypes.ADD_ORDERS,
     payload: data,
});
export const ordersFailed = (error) => ({
     type: ActionTypes.ORDERS_FAILED,
     payload: error,
});
export const ordersLoading = () => ({
     type: ActionTypes.ORDERS_LOADING,
});

export const fetchOrders = () => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     dispatch(ordersLoading(true));
     return firebase
          .firestore()
          .doc(`users/${auth.currentUser.uid}`)
          .get()
          .then((doc) => {
               return doc.data().orders;
          })
          .then((orders) => dispatch(addOrders(orders)))
          .catch((error) => dispatch(ordersFailed(error.message)));
};

export const postOrders = (data) => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     return firestore
          .collection("user")
          .doc(auth.currentUser.uid)
          .get()
          .then((res) => {
               data.map((doc) => {
                    doc.date = new Date();
                    firestore
                         .collection(`users`)
                         .doc(auth.currentUser.uid)
                         .update({
                              orders: firebase.firestore.FieldValue.arrayUnion(
                                   doc
                              ),
                         })
                         .catch((error) =>
                              dispatch(ordersFailed(error.message))
                         );
               });
          })
          .then((data) => dispatch(fetchOrders()))
          .catch((error) => dispatch(ordersFailed(error.message)));
};

export const deleteProduct = () => ({
     type: ActionTypes.PRODUCT_DELETE,
});

export const deleteCart = (id) => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     dispatch(deleteProduct(true));
     return firebase
          .firestore()
          .doc(`users/${auth.currentUser.uid}`)
          .get()
          .then((doc) => {
               return doc.data().cart;
          })
          .then((cart) => {
               let newCart = cart.filter((doc) => doc.id !== id);
               firestore
                    .collection("users")
                    .doc(auth.currentUser.uid)
                    .update({
                         cart: newCart,
                    })
                    .then((cart) => dispatch(fetchCart()));
          })
          .catch((error) => dispatch(cartFailed(error.message)));
};

export const deleteWholeCart = () => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     return firebase
          .firestore()
          .doc(`users/${auth.currentUser.uid}`)
          .get()
          .then((doc) => {
               return doc.data().cart;
          })
          .then((cart) => {
               let newCart = [];
               firestore
                    .collection("users")
                    .doc(auth.currentUser.uid)
                    .update({
                         cart: newCart,
                    })
                    .then((cart) => dispatch(fetchCart()));
          })
          .catch((error) => dispatch(cartFailed(error.message)));
};

export const addAddress = (data) => ({
     type: ActionTypes.ADD_ADDRESS,
     payload: data,
});
export const addressFailed = (error) => ({
     type: ActionTypes.ADDRESS_FAILED,
     payload: error,
});
export const addressLoading = () => ({
     type: ActionTypes.ADDRESS_LOADING,
});

export const fetchAddress = () => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     dispatch(addressLoading(true));
     return firebase
          .firestore()
          .doc(`users/${auth.currentUser.uid}`)
          .get()
          .then((doc) => {
               return doc.data().address;
          })
          .then((address) => dispatch(addAddress(address)))
          .catch((error) => dispatch(addressFailed(error.message)));
};

export const deleteAddress = (id) => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     return firebase
          .firestore()
          .doc(`users/${auth.currentUser.uid}`)
          .get()
          .then((doc) => {
               return doc.data().address;
          })
          .then((address) => {
               let newAddress = address.filter((doc) => doc.id !== id);
               firestore
                    .collection("users")
                    .doc(auth.currentUser.uid)
                    .update({
                         address: newAddress,
                    })
                    .then((address) => dispatch(fetchAddress()));
          })
          .catch((error) => dispatch(addressFailed(error.message)));
};

export const postAddress = (data) => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     return firestore
          .collection(`users`)
          .doc(auth.currentUser.uid)
          .update({
               address: firebase.firestore.FieldValue.arrayUnion(data),
          })
          .then((data) => dispatch(fetchAddress()))
          .catch((error) => dispatch(addressFailed(error.message)));
};

export const WriteProductReview = (data) => (dispatch) => {
     if (!auth.currentUser) {
          return;
     }
     return firestore
          .collection(`products`)
          .doc(data.id)
          .update({
               review: firebase.firestore.FieldValue.arrayUnion(data),
          })
          .then((res) => {
               firestore
                    .collection(`users`)
                    .doc(auth.currentUser.uid)
                    .update({
                         reviewList: firebase.firestore.FieldValue.arrayUnion(
                              data.id
                         ),
                    })
                    .then((res) => dispatch(fetchProducts()))
                    .catch((error) => console.log(error.message));
          });
};
