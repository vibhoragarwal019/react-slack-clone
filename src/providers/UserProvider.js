import React, { Component, createContext } from 'react';
import { auth } from '../firebase';
import { createOrGetUserProfileDocument } from '../firebase';

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
    state = initialUserState;

    async componentDidMount() {
        auth.onAuthStateChanged(async (userAuth)=>{
            if(userAuth){
                const userRef = await createOrGetUserProfileDocument(userAuth);
                userRef.onSnapshot((snapshot) => {
                    this.setState({
                      user: { uid: snapshot.id, ...snapshot.data() },
                      loading: false,
                    });
                  });
            }
            
        });
    }

    render() {
        return (<UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
        );
    }
}
export default  UserProvider;