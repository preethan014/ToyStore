import React from "react";
import HomeCatlogCard from "../componentSlices/OpenCatlogCard";
import GoToAnimate from "../componentSlices/GoToAnimate";
import ShowCaseCategory from "./ShowCaseCategory";
import CategoryItems from "./CategoryItems";
const NavBar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundImage: `URL("https://assets.website-files.com/5badda2935e11303a89a461e/5baddd4835e113c6299a48f5_li-tzuni-507346-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeCatlogCard />
        <GoToAnimate />
      </div>
      <ShowCaseCategory />
      <CategoryItems home={true}/>
    </div>
  );
};

export default NavBar;
