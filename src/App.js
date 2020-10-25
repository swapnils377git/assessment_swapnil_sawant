import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import CompanyList from './components/CompanyList'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Menu />
        <Footer/> */}
        <Router>
          <Header />
          <Menu />
          <Route path="/company" component={CompanyList} />
          <Footer/>
          
          {/* <Route path="/" component={ContactList} /> */}
        </Router>
      </div>
    )
  }
}
