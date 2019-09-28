import React from "react";
import { Container, Content,Button } from "native-base";
import PasswordHeader from './PasswordHeader';
import PasswordItemList from './PasswordItemList';
import PasswordFooter from './PasswordFooter';
import { connect } from 'react-redux';

class MainPage extends React.Component {

  static navigationOptions = {
    headerTitle: <PasswordHeader/>,
  };
  
  render(){
    const navigatePasswordItemDetail = () => {
      this.props.navigation.navigate('PasswordItemDetail')
    }

    return (
    <Container>
      <Content>
        <PasswordItemList navigatePasswordItemDetail = {navigatePasswordItemDetail} passwordItems = {this.props.items} />
      </Content>
    </Container>
  );
}
}


const mapStateToProps = (state) => {
  return {
      items: state.PasswordItemReducer.PasswordItems
  }
}

export default connect(mapStateToProps, null)(MainPage);