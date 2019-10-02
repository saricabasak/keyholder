import React from "react";
import { connect } from "react-redux";
import PasswordItemList from "../components/PasswordItemList";
import { setPasswordItemArrOnStoreAction, setNextSequenceOnStoreAction } from "../store/actions/PasswordItemAction";
import {
  retrieveAllData,
  clearAsyncStorage,
  retrieveNextSequenceOnStorage
} from "../components/StorageOperations";

class HomePage extends React.Component {
  componentWillMount() {
    /* Data bozulduğunda storage daki datayı temizlemek için aşağıdaki komut çalıştırılabilir. */
    //clearAsyncStorage();

    /*
    Uygulama ayağa kalkarken Home page ekrana gelir. Bu component mount olmadan storagedan tüm password listesi çekilir.
    Çekilen passwordler redux ile global stora konur.
    */

   console.log("HomePage retrieveAllData before ->>>" );
    retrieveAllData().then(passwordItemArr => {
      console.log("HomePage passwordItemArr  ->>>" + passwordItemArr );
      this.props.setPasswordItemArrOnStore(passwordItemArr);
      console.log("HomePage setPasswordItemArrOnStore after ->>>" );
      console.log("HomePage retrieveNextSequenceOnStorage after ->>>" );
    });
    console.log("HomePage retrieveAllData after ->>>" );
    retrieveNextSequenceOnStorage().then(sequence => {
      this.props.setNextSequenceOnStore(sequence);
    });
  
    /* Storagedan son sequence'i çek ve +1 ekleyip stora daki değere koy!*/
    
  }

  render() {
    console.log(
      "HomePage render passwordItems ->>>" +
        JSON.stringify(this.props.passwordItems)
    );
    return <PasswordItemList passwordItems={this.props.passwordItems} />;
  }
}

const mapStateToProps = state => {
  return {
    passwordItems: state.PasswordItemReducer.PasswordItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPasswordItemArrOnStore: data => dispatch(setPasswordItemArrOnStoreAction(data)),
    setNextSequenceOnStore:    data => dispatch(setNextSequenceOnStoreAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
