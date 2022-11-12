import './index.css'

import CardItem from '../CardItem'

const yourCards = [
  {
    name: 'UAE',
    budgetName: 'Miscellaneous',
    ownerName: 'Virat',
    ownerId: 11,
    spentValue: 0,
    spentCurrency: 'SGD',
    availableValue: 1000,
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
    spentValue: 0,
    spentCurrency: 'SGD',
    availableValue: 1000,
    availableCurrency: 'SGD',
    cardType: 'SUBSCRIPTION',
    expiry: '2022-12-10',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Maldives',
    budgetName: 'Software subscription',
    ownerName: 'Dhoni',
    ownerId: 13,
    spentValue: 0,
    spentCurrency: 'SGD',
    availableValue: 1000,
    availableCurrency: 'SGD',
    cardType: 'BURNER',
    expiry: '2024-04-15',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Spain',
    budgetName: 'Software subscription',
    ownerName: 'Itachi',
    ownerId: 14,
    spentValue: 0,
    spentCurrency: 'SGD',
    availableValue: 1000,
    availableCurrency: 'SGD',
    cardType: 'BURNER',
    expiry: '2023-02-05',
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
