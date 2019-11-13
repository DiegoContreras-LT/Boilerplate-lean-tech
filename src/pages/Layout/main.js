import React from "react";
import ContentRouter from './../Router/contentRouter'

export default class Main extends React.Component {

  render(){
    return (
      <ContentRouter device={this.props.device} />
    );
  }
}