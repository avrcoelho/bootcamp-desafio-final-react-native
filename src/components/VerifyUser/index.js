import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StorageActions from '~/stores/ducks/storage';

import createNavigator from '~/routes';

class VerifyUser extends Component {
  static propTypes = {
    getStorageData: PropTypes.func.isRequired,
    userChecked: PropTypes.bool.isRequired,
    userLogged: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.shape()]),
  };

  static defaultProps = {
    userLogged: null,
  };

  async componentDidMount() {
    const { getStorageData, setStorageClear } = this.props;

    // await setStorageClear();
    await getStorageData();
  }

  render() {
    const { userChecked, userLogged } = this.props;

    // para não retornar nada
    if (!userChecked) return null;

    const Routes = createNavigator(!!userLogged);

    return <Routes />;
  }
}

const mapStateToProps = state => ({
  userLogged: state.storage.dataget,
  userChecked: state.storage.success,
});

const mapDispatchToProps = dispatch => bindActionCreators(StorageActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyUser);
