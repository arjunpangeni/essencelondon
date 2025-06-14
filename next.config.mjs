// /** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // helps catch errors early in development
    compress: true, // Enable gzip compression for faster server response
    images: {
        formats: ["image/webp", "image/avif"], // Use modern image formats for better performance
        minimumCacheTTL: 60, // Cache images for at least 60 seconds
    },
};

export default nextConfig;
