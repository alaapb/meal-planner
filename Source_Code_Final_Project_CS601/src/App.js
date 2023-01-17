import logo from './logo.svg';
import './App.css';
import Header from './Header';
import "./styles.css";
import Calendar from "./pages/Calendar";
import Recipes from "./pages/Recipes";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import RecipeInfo from "./pages/RecipeInfo";
import { Route, Routes} from "react-router-dom";

function App() {
  localStorage.setItem('cart-recipes', "[]");
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/recipe-info" element={<RecipeInfo />}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
