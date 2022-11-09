import {Component} from 'react'

import {BiSearch, BiFilter} from 'react-icons/bi'

import CardItem from '../CardItem'

import './index.css'

const cardDetails = [
  {
    name: 'Mixmax',
    budgetName: 'Software subscription',
    ownerName: 'Vishal',
    ownerId: 1,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'BURNER',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Quickbooks',
    budgetName: 'Software subscription',
    ownerName: 'Rajesh',
    ownerId: 2,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'SUBSCRIPTION',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Motion',
    budgetName: 'Software subscription',
    ownerName: 'Rajith',
    ownerId: 3,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'BURNER',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Pandadoc',
    budgetName: 'Software subscription',
    ownerName: 'Mayank',
    ownerId: 4,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'SUBSCRIPTION',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Xero',
    budgetName: 'Software subscription',
    ownerName: 'Rajesh',
    ownerId: 5,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'BURNER',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Mookambika',
    budgetName: 'Miscellaneous',
    ownerName: 'Mayank',
    ownerId: 6,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'SUBSCRIPTION',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Apple Dev License',
    budgetName: 'Software subscription',
    ownerName: 'Vishal',
    ownerId: 7,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'BURNER',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Visa',
    budgetName: 'Software subscription',
    ownerName: 'Imdath',
    ownerId: 8,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'SUBSCRIPTION',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Mastercard',
    budgetName: 'Software subscription',
    ownerName: 'Vishal',
    ownerId: 9,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'BURNER',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Rupay',
    budgetName: 'Software subscription',
    ownerName: 'Mayank',
    ownerId: 10,
    spent: {
      spentValue: 0,
      spentCurrency: 'SGD',
    },
    availableToSpend: {
      availableValue: 1000,
      availableCurrency: 'SGD',
    },
    cardType: 'SUBSCRIPTION',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
]

class SearchFilter extends Component {
  state = {
    searchInput: '',
  }

  searchCard = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const searchResults = cardDetails.filter(eachCard =>
      eachCard.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <div className="search-filter-container">
          <div className="search-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Search by card name"
              onChange={this.searchCard}
              value={searchInput}
            />
            <BiSearch className="search-filter-icon" />
          </div>
          <div className="filter-container">
            <BiFilter className="search-filter-icon" />
            <p>Filter</p>
          </div>
        </div>
        <ul className="card-lists-container">
          {searchResults.map(eachCard => (
            <CardItem key={eachCard.ownerId} cardDetails={eachCard} />
          ))}
        </ul>
      </>
    )
  }
}

export default SearchFilter
