//use the USE param to see /:moodId
//call the api after that
import './MoodPage.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cookingImg from "../../Images/cooking.jpg"
import relaxationImg from "../../Images/relaxation.jpg"
import educationImg from "../../Images/education.jpg"
import recreationalImg from "../../Images/recreational.jpg"
import socialImg from "../../Images/social.jpg"
import charityImg from "../../Images/charity.jpg"
import diyImg from "../../Images/diy.jpg"
import musicImg from "../../Images/music.jpg"
import busyworkImg from "../../Images/busywork.jpg"
import Button from '@mui/material/Button';

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

    const activityToImage = {
        cooking: cookingImg,
        relaxation: relaxationImg,
        education: educationImg,
        recreational: recreationalImg,
        social: socialImg,
        charity: charityImg,
        diy: diyImg,
        music: musicImg,
        busywork: busyworkImg,
    };

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
        setNewActivity(hasActivity + 1);
    };

    console.log(`${activity}`)

    return (
        <main className="mood-activity">
            <div className="mood-activity__image-container">
                <img src={activityToImage[activity]} alt="cooking" className="mood-activity__image" />
            </div>
            <section className="mood-activity__description">
                <div className="mood-activity__mood"> Feeling : {userMood} </div>
                <p className="mood-activity__activity">{activityItem.activity}</p>
                <div className="mood-activity__options">
                    <Button   color="success" variant="contained" onClick={handleCancelClick}>Go Back</Button>
                    <Button color="success" variant="contained" onClick={handleNewActivityClick}>Choose Another Activity</Button>
                </div>
            </section>
        </main>
    );
}

export default MoodPage;

