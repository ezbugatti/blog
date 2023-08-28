import moment from "moment";
import { urlFor } from "components/lib/api";
export default ({ post }) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img
          src={post.publisher.picture}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
        />
        {post.publisher.title}{" "}
        {moment(post.date).subtract(1, "days").calendar()}
      </p>

      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {post.title}
      </h1>

      <h2 className="blog-detail-header-subtitle mb-3">{post.subtitle}</h2>

      <img
        className="img-fluid rounded"
        src={urlFor(post.coverImage).height(600).url()}
        alt={post.coverImage.alt}
      />
      <div className="code-filename">{post.coverImage.alt}</div>
    </div>
  );
};