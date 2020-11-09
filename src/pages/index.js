import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={title}>
      <SEO />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <p style={{ marginBottom: "4px" }}>
              <strong>{node.frontmatter.date}</strong>
              {node.frontmatter.author && node.frontmatter.link && (
                <span style={{ opacity: 0.75, fontStyle: "italic" }}>
                  {", by "}
                  <a href={node.frontmatter.link}>{node.frontmatter.author}</a>
                </span>
              )}
            </p>
            <p style={{ opacity: 0.75 }}>{node.excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            link
          }
        }
      }
    }
  }
`;
