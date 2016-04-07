About = require ('./about.jsx');
var Index = React.createClass({
  render: function() {
    return (
      <div className="widgets">
        I am index page
        <About />
      </div>
    );
  }
});

module.exports = Index;
