import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsActions from '~/stores/ducks/products';

import {
  Container, Body, ListProducts, Loading, ErrorText,
} from './styles';

import Header from '~/components/Header';

class Menu extends Component {
  static propTypes = {
    setProductsRequest: PropTypes.func.isRequired,
    setProductsRefresh: PropTypes.func.isRequired,
    products: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.shape()]),
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    refreshing: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    products: null,
    error: null,
  };

  async componentDidMount() {
    const { setProductsRequest } = this.props;

    await setProductsRequest();
  }

  handleRefreshPage = async () => {
    const { setProductsRefresh } = this.props;

    await setProductsRefresh();
  };

  renderProducts = () => {
    const { products, refreshing, error } = this.props;

    return (
      <>
        {error && <ErrorText>{error}</ErrorText>}
        {products && (
          <>
            <ListProducts
              onRefresh={this.handleRefreshPage}
              refreshing={refreshing}
              data={products.docs}
              keyExtractor={product => product.id}
              renderItem={({ item: product }) => (
                <>
                  <ErrorText>{product.name}</ErrorText>
                </>
              )}
            />
          </>
        )}
      </>
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <Container>
        <Header />
        <Body>{loading ? <Loading color="#000" size="small" /> : this.renderProducts()}</Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  loading: state.products.loading,
  refreshing: state.products.refreshing,
  error: state.products.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
