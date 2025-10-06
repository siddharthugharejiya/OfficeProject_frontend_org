module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
            },
            colors: {
                primary: '#b86c59',
                secondary: '#f5f0ed',
                main: '#BF624C',
            },
        },
    },
    plugins: [],
}
