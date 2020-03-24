import React from "react";
import { Link, graphql } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import linkPosts from "../../content/links.yml";

function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node);
  const title = data.site.siteMetadata.title;

  const allPosts = posts
    .map((p) => ({ ...p, date: p.frontmatter.rawDate }))
    .concat(linkPosts)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  console.log(allPosts.map((p) => p.date).sort());

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      {allPosts.map((post) =>
        post.frontmatter ? (
          <Post post={post} key={post.fields.slug} />
        ) : (
          <LinkPost post={post} key={post.title} />
        )
      )}
    </Layout>
  );
}

export default BlogIndex;

function Post({ post }) {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
          {title}
        </Link>
      </h3>
      <p>
        <strong>{post.frontmatter.date}</strong>
        {" — "}
        <span style={{ opacity: 0.75 }}>{post.excerpt}</span>
      </p>
    </div>
  );
}

function LinkPost({ post }) {
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <a style={{ boxShadow: `none` }} href={post.url}>
          {post.title}
        </a>
      </h3>
      <p>
        <strong>{moment(post.date).format("MMMM DD, YYYY")}</strong>
        {" — "}
        <em style={{ opacity: 0.75 }}>External post</em>
        {" — "}
        <span style={{ opacity: 0.75 }}>{post.excerpt}</span>
      </p>
    </div>
  );
}

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
            rawDate: date
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
