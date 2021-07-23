import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import InputOptions from "../inputOptions/InputOptions";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import  SendOutlined from "@material-ui/icons/SendOutlined";
const Post = ({ name, description, message }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2 className="h2">{name}</h2>
          <p className="p">{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOptions Icon={ThumbUpAltRoundedIcon} title="Like" />
        <InputOptions Icon={ChatBubbleOutline} title="comment" />
        <InputOptions Icon={ShareOutlined} title="share" />
        <InputOptions Icon={SendOutlined} title="send" />
      </div>
    </div>
  );
};

export default Post;
