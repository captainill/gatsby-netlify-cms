import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import Tags from '../components/Tags';
import Helmet from 'react-helmet';

export const BlogPostTemplate = ({ content, contentComponent, description, title, entry_tags, helmet }) => {
  const PostContent = contentComponent || Content;
  return <section className="section">
    { helmet ? helmet : ""}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
          <Tags tags={entry_tags} />
          <p>{description}</p>
          <PostContent content={content} />
        </div>
      </div>
    </div>
  </section>;
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
    tags={frontmatter.entry_tags}
  />;
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        entry_tags {
          id
          name
        }
        description
      }
    }
  }
`;
