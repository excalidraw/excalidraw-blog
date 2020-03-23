import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

function BlogPostTemplate({ data, pageContext: { previous, next }, location }) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const slug = post.fields.slug.slice(1, post.fields.slug.length - 1);
  const editUrl = `https://github.com/excalidraw/excalidraw-blog/edit/master/content/blog/${slug}/index.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://blog.excalidraw.com${post.fields.slug}`
  )}`;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
        }}
      >
        {post.frontmatter.title}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          marginBottom: rhythm(1),
          fontFamily: "var(--ui-font)",
        }}
      >
        {post.frontmatter.date}
        {post.frontmatter.note ? (
          <>
            {" • "}
            <span dangerouslySetInnerHTML={{ __html: post.frontmatter.note }} />
          </>
        ) : null}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p style={{ fontFamily: "var(--ui-font)", marginBottom: 0 }}>
        <a href={discussUrl}>Discuss on Twitter</a>
        {" • "}
        <a href={editUrl}>Edit on GitHub</a>
      </p>
      {previous || next ? (
        <>
          <hr
            style={{
              margin: `${rhythm(1)} 0`,
            }}
          />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </>
      ) : null}
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        note
      }
      fields {
        slug
      }
    }
  }
`;
