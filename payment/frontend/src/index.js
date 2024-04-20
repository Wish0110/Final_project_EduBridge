import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'babel-polyfill'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 1000
  },
  {
    id: 2,
    name: 'Product 2',
    price: 2000
  },
  {
    id: 3,
    name: 'Product 3',
    price: 3000
  }
]

ReactDOM.hydrate(<App products={products} />, document.getElementById('root'))