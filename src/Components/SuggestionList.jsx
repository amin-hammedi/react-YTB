import React from "react";

const SuggestionList = () => {
  const list = [
    {
      name: "مسلسل شوفلي حل الحلقة الثامنة عشر choufli hal",
      vidUrl: "https://www.youtube.com/embed/hRBKvrsI_IY?si=J1WsbKcZtOCP_WYp",
    },
    {
      name: "مسلسل شوفلي حل الحلقة الخامسة choufli hal",
      vidUrl: "https://www.youtube.com/embed/e3MgArwSrLQ?si=LYlYpDYb8ek6crbB",
    },
    {
      name: "مسلسل شوفلي حل الحلقة الخامسة والعشرين choufli hal        ",
      vidUrl: "https://www.youtube.com/embed/Ies2k5d64yE?si=gZW7wUeWRtLmEpeP",
    },
    {
      name: "مسلسل شوفلي حل الحلقة الثامنة عشر choufli hal        ",
      vidUrl: "https://www.youtube.com/embed/hRBKvrsI_IY?si=J1WsbKcZtOCP_WYp",
    },
    {
      name: "مسلسل شوفلي حل الحلقة الثامنة عشر choufli hal",
      vidUrl: "https://www.youtube.com/embed/hRBKvrsI_IY?si=J1WsbKcZtOCP_WYp",
    },
    {
      name: "مسلسل شوفلي حل الحلقة الثامنة عشر choufli hal",
      vidUrl: "https://www.youtube.com/embed/hRBKvrsI_IY?si=J1WsbKcZtOCP_WYp",
    },
    {
      name: "مسلسل شوفلي حل الحلقة الثامنة عشر choufli hal",
      vidUrl: "https://www.youtube.com/embed/hRBKvrsI_IY?si=J1WsbKcZtOCP_WYp",
    },
  ];
  return (
    <div>
      {list.map((video) => (
        <div className="videoCard">
          <iframe
            // width="853"
            // height="480"
            src={video.vidUrl}
            title={video.name}
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
          <br />
          <p className="title" style={{ marginLeft: "1%", fontSize: "15px" }}>
            {video.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SuggestionList;
