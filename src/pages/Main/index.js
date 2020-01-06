/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import itsamatch from '../../assets/itsamatch.png';

import api from '../../services/api';

import {
  Container,
  Logo,
  CardsContainer,
  Card,
  Avatar,
  Footer,
  UserName,
  UserBio,
  ButtonsContainer,
  Button,
  Empty,
  MatchContainer,
  MatchImage,
  MatchAvatar,
  MatchName,
  MatchBio,
  CloseButton,
  CloseButtonText,
} from './styles';

export default function Main({ navigation }) {
  const id = navigation.getParam('loggedUser');
  const [devs, setDevs] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs', {
        headers: {
          user: id,
        },
      });
      setDevs(response.data);
    }
    loadDevs();
  }, [id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: id },
    });
    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [id]);

  async function handleLike() {
    const [target, ...rest] = devs;
    await api.post(`/devs/${target._id}/likes`, null, {
      headers: { user: id },
    });

    setDevs(rest);
  }

  async function handleDislike() {
    const [target, ...rest] = devs;
    await api.post(`/devs/${target._id}/dislikes`, null, {
      headers: { user: id },
    });

    setDevs(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Logo source={logo} />
      </TouchableOpacity>

      <CardsContainer>
        {devs.length > 0 ? (
          devs.map((dev, index) => (
            <Card key={dev._id} style={{ zIndex: devs.length - index }}>
              <Avatar
                source={{
                  uri: dev.avatar,
                }}
              />
              <Footer>
                <UserName>{dev.name}</UserName>
                <UserBio numberOfLines={3}>{dev.bio}</UserBio>
              </Footer>
            </Card>
          ))
        ) : (
          <Empty>Acabou :(</Empty>
        )}
      </CardsContainer>

      {devs.length > 0 && (
        <ButtonsContainer>
          <Button onPress={handleLike}>
            <Image source={like} />
          </Button>
          <Button onPress={handleDislike}>
            <Image source={dislike} />
          </Button>
        </ButtonsContainer>
      )}

      {matchDev && (
        <MatchContainer>
          <MatchImage source={itsamatch} />
          <MatchAvatar
            source={{
              uri: matchDev.avatar,
            }}
          />
          <MatchName>{matchDev.name}</MatchName>
          <MatchBio>{matchDev.bio}</MatchBio>
          <CloseButton onPress={() => setMatchDev(null)}>
            <CloseButtonText>FECHAR</CloseButtonText>
          </CloseButton>
        </MatchContainer>
      )}
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.object.isRequired,
};
