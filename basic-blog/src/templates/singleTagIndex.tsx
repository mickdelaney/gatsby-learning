import React from 'react'
import { graphql, Link } from 'gatsby'

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  console.log('Tag Page: ' + pageContext);
  return (
    <div style={{ fontFamily: 'avenir' }}>
      <div>Posts About {`${tagName}`}</div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SingleTagTemplate
