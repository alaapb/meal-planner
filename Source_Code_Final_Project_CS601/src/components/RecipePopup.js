import React from 'react'

function RecipePopup(props) {
  return (props.trigger) ? (
    <div className="recipe-popup">
        <div className="recipe-popup-inner">
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default RecipePopup