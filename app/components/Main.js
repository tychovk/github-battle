//app/components/Main.js
var React = require('react')

var Main = React.createClass({
    render () {
        return (
            <div className='main-container'> 
                Hello from main
                {this.props.children}
            </div>
        )
    }
})

module.exports = Main