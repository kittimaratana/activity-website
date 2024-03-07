//use the USE param to see /:moodId
//call the api after that
import './MainPage.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MainPage() {

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
            Main
        </main>
    );
}

export default MainPage;

