import React, { useEffect, useState } from "react";
import { getStories } from "./apis";
import Story from "./Story";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories()
      .then((stories) => {
        setStories(stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        {stories.map(
          ({ data: story }) => story && <Story key={story.id} story={story} />
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Stories;
