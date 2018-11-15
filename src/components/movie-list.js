//Created a folder in src named components and inside that folder created a file named movie-list.js
//Now imported react from react module which is present in node modules 
import React from 'react'
import fetch from 'node-fetch'
import '../styles/allstyles.css'
import {Link} from 'react-router-dom'
import MovieView from './movie-view';

//Creating a component named MovieList and whatever the properties present in React.Component will be given to MovieList
class MovieList extends React.Component{
    constructor(){
        super()
        //this.state is a javascript object 
        this.state={
            //movies is an empty box in which we can insert data from API later
            movies : []
        }
    }
    //
    componentDidMount(){
        //To fetch the data from the API
        fetch('https://content.viaplay.se/pc-se/serier/samtliga')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ movies : myJson._embedded['viaplay:blocks'][0]._embedded['viaplay:products']});
            });
       
        

    }
    //Method to map
    moviesMapper(){
        console.log(this.state.movies.length, 'length')
        if(this.state.movies.length === 0){
            return <div>Loading........</div>
        }
        else return this.state.movies.map(movie=>
            <Link style={{textDecoration:'none'}} to={`/${movie.publicPath}`} className='li-wrapper grow'>
                <li  className='list-group-item'>
                    {movie.content.series.title}
                </li>
                <img className='image' src={movie.content.images.boxart.url} />
            </Link>
        )

        
            
    }

    render(){
        console.log(this.state)
        //If we call MovieList then it should return whatever the value present in 'return'
        return(
            <div>
                <ul id="list" data-amount="8" data-element="button" className='list-group'>
                    {this.moviesMapper()}
                </ul>
            </div>

        )
    }
}
//Exporting MovieList file to App.js after rendering
export default MovieList

//Axios is a plugin which sends request to API and gets data