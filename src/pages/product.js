import React from 'react';
import Display from './display';
import Banner from '../components/banner';

import ShoppingContext from '../context/shoppingContext';

class Products extends React.Component {
  render() {
    return (
      <ShoppingContext.Consumer>
        {(context) => (
          <div>
            <Banner itemCount={context.itemsinCart} />
            <div className="page-label">Purchase the books of choice</div>

            <Display
              itemList={context.productList}
              actionLabel={'Add to Cart'}
              action={(id) => context.addToCart1(id)}
              emptyContentMessage={'You have purchased all the items!'}
            />
          </div>
        )}
      </ShoppingContext.Consumer>
    );
  }
}

export default Products;
