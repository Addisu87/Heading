import React from 'react';

const initialBlock = { id: uid(), html: '', tag: 'p' };

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

class EditablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [initialBlock] };
  }

  render() {
    return (
      <div className="Page">
        {this.state.blocks.map((block, key) => {
          return (
            <div key={key} id={block.id}>
              Tag: {block.tag}, Content: {block.html}
            </div>
          );
        })}
      </div>
    );
  }
}

export default EditablePage;
