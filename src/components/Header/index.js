import './index.css'

import {BiVideo} from 'react-icons/bi'

import {AiOutlinePlus} from 'react-icons/ai'

const Header = () => (
  <div className="header-container">
    <div className="title-container">
      <h1 className="title">Virtual cards</h1>
      <div className="video-icon-container">
        <BiVideo className="video-icon" />
        <p className="video-title">Learn More</p>
      </div>
    </div>
    <div className="add-container">
      <AiOutlinePlus className="plus-icon" />
      <p className="add-card-heading">Virtual card</p>
    </div>
  </div>
)

export default Header
