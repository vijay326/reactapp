import React from "react";

class Test extends React.Component {
    render(){
        return(
            <div>
                <center>
                    <h2> I'm test component</h2>
                    <p> Name: {this.props.name}</p>
                </center>
            </div>
        )
    }
}

export default Test;