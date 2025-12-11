import React from "react";

const ChildComponent = React.memo(
    (props) => {

         console.log("child component got re-rendered");

    return(
        <div>
            <button>
                {props.buttonName}
            </button>
        </div>
    )
}
);

export default ChildComponent

// React.memo ka kaam yeh hain ki prop tabhi hi re-render hogaa jab props 
// change hongee vrnaa re-render nahi hogaaa

// React.memo ka ek exception hain, if you are sending a function then React.memo
// wont be able to save you from re-render