import React from "react";

const Comments = () => {
  const list = [
    {
      name: "Si Mohamed",
      comment: "tayer",
    },
    {
      name: "ahmed mohsen",
      comment: "piw",
    },
    {
      name: "si omar",
      comment: "overrated",
    },
    {
      name: "oumaima",
      comment: "nhb nrawah",
    },
    {
      name: "SI Haythem",
      comment: "NHB NRAWAH",
    },
  ];
  return (
    <div>
      {list.map((el) => (
        <div className="comment-items">
          <h6>{el.name}</h6> <h6 className="comment">{el.comment}</h6>
        </div>
      ))}
    </div>
  );
};

export default Comments;
