import communities from "@/data/communities";

const Web = () => {
  const webCommunities = communities.filter(
    (community) => community.category === "web-development"
  );

  return (<>
    <h1 className="p-6">Web Development Communities</h1>
    <div className="flex">
      

      {webCommunities.map((community) => (
        <div key={community.slug}>
         <h2 className="bold p-2 text-blue-600">{community.name}</h2>

          <p className=" p-2">{community.description}</p>

          <p className=" p-2">{community.popularFor}</p>

          <p className=" p-2">{community.strongSuit}</p>

          <p className=" p-2">{community.usedBy.join(", ")}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Web;