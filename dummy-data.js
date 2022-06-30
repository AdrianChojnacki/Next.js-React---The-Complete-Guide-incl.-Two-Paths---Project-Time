const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Tibetan trumpets",
    description:
      "Everyone can learn to play them! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with playing as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/trumpets.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Dark retreat",
    description:
      "The dark retreat environment of the Bon religion is particularly conducive to the practice of certain visionary yogas.",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/dark.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Pilgrimage",
    description:
      "A pilgrimage is a journey, often into an unknown or foreign place, where a person goes in search of new or expanded meaning about their self, others, nature, or a higher good, through the experience.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/stupa.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id);
}
