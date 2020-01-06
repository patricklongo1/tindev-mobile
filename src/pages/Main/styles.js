import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 30px;
`;

export const Logo = styled.Image`
  margin-top: 30px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background: #fff;
  padding: 15px 20px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const UserBio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  z-index: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 4px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  shadow-offset: 0 2px;
`;

export const Empty = styled.Text`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

export const MatchContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
`;

export const MatchImage = styled.Image`
  height: 60px;
  resize-mode: contain;
`;

export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border: 5px solid #fff;
  border-radius: 80px;
  margin: 30px 0;
`;

export const MatchName = styled.Text`
  font-size: 26;
  font-weight: bold;
  color: #fff;
`;

export const MatchBio = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  text-align: center;
  padding: 0 30px;
`;

export const CloseButton = styled.TouchableOpacity`
  text-align: center;
  margin-top: 30;
`;

export const CloseButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;
