import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function IndicatorLayout({ children, inkey }) {
  return (
    <View style={styles.shapeContainer} key={inkey}>
      <View style={styles.Box1} />
      <View style={styles.topBox1} />
      <View style={styles.roundedBox}>
        <View style={styles.contentContainer}>{children}</View>
      </View>
      <View style={styles.topBox2} />
    </View>
  );
};

const styles = StyleSheet.create({
  shapeContainer: {
    position: 'relative',
    width: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedBox: {
    width: '100%',
    height: 70,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    padding: 15,
  },
  topBox1: {
    position: 'absolute',
    top: -30,
    width: 40,
    height: 30,
    borderBottomRightRadius: 50,
    backgroundColor: '#F9F8FF',
    alignSelf: 'flex-end',
    overflow: 'hidden',
  },
  topBox2: {
    position: 'absolute',
    top: 70,
    right: 0,
    width: 40,
    height: 30,
    borderTopRightRadius: 50,
    backgroundColor: '#F9F8FF',
  },

  Box1: {
    position: 'absolute',
    top: -30,
    right: 0,
    width: 40,
    height: 130,
    backgroundColor: '#FFFFFF',
  },
});


