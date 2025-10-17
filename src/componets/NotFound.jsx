import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm p-8">
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>

                {/* Content */}
                <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Actions */}
                <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                    >
                        ← Go Back
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;