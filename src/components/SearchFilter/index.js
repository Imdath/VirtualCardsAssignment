import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {BiSearch, BiFilter} from 'react-icons/bi'

import CardItem from '../CardItem'

import './index.css'

class SearchFilter extends Component {
  state = {
    searchInput: '',
    cardsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCardsData()
  }

  getCardsData = async () => {
    const response = await fetch(
      'https://636e4571182793016f3be22b.mockapi.io/cards?p=1&l=10',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      name: eachItem.name,
      ownerName: eachItem.owner_name,
      availableCurrency: eachItem.available_currency,
      availableValue: eachItem.available_value,
      budgetName: eachItem.budget_name,
      cardType: eachItem.card_type,
      expiry: eachItem.expiry,
      id: eachItem.id,
      limit: eachItem.limit,
      spentCurrency: eachItem.spent_currency,
      spentValue: eachItem.spent_value,
      status: eachItem.status,
    }))
    this.setState({cardsData: updatedData, isLoading: false})
  }

  searchCard = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, cardsData, isLoading} = this.state
    const searchResults = cardsData.filter(eachCard =>
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

        {isLoading ? (
          <div className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="card-lists-container">
            {searchResults.map(eachCard => (
              <CardItem key={eachCard.ownerId} cardDetails={eachCard} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default SearchFilter
