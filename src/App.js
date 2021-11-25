import React, { Component } from 'react';
import data from'./data';
class App extends React.Component {
render() {
    return (
      <div className="grid-wrapper">
      <header className="row header">
          <div className="logo">
              <a className = 'brand' href="/">Amazona</a>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
          </div>
      </header>
      {/* ENd header */}
      <main>
          <div className="row center">
            {
              data.products.map((product) => (
                <div key={product._id} className="card">
                  <a href = {`/product/${product._id}`} className="product-image">
                      <img className ='medium' src={product.image} alt="product" />
                  </a>
                  <div className="card-body">
                      <a href={`/product/${product._id}`}>
                          <h2>{product.name}</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                      </div>
                      <div className="price">
                         $ {product.price}
                      </div>
                  </div>
              </div>
              ))
            }
          </div>
          {/* End row */}
      </main>
      {/* End main */}
      <footer className="row center">
          <p>All Righs Reserved</p>
      </footer>
      {/* End footer */}
  </div>
      
    )
  }
}
export default App;
