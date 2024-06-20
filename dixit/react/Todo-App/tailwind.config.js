/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                light: {
                    400: "#AFBFF3"
                },
                createTodo: {
                    600: "#8BA5E9"
                },
                AddBtn: {
                    600: "#0EA5E9"
                },
                textColor: {
                    400: "#6B72A1"
                },
                listBtn: {
                    400: "#FF6347"
                }
            }
        },

    },
    plugins: [],
}