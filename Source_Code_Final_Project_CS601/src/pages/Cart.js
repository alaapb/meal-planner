import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart-recipes') || "[]");
        if(cart) {
            setData(cart);
        }
    }, []);

    console.log(data);

    console.log(data.map(value=> {
        return value.title;
    }));

    return (
        <ul className="recipes-list">
            {Array.isArray(data) ?
                data.map(value => (
                    <Recipe 
                        id={value.id}
                        img={value.img} 
                        recipeName={value.recipeName}
                        recipeInstructions = {value.recipeInstructions}
                        recipeUrl = {value.recipeUrl} />
                )) : null}
        </ul>
    );
}

function Recipe(props) {
    const nav = useNavigate();

    function deleteFromCart(e) {
        e.preventDefault();
        // window.localStorage.removeItem("cart-recipes");

        let cart = JSON.parse(window.localStorage.getItem('cart-recipes'));
        let index = 0;
        let real_index = -1;
        cart.forEach(recipe => {
            if(recipe.id === props.id) {
                console.log("found");
                real_index = index;
            }else{
                index++;
            }
            
        })

        console.log(real_index);

        if(real_index > -1) {
            cart.splice(real_index, 1);

            window.localStorage.setItem('cart-recipes', JSON.stringify(cart));
        }

        toast("deleted from cart");

        nav('/recipes');
        
    }

    function recipeInfo(e) {
        e.preventDefault();

        window.localStorage.setItem('recipe-info-temp', JSON.stringify(props));


        nav('/recipe-info');

    }

    return (
        <div>
            <Card className="recipe-card" onClick={recipeInfo}>
                <Card.Body>
                    <Card.Img src={props.img} />
                    <Card.Title>{props.recipeName}</Card.Title>
                </Card.Body>
            </Card>
            <Button variant="secondary" onClick={deleteFromCart}>Delete</Button>
        </div>
    )
}

export default Cart;