import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsActions from '~/stores/ducks/products';

import {
  Container, Body, ListSizes, Size, ContentSize, Image, Name,
} from './styles';

import Header from '~/components/Header';

const Sizes = ({ sizes }) => (
  <Container>
    <Header />
    <Body>
      <ListSizes
        data={sizes}
        numColumns={2}
        keyExtractor={size => size.id}
        renderItem={({ item: size }) => (
          <Size>
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

Sizes.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      size: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  sizes: state.products.sizes,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sizes);
