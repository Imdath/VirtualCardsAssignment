import {Switch, Route} from 'react-router-dom'

import Your from '../Your'

import Header from '../Header'

import Tab from '../Tab'

import SearchFilter from '../SearchFilter'

import Blocked from '../Blocked'

import './index.css'

const VirtualCards = () => (
  <div className="app-container">
    <div className="content-container">
      <Header />
      <Tab />
      <Switch>
        <Route exact path="/" component={SearchFilter} />
        <Route path="/your" component={Your} />
        <Route path="/blocked" component={Blocked} />
      </Switch>
    </div>
  </div>
)

export default VirtualCards
