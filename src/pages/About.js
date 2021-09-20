import React from "react";
import ImageList from "@material-ui/core";
// import { ImageListItem } from "@material-ui/core";

export default function About() {
  return (
    <div>
      <h1> About Nomadee</h1>

      <h3>
        A Social application designed for Digital Nomads. Promoting Community
        Events and Education around the World.
      </h3>
      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </div>
  );
}
