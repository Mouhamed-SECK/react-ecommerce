import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "./../../preview-collection/CollectionPreview";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview {...otherCollectionProps} key={id} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
