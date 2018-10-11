import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Sidebar from './sidebar'
import './layout.css'
import '../styles/post-page.css'
import '../styles/layout-overide.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 980,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 980,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: '100%',
              padding: '25px',
            }}
          >
            <div style={{ flex: 3.5, paddingRight: '30px' }}>{children}</div>
            <div style={{ flex: 2 }}>
              <Sidebar title="My Blog" description="This is a simple blog" />
              <Sidebar
                title="About me"
                description="I'm learning to be React Developer at MMT Digital :-)"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
