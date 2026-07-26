import communities from "@/data/communities";

const UI = () => {
  const uiCommunities = communities.filter(
    (community) => community.category === "ui-ux"
  );

  return (<>
    <h1 className="p-6">UI-UX Communities</h1>
    <div className="flex">
      

      {uiCommunities.map((community) => (
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

export default UI;