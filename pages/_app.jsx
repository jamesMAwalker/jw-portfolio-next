import React from 'react'

import { ScrollProgressBar } from '../components/layout/scroll-progress'
import { Layout } from '../components/layout/layout'

import { ProjectProvider } from '../context/project-context'

import '../styles/globals.scss'
import '../styles/_mixins.scss'

function MyApp({ Component, pageProps, router: { route } }) {
  return (
    <ProjectProvider>
      <Layout route={route}>
        <Component {...pageProps} />
      </Layout>
    </ProjectProvider>
  )
}

export default MyApp
