import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import EventCard from "../components/EventCard";
import Masonry from "react-masonry-css";
export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/events/")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/events/" + id, {
      method: "DELETE",
    });

    const newEvents = events.filter((event) => event.id != id);
    setEvents(newEvents);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {events.map((event) => (
          <div key={event.id}>
            <EventCard event={event} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
