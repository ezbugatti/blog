import { Row, Col } from "react-bootstrap";
import Layout from "components/layout";
import { getPostBySlug, getAllPosts } from "components/lib/api";
import { urlFor } from "components/lib/api";
import PostHeader from "components/post-header";
const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        <img src={urlFor(props.node).height(800).url()} />

        <div className="code-filename">{props.node.alt}</div>
      </div>
    ),
  },
};

export default ({ post }) => {
  return (
    <Layout>
      <Row>
        <Col md="12">
          {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
          <PostHeader post={post} />
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
          ,
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log("======getStaticProps", params.slug);
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};
export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths: data,
    fallback: false,
  };
};
