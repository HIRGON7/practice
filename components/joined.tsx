"use client";

import { useState } from "react";

const Joined = () => {
  const [join, setJoin] = useState(false);

  return (
    <button
      onClick={() => setJoin(!join)}
      className="m-4 rounded bg-blue-600 px-4 py-2 text-white w-62"
    >
      {join ? "Joined" : "Join"}
    </button>
  );
};

export default Joined;