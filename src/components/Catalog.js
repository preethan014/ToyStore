import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const Catalog = () => {

 const params=useParams();
 console.log(params.id);


  return (
    <div className="catalog-outer">
      <div className="catalog-inner">
        <div className="catalog-top-section">
          <div className="catalog-category-name">all toys</div>
          <div className="catlog-category-options">
            <NavLink to="/catalog">all toys</NavLink>
            <NavLink to="/category/1">stuffed animals</NavLink>
            <NavLink to="/category/2">Wooden toys</NavLink>
          </div>
        </div>
        <div className="catalog-seperator">
          <div className="catalog-seperator-inner-1"></div>
        </div>
        <div className="catalog-items-outer">
          <div className="catalog-items-outer">
          <ul className="catalog-items ctg-items">
    </ul>

          </div>   
          <Outlet/>       
        </div>
      </div>
    </div>
  );
};

export default Catalog;
