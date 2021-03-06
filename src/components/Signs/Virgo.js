import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSuggestions} from '../../redux/suggestionsReducer';

 class Virgo extends Component {



      render() {
        const mappedSuggs = this.props.suggestions.map((val, i) => {
            return (
                <div key={i} style={{ border: '1px solid black', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px 0px', margin: '2%' }}>
                <h4>{val.dates}</h4>
                <h2>Traits: {val.traits}</h2>
                <h2>Genre(s) Recommended: {val.genre_name}</h2>
    
            </div>
            )
        })
          return(
              <div className='full'>
            <h1 className='zodiac'>Virgo</h1>
            {mappedSuggs[5]}
            <h4 className='signDsc'>

            Virgos tend to have an exceptional ability to notice even the smallest details. If you pay close attention to graphics in games, then open-world games would be perfect for you. This includes games such as Skyrim, The Witcher, and Red Dead Redemption (RDR2 has incredible graphics and the optional cinematic view for cutscenes!).
            </h4>
            <h2>
            <br/>
            Video game characters that embody your sign: <br/>
            <br/>
            Master Chief - Halo series<br/>
            <img id = 'pic' src= 'https://lh3.googleusercontent.com/proxy/dBjUGBIYjjEgVSuoUEjuzsMuiDbWi1ChHLnVOf8V8SP2mat2ZSR7LsUEbyqb92KB4fwmXj4bqcDf4JcADf5MrdHCxgB27G3saivwQdURZb6Ytg'/>
            <br/>
            <br/>
            <br/>
            Nick Valentine - Fallout 4<br/>
            <img id = 'pic' src= 'https://pm1.narvii.com/6144/08b7c5a5b20d6810fe47a1fea52228c3809c1a06_00.jpg'/>
            <br/>
            <br/>
            <br/>
            Princess Zelda - The Legend of Zelda <br/>
            <img id = 'pic' src= 'https://i.ya-webdesign.com/images/princess-zelda-png-2.png'/>
            <br/>
            </h2>
                <div className='back'>
                    {/* <button onClick={this.handleClick}>Show Suggestions</button> */}
            <Link to='/selection'><button>Back to Selection</button></Link>
            </div>
            </div>
        )
    }
        
}

const mapStateToProps = state => {
    return {
        suggestions: state.suggestionsReducer.suggestions,
    }
    }
    
    export default connect(mapStateToProps, {
    getSuggestions
    })(Virgo);