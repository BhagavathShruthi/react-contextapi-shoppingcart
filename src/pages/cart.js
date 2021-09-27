import React from 'react';
import Display from './display';
import Banner from '../components/banner';

import ShoppingContext from '../context/shoppingContext';

class Cart extends React.Component {
  static contextType = ShoppingContext;
  constructor() {
    super();
    console.log('context @ constructor', this.context);
  }
  componentDidMount() {
    console.log('context @ componentDidMount', this.context);
  }
  render() {
    return (
      <div>
        <Banner itemCount={this.context.itemsinCart} />
        <div className="page-label">Your Cart</div>

        <Display
          itemList={this.context.cartList}
          actionLabel={'Remove'}
          action={(id) => this.context.removeFromCart1(id)}
          emptyContentMessage={'Please add items to the cart'}
        />
      </div>
    );
  }
}

export default Cart;
