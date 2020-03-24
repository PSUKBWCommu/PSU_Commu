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
import EXS_ReserveApi from '../../class_api/EXS_ReserveApi';
import { Button, Icon } from 'react-native-elements';

import DatePicker from 'react-native-datepicker';

export default class EXS_ListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Reserve Examination',
    headerStyle: {
      backgroundColor: '#330033',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
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


render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.header}>
            บริการจองตรวจวิเคราะห์ข้อสอบ
          </Text>

            <Button
              title="จองตรวจ"
              titleStyle={{ fontSize: 20 }}
              textStyle={{ textAlign: 'center' }}            
              raised
              icon={{}}
              buttonStyle={ styles.button }
              onPress={ () =>  navigate('EXS_Reserve_List') }            
            />   

            <Button
              title="สมัครสมาชิก"
              titleStyle={{ fontSize: 20 }}
              textStyle={{ textAlign: 'center' }}            
              raised
              icon={{}}
              buttonStyle={ styles.button }
              onPress={ () =>  navigate('EXS_Customer_Add') }            
            /> 

        


          <Text style={styles.header}>
            ขั้นตอนการขอใช้บริการ
          </Text>

          <Text>
            1. กรอกแบบขอใช้บริการกระดาษคำตอบ / หน่วยงานภายนอกนำหนังสือขอจองตรวจข้อสอบถึง ผอ.ศูนย์คอมพิวเตอร์
          </Text>

          <Text>
            2. ตรวจสอบการระบายกระดาษคำตอบให้เรียบร้อยก่อนส่งตรวจ
          </Text>

          <Text>
            3. ส่งเฉลยกระดาษคำตอบที่ระบายถูกต้องเรียบร้อยแล้ว พร้อมแนบรหัส และรายชื่อนักศึกษาที่เข้าสอบ
          </Text>

          <Text>
            4. นัดหมายวันเวลาการตรวจข้อสอบกับเจ้าหน้าที่ศูนย์ ฯ เพื่อเป็นสักขีพยานในการดำเนินการตรวจข้อสอบ 
               และเพื่อตรวจสอบ รวมทั้งแก้ไขข้อบกพร่องของกระดาษคำตอบที่อาจเกิดขึ้น
          </Text>       
      
          <Text style={styles.header}>
            เงื่อนไข/ขอบเขตการให้บริการ
          </Text>

          <Text>
            1. กระดาษคำตอบที่ไม่ต้องสร้างฟอร์มใหม่(ไม่คิดค่าสร้างฟอร์ม)กระดาษคำตอบ ID 10 หลัก จำนวนข้อสอบ 180 ข้อ 5 ตัวเลือก
          </Text>

          <Text>
            2. ศูนย์ ฯ ไม่รับผิดชอบการเพิ่มเติมหรือแก้ไขข้อผิดพลาดใด ๆ บนกระดาษคำตอบ
          </Text>

          <Text>
            3. การพิมพ์ ลงคะแนนดิบและคะแนนที (T-score) ลงบน กระดาษ มี 2 แบบ ดังนี้
              -เรียงลำดับตามรหัสนักศึกษาหรือเลขที่นั่งสอบ จากน้อยไปหามาก
              -เรียงลำดับตามคะแนนดิบจากมากไปหาน้อย (กรณีข้อสอบที่มีมากกว่า1Subtest คะแนนดิบและ คะแนนที่ได้จะเป็นคะแนนรวมทุก Subtest)
          </Text>

          <Text>
            4. สำเนาข้อมูลการตรวจและผลคะแนนจะจัดทำเป็น Excel file
          </Text>

          <Text>
            5. ศูนย์ ฯ จะสำรองข้อมูลผลการตรวจกระดาษคำตอบไว้เพียง 7 วันทำการ หากพ้นกำหนด ศูนย์ ฯ จะไม่รับผิดชอบข้อมูลดังกล่าว
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
    fontSize: 20,
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