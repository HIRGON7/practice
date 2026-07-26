import developers from "@/data/developers";

const PostPage = async ({
  params,
}: {
  params: Promise<{
    username: string;
    postId: string;
  }>;
}) => {
  const { username, postId } = await params;

  const developer = developers.find(
    (person) => person.username === username
  );

  if (!developer) {
    return <h1>Developer not found</h1>;
  }

  return (
    <div>
      <h1>{developer.name}</h1>

      <h2>{developer.role}</h2>

      <p>{developer.bio}</p>

      <h3>Skills</h3>

      <p>{developer.skills.join(", ")}</p>

      <h3>Post ID: {postId}</h3>
    </div>
  );
};

export default PostPage;