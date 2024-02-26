import React from "react";
import ImpCategorie from "../componentSlices/ImpCategorie";
const ShowCaseCategory = () => {
  return (
    <div id="cat-item" className="categories-in-home">
      <ImpCategorie
        name={"Stuffed Animals"}
        imgUrl={
          "https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
        }
      />
      <ImpCategorie
        name={"Wooden Toys"}
        imgUrl={
          "https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
        }
      />
    </div>
  );
};

export default ShowCaseCategory;
