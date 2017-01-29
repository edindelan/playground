import React, {Component} from 'react';

const urlForUser = username =>
   `https://api.github.com/users/${username}`;

class GitHub extends Component {
    state = {
        requestFailed: false
    };

    callApi = () => {
        const {username} = this.props;
        fetch(urlForUser(username))
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