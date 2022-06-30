import React from "react";
import EventItem from "./event-item";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
}
