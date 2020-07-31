import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    position: 'relative',
  },
});

const Container = ({ children, style }) => {
  return (
    <ScrollView style={{ ...styles.container, ...style }}>
      {children}
    </ScrollView>
  );
};

export default Container;
