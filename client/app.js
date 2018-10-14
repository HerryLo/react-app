import React, {Component} from 'react';
import Home from './component/Home';

class App extends React.Component {
    constructor(arg){
        super(...arg);
    }

    render() {
        return(
            <div>
                <Home />
            </div>
        )
    }
}

export default App