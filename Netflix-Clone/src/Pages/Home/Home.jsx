import React from 'react'
import Header from '../../Componets/Header/Header'
import Footer from '../../Componets/Footer/Footer'
import Banner from '../../Componets/Banner/Banner.jsx'
import RowList from '../../Componets/Rows/RowList/RowList.jsx'

function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default Home
