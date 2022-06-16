import React, { Component } from 'react';
import withRouter from './withRouter';

class Product extends Component{
  render() {
    console.log('Props:', this.props)
    return (
      <>
        <h3>Product Page</h3>
        <div>Id: {this.props.params.id}</div>
      </>
    )
  }
}

export default withRouter(Product);