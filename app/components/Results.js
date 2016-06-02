//components/Results.js

var React = require('react')
var PropTypes = React.PropTypes
var UserDetailsWrapper = require('./UserDetailsWrapper')
var UserDetails = require('./UserDetails')
var styles = require('../styles').transparentBg

function Results (props) {
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
    var losingIndex = winningIndex === 0 ? 1 : 0

    return (
        <div className="jumbotron col--sm-12 text-center" style={styles.transparentBg}>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
                </UserDetailsWrapper>

                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
                </UserDetailsWrapper>
            </div>     
        </div>     
    )
}



Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}


module.exports = Results