import React, { Component } from 'react';

class Main extends Component{
    // constructor(props){
    //     super(props.children);
    // }


    render() {
        return(
        <>
            <div className="main">
         {this.props.children}
         </div>
        </>
        )
    }
}


export default Main;