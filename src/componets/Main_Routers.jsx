import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AdminPanel from './AdminPanel'
import SinglePage from './SinglePage'
import ProductPage from './ProductPage'
import Contect from './Contect'
import Category from './Category'
// import Who_we_are from './Who_we_are'
import NewArrivals from './NewArrivals'
import VisionMission from './VisionMission'
import { CategorySlider } from './CategorySlider'
import Who_we_are from './About_us'
import NotFound from './NotFound'
import Ex from './Ex'
import ContactForm from './ContactForm'
// import CategorySlider from './CategorySlider'

function Main_Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/SinglePage/:id' element={<SinglePage />} />
            <Route path='/Product/:id' element={<ProductPage />} />
            <Route path='/contact' element={<Contect />} />
            <Route path='/about' element={<Who_we_are />} />
            <Route path='/new' element={<NewArrivals />} />
            <Route path='/category/:category' element={<Category />} />
            <Route path='/v' element={<VisionMission />} />
            <Route path='/c' element={<CategorySlider />} />
            <Route path='/e' element={<Ex />} />
            <Route path='/con' element={<ContactForm />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Main_Routers
