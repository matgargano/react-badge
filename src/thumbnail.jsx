var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
    render: function () {
        return <div className="thumbnail col-xs-3">
            <img src={this.props.imageUrl} alt="..."/>
            <div className="caption">
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
                <p><Badge number={this.props.number} title={this.props.title}></Badge></p>
            </div>
        </div>

    }
});