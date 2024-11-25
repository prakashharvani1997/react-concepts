
import { useRef } from "react";
import Card from "../Card/Card";
import MeetupItem from "./MeetupItem";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm({ onAddMeetup }) {

   const titleRef = useRef()
   const imageRef = useRef()
   const addressRef = useRef()
   const descriptionRef = useRef()

    function submitHandler(e) {
        e.preventDefault()


        const title =titleRef.current.value
        const image =imageRef.current.value
        const address =addressRef.current.value
        const description =descriptionRef.current.value

        const meetupData = {
            title,image,address,description
        }
        
        onAddMeetup(meetupData)
    }

    return <Card  >
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup title </label>
                <input type="text" required id="title" ref={titleRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image </label>
                <input type="url" required id="image"  ref={imageRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup Address </label>
                <input type="text" required id="address"  ref={addressRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Meetup description </label>
                <textarea id="description" required rows={5}  ref={descriptionRef}> </textarea>
            </div>

            <div className={classes.actions}>
                <button> Add Meetup </button>
            </div>

        </form>
    </Card>
}

export default NewMeetupForm
