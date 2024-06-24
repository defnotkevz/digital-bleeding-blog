import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { AllPosts } from "./_components/all-posts";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        {allPosts.length > 0 && <AllPosts posts={allPosts} />}
      </Container>
    </main>
  );
}
