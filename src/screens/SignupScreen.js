import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {v4 as uuidv4} from 'uuid';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [showNext, setShowNext] = useState(false);

  const pickImageAndUpload = () => {
    launchImageLibrary({quality: 0.5}, fileObj => {
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${uuidv4()}`)
        .putFile(fileObj['assets'][0].uri);
      uploadTask.on(
        'state_changed',
        taskSnapshot => {
          var progress =
            (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
          if (progress == 100) alert('Upload complete');
        },
        error => {
          console.log('Upload failed: ' + error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            setImage(downloadURL);
          });
        },
      );
    });
  };

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
              onChangeText={text => setPassword(text)}
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
            <Button mode="contained" onPress={() => pickImageAndUpload()}>
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
        <Text style={{textAlign: 'center'}}>Already have account?</Text>
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
