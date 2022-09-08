import React from "react";

const Test = (props) => {
        return(
            <div>
                <center>
                    <h2> I'm test component</h2>
                    <p> Name: {props.name}</p>
                </center>
            </div>
        )
    }

export default Test;