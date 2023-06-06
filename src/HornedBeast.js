import React from 'react';

class HornedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <img src={this.props.image_url} alt={this.props.decription} title={this.props.title}/>
        </article>
      </>
    )
  }
}

export default HornedBeast;