import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipePopup from "../components/RecipePopup";

function RecipeInfo() {
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        const recipeInfo = JSON.parse(localStorage.getItem('recipe-info-temp') || "");
        if (recipeInfo) {
            setData(recipeInfo);
        }

    }, []);

    console.log(data);

    if(!popup) {
        localStorage.removeItem('recipe-info-temp');
        nav('/recipes');
    }

    return (
        <RecipePopup trigger={popup} setTrigger={setPopup}>
            <h3>{data.recipeName}</h3>
            <img src={data.img} />
            <p>{data.recipeInstructions}</p>
        </RecipePopup>


        // <div className="recipe-popup">
        //     <div className="recipe-popup-inner">
        //         <button className="close-btn" onClick={closeInfoPage}>close</button>
        //         <h3>{data.recipeName}</h3>
        //         <img src={data.img} />
        //         <p>{data.recipeInstructions}</p>
        //     </div>
        // </div >
    );
}

export default RecipeInfo;