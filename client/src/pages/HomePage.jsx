import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'
import Philosophybanner from '../components/Philosophybanner/Philosophybanner'
import Whywe from '../components/Whywe/Whywe'
import Newsletter from '../components/Newsletter/Newsletter'

const HomePage = () => {
    return (
        <div>
            <Announcement />
            <Header />
            <Banner />
            <Products headingText="Our Products" />
            <Philosophybanner />
            <Whywe headTag="Our Features" />
            {/* <Whywe headTag="SHOP TO MAKE A DIFFERENCE" /> */}
            <Newsletter />
            <Footer />
        </div>
    )
}

export default HomePage
