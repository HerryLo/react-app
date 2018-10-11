import React, {Component} from 'react';
import Home from './component/Home';

class App extends React.Component {
    constructor(arg){
        super(...arg);
    }

    render() {
        return(
            <div onClick={()=> {alert(123)}}>
                <Home />
            </div>
        )
    }
}

export default App