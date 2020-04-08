import React from 'react';
import {
  Alert,
  //Button,
  FormattedDate,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MonoText } from '../../components/StyledText';
import { AsyncStorage, BackHandler } from 'react-native';

import { FlatList, ActivityIndicator } from 'react-native';
import Moment from 'moment';
import { List, ListItem } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class EXS_LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'EXS-LOGIN',
    headerStyle: {
      backgroundColor: '#3366CC',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flexGrow: 1,
      marginLeft: -45,
      alignSelf: 'center',
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
        <Image
          source={require('../../image/drawer.png')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            width: 35,
            marginLeft: 10,
            resizeMode: 'stretch',
            backgroundColor: 'white',
          }}
        />
      </TouchableOpacity>
    ),
  }); 



  
  render(){
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>LOGIN-EXS</Text>
        
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#000000"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#000000"
            onChangeText={text => this.setState({password:text})}/>
        </View>


         <View style={styles.buttonSection}>
          <Button
            onPress={() => {
              navigate('EXS_Reserve_List', {})
            }}
            buttonStyle={styles.button}
            titleStyle={{ fontSize: 18 }}
            title="LOGIN"
                  >
          </Button>
        </View>

        <TouchableOpacity
         onPress={() => {
              navigate('EXS_Customer_Add', {})
            }}>
          <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
              navigate('EXS_List', {})
            }}>
          <Text style={styles.signup}>รายละเอียดเครื่องเช่า</Text>
          </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000066',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fff",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#F5F5F5",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  signup:{
    color:"white",
    fontSize:15
  },

  button: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#004fff',
    height: 44,
    marginTop: 5,
    minWidth: 300,
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#003399",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});