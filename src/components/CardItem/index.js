import {ImFire} from 'react-icons/im'

import {FaSyncAlt} from 'react-icons/fa'

import {BsDot} from 'react-icons/bs'

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {
    name,
    ownerName,
    availableCurrency,
    availableValue,
    budgetName,
    cardType,
    expiry,
    limit,
    spentCurrency,
    spentValue,
  } = cardDetails

  const overallWidth = spentValue + availableValue
  const spentWidth = (spentValue / overallWidth) * 90
  const availableWidth = (availableValue / overallWidth) * 90

  return (
    <li className="card-container">
      <div className="name-subscription-burner-container">
        <div className="name-subscription-container">
          <div className="name-container">
            <h1 className="name">{name}</h1>
          </div>
          <div className="subscription-container">
            <p className="owner-name">{ownerName}</p>
            <BsDot className="dot" />
            <p className="subscription-text">{budgetName}</p>
          </div>
        </div>
        <div className="fire-icon-container">
          {cardType === 'BURNER' ? (
            <ImFire className="fire-icon" />
          ) : (
            <FaSyncAlt className="fire-icon" />
          )}
        </div>
      </div>
      <div className="burner-expires-container">
        <div className="burner-text-container">
          <p className="burner-text">{cardType}</p>
        </div>
        <div className="expires-container">
          {cardType === 'BURNER' ? (
            <p className="expires-text">{`Expires: ${expiry}`}</p>
          ) : (
            <p className="expires-text">{`August Limit: ${limit}`}</p>
          )}
        </div>
      </div>
      <div className="bar-container">
        <hr style={{width: `${spentWidth}%`}} className="red-bar" />
        <hr style={{width: `${availableWidth}%`}} className="green-bar" />
      </div>
      <div className="spent-container">
        <div className="spent-text-container">
          <BsDot className="red-dot" />
          <p className="spent-text">Spent</p>
        </div>
        <div className="currency-container">
          <p className="value-text">{spentValue}</p>
          <p className="currency-text">{spentCurrency}</p>
        </div>
      </div>
      <div className="spent-container bold">
        <div className="spent-text-container">
          <BsDot className="green-dot" />
          <p className="spent-text">Available to spend</p>
        </div>
        <div className="currency-container">
          <p className="value-text">{availableValue}</p>
          <p className="currency-text">{availableCurrency}</p>
        </div>
      </div>
    </li>
  )
}

export default CardItem
