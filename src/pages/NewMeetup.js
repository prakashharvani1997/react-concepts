import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
    //deprecated
    // let history = useHistory();

    // new one
    const navigate = useNavigate();

    

    function addMeetupHandler(meetupData) {
        
        fetch('FireBase_URL',{
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-type':'application/json'
            }
        }).then((data)=>{
            // Will not allow user to go back from that page
            navigate('/',{replace:true})

            // Will allow user to go back from that page
            navigate('/')

        })
    }

    return <section>
        <h1>  New Meetups page </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>

}

export default NewMeetupPage