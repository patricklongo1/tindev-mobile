import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 30px;
`;

export const MailInput = styled.TextInput`
  height: 46px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 15px;
`;

export const SendButton = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  background: #df4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
