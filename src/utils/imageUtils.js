// Utility function to get proper image URL
export const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '/placeholder.png';

    // If it's already a full URL (http or https), return as is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl; // ✅ Return original URL
    }

    // Define your backend base URL with HTTPS
    const BASE_URL = 'https://officeproject-backend.onrender.com';

    // Remove any leading slashes to avoid double slashes
    const cleanImageUrl = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;

    // Construct the full URL
    return `${BASE_URL}/${cleanImageUrl}`;
};