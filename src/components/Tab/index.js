import {Component} from 'react'

import {Link} from 'react-router-dom'

import {TiThMenu, TiThLarge} from 'react-icons/ti'

import './index.css'

class Tab extends Component {
  state = {
    yourTab: false,
    allTab: true,
    blockedTab: false,
  }

  yourClickTab = () => {
    this.setState({yourTab: true, allTab: false, blockedTab: false})
  }

  allClickTab = () => {
    this.setState({yourTab: false, allTab: true, blockedTab: false})
  }

  blockedClickTab = () => {
    this.setState({yourTab: false, allTab: false, blockedTab: true})
  }

  render() {
    const {yourTab, allTab, blockedTab} = this.state

    const yourClassName = yourTab ? 'tab-red' : 'tab-normal'
    const allClassName = allTab ? 'tab-red' : 'tab-normal'
    const blockedClassName = blockedTab ? 'tab-red' : 'tab-normal'

    const yourTextClassName = yourTab ? 'text-dark' : 'text-light'
    const allTextClassName = allTab ? 'text-dark' : 'text-light'
    const blockedTextClassName = blockedTab ? 'text-dark' : 'text-light'

    return (
      <div className="tab-container">
        <div className="tab-item-container">
          <Link to="/your">
            <button
              className={`${yourClassName} button`}
              type="button"
              onClick={this.yourClickTab}
            >
              <p className={yourTextClassName}>Your</p>
            </button>
          </Link>
          <Link to="/">
            <button
              className={`${allClassName} button`}
              type="button"
              onClick={this.allClickTab}
            >
              <p className={allTextClassName}>All</p>
            </button>
          </Link>
          <Link to="/blocked">
            <button
              className={`${blockedClassName} button`}
              type="button"
              onClick={this.blockedClickTab}
            >
              <p className={blockedTextClassName}>Blocked</p>
            </button>
          </Link>
        </div>
        <div className="tab-icon-container">
          <TiThLarge className="tab-icon" />
          <TiThMenu className="tab-icon" />
        </div>
      </div>
    )
  }
}
export default Tab
