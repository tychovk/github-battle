//battle.js

var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')
var PropTypes = React.PropTypes
var githubHelpers = require('../utils/githubHelpers')


var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },

    getInitialState () {
        console.log('getInitialState')
        return {
            isLoading: true,
            playersInfo: []
        }
    },

    componentWillMount () {
        console.log('componentWillMount')
    },

    componentDidMount () {
        var query = this.props.location.query
        console.log('componentDidMount')
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            }.bind(this))
        // Fetch info from github then update state
    },

    handleInitiateBattle () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },



    componentWillReceiveProps () {
        console.log('componentWillReceiveProps')
    },

    componentWillUnmount () {
        console.log('componentWillUnmount')
    },

    render () {
        return (
            <ConfirmBattle 
            isLoading={this.state.isLoading}
            onInitiateBattle={this.handleInitiateBattle}
            playersInfo={this.state.playersInfo}/>
        )
    }
})


module.exports = ConfirmBattleContainer

