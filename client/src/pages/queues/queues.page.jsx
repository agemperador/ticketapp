import React from "react";
import Queue from "../../components/queue/queue.component";

import "./queues.styles.scss";

const Queues = () => {
  return (
    <div className="queues">
      <Queue />
      <Queue />
      <Queue />
      <Queue />
      <Queue />
      <Queue />
    </div>
  );
};

export default Queues;
