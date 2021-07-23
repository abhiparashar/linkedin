import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOptions from "../../components/inputOptions/InputOptions.js";
import Post from "../post/Post";
import { db } from "../../firebase.js";
import firebase from "firebase";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Abhishek Parashar",
      description: "Software Engineer @ collabera technologies",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feed__input_container">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={submitHandler}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write articles"
            color="#7FC15E"
          />
        </div>
      </div>
      {console.log(typeof posts)}
      {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
        <Post 
        key={id} 
        name={name}
        description={description}
        photoUrl={photoUrl}
        message={message}
        />
      ))}
    </div>
  );
};

export default Feed;
