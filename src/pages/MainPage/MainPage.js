//use the USE param to see /:moodId
//call the api after that
import './MainPage.scss';
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../Images/emotion.jpg"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


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
            <form  variant="filled"component="form" label="controled" id="mood-form" className="hero__mood-form" onSubmit={handleMoodSubmit}>
                <div>
                    <label label={'margin="dense"'} className='hero__label' htmlFor="mood">Select Mood: </label>
                    <select className="hero__mood-input" name="mood" id="mood">
                        <option value="sad">Sad</option>
                        <option value="adventurous">Adventurous</option>
                        <option value="lonely">Lonely</option>
                        <option value="creative">Creative</option>
                        <option value="productive">Productive</option>
                    </select>
                </div>
                <Button  className="hero__button" color="success" variant="contained"  type="submit">Find out now!</Button>
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
