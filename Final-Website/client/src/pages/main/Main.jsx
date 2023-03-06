import React from 'react'
import About from '../../components/about/About'
import CardList from '../../components/card/CardList'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <CardList />
        <About />
        <Sidebar />
      </div>
    </>
  )
}

export default Main