import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrdersActions from '~/stores/ducks/orders';

import {
  Container,
  Body,
  ListOrders,
  Loading,
  ErrorText,
  Order,
  ContentOrder,
  OrderNumber,
  Time,
  Total,
} from './styles';

import Header from '~/components/Header';

class Orders extends Component {
  static propTypes = {
    setOrdersRequest: PropTypes.func.isRequired,
    setOrdersRefresh: PropTypes.func.isRequired,
    orders: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.arrayOf(
        PropTypes.shape({
          order: PropTypes.number,
          createdAt: PropTypes.string,
          total: PropTypes.number,
        }),
      ),
    ]),
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    refreshing: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    orders: null,
    error: null,
  };

  async componentDidMount() {
    const { setOrdersRequest, orders } = this.props;

    if (!orders) {
      await setOrdersRequest();
    }
  }

  handleRefreshPage = async () => {
    const { setOrdersRefresh } = this.props;

    await setOrdersRefresh();
  };

  renderOrders = () => {
    const { orders, refreshing, error } = this.props;

    return (
      <>
        {error && <ErrorText>{error}</ErrorText>}
        {orders && (
          <>
            <ListOrders
              onRefresh={this.handleRefreshPage}
              refreshing={refreshing}
              data={orders}
              keyExtractor={order => String(order.order)}
              renderItem={({ item: order }) => (
                <Order>
                  <ContentOrder>
                    <OrderNumber>{`Pedido #${order.order}`}</OrderNumber>
                    <Time>
                      {distanceInWords(order.createdAt, new Date(), {
                        locale: pt,
                      })}
                    </Time>
                    <CurrencyFormat
                      value={order.total}
                      displayType="text"
                      decimalSeparator=","
                      fixedDecimalScale
                      prefix="R$ "
                      renderText={value => <Total>{value}</Total>}
                    />
                  </ContentOrder>
                </Order>
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
        <Body>{loading ? <Loading color="#fff" size="small" /> : this.renderOrders()}</Body>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.data,
  loading: state.orders.loading,
  refreshing: state.orders.refreshing,
  error: state.orders.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
