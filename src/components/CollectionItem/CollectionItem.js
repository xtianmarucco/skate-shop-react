import React from "react";
import {
  CollectionItem,
  CollectionItemFooter,
  Name,
  Price,
  Img,
} from "./styles";

const CollectionItemComponent = ({ name, price, imageUrl }) => (
  <CollectionItem
  // onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <Img style={{ backgroundImage: `url(${imageUrl})` }}></Img>

    <CollectionItemFooter>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </CollectionItemFooter>
  </CollectionItem>
);
export default CollectionItemComponent;
