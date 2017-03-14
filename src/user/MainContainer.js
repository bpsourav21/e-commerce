import React, { Component } from 'react';

class MainContainer extends Component{

    var indents = ['img1', 'img2', 'img3', 'img4', 'img5'];
var images=[];

    for (var i = 0; i < indents.length; i++) {
        
    images.push(<div className="sd-product-item col-md-3"><div>
                <img src="img/indents[i].png" /></div> </div>);
    }

    render(){
        return(
            <div className="container sd-main-container">
		        <h2 className="text-center">Soul Dance</h2>
                <div className="sd-product-grid row">

                    {images}

                </div>
            </div>
   
        );
    }
}

export default MainContainer;