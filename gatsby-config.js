const dayjs = require("dayjs");

const siteUrl = process.env.URL || "https://blog.excalidraw.com";

module.exports = {
  siteMetadata: {
    title: "Excalidraw Blog",
    description:
      "Get up to speed on the latest news and dive deep into inner workings of Excalidraw",
    image: "/og-image-3.png",
    siteUrl,
    social: {
      twitter: "excalidraw",
      github: "excalidraw",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: "<!-- end -->",
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "@weknow/gatsby-remark-twitter",
          // {
          //   resolve: "gatsby-remark-embedder",
          //   options: {
          //     customTransformers: [require("gatsby-embedder-excalidraw")],
          //   },
          // },
        ],
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allMarkdownRemark {
            nodes {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ site, allMarkdownRemark }) => {
          // nodes looks like array but its acutally an object
          const pages = allMarkdownRemark.nodes.reduce((acc, node) => {
            acc.push({
              url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
              changefreq: `yearly`,
              priority: 0.4,
              lastmod: node.frontmatter.date,
            });

            return acc;
          }, []);

          return [
            ...pages,
            // manually add root
            {
              url: `${site.siteMetadata.siteUrl}`,
              changefreq: `weekly`,
              priority: 1,
              lastmod: dayjs(new Date()).format("YYYY-MM-DD"),
            },
          ];
        },
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-387204-13",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Excalidraw Blog",
        short_name: "Excalidraw",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/logo.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-twitter",
    "gatsby-plugin-zeit-now",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.excalidraw.com`,
        stripQueryString: true,
      },
    },
  ],
};
