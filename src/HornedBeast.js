import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    }

  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    console.log(this.props);
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.state.likes} Likes</p>
          <img onClick={this.handleLike} src={this.props.image_url} alt={this.props.decription} title={this.props.title} />
        </article>
      </>
    )
  }
}

export default HornedBeast;