import React, { Component } from 'react';
import {BASE_URL,CLOUDINARY_URL} from './../../constants.js';

class ImageGallery extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            imgUrls : this.props.photos,
            currentIndex:0
        }
        this.nextButtonHandle = this.nextButtonHandle.bind(this);
        this.previousButtonHandle = this.previousButtonHandle.bind(this);
    }

    nextButtonHandle = (e) =>{
        const len = this.state.imgUrls.length;
        var index = this.state.currentIndex+1;
        if(index>len-1){
            index = 0;
        }
        this.setState({
            currentIndex : index
        });
    }

    previousButtonHandle = (e) =>{
        const len = this.state.imgUrls.length;
        var index = this.state.currentIndex-1;
        if(index<=0){
            index =len-1;
        }
        this.setState({
            currentIndex : index
        });
        
    }



    render() { 
        /*
        var backGroundImgUrl = "http://localhost:3501/image/"+this.state.imgUrls[this.state.currentIndex];
        const style = {
            backgroundImage : `url(${backGroundImgUrl})`,
            height:'300px',
            border: '2px solid #5e7d77',
            borderRadius: '3px',
            backgroundSize:'cover'  
        }
        
        <div className="row justify-content-center">
                <div className="col-md-4 ratio" style={style}>
                <button className="w3-button w3-black w3-display-left" onClick={this.previousButtonHandle}>&#10094;</button>
                <button className="w3-button w3-black w3-display-right" onClick={this.nextButtonHandle}>&#10095;</button>
                </div>
            </div>
        */
       const imgUrls = this.state.imgUrls;
       const imgStyle ={
           height:this.props.height || "350px",
           objectFit:'cover',
       }

        return ( 
            <div>
                <div className="row justify-content-center" >
                    <div className="col-md-12">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" style={{border:'0.5px solid white',borderRadius:'5px'}}>

                                <div class="carousel-item active">
                                    {/* <img class="d-block w-100" style={imgStyle} src={`${BASE_URL}image/${imgUrls[0]}`} alt="First slide" /> */}
                                    <img class="d-block w-100" style={imgStyle} src={`${CLOUDINARY_URL}${imgUrls[0]}`} alt="First slide" />
                                </div>

                                {
                                    imgUrls.slice(1).map((image, index) => {
                                        return (
                                            <div class="carousel-item">
                                                {/* <img class="d-block w-100" style={imgStyle} src={`${BASE_URL}image/${image}`} alt="Second slide" /> */}
                                                <img class="d-block w-100" style={imgStyle} src={`${CLOUDINARY_URL}${image}`} alt="Second slide" />
                                            </div>

                                        );
                                    })
                                }

                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>



            </div>
         );
    }
}
 
export default ImageGallery;
