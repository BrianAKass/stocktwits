import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import moment from "moment";

function Tweets(props) {
  return (
    <div className="messageBox">
      {props.tweet &&
        props.tweet.length > 0 &&
        props.tweet.map((x, y) => {
          const message = x.body.replace(
            /(http|ftp|https):\/\/([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?/g,
            '<a href="$&" class="tweetLinks" ><u>LINK</u></a>'
          );
          return (
            <div key={y}>
              <Media className="tweetBackground">
                <Badge variant="danger" className="tweetNumber">
                  {y + 1}
                </Badge>
                <img
                  width={64}
                  height={64}
                  className="align-self-top ml-3 mr-3 rounded-circle tweetProfilePic"
                  src={x.user.avatar_url}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5 className="tweets">
                    <u>{x.user.username}</u>
                  </h5>
                  {/* Text Overflows if theres a link involved Regex used here with dangerouslySetInnerHTML to the rescue!*/}
                  <p
                    className="tweets"
                    dangerouslySetInnerHTML={{
                      __html: message,
                    }}
                  ></p>
                  <p className="blockquote-footer timePosted">
                    {moment(x.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                </Media.Body>
                <hr />
              </Media>
            </div>
          );
        })}
    </div>
  );
}

export default Tweets;
