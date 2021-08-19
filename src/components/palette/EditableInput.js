var { EditableInput } = require('react-color/lib/components/common');

var inputStyles = {
  input: {
    border: none,
  },
  label: {
    fontSize: '12px',
    color: '#999',
  },
};

<EditableInput
  style={ inputStyles }
  label="hex"
  value={ this.props.hex }
  onChange={ this.handleChange } />