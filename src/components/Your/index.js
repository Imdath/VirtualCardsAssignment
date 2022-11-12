import './index.css'

import CardItem from '../CardItem'

const yourCards = [
  {
    name: 'UAE',
    budgetName: 'Miscellaneous',
    ownerName: 'Virat',
    ownerId: 11,
    spentValue: 55,
    spentCurrency: 'SGD',
    availableValue: 125,
    availableCurrency: 'SGD',
    cardType: 'BURNER',
    expiry: '2023-06-26',
    limit: 100,
    status: 'active',
  },
  {
    name: 'India',
    budgetName: 'Software subscription',
    ownerName: 'Joseph',
    ownerId: 12,
    spentValue: 30,
    spentCurrency: 'SGD',
    availableValue: 80,
    availableCurrency: 'SGD',
    cardType: 'SUBSCRIPTION',
    expiry: '2022-12-10',
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
