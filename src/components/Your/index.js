import './index.css'

import CardItem from '../CardItem'

const yourCards = [
  {
    name: 'Google',
    budgetName: 'Miscellaneous',
    ownerName: 'Virat',
    ownerId: 11,
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
    name: 'Twitter',
    budgetName: 'Software subscription',
    ownerName: 'Joseph',
    ownerId: 12,
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
    name: 'Mango',
    budgetName: 'Software subscription',
    ownerName: 'Dhoni',
    ownerId: 13,
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
    name: 'Fury',
    budgetName: 'Software subscription',
    ownerName: 'Itachi',
    ownerId: 14,
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
]

const Your = () => (
  <ul className="card-lists-container">
    {yourCards.map(eachCard => (
      <CardItem key={eachCard.ownerId} cardDetails={eachCard} />
    ))}
  </ul>
)

export default Your
