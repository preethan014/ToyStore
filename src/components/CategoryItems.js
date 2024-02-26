import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import EachItem from "./EachItem";
import data from "../Database/items";
const CategoryItems = (props) => {
  return data.map((item) => {
    let { categoryid, category_name, items } = item;
    if(props.home){
      items=items.slice(0,4);
    }
    
    return (
      <ul className="categories-main-outer">
        <li className="ctg-name-outer" key={categoryid}>
          <div className="ctg-name">{category_name}</div>
          <button className="ctg-btn" type="button">
            see all toys
            <FaLongArrowAltRight className="btn-right-arrow" size={20} />
          </button>
        </li>
        <div className="ctg-seperator">
          <div className="ctg-seperator-inner-1"></div>
        </div>
        <div className="ctg-items-outer">
        <ul className="ctg-items">
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

        </div>
       
      </ul>
    );
  });
};
export default CategoryItems;
