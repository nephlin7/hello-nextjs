// next.config.js

const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)



module.exports = {
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
      if (dev) {
        return defaultPathMap
      }
      // This will copy robots.txt from your project root into the out directory
      await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'))
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/services': { page: '/services' },
        '/post': { page: '/post' },
        '/post/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        '/post/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        '/post/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
      }
    }
  }
  const withSass = require('@zeit/next-sass')
  module.exports = withSass();
  