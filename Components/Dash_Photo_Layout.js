import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, Animated, Dimensions } from 'react-native';

export default function Dash_Photo_Layout({ images}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const itemWidth = 1030;


  if (!images || images.length === 0) {
    return <Text>No images available</Text>;
  }




  return (
    <View style={styles.container}>

      <Animated.FlatList
        data={images}
        key={images}
        snapToInterval={itemWidth}
        decelerationRate='fast'
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}

        renderItem={({ item }) => {
          return (
            <View style={{ height: 600, width: 1000, padding: 20, flex: 1 }}>
              <Image source={item} style={styles.image} />
            </View>
          )
        }}

      />


      {/* <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        style={{flex: 1}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        initialScrollIndex={currentIndex}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 1000,
    height: '100%',
    resizeMode: 'contain'
  },
});
