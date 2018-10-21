import React from 'react';
import { Link } from 'react-router-dom';

const footer = {
    display: 'flex',
    'justifyContent': 'space-around',
    'alignItems': 'center',
    height: '2.5rem',
    background: 'cadetblue',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    'bottomTop': '1px solid #eee',
    'paddingBottom': 'constant(safe-area-inset-bottom)',
    'paddingBottom': 'env(safe-area-inset-bottom)'
}

export class Header extends React.Component {
    constructor(arg){
        super(...arg)
        this.state = {
            List : [{
                text: 'Home',
                path: '/',
                id: 1
            },{
                text: 'Find',
                path: '/find',
                id: 2
            },{
                text: 'Info',
                path: '/info',
                id: 3
            },{
                text: 'Center',
                path: '/center',
                id: 4
            }]
        }
    }

    render() {
        const { List } = this.state;
        return (
            <footer style={footer}>
                {
                    List.map(item => (
                        <Link key={item.id} to={item.path}>{item.text}</Link>
                    ))
                }
            </footer>
        )
    }
}

export default Header

