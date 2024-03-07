//use the USE param to see /:moodId
//call the api after that
import './MoodPage.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cooking from "../../Images/cooking.jpg"

function MoodPage() {
    const params = useParams();
    const navigate = useNavigate();

    const indexToMood = {
        1: "sad",
        2: "adventurous",
        3: "lonely",
        4: "creative",
        5: "productive"
    }

    const moodMapping = {
        sad: ["cooking", "relaxation"],
        adventurous: ["education", "recreational"],
        lonely: ["social", "charity"],
        creative: ["diy", "music"],
        productive: ["busywork", "diy"]
    }

    function chooseActivity(inputMood) {
        const activities = moodMapping[inputMood];
        const activity = activities[Math.floor(Math.random() * activities.length)];
        return activity
    }

    //using params choose identify which mood the user selected and then use a random function to select which activity type to display
    const userMood = indexToMood[params.moodId];
    const activity = chooseActivity(userMood);
    const [activityItem, setActivityItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [hasActivity, setNewActivity] = useState(0);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await axios.get(`http://www.boredapi.com/api/activity?type=${activity}`)
                setActivityItem(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }

        }
        fetchActivity();
    }, [params, hasActivity]);

    if (hasError) {
        return console.log("Unable to access videos right now");
    }

    if (isLoading) {
        return console.log("Loading");
    }

    function handleCancelClick() {
        navigate("/");
    };

    function handleNewActivityClick() {
        console.log(hasActivity);
        setNewActivity(hasActivity+1);
    };


    return (
        <main className="mood-activity">
            <img src={cooking} alt="cooking" className="mood-activity__image" />
            <section className="mood-activity__description">
                <div className="mood-activity__mood"> Feeling : {userMood} </div>
                <p className="mood-activity__activity">{activityItem.activity}</p>
                <div className="mood-activity__options">
                    <button onClick={handleCancelClick}>Go Back</button>
                    <button onClick={handleNewActivityClick}>Choose Another Activity</button>
                </div>
            </section>
        </main>
    );
}

export default MoodPage;

