import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import {requestRobots, setSearchField} from "../actions";
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots)
    }
}

class App extends React.Component {

    componentWillMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchfield, onSearchChange, robots, isPending, error } = this.props
        const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            }
        )

        if (isPending) {
            return <h1>Loading</h1>
        }

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);