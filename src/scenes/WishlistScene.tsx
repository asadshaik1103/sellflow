import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'exoflex';
import { useNavigation } from '@react-navigation/native';

import { wishlist } from '../fixtures/wishlist';
import { ProductList } from '../components';
import { FONT_SIZE } from '../constants/fonts';
import { StackNavProp } from '../types/Navigation';
import { useColumns } from '../helpers/columns';

export default function WishlistScene() {
  let { navigate } = useNavigation<StackNavProp<'Wishlist'>>();
  let numColumns = useColumns();

  if (wishlist.length === 0) {
    return (
      <View style={styles.emptyWishlist}>
        <Text style={styles.emptyWishlistText}>{t('No products yet.')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {t('Showing {count} item(s)', { count: wishlist.length })}
      </Text>
      <ProductList
        data={wishlist}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
        onItemPress={(product) => navigate('ProductDetails', { product })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  emptyWishlist: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyWishlistText: {
    fontSize: FONT_SIZE.medium,
  },
  count: {
    marginVertical: 16,
    marginHorizontal: 12,
  },
  contentContainer: {
    marginBottom: 16,
  },
});
