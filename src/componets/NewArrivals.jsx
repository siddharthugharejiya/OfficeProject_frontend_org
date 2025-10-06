import React, { useEffect, useState } from 'react'
// cart/wishlist icons removed (not used)
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Product_Get } from '../Redux/action'
// Toastify removed (not used)
import { LoadingSpinner } from './SkeletonLoader'
import { FaEye, FaShareAlt, FaShoppingCart, FaHeart } from 'react-icons/fa'
import Navbar_1 from './Navbar_1'
import Footer1 from './Footer1'

const sampleProducts = [
    {
        _id: 'p1',
        name: 'Ceramic Vase',
        des: 'Handmade ceramic vase with matte finish.',
        Image: ['https://via.placeholder.com/600x600?text=Vase']
    },
    {
        _id: 'p2',
        name: 'Oak Side Table',
        des: 'Solid oak side table, oiled finish.',
        Image: ['https://via.placeholder.com/600x600?text=Table']
    },
    {
        _id: 'p3',
        name: 'Woven Rug',
        des: 'Flatweave rug with warm tones.',
        Image: ['https://via.placeholder.com/600x600?text=Rug']
    },
    {
        _id: 'p4',
        name: 'Brass Lamp',
        des: 'Minimal brass lamp with linen shade.',
        Image: ['https://via.placeholder.com/600x600?text=Lamp']
    },
]

function NewArrivals() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const productsFromStore = useSelector(state => state.Product.Product || [])
    console.log(productsFromStore);

    const isLoading = useSelector(state => state.Product.loading || false)
    // cart/wishlist removed per request
    // single input to match name OR category; this is the live input
    const [query, setQuery] = useState('')
    // appliedQuery is the value used to filter when user clicks Search or presses Enter
    const [appliedQuery, setAppliedQuery] = useState('')
    // quick category buttons (defaults can be changed)
    const leftCategory = 'One Piece Closet'
    const rightCategory = 'Wall Hung Closet'
    // pagination removed per request

    useEffect(() => {
        dispatch(Product_Get())
    }, [dispatch])

    // pagination removed so no page reset needed

    const goToProduct = (id) => {
        nav(`/singlepage/${id}`)
    }

    // modal state: open and selected product (eye)
    const [open, setOpen] = useState(false)
    const [eye, setEye] = useState(null)

    // helper when clicking the view icon — open modal with product
    const handleViewClick = (item) => {
        if (!item) return
        setEye(item)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setEye(null)
    }

    // used by modal's "view more" button to navigate to product page
    const handleclick = (id) => {
        setOpen(false)
        setEye(null)
        if (id) goToProduct(id)
    }

    // removed addToCart/addToWishlist handlers (not needed)

    // derived data
    const allProducts = productsFromStore.length ? productsFromStore : sampleProducts
    // console.log(allProducts);


    // appliedQuery should match product name OR category (case-insensitive)
    const filtered = allProducts.filter(p => {
        if (!appliedQuery || appliedQuery.trim() === '') return true
        const t = appliedQuery.trim().toLowerCase()
        const name = (p.name || '').toLowerCase()
        const category = (p.category || '').toLowerCase()
        return name.includes(t) || category.includes(t)
    })

    return (
        <>
            <Navbar_1 />

            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-12 bg-white text-gray-800">
                <section className="max-w-7xl mx-auto text-center mb-8">
                    {/* <div className="text-[#BD9C85] font-semibold uppercase text-sm mb-2">New</div> */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">New Arrivals</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">Browse the latest products added to our collection. Handpicked and crafted with care.</p>
                </section>

                {/* Modal quick-view for selected product */}
                {open && eye && (
                    <>
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black opacity-40 z-50" onClick={handleClose}></div>

                        {/* Modal Box */}
                        <div className="transition-all duration-700 fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center overflow-auto p-4 animate-fade-in">
                            <div className="grid sm:grid-cols-2 grid-cols-1 bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[98vh] overflow-y-auto relative">

                                {/* Close Button */}
                                <div className="absolute sm:right-5 right-5 top-0 p-4 z-50">
                                    <button className="text-[20px] hover:animate-ping" onClick={handleClose}>×</button>
                                </div>

                                {/* Image Side */}
                                <div className="h-full w-full flex justify-center items-center bg-gray-50 p-6">
                                    <div className="relative h-[450px] w-[420px] sm:h-[78vh]  md:w-[100%] sm:w-[70%] max-w-[560px] overflow-hidden group">
                                        <img
                                            src={(eye.Image && eye.Image[0]) || eye.Image || 'https://via.placeholder.com/800x600?text=No+Image'}
                                            alt={eye.name}
                                            className="absolute z-10 h-full w-full object-cover transform transition-all duration-700 group-hover:-translate-x-full"
                                        />
                                        <img
                                            src={(eye.Image && eye.Image[1]) || (eye.Image && eye.Image[0]) || 'https://via.placeholder.com/800x600?text=No+Image'}
                                            alt={`${eye.name} back`}
                                            className="absolute z-0 h-full w-full object-cover transform translate-x-full scale-100 transition-all duration-700 group-hover:translate-x-0 group-hover:scale-110"
                                        />
                                        <div className="absolute z-20 top-0 left-[-75%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transition-all duration-700 group-hover:left-[100%] pointer-events-none" />
                                    </div>
                                </div>

                                {/* Info Side */}
                                <div className="p-6 flex flex-col justify-between max-h-[95vh] overflow-y-auto">
                                    <div>
                                        <h1 className="text-xl font-medium uppercase text-[#CE701F] mb-2">{eye.name}</h1>
                                        <h2>{eye.category}</h2>
                                        <h2 className="text-base text-gray-500 mb-3">{eye.category}</h2>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {eye.des}
                                        </p>
                                        <div><button className='bg-[#CE701F] p-1 text-white rounded-sm' onClick={() => handleclick(eye._id)}>view more</button></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Filters: left and right shortcut buttons + single input + Search button */}
                <section className="max-w-7xl mx-auto mb-6">
                    <div className="flex items-center justify-between gap-4">



                        {/* Center: search input + button */}
                        <div className="flex-1 flex items-center justify-left">
                            <div className="flex gap-3 items-center w-full max-w-lg">
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') setAppliedQuery(query.trim()) }}
                                    type="text"
                                    placeholder="Type product name or category"
                                    className="px-3 py-2 border rounded flex-1"
                                />
                                <button
                                    onClick={() => setAppliedQuery(query.trim())}
                                    className="px-4 py-2 bg-[#BD624C] text-white rounded"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="mt-3 text-sm text-gray-600">Type a product name or category and click Search (or press Enter) to show matching items. Or use the shortcut buttons.</div>
                </section>

                {/* Product grid */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {isLoading && (
                        <div className="col-span-full flex justify-center items-center py-20">
                            <LoadingSpinner />
                        </div>
                    )}

                    {!isLoading && filtered.length === 0 && (
                        <div className="col-span-full text-center py-14 text-gray-600">No products found for your search/filter.</div>
                    )}

                    {!isLoading && filtered.length > 0 && filtered.map((item) => (
                        <div key={item._id} className="card m-auto w-full max-w-sm flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer z-0" >
                            <div className="relative overflow-hidden group w-full">
                                {/* responsive heights: mobile 220, sm 260, md 300 */}
                                <div className="h-[220px] sm:h-[260px] md:h-[300px] w-full">
                                    {(() => {
                                        const imgSrc = (item && item.Image && item.Image[0]) || item.Image || 'https://via.placeholder.com/600x600?text=No+Image'
                                        return <img src={imgSrc} alt={item.name || ''} className="h-full w-full object-cover" />
                                    })()}
                                </div>

                                {/* Hover icons */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden group-hover:flex gap-3 z-10">
                                    {/* Cart Icon */}
                                    <div className="bg-white p-2 shadow-md flex justify-center items-center hover:scale-110 transition-all duration-200 ">
                                        <FaShoppingCart className="text-[18px]" />
                                    </div>

                                    {/* View Icon */}
                                    {/* View Icon */}
                                    <div
                                        className="bg-white p-2 shadow-md flex justify-center items-center hover:scale-110 transition-all duration-200"
                                        onClick={() => handleViewClick(item)} // ✅ ये लाइन जरूरी है
                                    >
                                        <FaEye className="text-[18px]" />
                                    </div>


                                    {/* Wishlist Icon */}
                                    <div className="bg-white p-2 shadow-md flex justify-center items-center hover:scale-110 transition-all duration-200 ">
                                        <FaHeart className="text-[18px]" />

                                    </div>

                                    {/* Share Icon */}
                                    <div className="bg-white p-2 shadow-md flex justify-center items-center hover:scale-110 transition-all duration-200 ">
                                        <FaShareAlt className="text-[18px]" />
                                    </div>
                                </div>

                            </div>
                            <div className="card-body mt-4 px-3 w-full text-center" onClick={() => goToProduct(item._id)}>
                                <h2 className="card-title font-mono uppercase text-[14px] text-[#CE701F] truncate">{item.name}</h2>
                                <h2 className="card-title font-mono uppercase text-[13px] text-gray-700 hover:text-[#CE701F] truncate">{item.category}</h2>
                                <p className="card-title text-[13px] text-gray-600 mt-1 truncate">{item.des}</p>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
            <Footer1 />
        </>
    )
}

export default NewArrivals
