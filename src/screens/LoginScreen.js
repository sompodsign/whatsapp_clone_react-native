import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.box1}>
        <Text style={styles.text}>Welcome to whatsapp 5.0!</Text>
        <Image style={styles.img} source={require('../assets/wa.png')} />
      </View>
      <View style={styles.box2}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              mode="outlined"
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={text => setEmail(text)}
              secureTextEntry
              mode="outlined"
            />
            <Button mode="contained" onPress={() => {}}>
              Login
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{textAlign: "center"}}>Don't have an account?</Text>
            </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'green',
    margin: 10,
  },
  img: {
    width: 200,
    height: 200,
  },
  box1: {
    alignItems: 'center',
  },
  box2: {
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    height: '50%',
  },
});

export default LoginScreen;
