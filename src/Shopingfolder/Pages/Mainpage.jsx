import React, {useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Collection from '../Components/Collection'
import Banner from '../Components/Banner'
import WomenCollection from '../Components/WomenCollection'
import {Gents, Ladies} from '../data'


const Mainpage = () => {

    const [gentsFashion, setGentsFashion]= useState(Gents)
    const [ladiesFashion, setLadiesFashion]= useState(Ladies) 
    console.log(Gents)

    return (
        <div className='main'>
            <Header />
            <Banner />
            <Collection  gentsFashion= {gentsFashion}/>
            <WomenCollection ladiesFashion={ladiesFashion}/>
            <Footer />         

        </div>
    )
}

export default Mainpage