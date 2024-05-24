import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { AllPosts } from "./_components/all-posts";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {morePosts.length > 0 && <AllPosts posts={morePosts} />}
      </Container>
    </main>
  );
}
