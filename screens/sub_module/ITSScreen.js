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
import { AsyncStorage, BackHandler } from 'react-native';

export default class ITSScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'ม.อ. - บริการ IT Services',
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
      doccode_budyear: '',      
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

  handlePress = async () => {
    const { doccode_budyear } = this.state;   
    fetch('http://localhost/its/getForm?doccode_budyear=' + doccode_budyear, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },     
    })
    .then((response) => response.json())
    .then((responseJson) => {

      const status_code = '';
      const status_text = '';      
      this.status_code = responseJson[0].status;
            
      switch (this.status_code) {
        case '0' :
        case '1' :
        case '2' : this.status_text = 'กำลังดำเนินการซ่อม'; break;
        case '3' :
        case '4' : this.status_text = 'งานเสร็จ'; break;
        case '5' :
        case '6' : this.status_text = 'รับคืนแล้ว'; break;
        case '7' : this.status_text = 'รออะไหล่'; break;
        case '99' : this.status_text = 'ยังไม่ระบุ'; break;
        default : this.status_text = 'ยังไม่ระบุ'; break;
      }
           
      Alert.alert("แจ้งเตือน","เลขฟอร์ม:  " + responseJson[0].doccode + "/" + responseJson[0].budyear + "\nสถานะบริการ: " + this.status_text);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}>
          สถานะบริการ IT Services
        </Text>
        <Text>
          (เลขฟอร์ม)
        </Text>
        <TextInput
          value={this.state.doccode_budyear}
          onChangeText={(doccode_budyear) => this.setState({ doccode_budyear })}
          placeholder={'เลขฟอร์ม เช่น 0001/61, 0899/61'}
          style={styles.input}          
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
