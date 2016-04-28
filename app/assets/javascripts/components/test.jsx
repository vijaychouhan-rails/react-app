var MyComp = React.createClass({
  propTypes:{
    children: React.PropTypes.element.isRequired
  },

  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = MyComp;
