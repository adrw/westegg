import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Styled, css } from 'theme-ui'

import Layout from 'gatsby-theme-digital-garden/src/components/layout'
import BackgroundImage from 'gatsby-theme-digital-garden/src/components/background-image'
import { SEO } from 'gatsby-theme-digital-garden/src/components/seo'
import useOptions from 'gatsby-theme-digital-garden/src/use-options'

export default ({ projects }) => (
  <Layout>
    <SEO
      title={
        useOptions().projectsPath
          ? useOptions().projectsPath.slice(1)
          : 'Projects'
      }
    />
    <ul
      css={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch'
      }}
    >
      {projects.map(project => (
        <li
          key={project.id}
          css={{
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: 256,
            padding: 32
          }}
        >
          <Link
            to={project.frontmatter.path}
            css={theme => ({
              display: 'block',
              color: 'inherit',
              textDecoration: 'none'
            })}
          >
            {typeof project.frontmatter.image === 'string' ? (
              <BackgroundImage src={project.frontmatter.image} />
            ) : (
              <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
            )}
            <Styled.h3
              css={css({
                mb: 0
              })}
            >
              {project.frontmatter.title}
            </Styled.h3>
            <Styled.p css={css({ m: 0 })}>
              {project.frontmatter.description}
            </Styled.p>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)
