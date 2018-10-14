import React from 'react';
import { connect } from 'react-redux';
import { addHome } from '../redux/action/home.action'
class Home extends React.Component {
    constructor(arg) {
        super(...arg);
        this.data = {
        }
    }

    render() {
        const { number, dispatch }  =this.props;
        return(
            <div>
                <div>React ServerRender</div>
                {/* <div>{number}</div> */}
                <div onClick={()=> {dispatch(addHome(number))}}>number: {number}</div>
            </div>
        ) 
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        number: state.homeNumber
    }
}

export default connect(mapStateToProps)(Home)