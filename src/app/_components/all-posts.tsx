import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function AllPosts({ posts }: Props) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li>
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
