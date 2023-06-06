import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import "./Main.css"


class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map(hornBeastObj => {
          return <HornedBeast title={hornBeastObj.title} image_url={hornBeastObj.image_url} alt={hornBeastObj.description}/>
        })}
        {/* <h2>Welcome</h2>
        <HornedBeast title="Jackson's Chameleon" description="It's a three-horned chameleon, really cute" image_url="https://images.unsplash.com/photo-1488031470693-c1a6d1a4fff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
        <HornedBeast title="Great Horned Owl" description="Large Owl that is native to the Americas, Also Know as the Tiger Owl or Hoot Owl" image_url="https://images.unsplash.com/photo-1532007195987-bb4ddeaf052d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" /> */}
      </main>
    )
  }
}

export default Main;