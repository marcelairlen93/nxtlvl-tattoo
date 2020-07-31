import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Container, ImageMask } from '../components';

import LoginImage from '../../assets/images/LoginImage.png';
import GoButton from '../../assets/images/GoButton.png';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
  },
  form: {
    flex: 1,
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    position: 'relative',
  },
  formPlaceholder: {
    color: '#00000021',
    fontFamily: 'Poppins-BlackItalic',
    fontSize: 42,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 45,
    top: -180,
  },
  login: {
    flex: 1,
    marginTop: -100,
    paddingHorizontal: 40,
  },
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
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
  },
  signupButton: {
    padding: 30,
  },
  signupText: {
    color: '#989898',
  },
});

const LoginScreen = () => {
  return (
    <Container>
      <MaskedView maskElement={<ImageMask />}>
        <Image source={LoginImage} style={styles.image} />
        <LinearGradient
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2.5,
            position: 'absolute',
            bottom: 90,
          }}
          colors={['#DB00FF03', '#DB00FF40', '#597DBE98', '#00D391']}
        />
      </MaskedView>
      <View style={styles.form}>
        <Text style={styles.formPlaceholder}>LOGIN</Text>
        <View style={styles.login}>
          <TextInput
            style={styles.textInput}
            textContentType="username"
            textAlignVertical="center"
            placeholder="Username"
          />
          <TextInput
            style={styles.textInput}
            textContentType="password"
            secureTextEntry
            textAlignVertical="center"
            placeholder="Password"
          />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.signupButton} onPress={() => {}}>
            <Text style={styles.signupText}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={GoButton} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
