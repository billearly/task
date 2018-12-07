import React, { Component } from 'react';
import { getUserData } from '../util';

interface IProps {
    displayName: String;
}

class Profile extends Component<IProps> {
    constructor(props){
        super(props);
    }

    static async getInitialProps({ req }) {
        const userData = await getUserData(req);
        const displayName = userData.displayName;

        return { displayName };
    }

    render() {
        return (
            <h1>
                Welcome {this.props.displayName}
            </h1>
        );
    }
}

export default Profile;
