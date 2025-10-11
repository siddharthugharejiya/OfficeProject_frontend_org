import React, { useEffect } from 'react'

export default function MobileImageViewer({ open, imageUrl, alt = '', onClose }) {
    if (!open) return null;

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 opacity-100 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Image container */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative max-w-full max-h-full w-full sm:w-[90%] md:w-[80%]">
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="w-full h-auto max-h-[85vh] object-contain rounded-md shadow-2xl transition-transform duration-300 ease-out scale-100"
                    />

                    {/* Close button */}
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className="absolute -top-3 -right-3 bg-white text-black rounded-full w-9 h-9 shadow-lg flex items-center justify-center active:scale-95"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    )
}


