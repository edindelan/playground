import React, {Component} from 'react';

class GitHub extends Component {
    state = {
        requestFailed: false
    };

    callApi = () => {
        fetch('https://api.github.com/users/edindelan')
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error('Network request failed');
                }
                return response;
            })
            .then(d => d.json())
            .then(r => {
                this.setState({data: r})
            }, () => {
                this.setState({requestFailed: true})
            })
    };

    componentDidMount() {
        this.callApi();
    };

    render() {
        const {data, requestFailed} = this.state;
        if (requestFailed) return <div>Failed...</div>;
        if (!data) return <div>Loading...</div>;
        if (data) return <div>{data.name}</div>;
    }
}

export default GitHub;