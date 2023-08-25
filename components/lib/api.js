import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=='post'] 
    {_createdAt,
      title, 
      subtitle,
      date,
      'image': coverImage.asset->url, 
      'slug':slug.current, 
      'publisher':publisher->
      {
        'picture':picture.asset->url,
        title,
      }
    }`
  );
  return posts;
};

export const getPostBySlug = async (slug) => {
  const post = await client.fetch(
    `*[_type=='post' && slug.current==$slug] 
    {_createdAt,
      title, 
      subtitle,
      date,
      coverImage, 
      content[]{..., 'asset': asset->},
      'slug':slug.current, 
      'publisher':publisher->
      {
        'picture':picture.asset->url,
        title,
      }
    }`,
    { slug }
  );
  return post;
};
