import React from 'react'
import RegionBtn from '../components/RegionBtn'
import Daycare from '../components/Daycare'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AllDaycaresPage = () => {
    return (
        <div>
            <Header />
            <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
            <div className="flex w-full mx-0 gap-3 justify-center">
                <RegionBtn name="Burnaby" />
                <RegionBtn name="Coquitlam" />
                <RegionBtn name="New Westminster" />
                <RegionBtn name="Port Moody" />
            </div>
            <Daycare />
            <Footer />
        </div>
    )
}

export default AllDaycaresPage