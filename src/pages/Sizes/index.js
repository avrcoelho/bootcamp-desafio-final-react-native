import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions, StackActions } from 'react-navigation';

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
      dispatch: PropTypes.func,
    }).isRequired,
  };

  handleNextStage = async (size) => {
    const { navigation, setSelectSize } = this.props;

    await setSelectSize(size);

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Cart',
          params: { addCart: true },
        }),
      ],
    });

    navigation.dispatch(resetAction);
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
