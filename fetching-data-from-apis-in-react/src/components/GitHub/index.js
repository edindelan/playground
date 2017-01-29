import React, {Component} from 'react';

class GitHub extends Component {
    state = {

    }
    componentDidMount(){
        fetch('https://api.github.com/users/edindelan')
            .then(d => d.json())
            .then(r => {
                this.setState({data: r})
            })
    }
    render() {
        console.log(this);
        return (
            <div>
                GitHub
            </div>
        )
    }
}

export default GitHub;