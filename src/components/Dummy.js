import React from "react";
import { useParams } from "react-router-dom";
import data from "../Database/items";
import EachItem from "./EachItem";
const Dummy = () => {
  const params = useParams();
  const id=params.id;
 let items=[];
      data.forEach((eachItem) => {
        if (eachItem.categoryid === id) {
          items=eachItem.items;
        }
      });


  

  return (
    <ul className="catalog-items ctg-items">
      {items.map((each) => {
        const { itemid, img_url, item_name, price } = each;
        return (
          <EachItem
            itemid={itemid}
            img_url={img_url}
            item_name={item_name}
            price={price}
          />
        );
      })}
    </ul>
  );
};

export default Dummy;
