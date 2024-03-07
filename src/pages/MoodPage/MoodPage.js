//use the USE param to see /:moodId
//call the api after that
import './MoodPage.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoodPage() {
    const params = useParams();
    //http://www.boredapi.com/api/activity?type=busywork

    const moodIndex = {
        sad: 1,
        adventurous: 2,
        lonely: 3,
        creative: 4,
        productive: 5
    }

    const moodMapping = {
        sad: ["cooking", "relaxation"],
        adventurous: ["education", "recreational"],
        lonely: ["social", "charity"],
        creative: ["diy", "music"],
        productive: ["busywork"]
    }

    return (
        <main>
            {params.moodId}
        </main>
    );
}

export default MoodPage;

