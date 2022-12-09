import React from 'react';

class EditableBlock extends React.Component {
  constructor(props) {
    super(props);
    this.onChangHandler = this.onChangHandler.bind(this);
    this.contentEditable = React.createRef();
    this.state = {
      html: '',
      tag: 'p'
    };
  }
}

export default EditableBlock;
