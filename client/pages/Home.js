import React from 'react';
import { connect } from 'react-redux';
import { addHome, homeList} from '../redux/action/home.action'
class Home extends React.Component {
    constructor(arg) {
        super(...arg);
        this.data = {
            home: '345345'
        }
    }

    componentDidMount() {
        console.log(12);
        if(!this.props.newsList.length){
            this.props.getList();
        }
        this.getHome();
    }

    getHome() {
        this.setState({
            home: 57567
        })
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
                <div>{this.data.home}</div>
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

Home.loadData = (store, route ,match) => {
    store.dispatch(homeList());
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