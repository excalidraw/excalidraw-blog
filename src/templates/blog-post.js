import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

function BlogPostTemplate({ data, pageContext: { previous, next }, location }) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const editUrl = `https://github.com/excalidraw/excalidraw-blog/edit/master/${post.fileAbsolutePath.substr(
    post.fileAbsolutePath.indexOf("content/blog"),
  )}`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://blog.excalidraw.com${post.fields.slug}`,
  )}`;

  const authors =
    post.frontmatter.author?.split(",").filter((author) => author.trim()) || [];
  const authorLinks =
    post.frontmatter.link?.split(",").filter((link) => link.trim()) || [];

  let postHTML = post.html;

  if (postHTML.includes("<!-- end -->")) {
    postHTML = postHTML.split("<!-- end -->")[1];
  }

  return (
    <Layout location={location} title={siteTitle} parentClassName={"blog-post"}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image && post.frontmatter.image.publicURL}
      />
      <h1
        style={{
          marginBottom: 0,
        }}
      >
        {post.frontmatter.title}
      </h1>
      <p
        style={{
          marginBottom: rhythm(1),
          fontFamily: "var(--ui-font)",
        }}
      >
        <strong>{post.frontmatter.date}</strong>
        {authors.length && (
          <span style={{ opacity: 0.75, fontStyle: "italic" }}>
            {", by "}
            {authors.map((author, idx) => (
              <>
                {authorLinks[idx] || authorLinks[0] ? (
                  <a href={authorLinks[idx] || authorLinks[0]}>{author}</a>
                ) : (
                  <>{author}</>
                )}
                {idx < authors.length - 1 && ", "}
              </>
            ))}
          </span>
        )}
        {post.frontmatter.note ? (
          <>
            {" • "}
            <span dangerouslySetInnerHTML={{ __html: post.frontmatter.note }} />
          </>
        ) : null}
      </p>
      <div dangerouslySetInnerHTML={{ __html: postHTML }} />
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
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        note
        author
        link
        image {
          id
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;
