import React from 'react';
import Footer from './component/Footer'
import { renderRoutes } from 'react-router-config'
import styles from './styles/common.css'

export class App extends React.Component {
    constructor(arg) {
        super(...arg);
    }

    componentWillMount() {
        if(this.props.staticContext){
            this.props.staticContext.css.push(styles._getCss());
        }
    }

    render() {
        return (
            <div>
                {renderRoutes(this.props.route.routes)}
                <Footer />
            </div>
        )
    }
}

export default App