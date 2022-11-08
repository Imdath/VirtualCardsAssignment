import Header from '../Header'

import Tab from '../Tab'

import SearchFilter from '../SearchFilter'

import './index.css'

const VirtualCards = () => (
  <div className="app-container">
    <div className="content-container">
      <Header />
      <Tab />
      <SearchFilter />
    </div>
  </div>
)

export default VirtualCards
