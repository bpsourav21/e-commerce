import React, { Component } from 'react';


class SideNavLeft extends Component{

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
            <div className={this.state.classChange ? 'sideNavAnimateLeft sidenav-left' : 'sidenav-left' }>
                <div className="sidenav-inner">
                    <h3>All Categories</h3>
                    <ul className="">

                        <li> 
                            <a className="" data-toggle="dropdown" href="#">
                                Shirts  
                            </a>
                        </li>
                        <li> 
                            <a className="" data-toggle="dropdown" href="#">
                                T-Shirts  
                            </a>
                        </li>
                        <li> 
                            <a className="" data-toggle="dropdown" href="#">
                                Pants  
                            </a>
                        </li>
                        <li> 
                            <a className="" data-toggle="dropdown" href="#">
                                Panjabi  
                            </a>
                        </li>
                
                    </ul>
                </div>
                
            <button onClick={this.toogleClass.bind(this)} className="btn btn-lg btn-default"></button>  
            </div>
        );
    }
}

export default SideNavLeft;