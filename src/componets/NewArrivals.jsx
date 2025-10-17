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
import { getImageUrl } from '../utils/imageUtils'
import { Navi } from './Navi'
import Footer from './Footer'

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
            <Navi textColor="black" />

            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-12  text-gray-800">
                <section className="max-w-7xl mx-auto text-center mb-8">
                    {/* <div className="text-[#BD9C85] font-semibold uppercase text-sm mb-2">New</div> */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">New Arrivals</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">Browse the latest products added to our collection. Handpicked and crafted with care.</p>
                </section>



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
                        <div
                            key={item._id}
                            className="card bg-white w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"

                        >
                            <div className="h-[350px] relative overflow-hidden w-full group">
                                <img
                                    src={getImageUrl(item.Image?.[0])}
                                    alt={item.name}
                                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                // onError={(e) => handleImageError(e, 'No Image')}
                                // onLoad={() => handleImageLoad(item.Image?.[0])}
                                />
                            </div>
                            <div className="card-body mt-4 p-2 text-center" onClick={() => goToProduct(item._id)}>
                                <h2 className="card-title text-lg font-mono uppercase text-[14px] text-gray-700">
                                    {item.name}
                                </h2>
                                <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px]  hover:text-[#393185]">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
            <div className="overflow-hidden">

                <Footer />
            </div>
        </>
    )
}

export default NewArrivals
