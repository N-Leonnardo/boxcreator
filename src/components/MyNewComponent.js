import React, { Component} from 'react';

class MyNewComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age :  this.props.age
        };
    }


    incrementage() {
        this.setState({
            age : this.state.age + 1
        })
    }

    render(){
        return(
            <div> 
                <h1>
                    {this.props.lastName} , {this.props.firstName}
                </h1>
                <p>
                    Age : {this.state.age}
                </p>
                <p>
                    Hair Color : {this.props.hair}
                </p>
                <button onClick={ ()=> this.incrementage() }>Add birthday to {this.props.firstName} </button>

            </div>
        )
    }
}

export default MyNewComponent