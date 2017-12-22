import * as React from 'react';
import {connect} from 'react-redux';
import {addSample} from '../actions';

const App = that => (
    <div>
        <button onClick={()=> sample(that)}> sample</button>
        {that.sample.id}
    </div>
);

const sample = (that) => {
  that.dispatch(addSample())
};

const mapToStateProps = (state) => state;

export default connect(mapToStateProps)(App);
