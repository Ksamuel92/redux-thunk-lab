// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
  render() {
    debugger;
    const renderCatPics = this.props.catPics.map((catPic) => (
      <img src={catPic.url} key={catPic.id} alt="cat pic" />
    ));
    return <div>{renderCatPics}</div>;
  }
}

export default CatList;
