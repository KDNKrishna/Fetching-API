//To view details of single movie
import React from 'react'
import _ from 'lodash'

class MovieView extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            selectedMovie : null
        }
    }

    componentDidMount(){
        fetch('https://content.viaplay.se/pc-se/serier/samtliga')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
             return  _.mapKeys(myJson._embedded['viaplay:blocks'][0]._embedded['viaplay:products'],'publicPath')
            }).then((res)=>{
                this.setState({
                    selectedMovie : res[`${this.props.match.params.publicpath}`]
                })
            })
    }

    selectMovie(){

    }


    render(){
        console.log(this.state.selectedMovie,': state')
        console.log(this.props.match.params.publicpath,'is publicpath')
        /*
        return(
            <div>hi</div>
        )
        */
        
        if(this.state.selectedMovie){
            const {images, imdb } = this.state.selectedMovie.content
            return(
                <div>
                    <img src={images.landscape.url} />
                    <h2 className='single-title'>{this.state.selectedMovie.content.series.title}</h2>
                    <h2 className='single year'>{this.state.selectedMovie.content.production.year}</h2>
                    
                    {imdb.rating}
                        <br />
                    <a href={imdb.url}>View on IMBD</a>
                </div>
            )
        }else{
            return (
                <div>loading....</div>
            )
        }
        

        
    }
}

export default MovieView