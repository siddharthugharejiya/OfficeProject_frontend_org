import React, { useState, useEffect } from 'react';

export default function GlobalLoader({ visible, onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!visible) {
            setProgress(0);
            return;
        }

        let currentProgress = 0;

        // Simulate initial fast progress
        const fastInterval = setInterval(() => {
            currentProgress += Math.random() * 15 + 10; // 10-25% increment
            if (currentProgress >= 70) {
                clearInterval(fastInterval);
                startSlowProgress();
            }
            setProgress(Math.min(currentProgress, 70));
        }, 300);

        const startSlowProgress = () => {
            // Simulate slower progress for remaining part
            const slowInterval = setInterval(() => {
                currentProgress += Math.random() * 5 + 2; // 2-7% increment
                if (currentProgress >= 95) {
                    clearInterval(slowInterval);
                    // Wait for actual completion
                    setTimeout(() => {
                        setProgress(100);
                        setTimeout(() => {
                            if (onComplete) onComplete();
                        }, 300);
                    }, 500);
                } else {
                    setProgress(currentProgress);
                }
            }, 600);
        };

        return () => {
            clearInterval(fastInterval);
        };
    }, [visible, onComplete]);

    if (!visible && progress === 0) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div
                className="h-full bg-[#393185] transition-all duration-200 ease-linear"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}