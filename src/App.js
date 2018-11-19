import React, { Component } from 'react';
import Amplify, { Analytics, Auth, Storage, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './aws-exports';
import './App.css';
import { getUser } from './graphql/queries';
import { id } from 'postcss-selector-parser';

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}, 
      user: "",
      company: "",
      role: "",
    }
    
  }

  componentDidMount() {
    Analytics.record('Amplify_CLI');
    
    Auth.currentAuthenticatedUser()
    .then(user => {
      const items = {
        id: user.attributes.sub
      }
      const getUserInfo =  API.graphql(graphqlOperation(getUser,items));  
      console.log(getUserInfo)
    })
    .catch(err => 
      console.log(err));
  }

  getUserData = async (items) => {
    const getUserInfo =  await API.graphql(graphqlOperation(getUser,items));
    //getUserData
  }

  render() {
    return (
      <div className="App">
      <h3>Counting made easy!</h3>

      </div>
    );
  }
}

export default withAuthenticator(App, true);
