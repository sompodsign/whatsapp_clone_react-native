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

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [showNext, setShowNext] = useState(false);

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.box1}>
        <Text style={styles.text}>Welcome to whatsapp 5.0!</Text>
        <Image style={styles.img} source={require('../assets/wa.png')} />
      </View>
      <View style={styles.box2}>
        {!showNext && (
          <>
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
          </>
        )}

        {showNext ? (
          <>
            <TextInput
              label="Name"
              value={name}
              onChangeText={text => setName(text)}
              mode="outlined"
            />
            <Button mode="contained" onPress={() => setShowNext(true)}>
              Select DP
            </Button>

            <Button mode="contained" onPress={() => setShowNext(true)}>
              Signup
            </Button>
          </>
        ) : (
          <Button mode="contained" onPress={() => setShowNext(true)}>
            Next
          </Button>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{textAlign: "center"}}>Already have account?</Text>
            </TouchableOpacity>
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

export default SignupScreen;
