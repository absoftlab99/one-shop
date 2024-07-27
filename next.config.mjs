/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.weprodevs.com'
            },
            {
                hostname: 'i.ibb.co'
            },
        ],
    }
}

export default nextConfig;