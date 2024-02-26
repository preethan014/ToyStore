import React from "react";
import EachItem from "./EachItem";
const AllItems = () => {
    const items=[{
        itemid:1,
        item_name:"happy flower",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
        price:380
    },{itemid:2,
        item_name:"lift machine",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png",
        price:240

    },{itemid:3,
        item_name:"wooden camera",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
        price:320

    },{itemid:4,
        item_name:"little rabbit",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
        price:160

    },{itemid:5,
        item_name:"rainbow truck",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min-p-500.png",
        price:280

    },{itemid:6,
        item_name:"happy dog",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min-p-500.png",
        price:300

    },{itemid:7,
        item_name:"caterpillar",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min-p-500.png",
        price:180

    },{itemid:8,
        item_name:"wooden tractor",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min-p-800.png",
        price:220

    },{
        itemid:1,
        item_name:"teddy bear",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
        price:260
    },{itemid:2,
        item_name:"mega plush toy",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
        price:380

    },{itemid:3,
        item_name:"cute dog",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
        price:540

    },{itemid:4,
        item_name:"little friend",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
        price:270

    },{itemid:5,
        item_name:"christmas deer",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min-p-500.png",
        price:190

    },{itemid:6,
        item_name:"pluto yellow dog",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png",
        price:280

    },{itemid:7,
        item_name:"grey elephant",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png",
        price:450

    },{itemid:8,
        item_name:"funny clown",
        img_url:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min-p-500.png",
        price:360

    }];
   
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

export default AllItems;
