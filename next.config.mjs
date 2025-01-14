/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
    config.module.rules.push(
      { test: /\.html$/i, loader: 'raw-loader'},
      { test: /\.gql$/i, loader: 'raw-loader'}
    )
    return config
  }
}

export default nextConfig

