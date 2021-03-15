import React from "react";
import CollectionItemComponent from "../CollectionItem/CollectionItem";
import { CollectionPreview, Title, Preview } from "./styles";

const CollectionPreviewComponent = ({ title, items }) => (
  <CollectionPreview>
    <Title>{title}</Title>

    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItemComponent
            key={id}
            {...otherItemProps}
          ></CollectionItemComponent>
        ))}
    </Preview>
  </CollectionPreview>
);
export default CollectionPreviewComponent;
