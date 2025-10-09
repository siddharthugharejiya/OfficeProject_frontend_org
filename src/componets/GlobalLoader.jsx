import React from 'react';

export default function GlobalLoader({ visible }) {
    if (!visible) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-[4px] bg-gray-300 z-50">
            <div className="h-full bg-[#7eb859] animate-loadingLine"></div>

            {/* Animation Style */}
           <style>{`
    @keyframes loadingLine {
        0% { width: 0%; }
        100% { width: 100%; }
    }
    .animate-loadingLine {
        animation: loadingLine 2s linear infinite;
    }
`}</style>

        </div>
    );
}
