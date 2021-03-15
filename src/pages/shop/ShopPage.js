import React from "react";
import SHOP_DATA from "./shop.data";
import { Shop } from "./styles";

import CollectionPreviewComponent from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <Shop>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreviewComponent key={id} {...otherCollectionProps} />
        ))}
      </Shop>
    );
  }
}

export default ShopPage;
