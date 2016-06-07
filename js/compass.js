/* global React, ReactDOM */

var Compass = React.createClass({
  getInitialState: function () {
    return {
      bearing: 0
    }
  },

  componentDidMount: function () {
    window.addEventListener('deviceorientation', function (e) {
      this.setState({bearing: Math.round(e.alpha)})
    }.bind(this))
  },

  render: function () {
    return (
      <div className="compass" style={{transform: 'rotate(' + this.state.bearing + 'deg)'}}>
        ^
      </div>
    )
  }
})

ReactDOM.render(
  <Compass />,
  document.getElementById('container')
)
