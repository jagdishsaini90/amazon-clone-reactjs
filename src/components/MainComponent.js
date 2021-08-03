import React, { Component } from "react";
import Header from "./Header/HeaderComponent";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Login from "./auth/login";
import Signup from "./auth/Signup";
import PrivateRoute from "./auth/PrivateRoute";
import Orders from "./Orders/Orders";
import Address from "./Cart/Address";
import Payment from "./Cart/Payment";
import WriteReview from "./Orders/WriteReview";
import ProductContent from "./Pages/ProductPage";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import EBooks from "./Pages/Ebooks";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchCart,
  postCart,
  deleteCart,
  deleteWholeCart,
  postOrders,
  fetchOrders,
  postAddress,
  fetchAddress,
  deleteAddress,
  WriteProductReview,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    orders: state.orders,
    address: state.address,
    newproducts: state.newproducts,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
  fetchCart: () => {
    dispatch(fetchCart());
  },
  postCart: (data) => {
    dispatch(postCart(data));
  },
  deleteCart: (id) => {
    dispatch(deleteCart(id));
  },
  deleteWholeCart: () => {
    dispatch(deleteWholeCart());
  },
  postOrders: (data) => {
    dispatch(postOrders(data));
  },
  fetchOrders: () => {
    dispatch(fetchOrders());
  },
  postAddress: (data) => {
    dispatch(postAddress(data));
  },
  fetchAddress: () => {
    dispatch(fetchAddress());
  },
  deleteAddress: (id) => {
    dispatch(deleteAddress(id));
  },
  WriteProductReview: (data) => {
    dispatch(WriteProductReview(data));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
    this.props.fetchOrders();
    this.props.fetchAddress();
  }

  render() {
    const ProductWithId = ({ match }) => {
      return (
        <ProductContent
          product={
            this.props.products.products.filter(
              (doc) => doc._id === match.params.productId
            )[0]
          }
          length={this.props.cart.cart.length}
          isloading={this.props.products.isLoading}
          postCart={this.props.postCart}
        />
      );
    };
    return (
      <div>
        <Header length={this.props.cart.cart.length} />
        <Switch>
          <Route path="/login" component={() => <Login />} />
          <Route path="/signup" component={() => <Signup />} />
          <PrivateRoute
            path="/cart"
            component={() => (
              <>
                <Cart
                  cart={this.props.cart.cart}
                  deleteCart={this.props.deleteCart}
                  isloading={this.props.cart.deletepro}
                  cartLoading={this.props.cart.isLoading}
                  length={this.props.cart.cart.length}
                  products={this.props.products.products}
                  postCart={this.props.postCart}
                />
              </>
            )}
          />
          <PrivateRoute
            path="/orders"
            component={() => (
              <>
                <Orders
                  postCart={this.props.postCart}
                  orders={this.props.orders.orders}
                />
              </>
            )}
          />
          <PrivateRoute
            path="/review"
            component={() => (
              <>
                <WriteReview
                  WriteProductReview={this.props.WriteProductReview}
                />
              </>
            )}
          />
          <PrivateRoute
            path="/address"
            component={() => (
              <Address
                postAddress={this.props.postAddress}
                address={this.props.address.address}
                deleteAddress={this.props.deleteAddress}
              />
            )}
          />
          <PrivateRoute
            path="/payment"
            component={() => (
              <Payment
                cart={this.props.cart.cart}
                deleteWholeCart={this.props.deleteWholeCart}
                postOrders={this.props.postOrders}
              />
            )}
          />
          <Route
            path="/books"
            component={() => (
              <>
                <Books
                  books={this.props.products.products.filter(
                    (book) => book.productgroup === "Book"
                  )}
                  postCart={this.props.postCart}
                  isloading={this.props.products.isLoading}
                />
              </>
            )}
          />
          <Route
            path="/ebooks"
            component={() => (
              <>
                <EBooks
                  ebooks={this.props.products.products.filter(
                    (book) => book.productgroup === "eBooks"
                  )}
                  postCart={this.props.postCart}
                  isloading={this.props.products.isLoading}
                />
              </>
            )}
          />
          <Route path="/product/:productId" component={ProductWithId} />
          <Route
            path="/games"
            component={() => (
              <>
                <Games
                  products={this.props.products.products}
                  postCart={this.props.postCart}
                  isloading={this.props.products.isLoading}
                />
              </>
            )}
          />
          <Route path="/">
            <>
              <Home
                products={this.props.products.products}
                isloading={this.props.products.isLoading}
                postCart={this.props.postCart}
                fetchSingleProduct={this.props.fetchSingleProduct}
              />
            </>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
