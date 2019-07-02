import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsActions from '~/stores/ducks/products';

import {
  Container, Body, ListSizes, Size, ContentSize, Image, Name,
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
  };

  componentDidUpdate() {
    const {
      typeId,
      productId,
      sizeId,
      nameProd,
      typeProd,
      sizeProd,
      priceProd,
      imageProd,
    } = this.props;

    console.log(typeId, productId, sizeId, nameProd, typeProd, sizeProd, priceProd, imageProd);
  }

  handleNextStage = async (size) => {
    console.log(1)
    const { navigation, setSelectSize } = this.props;

    await setSelectSize(size);
    // navigation.navigate('Sizes');
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
              <Size onPress={() => this.handleNextStage(size.id)}>
                <ContentSize>
                  <Image source={{ uri: size.url }} />
                  <Name>{size.size}</Name>
                </ContentSize>
              </Size>
            )}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.products.sizes,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sizes);
