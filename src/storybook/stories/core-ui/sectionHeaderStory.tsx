import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { SectionHeader } from '../../../core-ui';
import { COLORS } from '../../../general/constants/colors';
import { FONT_SIZE } from '../../../general/constants/fonts';

export default function sectionHeaderStory() {
  return storiesOf('SectionHeader').add('SectionHeader', () => (
    <View style={styles.container}>
      <SectionHeader>
        <Text style={styles.title}>{'Anna Belle'}</Text>
        <Text>
          {
            'Jl. Scientia Boulevard, Curug Sangereng, Kec. Klp. Dua, Tangerang, Banten 15810'
          }
        </Text>
        <Text>{'0876123987'}</Text>
      </SectionHeader>
      <SectionHeader mode="row">
        <Text>{'Delivered'}</Text>
        <View
          style={[
            styles.indicator,
            { backgroundColor: COLORS.orderStatusDelivered },
          ]}
        />
      </SectionHeader>
      <SectionHeader mode="row">
        <Text>{'On Courier'}</Text>
        <View
          style={[
            styles.indicator,
            { backgroundColor: COLORS.orderStatusOnProcess },
          ]}
        />
      </SectionHeader>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: FONT_SIZE.medium,
  },
  title: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: FONT_SIZE.large,
  },
});