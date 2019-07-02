import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsActions from '~/stores/ducks/products';

import {
  Container, Body, ListSizes, SizeItem, ContentSize, Image, Name,
} from './styles';

import Header from '~/components/Header';

class Sizes extends Component {
  static propTypes = {
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        size: PropTypes.string,
        id: PropTypes.string,
      }),
    ).isRequired,
    setSelectSize: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNextStage = async (size) => {
    const { navigation, setSelectSize } = this.props;

    await setSelectSize(size);
    navigation.navigate('Cart');
  };

  render() {
    const { sizes } = this.props;

    return (
      <Container>
        <Header />
        <Body>
          <ListSizes
            data={sizes}
            numColumns={2}
            keyExtractor={size => size.id}
            renderItem={({ item: size }) => (
              <SizeItem onPress={() => this.handleNextStage(size.id)}>
                <ContentSize>
                  <Image source={{ uri: size.url }} />
                  <Name>{size.size}</Name>
                </ContentSize>
              </SizeItem>
            )}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.products.sizes,
  ok: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sizes);
