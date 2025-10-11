import React from 'react';

export default function GlobalLoader({ visible }) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg">
                {/* Classic Spinning Loader */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                        {/* Outer Ring */}
                        <div className="w-16 h-16 border-4 border-gray-200 border-t-[#7eb859] rounded-full animate-spin"></div>

                        {/* Inner Ring */}
                        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-gray-100 border-b-[#7eb859] rounded-full animate-spin-reverse"></div>
                    </div>

                    {/* Loading Text */}
                    <p className="text-gray-600 font-medium">Loading...</p>
                </div>
            </div>

            {/* Animation Styles */}
            <style>{`
                @keyframes spin-reverse {
                    0% { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-spin-reverse {
                    animation: spin-reverse 1s linear infinite;
                }
            `}</style>
        </div>
    );
}
