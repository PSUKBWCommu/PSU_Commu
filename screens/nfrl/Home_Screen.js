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

export default class Home_Screen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'W E L C O M E',
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
        <Text style={styles.logo}>PSU-COMMU</Text>
             
        <View style={styles.buttonSection}>
          <Button
            onPress={() => {
              navigate('NFRL_Login', {})
            }}
            buttonStyle={styles.button}
            titleStyle={{ fontSize: 18 }}
            title="จองเช่าโน๊ตบุ๊ค"
                  >
          </Button>
        </View>

        <View style={styles.buttonSection}>
          <Button
            onPress={() => {
              navigate('EXS_Login', {})
            }}
            buttonStyle={styles.button}
            titleStyle={{ fontSize: 18 }}
            title="จองตรวจข้อสอบ"
                  >
          </Button>
        </View>

        
        <Text style={styles.textshow}>
            หมายเหตุ : หากท่านยังไม่เป็น "สมาชิก" กรุณา "สมัครสมาชิก"ก่อนทำรายการ
          </Text>
           
     
  
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

  textshow:{
    
    fontSize:15,
    textAlign:'center',
    color:"#fff",
    marginBottom:50,
    marginTop: 30,

  },



  button: {
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#004fff',
    height: 44,
    marginTop: 30,
    minWidth: 300,
  },

 


  error: {
    marginTop: 10,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,

  },
  errorMsg: {
    color: 'red'
  },
  icon: {
    paddingLeft: 10,
  }


})