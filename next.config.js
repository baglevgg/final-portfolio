/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for deployment
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  
  // Optimize bundle size
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issue
  },
  
  // Enable compression
  compress: true,
};

module.exports = nextConfig;
