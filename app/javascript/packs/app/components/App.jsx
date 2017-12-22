import * as React from 'react';
import {connect} from 'react-redux';
import {addSample} from '../actions';
import {sessionApi, registrationApi} from '../../modules/login';
const App = that => (
    <div>
        {/*<button onClick={()=> sample(that)}> sample</button>*/}
        <button onClick={()=> loginButton()}> login</button>
        <button onClick={()=> logoutButton()}> loout</button>
        <button onClick={()=> newUserButton()}> sign_up</button>
        {that.sample.id}
    </div>
);

const sample = (that) => {
  that.dispatch(addSample())
};

const loginButton = () => {
     sessionApi.login({'email':'admin2@example.com', password:'password'});
    //registrationApi.signUp('name', 'samplelelele@gmail.com', 'Kosuke10', 'dev')
};

const logoutButton = () => {
    sessionApi.logout()
};

const newUserButton = () => {
    registrationApi.signUp({'email':'ffffffffffffffsdsdsdsdsdsffffffff@gmail.com', 'password': 'password', 'password_confirmation': 'password', 'name':'sasasasa'})
};

const mapToStateProps = (state) => state;

export default connect(mapToStateProps)(App);
