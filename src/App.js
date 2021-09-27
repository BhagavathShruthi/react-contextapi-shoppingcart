import React from 'react';
import './style.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Products from './pages/product';
import Cart from './pages/cart';

import ShoppingContext from './context/shoppingContext';

const products = [
  {
    id: 1,
    name: 'In Search of Lost Time',
    author: 'Marcel Proust',
    price: 550,
  },
  { id: 2, name: 'Ulysses', author: 'James Joyce', price: 240 },
  {
    id: 3,
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    price: 320,
  },
  {
    id: 4,
    name: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    price: 180,
  },
  { id: 5, name: 'The Great Gats', author: 'F', price: 630 },
];

export class App extends React.Component {
  // react-contextapi-shoppingcart
  addToCart_1 = (id) => {
    this.state = {
      ...this.state,
      productList: this.state.productList.filter((x) => x.id != id),
    };
    this.state.cartList.push(products.find((x) => x.id == id));
    this.state.itemsinCart = this.state.cartList?.length;
    this.setState(this.state);
    console.log('Added', id, this.state);
  };
  removeFromCart_1 = (id) => {
    this.state = {
      ...this.state,
      cartList: this.state.cartList.filter((x) => x.id != id),
    };
    this.state.productList.push(products.find((x) => x.id == id));
    this.state.itemsinCart = this.state.cartList?.length;
    this.setState(this.state);
    console.log('Removed', id);
  };
  state = {
    productList: products,
    cartList: [],
    itemsinCart: 0,
    addToCart1: this.addToCart_1,
    removeFromCart1: this.removeFromCart_1,
  };
  render() {
    return (
      <ShoppingContext.Provider value={this.state}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/">
                <Redirect to="/products" />
              </Route>
              <Route>NoMatch</Route>
            </Switch>
          </BrowserRouter>
        </div>
        <div className="note">This page makes use of context API</div>
      </ShoppingContext.Provider>
    );
  }
}
