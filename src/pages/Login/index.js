/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform, Image } from 'react-native';
import ProtTypes from 'prop-types';

import logo from '../../assets/logo.png';
import api from '../../services/api';

import { Container, MailInput, SendButton, TextButton } from './styles';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    async function checkLoggedUser() {
      const loggedUser = await AsyncStorage.getItem('user');
      if (loggedUser) {
        navigation.navigate('Main', { loggedUser });
      }
    }
    checkLoggedUser();
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', { username: user });

    const { _id } = response.data;
    await AsyncStorage.setItem('user', _id);
    navigation.navigate('Main', { loggedUser: _id });
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <MailInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Seu usuário do GitHub"
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
      />
      <SendButton onPress={handleLogin}>
        <TextButton>Entrar</TextButton>
      </SendButton>
    </Container>
  );
}

Login.propTypes = {
  navigation: ProtTypes.object.isRequired,
};
