import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // Instead of doing that, we'll define an error page.
  // Whenever we get an error, it'll redirect the closest error page on the route tree

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    throw { message: "Could not fetch events." };
  } else {
    // const resData = await response.json();
    // return resData.events;

    // Route system also automatically resolves the Response object
    // So you can directly return the response
    return response;
  }
}
