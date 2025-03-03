import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // This for for server side validation
  // Usually, we don't have the validation only on the client.
  // We also have it in server side. For simulating it, we're going to erase "required" keywords
  // ... of inputs through the DevTools
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event" }), {
      status: 500,
    });
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/events",
    },
  });
}
