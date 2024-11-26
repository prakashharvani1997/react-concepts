import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
  }
];

function AllMeetupsPage() {
  const [meetups, setMeetups] = useState([]);

  const [loading, setLoadings] = useState(true);

  useEffect(() => {
    fetch("FireBase_URL")
      .then(data => {
        return data.json();
      })
      .then(data => {

        const meetupss =[];

        for(const key in data){
          const meetup ={
            id:key,
            ...data[key]
          }
          meetupss.push(meetup)
        }
        
        
        
        setLoadings(false);
        setMeetups(meetupss);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading.......</p>
      </section>
    );
  }

  return (
    <section>
      <h1> AllMeetupsPage</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
