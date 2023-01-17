import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import RecipePopup from "../components/RecipePopup";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Recipes() {
    const [data, setData] = useState([]);
    const [recipePopup, setPopup] = useState(false);



    useEffect(() => {
        async function getData() {
            const response = await fetch('recipe.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            setData(data);


        }
        getData();
    }, []);

    console.log(data);


    return (
        <ul className="recipes-list">
            {Array.isArray(data.recipes) ?
                data.recipes.map(value => (
                        <Recipe
                            id={value.id}
                            img={value.image}
                            recipeName={value.title}
                            recipeInstructions={value.instructions}
                            recipeUrl={value.sourceUrl}
                            />
                        
                )) : null}

        </ul>
    );
}

function Recipe(props) {
    const [recipePopup, setPopup] = useState(false);
    const nav = useNavigate();


    function addToCart(e) {
        e.preventDefault();
        var cart = JSON.parse(window.localStorage.getItem('cart-recipes') || "[]");
        cart.push(props);

        window.localStorage.setItem('cart-recipes', JSON.stringify(cart));

        toast("Added to Cart");

        // window.localStorage.setItem('cart-recipes', JSON.stringify(props));
        console.log("added to local storage");
    }

    function recipeInfoPopup(e) {
        e.preventDefault();

        window.localStorage.setItem('recipe-info-temp', JSON.stringify(props));


        nav('/recipe-info');
    }

    return (
        <div>
            <Card className="recipe-card" onClick={recipeInfoPopup}>
                <Card.Body>
                    <Card.Img src={props.img} />
                    <Card.Title>{props.recipeName}</Card.Title>
                </Card.Body>
            </Card>
            <Button variant="secondary" onClick={addToCart}>Add To Cart</Button>
            <ToastContainer/>
        </div>

        // Can take to a different page through the card on click and then save the information about the recpe in the local storage and then in the page we can look at the local storage to find the recipen info and then use it and once the button to close is clicked we can clear that local storage part
    )
}

export default Recipes;