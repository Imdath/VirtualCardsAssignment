import {ImFire} from 'react-icons/im'

import {FaSyncAlt} from 'react-icons/fa'

import {BsDot} from 'react-icons/bs'

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {
    name,
    ownerName,
    budgetName,
    cardType,
    expiry,
    spent,
    availableToSpend,
    limit,
  } = cardDetails
  const {spentValue, spentCurrency} = spent
  const {availableValue, availableCurrency} = availableToSpend

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

      <hr className="green-line" />
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
      <div className="spent-container">
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