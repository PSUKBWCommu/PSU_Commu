
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
import NFRL_ReserveApi from '../../class_api/NFRL_ReserveApi';
import { Button, Icon } from 'react-native-elements';

import DatePicker from 'react-native-datepicker';

export default class NFRL_ListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'NFRL_ListScreen',
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

render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>
            รายละเอียดเครื่องเช่า
          </Text>
        <View style={styles.buttonSection}>
          <Button
            onPress={() => {
              navigate('NFRL_Reserve_List', {})
            }}
            buttonStyle={styles.button}
            titleStyle={{ fontSize: 18 }}
            title="จองเช่าNotebook"
                  >
          </Button>
      </View>

        <View style={styles.buttonSection}>
          <Button
            onPress={() => {
              navigate('NFRL_Customer_List', {})
            }}
            buttonStyle={styles.button}
            titleStyle={{ fontSize: 18 }}
            title="สมัครสมาชิก"
                  >
          </Button>
      </View>
                

        
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://media.takealot.com/covers_tsins/43771384/888228942216-1-pdpxl.jpg'}}
              />        
      </View>      

      <Text style={styles.header}>ข้อมูลรายการจองเช่าโน๊ตบุ๊ค</Text>
      
         
      <Text style={styles.header}>อุปกรณ์ประกอบ</Text>


      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://media.takealot.com/covers_tsins/43771384/888228942216-1-pdpxl.jpg'}}
        />
      </View>
          
      <Text>เครื่องNotebook</Text>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://assets.logitech.com/assets/65018/2/mouton-usb-m100-m100r-refresh-gallery-image.png'}}
              />
      </View>
          
      <Text>เมาส์</Text>
         
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://lh3.googleusercontent.com/proxy/3SmrMT1eB1izmPtxvXKNt85n2i5LX2eL82bOBRdoV1pVcjSGt8CSdTI5s3avihNqjXSL5e8BGuARSdIBHCJz0sjLuz2ZzsksLOF8DnTidC1NT6R9ogom3ccW'}}
        />
      </View>

      <Text>adapter</Text>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://cdn-s1.lyreco.com/staticswebshop/pictures/images0021/600px/2110071.jpg'}}
        />
      </View>
          
      <Text>ปลั๊ก 2 ขา</Text>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://cf.shopee.co.th/file/b307fb1461dcacf03366f1330d0ade92'}}
        />
      </View>
          <Text>กระเป๋า</Text>

      <Text style={styles.header}>
        อัตราค่าบริการ
      </Text>

        <Text>
        - Notebook สำหรับนักศึกษา ม.อ. 50 บาท/เครื่อง/วัน
        </Text>

        <Text>
        - Notebook สำหรับบุคลากร ม.อ. 150 บาท/เครื่อง/วัน
        </Text>

        <Text>
        - Notebook สำหรับหน่วยงานภายใน 150 บาท/เครื่อง/วัน
        </Text>

        <Text>
        - Notebook สำหรับหน่วยงานภายนอก 300 บาท/เครื่อง/วัน
        </Text>

      <Text style={styles.header}>
        ติดต่อขอใช้บริการได้ที่
      </Text>

        <Text>
        - กลุ่มงานบริการวิชาการ ศูนย์คอมพิวเตอร์ โทร. 0-7428-2116 ทุกวันทำการในเวลาราชการ
        </Text>

      <Text style={styles.header}>
        หลักฐานประกอบการเช่า
      </Text>

        <Text>
        - นักศึกษาและบุคลากร ม.อ. ใช้บัตรนักศึกษาและบัตรประชาชน (นักศึกษาต่างชาติ ใช้บัตรนักศึกษาและ หนังสือ Passport)
        </Text>

        <Text>
        - สำหรับหน่วยงาน ทำหนังสือถึง ผู้อำนวยการศูนย์คอมพิวเตอร์
        </Text>

        




             
          


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    /*flex: 1,*/
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  text: {
    marginBottom: 5,
    fontSize: 18,
  },
  text_index: {
    alignItems: 'center',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    //borderColor: 'gray',
    //borderColor: 'gray',
    //backgroundColor: 'lightgray',
    color: 'black',
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 18,
    /*height: 44,*/
    marginTop: 5,
    marginBottom: 15,
    minWidth: 350,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
  },
  input_index: {
    alignItems: 'center',
    marginTop: 13,
    /*marginBottom: 15,*/
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    color: 'black',
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 18,
    height: 44,
    minWidth: 100,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#004fff',
    height: 44,
    marginTop: 5,
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
