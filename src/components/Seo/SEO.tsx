import * as React from 'react'
import { Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Facebook from './Facebook'
import Twitter from './Twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

interface Props {
  title: string
  desc: string
  banner: string
  pathname: string
  article: boolean
  node: object
}

class SEO extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    title: '',
    desc: '',
    banner: '',
    pathname: '',
    article: false,
    node: {}
  }
  render() {
    const { title, desc, banner, pathname, article, node } = this.props
    return (
      <StaticQuery
        query={query}
        render={({
          site: {
            buildTime,
            siteMetadata: {
              siteUrl,
              defaultTitle,
              defaultDescription,
              defaultBanner,
              headline,
              siteLanguage,
              ogLanguage,
              author,
              twitter,
              facebook
            }
          }
        }) => {
          const seo = {
            title: title || defaultTitle,
            description: desc || defaultDescription,
            image: `${siteUrl}${banner || defaultBanner}`,
            url: `${siteUrl}${pathname || ''}`
          }

          // schema.org in JSONLD format
          // https://developers.google.com/search/docs/guides/intro-structured-data
          // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

          const schemaOrgWebPage = {
            '@context': 'http://schema.org',
            '@type': 'WebPage',
            url: siteUrl,
            headline,
            inLanguage: siteLanguage,
            mainEntityOfPage: siteUrl,
            description: defaultDescription,
            name: defaultTitle,
            author: {
              '@type': 'Person',
              name: author
            },
            copyrightHolder: {
              '@type': 'Person',
              name: author
            },
            copyrightYear: '2019',
            creator: {
              '@type': 'Person',
              name: author
            },
            publisher: {
              '@type': 'Person',
              name: author
            },
            datePublished: '2019-01-18T10:30:00+01:00',
            dateModified: buildTime,
            image: {
              '@type': 'ImageObject',
              url: `${siteUrl}${defaultBanner}`
            }
          }

          // Initial breadcrumb list

          const itemListElement = [
            {
              '@type': 'ListItem',
              item: {
                '@id': siteUrl,
                name: 'Homepage'
              },
              position: 1
            }
          ]

          let schemaArticle = null

          if (article) {
            schemaArticle = {
              '@context': 'http://schema.org',
              '@type': 'Article',
              author: {
                '@type': 'Person',
                name: author
              },
              copyrightHolder: {
                '@type': 'Person',
                name: author
              },
              copyrightYear: '2019',
              creator: {
                '@type': 'Person',
                name: author
              },
              publisher: {
                '@type': 'Organization',
                name: author,
                logo: {
                  '@type': 'ImageObject',
                  url: `${siteUrl}${defaultBanner}`
                }
              },
              datePublished: node.first_publication_date,
              dateModified: node.last_publication_date,
              description: seo.description,
              headline: seo.title,
              inLanguage: 'en',
              url: seo.url,
              name: seo.title,
              image: {
                '@type': 'ImageObject',
                url: seo.image
              },
              mainEntityOfPage: seo.url
            }
            // Push current blogpost into breadcrumb list
            itemListElement.push({
              '@type': 'ListItem',
              item: {
                '@id': seo.url,
                name: seo.title
              },
              position: 2
            })
          }

          const breadcrumb = {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            description: 'Breadcrumbs list',
            name: 'Breadcrumbs',
            itemListElement
          }

          return (
            <>
              <Helmet title={seo.title}>
                <html lang={siteLanguage} />
                <meta name='description' content={seo.description} />
                <meta name='image' content={seo.image} />
                <meta
                  name='moonflower-delvier'
                  content='Moonflower Delivery v1'
                />
                {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
                {!article && (
                  <script type='application/ld+json'>
                    {JSON.stringify(schemaOrgWebPage)}
                  </script>
                )}
                {article && (
                  <script type='application/ld+json'>
                    {JSON.stringify(schemaArticle)}
                  </script>
                )}
                <script type='application/ld+json'>
                  {JSON.stringify(breadcrumb)}
                </script>
              </Helmet>
              <Facebook
                desc={seo.description}
                image={seo.image}
                title={seo.title}
                type={article ? 'article' : 'website'}
                url={seo.url}
                locale={ogLanguage}
                name={facebook}
              />
              <Twitter
                title={seo.title}
                image={seo.image}
                desc={seo.description}
                username={twitter}
              />
            </>
          )
        }}
      />
    )
  }
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`

export default SEO
