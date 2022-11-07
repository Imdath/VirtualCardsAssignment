import {Component} from 'react'

import Header from '../Header'

import './index.css'

class VirtualCards extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="content-container">
          <Header />
        </div>
      </div>
    )
  }
}

export default VirtualCards
