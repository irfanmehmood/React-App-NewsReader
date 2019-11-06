import React from "react";
import FeedItem from './FeedItem';

function FeedItems(props) {

      return (
        <ul class='ItemsList'>
          {props.items.map(item => (
            <FeedItem item={item} selectedImages={props.selectedImages}/>
          ))}
        </ul>
      );

}
export default FeedItems;