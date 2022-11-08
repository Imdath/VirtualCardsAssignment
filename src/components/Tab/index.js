import {TiThMenu, TiThLarge} from 'react-icons/ti'

import './index.css'

const Tab = () => (
  <div className="tab-container">
    <div className="tab-item-container">
      <button className="tab-item-button" type="button">
        <p className="tab-item-text">Your</p>
      </button>
      <button className="tab-item-button-all" type="button">
        <p className="tab-item-text-all">All</p>
      </button>
      <button className="tab-item-button" type="button">
        <p className="tab-item-text">Blocked</p>
      </button>
    </div>
    <div className="tab-icon-container">
      <TiThLarge className="tab-icon" />
      <TiThMenu className="tab-icon" />
    </div>
  </div>
)

export default Tab
