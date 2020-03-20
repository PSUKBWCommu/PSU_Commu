import React from 'react';
import {
  Alert,
  Button,
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
import { AsyncStorage, BackHandler } from 'react-native'

export default class NFRScreen extends React.Component {  

  static navigationOptions = ({ navigation }) => ({
    title: 'ม.อ. - บริการเช่าโน้ตบุ๊ค',
    headerStyle: {
      backgroundColor: '#3366CC',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flexGrow:1,
      alignSelf:'center',
      marginRight: 70,
    },
    headerLeft: (
      <TouchableOpacity  onPress={() => navigation.toggleDrawer()} >
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

  constructor(props) {
    super(props);
    
    this.state = {
      nbcode: '',      
    };    
  }
  
  componentDidMount() {
    const {navigate} = this.props.navigation;    
    /*AsyncStorage.multiGet(['username', 'password']).then((data) => {
        let username = data[0][1];
        let password = data[1][1];

        //if (username !== 'tonlove') {
        if(typeof username !== 'string' || username === null || username === undefined) {
          navigate('SignIn', {name: 'User'})        
        }
    });*/    
  } 

  handlePress =  async() => {    
    const { nbcode } = this.state;    
    await fetch(
      //'http://localhost/getdb_appointlap_ws.php?code=' + nbcode
      //'http://localhost/api/nfr/appointlap/5'
      'http://localhost/api/nfr/appointlap/' + nbcode
    )
    .then((response) => response.json())
    .then((responseJson) => {            
      Alert.alert("แจ้งเตือน","หมายเลขเครื่อง:  " + responseJson.appointlap[0].nbCode + "\nกำหนดคืนเครื่อง: \n" + responseJson.appointlap[0].appointlap_thai);
      
      this.setState(
        {
          //isLoading: false,
          dataSource: responseJson.appointlap,
        }, 
        function(){ }
      );
      this.arrayholder = responseJson.appointlap;      
    })
    .catch((error) => {
      console.error(error);
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          กำหนดคืนเครื่องเช่า
        </Text>
        <Text>
          (CC-หมายเลขเครื่อง)
        </Text>
        <TextInput
          value={this.state.nbcode}
          onChangeText={(nbcode) => this.setState({ nbcode })}
          placeholder={'หมายเลขเครื่อง เช่น 001, 005'}
          style={styles.input}
          containerStyle={{flexGrow: 1}}
        />      
        <Button
          title={'Search'}
          style={styles.input}
          onPress={this.handlePress.bind(this)}>         
        </Button>            
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    alignItems: 'center',
    fontWeight: '900',
  },  
  input_backup: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderRadius: 20,    
    borderWidth: 1,
    fontSize: 18,
    /*height: 44,*/
    marginTop: 5,
    marginBottom: 15,
    /*minWidth: 350,*/
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,    
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  }, 
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
