import React from 'react'
import About from '../../components/about/About'
import CardList from '../../components/cardlist/CardList'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './main.css'

function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <Sidebar />
        <CardList />
      </div>
    </>
  )
}

export default Main