import React from 'react';

export default function GlobalLoader({ visible }) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white/95 rounded-2xl p-8 flex flex-col items-center shadow-2xl border border-gray-200">
                {/* Ceramic Toilet Loader */}
                <div className="relative w-32 h-32 mb-4">
                    {/* Toilet Base */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Tank */}
                        <div className="absolute -top-8 w-20 h-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-lg border-2 border-gray-300 shadow-md">
                            <div className="absolute -right-2 top-3 w-3 h-6 bg-gray-400 rounded-l-md"></div>
                        </div>

                        {/* Lid */}
                        <div className="absolute -top-2 w-24 h-4 bg-gradient-to-b from-gray-50 to-gray-100 rounded-t-lg border-2 border-gray-300"></div>

                        {/* Bowl */}
                        <div className="w-28 h-20 bg-gradient-to-b from-gray-50 to-gray-100 rounded-b-lg border-2 border-gray-300 shadow-inner overflow-hidden">
                            {/* Ceramic Shine Effect */}
                            <div className="absolute top-2 left-2 w-4 h-8 bg-white/30 rounded-full blur-sm"></div>

                            {/* Water with Ripple Animation */}
                            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-b-lg">
                                {/* Ripple Waves */}
                                <div className="absolute top-0 left-0 w-full overflow-hidden">
                                    <div className="w-48 h-4 bg-blue-300/40 rounded-full animate-ripple1"></div>
                                </div>
                                <div className="absolute top-1 left-0 w-full overflow-hidden">
                                    <div className="w-48 h-3 bg-blue-300/30 rounded-full animate-ripple2"></div>
                                </div>

                                {/* Bubbles */}
                                <div className="absolute top-2 left-6 w-2 h-2 bg-white/60 rounded-full animate-bubble1"></div>
                                <div className="absolute top-4 left-10 w-1.5 h-1.5 bg-white/50 rounded-full animate-bubble2"></div>
                                <div className="absolute top-1 left-16 w-1 h-1 bg-white/40 rounded-full animate-bubble3"></div>
                            </div>
                        </div>

                        {/* Flush Handle with Animation */}
                        <div className="absolute -top-6 -right-2">
                            <div className="w-4 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-l-md animate-flushHandle">
                                <div className="absolute top-1 left-1 w-2 h-4 bg-gray-300 rounded-l-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 font-semibold text-lg mt-2">Loading...</div>
                <div className="text-gray-500 text-sm mt-1">Please wait</div>

                {/* Custom Animations */}
                <style jsx>{`
                    @keyframes ripple1 {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    @keyframes ripple2 {
                        0% { transform: translateX(-80%); }
                        100% { transform: translateX(120%); }
                    }
                    @keyframes bubble1 {
                        0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                        50% { transform: translateY(-8px) scale(1.2); opacity: 0.8; }
                    }
                    @keyframes bubble2 {
                        0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
                        50% { transform: translateY(-12px) scale(1.3); opacity: 0.7; }
                    }
                    @keyframes bubble3 {
                        0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
                        50% { transform: translateY(-6px) scale(1.1); opacity: 0.6; }
                    }
                    @keyframes flushHandle {
                        0%, 100% { transform: translateX(0) rotate(0deg); }
                        50% { transform: translateX(-4px) rotate(-5deg); }
                    }
                    
                    .animate-ripple1 {
                        animation: ripple1 2s linear infinite;
                    }
                    .animate-ripple2 {
                        animation: ripple2 2.5s linear infinite;
                        animation-delay: 0.5s;
                    }
                    .animate-bubble1 {
                        animation: bubble1 3s ease-in-out infinite;
                    }
                    .animate-bubble2 {
                        animation: bubble2 3.5s ease-in-out infinite;
                        animation-delay: 1s;
                    }
                    .animate-bubble3 {
                        animation: bubble3 2.5s ease-in-out infinite;
                        animation-delay: 0.5s;
                    }
                    .animate-flushHandle {
                        animation: flushHandle 2s ease-in-out infinite;
                    }
                `}</style>
            </div>
        </div>
    );
}