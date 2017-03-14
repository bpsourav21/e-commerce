import React, { Component } from 'react';

class SideNavRight extends Component{

    constructor(){
        super();

        this.state = {
            classChange: false
        }    
    }


    toogleClass(){
        this.setState({
            classChange: !this.state.classChange
        })
    }


    render(){
        return(
            <div className={this.state.classChange ? 'sideNavAnimateRight sidenav-right' : 'sidenav-right' }>
                <div className="sidenav-inner">
                    
                    <ul className="text-center">
                        <li>
                            <h5 >Wishlist <span className="glyphicon glyphicon-heart text-danger">  </span></h5>
                        </li>
                        <li>
                            <h6>Your Whish List Is Empty</h6>
                        </li>
                    </ul>
                </div>
                
            <button onClick={this.toogleClass.bind(this)} className="btn btn-lg btn-default"></button>  
            </div>
        );
    }
}

export default SideNavRight;