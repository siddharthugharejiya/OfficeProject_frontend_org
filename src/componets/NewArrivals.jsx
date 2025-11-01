import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Product_Get } from '../Redux/action'
import { getImageUrl } from '../utils/imageUtils'
import { Navi } from './Navi'
import Footer from './Footer'

// ✅ Skeleton Loader Function
const ProductSkeleton = () => (
    <div className="flex justify-center items-stretch h-full">
        <div className="w-full max-w-sm flex flex-col items-center overflow-hidden m-1">
            <div className="h-[350px] w-full bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="w-full mt-4 p-2">
                <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mx-auto"></div>
            </div>
        </div>
    </div>
)

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
    const isLoading = useSelector(state => state.Product.loading || false)

    const [query, setQuery] = useState('')
    const [appliedQuery, setAppliedQuery] = useState('')

    useEffect(() => {
        dispatch(Product_Get())
    }, [dispatch])

    const goToProduct = (id) => {
        nav(`/singlepage/${id}`)
    }

    // dummy fallback
    const allProducts = productsFromStore.length ? productsFromStore : sampleProducts

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

            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-12 text-gray-800">
                <section className="max-w-7xl mx-auto text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">New Arrivals</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">Browse the latest products added to our collection. Handpicked and crafted with care.</p>
                </section>

                <section className="max-w-7xl mx-auto mb-6">
                    <div className="flex items-center justify-center gap-4">
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
                    <div className="mt-3 text-sm text-gray-600">
                        Type a product name or category and click Search (or press Enter) to show matching items.
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {isLoading ? (
                        // ✅ Skeleton Loader Shown When Loading
                        Array(8).fill(0).map((_, i) => <ProductSkeleton key={i} />)
                    ) : filtered.length === 0 ? (
                        <div className="col-span-full text-center py-14 text-gray-600">
                            No products found for your search/filter.
                        </div>
                    ) : (
                        filtered.map((item) => (
                            <div
                                key={item._id}
                                className="card bg-white w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"
                                onClick={() => goToProduct(item._id)}
                            >
                                <div className="h-[350px] relative overflow-hidden w-full group">
                                    <img
                                        src={getImageUrl(item.Image?.[0])}
                                        alt={item.name}
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                    />
                                </div>
                                <div className="card-body mt-4 p-2 text-center">
                                    <h2 className="card-title text-lg font-mono uppercase text-[14px] text-gray-700">
                                        {item.name}
                                    </h2>
                                    <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px] hover:text-[#393185]">
                                        {item.category}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </div>

            <div className="overflow-hidden">
                <Footer />
            </div>
        </>
    )
}

export default NewArrivals
