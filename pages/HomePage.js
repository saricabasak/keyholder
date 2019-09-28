import React from "react";
import { connect } from 'react-redux';
import { Container, Content } from "native-base";
import PasswordItemList from '../components/PasswordItemList';

class HomePage extends React.Component {

  render(){
    return (
          <PasswordItemList passwordItems = {this.props.items}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.PasswordItemReducer.PasswordItems
  }
}

export default connect(mapStateToProps, null)(HomePage);
