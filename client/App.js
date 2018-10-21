import React from 'react';
import Footer from './component/Footer'
import { renderRoutes } from 'react-router-config'

export class App extends React.Component {
    constructor(arg) {
        super(...arg);
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