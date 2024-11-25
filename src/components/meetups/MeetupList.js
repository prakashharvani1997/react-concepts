import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({meetups}) {
    

    return  <ul className={classes.list}>
    {meetups.map((x)=>{
        return  <MeetupItem key={x.id} id={x.id} meetup={x} />
    })}
 </ul>
}

export default MeetupList