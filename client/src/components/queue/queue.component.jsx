import React from "react";
import Button from "../boton/button.component";
import QueueClient from "../queue-client/queue-client.component";
import "./queue.styles.scss";

const Queue = () => {
  return (
    <div className="queueContainer">
      <div className="container">
        
      <div className="queue" />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      <QueueClient />
      
      </div>
      <Button name='ticket' />
    </div>
  );
};

export default Queue;
