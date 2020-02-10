import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View } from 'react-native';

import { OrderHistoryItem } from '../../../components';
import { OrderRecord } from '../../../types/types';

export default function orderHistoryItemStory() {
  return storiesOf('Order History Item', module).add(
    'Order History Item',
    () => {
      let order: OrderRecord = {
        orderID: '#8899112233',
        orderNumber: '#8899112233',
        orderTime: '2019-01-08T06:24:00.000Z',
        totalPayment: 17.99,
      };
      return (
        <View style={styles.container}>
          <OrderHistoryItem order={order} onPress={() => {}} />
          <OrderHistoryItem order={order} onPress={() => {}} />
        </View>
      );
    },
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
