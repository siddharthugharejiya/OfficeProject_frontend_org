import React from 'react';

// Premium Shimmer Effect Component
const ShimmerEffect = ({ className = "" }) => (
    <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
);

// Premium Product Card Skeleton
export const ProductCardSkeleton = () => {
    return (
        <div className="px-2">
            <div className="relative group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
                {/* Premium Image skeleton with glassmorphism */}
                <div className="h-[180px] w-[180px] mx-auto mt-4 relative overflow-hidden rounded-xl">
                    <div className="h-full w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative">
                        <ShimmerEffect className="h-full w-full" />
                        {/* Floating elements */}
                        <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                </div>

                {/* Premium Content skeleton */}
                <div className="text-center px-4 py-3 h-[68px] relative">
                    <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                        <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-20 mx-auto relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                    </div>

                    {/* Premium accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#BD9C85] to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

// Premium Featured Product Card Skeleton
export const FeaturedProductSkeleton = () => {
    return (
        <div className="card shadow-2xl w-full h-auto rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white border border-gray-100/50 backdrop-blur-sm overflow-hidden">
            {/* Premium Image Section Skeleton */}
            <div className="flex justify-center relative rounded-t-3xl overflow-hidden">
                <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[383px] w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative">
                    <ShimmerEffect className="h-full w-full" />

                    {/* Premium badge skeleton */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#B0D3FF] to-[#8BC5FF] h-7 w-16 rounded-xl relative overflow-hidden">
                        <ShimmerEffect className="h-full w-full" />
                    </div>

                    {/* Premium floating elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-pulse delay-500"></div>

                    {/* Premium Hover Buttons Skeleton */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/50 relative overflow-hidden">
                                <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm">
                                    <ShimmerEffect className="h-full w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Content Section Skeleton */}
            <div className="card-body p-6 text-center relative">
                <div className="space-y-3">
                    {/* Category */}
                    <div className="h-4 bg-gradient-to-r from-[#BF624C] to-[#D4755C] rounded-lg w-20 mx-auto relative overflow-hidden">
                        <ShimmerEffect className="h-full w-full" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-3/4 mx-auto relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                    </div>

                    {/* Premium Stars */}
                    <div className="flex justify-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-4 h-4 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full relative overflow-hidden">
                                <ShimmerEffect className="h-full w-full" />
                            </div>
                        ))}
                    </div>

                    {/* Price */}
                    <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-20 mx-auto relative overflow-hidden">
                        <ShimmerEffect className="h-full w-full" />
                    </div>
                </div>

                {/* Premium bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#BD9C85] to-transparent rounded-full"></div>
            </div>
        </div>
    );
};

// Premium Blog Card Skeleton
export const BlogCardSkeleton = () => {
    return (
        <div className="card h-auto w-full bg-gradient-to-br from-white via-gray-50 to-white border border-gray-100/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
            <div>
                <div className="h-[200px] sm:h-[247px] w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative overflow-hidden">
                    <ShimmerEffect className="h-full w-full" />

                    {/* Premium overlay elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-pulse delay-300"></div>
                </div>
            </div>
            <div className="card-body p-6">
                <div className="space-y-4">
                    {/* Meta info */}
                    <div className="flex items-center flex-wrap gap-2">
                        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-24 relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                        <div className="w-1 h-1 bg-gradient-to-br from-[#CB8161] to-[#D4755C] rounded-full"></div>
                        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-16 relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                        <div className="w-1 h-1 bg-gradient-to-br from-[#CB8161] to-[#D4755C] rounded-full"></div>
                        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-20 relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                        <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-4/5 relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-3/4 relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                    </div>

                    {/* Premium Button */}
                    <div className="pt-2">
                        <div className="h-10 bg-gradient-to-r from-[#BF624C] to-[#D4755C] rounded-lg w-28 relative overflow-hidden">
                            <ShimmerEffect className="h-full w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Premium Loading Spinner
export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-20 h-20 border-4 border-gray-200 border-t-[#BD9C85] rounded-full animate-spin"></div>
                {/* Inner ring */}
                <div className="absolute inset-2 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-gray-200 border-t-[#BD624C] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                </div>
                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#BD9C85] to-[#BD624C] rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

// Premium Page Loading Overlay
export const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
                <div className="relative mb-6">
                    {/* Outer ring */}
                    <div className="w-24 h-24 border-4 border-gray-200 border-t-[#BD9C85] rounded-full animate-spin"></div>
                    {/* Inner ring */}
                    <div className="absolute inset-3 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-gray-200 border-t-[#BD624C] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    </div>
                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#BD9C85] to-[#BD624C] rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-600 font-semibold text-lg">Loading...</p>
                    <div className="w-32 h-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mx-auto relative overflow-hidden">
                        <ShimmerEffect className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};
