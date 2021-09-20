import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import EventCard from "../components/EventCard";
import Masonry from "react-masonry-css";
import axios from "axios";
export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await axios.get("http://localhost:5000/api/events/");
    setEvents(response.data);
    console.log(response);
    console.log(events);
  };

  const handleDelete = async (id) => {
    await fetch("http://localhost:5000/events/" + id, {
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
