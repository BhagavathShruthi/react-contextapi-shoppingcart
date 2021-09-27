import React from 'react';
export default class Display extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.itemList && this.props.itemList.length > 0 ? (
          this.props.itemList?.map((item, i) => (
            <div className="row book-item" key={i}>
              <div className="col-8">
                <div className="book-name">{item.name}</div>
                <div className="book-author">{item.author}</div>
              </div>
              <div className="col-1 book-price">{item.price}</div>
              <div className="col-3">
                <button
                  className="btn btn-primary book-action-button"
                  onClick={() => this.props.action(item.id)}
                >
                  {this.props.actionLabel}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="emptyContentMessage">
            {this.props.emptyContentMessage}
          </div>
        )}
      </div>
    );
  }
}
