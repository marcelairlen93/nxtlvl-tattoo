import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import CoverImage from '../../assets/images/CoverImage.png';

const ImageMask = () => {
  const styles = StyleSheet.create({
    initial: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 3,
      backgroundColor: 'black',
      borderWidth: 1,
      borderBottomRightRadius: 100,
    },
    middle: {
      position: 'relative',
      bottom: 8,
      width: Dimensions.get('window').width - 100,
      height: 0,
      borderRightWidth: Dimensions.get('window').width - 60,
      borderLeftWidth: 0,
      borderTopWidth: 120,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'black',
    },
    finish: {
      position: 'relative',
      bottom: 37,
      width: Dimensions.get('window').width,
      height: 100,
      backgroundColor: 'black',
      overflow: 'hidden',
    },
    curvedLayer: {
      width: Dimensions.get('window').width,
      height: 100,
      backgroundColor: 'white',
      borderWidth: 1,
      borderTopLeftRadius: 100,
      borderColor: 'white',
    },
  });

  return (
    <View>
      <Image
        style={{
          width: Dimensions.get('window').width,
          position: 'relative',
          height: Dimensions.get('window').height,
          bottom: Dimensions.get('window').height / 3,
        }}
        source={CoverImage}
      />
      {/* <View style={styles.initial} />
      <View style={styles.middle} />
      <View style={styles.finish}>
        <View style={styles.curvedLayer} />
      </View> */}
    </View>
  );
};

export default ImageMask;
