import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Gemini extends Component {


    render() {
        return(
            <div>
            <h2>Gemini</h2>
                <div id='back'>
            <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
            </div>

        )
    }
}

