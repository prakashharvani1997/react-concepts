import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
    let history = useHistory();

    

    function addMeetupHandler(meetupData) {
        
        fetch('FireBase_URL',{
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-type':'application/json'
            }
        }).then((data)=>{
            // Will not allow user to go back from that page
            history.replace('/')

            // Will allow user to go back from that page
            // history.push('/')

        })
    }

    return <section>
        <h1>  New Meetups page </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>

}

export default NewMeetupPage