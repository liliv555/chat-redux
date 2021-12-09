/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { emojify } from 'react-emojione';

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
        <small> at {time}</small>
      </i>
      <p>{emojify(content)}</p>
    </div>
  );
};

export default Message;
