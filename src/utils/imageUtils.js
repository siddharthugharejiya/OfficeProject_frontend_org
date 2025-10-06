// Utility function to get proper image URL
export const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '/placeholder.png';

    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
    }

    // If it starts with /uploads, add the base URL
    if (imageUrl.startsWith('/uploads/')) {
        return `http://localhost:9595${imageUrl}`;
    }

    // If it doesn't start with /, add it
    if (!imageUrl.startsWith('/')) {
        return `http://localhost:9595/${imageUrl}`;
    }

    // Default case
    return `http://localhost:9595${imageUrl}`;
};

// Function to handle image load errors
export const handleImageError = (e, fallbackText = 'Image Not Found') => {
    e.target.src = '/placeholder.png';
};

// Function to log successful image loads
export const handleImageLoad = (imageUrl) => {
    // Silent success - no logging needed
};
