import React from 'react';

function Ex() {
    return (
        <div className="p-4">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Using position: sticky with Tailwind CSS</h2>
                <p className="mb-2">Try to scroll this page to understand how sticky works.</p>
                <p>Here, when the sticky element reach the top of the page (top: 0), it sticks to this position!</p>
            </div>

            {/* Sticky Div - YEH STICKY HOGI */}
            <div className=" top-0 p-4 bg-green-300 border-2 border-green-600 z-50 font-bold text-center" style={{ position: 'sticky' }}>
                🎯 I AM STICKY! Scroll down to see me stick!
            </div>

            {/* Content Section - Bahut saara content for scrolling */}
            <div className="mt-6 space-y-4">
                <p className="text-lg font-semibold text-blue-600">Scroll down to see sticky effect...</p>

                {/* Multiple paragraphs for sufficient scrolling */}
                {Array.from({ length: 50 }, (_, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg bg-white shadow-sm">
                        <p>
                            <strong>Content {index + 1}:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                    </div>
                ))}

                <p className="text-lg font-semibold text-green-600 mt-8">🎉 Great! You reached the bottom!</p>
            </div>
        </div>
    );
}

export default Ex;  