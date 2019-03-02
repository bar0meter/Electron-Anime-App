import React, { useEffect } from "react";

function ImageLoader({ image_url }) {
  useEffect(() => {
    return () => {
      image_url = "";
    };
  });
  return (
    <React.Fragment>
      <img src={image_url} alt="" />
    </React.Fragment>
  );
}

export default ImageLoader;
