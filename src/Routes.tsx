import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/bookList/BookList"
import BookDetail from "./pages/bookDetail/BookDetail"
import Checkout from "./pages/checkout/Checkout"
import Order from "./pages/orders/OrderList"

function route():JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/book-detail/:isbn">
        <BookDetail />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/orders">
        <Order />
      </Route>
    </Switch>
  )
}

export default route
