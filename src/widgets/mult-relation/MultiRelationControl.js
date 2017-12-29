import React from 'react';

const CategoriesControl = React.createClass({
  handleChange: function(e) {
    this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
  },

  render: function() {
    var value = this.props.value;
    return h('input', { 'className': 'nc-controlPane-widget', type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
  }
});

export default CategoriesControl;
