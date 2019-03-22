import React from 'react';
import ReactDOM from "react-dom";
import Two from "./two.js";
class One extends React.Component{
    render(){
        return(
            <div>
                <Two />
            </div>
        );
    }
}
ReactDOM.render(
    <One />,
    document.getElementById('root')
);