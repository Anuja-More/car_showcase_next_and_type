/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = {
   images:{
    domains:[
        'cdn.imagin.studio'
    ]
   },
   typescript: {
    ignoreBuildErrors: true,
   },
   ...withPWA({
    dest:'public',
    register: true,
    skipWaiting: true,
   })
  
}

module.exports = nextConfig
