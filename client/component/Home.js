import React from 'react';
import { connect } from 'react-redux';
import { addHome, homeList} from '../redux/action/home.action'
import { throws } from 'assert';
class Home extends React.Component {
    constructor(arg) {
        super(...arg);
        this.data = {
        }
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { 
            newsList, 
            number, 
            homeNumber 
        }  = this.props;
        return(
            <div>
                <div>React ServerRender</div>
                <div onClick={()=> { homeNumber(number) }}>
                    number: {number}
                </div>
                {
                    newsList.map(item=> {
                        return (
                            <div key={item}>{item}</div>
                        )
                    })
                }
            </div>
        ) 
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        number: state.home.number,
        newsList: state.home.newsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            dispatch(homeList());
        },

        homeNumber(number) {
            dispatch(addHome(number));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)