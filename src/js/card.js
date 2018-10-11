import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card mb-3 mx-3">
        <div className="card-header">{this.props.name}</div>
        <div className="card-body">
          <h4 className="card-title">Primary card title</h4>
          <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ad voluptatibus placeat deserunt numquam iure labore accusantium nisi id neque repellendus consequuntur vitae eum autem, cum distinctio ex officia eos.</p>
        </div>
      </div>
    );
  }
}

export default Card;