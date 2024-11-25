import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {


    function addMeetupHandler(meetupData) {
        
        fetch('FireBase_URL',{
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-type':'application/json'
            }
        })
    }

    return <section>
        <h1>  New Meetups page </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>

}

export default NewMeetupPage