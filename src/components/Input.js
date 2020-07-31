import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 50,
    width: '100%',
    paddingVertical: 15,
    paddingLeft: 50,
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins-Regular',
    color: '#989898',
    fontSize: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Input = ({ style, type, placeholder }) => {
  return (
    <TextInput
      style={{ ...styles.textInput, ...style }}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
