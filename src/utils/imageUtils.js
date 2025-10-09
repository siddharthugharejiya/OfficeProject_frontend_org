export const getImageUrl = (imageUrl) => {
    // अगर imageUrl null या undefined है तो fallback
    if (!imageUrl) return './placeholder.png'; // या कोई default image

    // अगर full URL है तो वैसे ही return करो
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
    }

    const BASE_URL = 'https://officeproject-backend.onrender.com';
    const cleanImageUrl = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
    return `${BASE_URL}/${cleanImageUrl}`;
};
