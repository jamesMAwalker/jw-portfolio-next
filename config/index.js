const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:1234'
  : 'https://jw-portfolio-next.vercel.app'
