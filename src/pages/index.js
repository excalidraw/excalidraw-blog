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
        const authors =
          node.frontmatter.author
            ?.split(",")
            .filter((author) => author.trim()) || [];
        const authorLinks =
          node.frontmatter.link?.split(",").filter((link) => link.trim()) || [];

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
              {authors.length && (
                <span style={{ opacity: 0.75, fontStyle: "italic" }}>
                  {", by "}
                  {authors.map((author, idx) => (
                    <>
                      {authorLinks[idx] || authorLinks[0] ? (
                        <a href={authorLinks[idx] || authorLinks[0]}>
                          {author}
                        </a>
                      ) : (
                        <>{author}</>
                      )}
                      {idx < authors.length - 1 && ", "}
                    </>
                  ))}
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
