//use the USE param to see /:moodId
//call the api after that
import './MainPage.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../../Images/emotion.jpg"

function MainPage() {
    const navigate = useNavigate();

    const moodIndex = {
        sad: 1,
        adventurous: 2,
        lonely: 3,
        creative: 4,
        productive: 5
    }

    function handleMoodSubmit(event) {
        event.preventDefault();
        const userMood = event.target.mood.value;
        const userIndex = moodIndex[userMood];
        navigate(`/${userIndex}`);
    }

    return (
        <main className="hero">
            <img src={backgroundImage} alt="background image" className="hero__image" />
            <form id="mood-form" className="hero__mood-form" onSubmit={handleMoodSubmit}>
                <div>
                    <label htmlFor="mood">Select Mood: </label>
                    <select className="hero__mood-input" name="mood" id="mood">
                        <option value="sad">Sad</option>
                        <option value="adventurous">Adventurous</option>
                        <option value="lonely">Lonely</option>
                        <option value="creative">Creative</option>
                        <option value="productive">Productive</option>
                    </select>
                </div>
                <button type="submit">Find out now!</button>
            </form>
        </main>
    );
}

export default MainPage;

/*
            <section className="hero">
                <h2 className="hero__mood"></h2>
            </section>
*/
