import React from "react";
import moment from "moment";
function FeedItem(props) {
      return (
            <li key={props.item._id}>
              <a target="_blank" href={props.item.link}>
                <div className="thecard">
                  <div className="card-img">
                    <img src={props.item[`${props.selectedImages}`]} />
                  </div>
                  <div className="card-caption">
                    <i id="like-btn" className="fa fa-thumbs-o-up"></i>
                    <span className="date">{moment(props.item.pubDate).fromNow()}</span>
                    <h1>{props.item.title.slice(0, 80)}</h1>
                  </div>
                  <div className="card-outmore">
                    <h5>Read more</h5>
                    <i id="outmore-icon" className="fa fa-angle-right"></i>
                  </div>
                </div>
              </a>
            </li>
      );

}
export default FeedItem;