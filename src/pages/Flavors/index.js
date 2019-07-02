import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsActions from '~/stores/ducks/products';

import {
  Container, Body, ListFlavors, Flavor, ContentFlavor, Image, Name,
} from './styles';

import Header from '~/components/Header';

class Flavors extends Component {
  static propTypes = {
    types: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
      }),
    ).isRequired,
    setSelectSizes: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNextStage = async (type) => {
    const { navigation, setSelectSizes } = this.props;

    await setSelectSizes(type);
    navigation.navigate('Sizes');
  };

  render() {
    const { types } = this.props;

    return (
      <Container>
        <Header />
        <Body>
          <ListFlavors
            data={types}
            numColumns={2}
            keyExtractor={type => type.id}
            renderItem={({ item: type }) => (
              <Flavor onPress={() => this.handleNextStage(type.id)}>
                <ContentFlavor>
                  <Image source={{ uri: type.url }} />
                  <Name>{type.type}</Name>
                </ContentFlavor>
              </Flavor>
            )}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  types: state.products.types,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Flavors);
