import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "@mv",
      remarks: "Great job!",
      rating: 5,
    },
  ]);

  const addNewComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <>
      <h3>All Comments</h3>

      {comments.map((comment, idx) => (
        <div className="Comment" key={idx}>
          <p>{comment.remarks}</p>
          <p>Rating: {comment.rating}</p>
          <p>- {comment.username}</p>
        </div>
      ))}

      <hr />

      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
