import React from 'react';
import Card from 'react-bootstrap/Card';

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
      <Card style={{ width: '18rem' }}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.state.likes} Likes
        </Card.Text>
        <Card.Img onClick={this.handleLike} src={this.props.image_url} alt={this.props.alt} title={this.props.title} />
        <Card.Body>
          {this.props.alt}
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;