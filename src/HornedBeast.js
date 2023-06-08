import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

  handleClick = () => {
    this.props.handleOpenModal(this.props.title)
  }

  render() {
    // console.log(this.props.selectedBeast);
    return (
      <Card className='main-cards' style={{ width: '15rem' }}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.state.likes} Likes
        </Card.Text>
        <Button onClick={this.handleLike}>Favorite </Button>{''}
        <Card.Img className='main-image-cards'
          onClick={this.handleClick}
          src={this.props.image_url}
          alt={this.props.alt}
          title={this.props.title}
        />
        <Card.Body>
          {this.props.alt}
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;