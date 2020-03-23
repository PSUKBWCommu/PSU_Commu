
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

import { FlatList, ActivityIndicator  } from 'react-native';
import Moment from 'moment';
import { List, ListItem } from 'react-native';

import { Button, Icon } from 'react-native-elements';

import DatePicker from 'react-native-datepicker';

import EXS_CustomersApi from '../../class_api/EXS_CustomersApi'; 

export default class EXS_Customer_AddScreen extends React.Component {  
  
  static navigationOptions = ({ navigation }) => ({
    title: 'ตัวอย่าง - สอบออนไลน์(ใหม่)',
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
  });

  constructor(props) {
    super(props)
    
    this.state = {

      dataSource: null,
      dataSource_score: null,

      id: this.CheckParam('id'),
      
      code: "",
      prefix: "",
      firstname: "",
      lastname: "",
      customer_type: "",
      cus_status: "",
      department: "",
      phone: "",
      email: "",
      remark: "",
      created_by: "",
      updated_by: "",
    };    
  }
  
  componentDidMount(){ 
    /*const { navigate } = this.props.navigation;
    AsyncStorage.multiGet(['username', 'password']).then((data) => {
        let username = data[0][1];
        let password = data[1][1];

        //if (username !== 'tonlove') {
        if(typeof username !== 'string' || username === null || username === undefined) {
          navigate('SignIn', {name: 'User'})        
        }
    });*/

    this.GetCoPTNew();      
  }  
  
  GetCoPTNew = async () => {     
    
    fetch(      
      //'http://localhost/traineedrive/public/api/exs/customer/' + this.state.id 
      'http://localhost/traineedrive/public/api/exs/customer/8'
      )   
      .then((response) => response.json())
      .then((responseJson) => {

      this.setState(
        {
          isLoading: false,          
          //dataSource: responseJson.examinee_exam[0].examinee, //
          //dataSource_score: responseJson.examinee_exam[0].exam_score_includes, //
          code: responseJson.customer.code,
          prefix: responseJson.customer.prefix,
          firstname: responseJson.customer.firstname,
          lastname: responseJson.customer.lastname,
          customer_type: responseJson.customer.customer_type,
          cus_status: responseJson.customer.cus_status,
          department: responseJson.customer.department,
          phone: responseJson.customer.phone,
          email: responseJson.customer.email,
          remark: responseJson.customer.remark,
          created_by: responseJson.customer.created_by,
          updated_by: responseJson.customer.updated_by,
        },
        function(){ }
      );
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  CheckParam(p_name){
    let p_val = this.props.navigation.getParam('param_'+p_name);     
    return ( p_val == null ? "" : (p_val != "null" ? String(p_val) : "") );
  } 


AddData = async () => {                      //

    const { navigate } = this.props.navigation;

    const { id,
      /*
      code,  no, prefix, firstname, surname,
      position, personneltype, address, telephone, email, 
      division, detail, remark, created_at, updated_at,
      */
      code, prefix, firstname, lastname, customer_type,       //
      cus_status, department, phone, email, remark,
      created_by, updated_by,         //

    } = this.state;

    const eXS_CustomersApi = new EXS_CustomersApi(); //

    try {
        
      let response_msg = 'no update';
      let data = {
        
        /*code: code,
        no: no,
        prefix: prefix,
        firstname: firstname,
        surname: surname,
        position: position,
        personneltype: personneltype,
        address: address,
        telephone: telephone,
        email: email,
        division: division,
        detail: detail,
        remark: remark,
        */
        code: code,         //
        prefix: prefix,
        firstname: firstname,
        lastname: lastname,
        customer_type: customer_type,
        cus_status: cus_status,
        department: department,
        phone: phone,
        email: email,
        remark: remark,
        //created_by: created_by,
        //updated_by: updated_by,
        //created_at: created_at,
        //updated_at: updated_at,      //
        //created_at: created_at,
        //updated_at: updated_at,
      };

      //alert('firstname'+this.state.firstname);

      response_msg = await eXS_CustomersApi.create(data); //

      Alert.alert(JSON.stringify(response_msg));

    } catch (error) {
      console.error(error);
    }

    //navigate('DTS_Personnel_List')
    navigate('EXS_Customer_List',{

      param_id: this.state.id,
      /*
      param_name: this.state.name,
      param_grouptype: this.state.grouptype,
      param_latitude: this.state.latitude,
      param_longitude: this.state.longitude
      */
    });
    
  }


  render() {
    const {navigate} = this.props.navigation;                  

    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.header}>
            สมัครสมาชิก
          </Text>


          <Text style={styles.text}>ประเภทผู้จอง :</Text>
          <TextInput 
            value={this.state.customer_type}
            onChangeText={(customer_type) => this.setState({ customer_type })}
            placeholder={'นักศึกษา/บุคลากร/บุคคลทั่วไป'}
            style={styles.input} 
          />

          

          <Text style={styles.text}>คำนำหน้าชื่อ :</Text>
          <TextInput 
            value={this.state.prefix}
            onChangeText={(prefix) => this.setState({ prefix })}
            placeholder={'นาย/นาง/นางสาว/อื่นๆ'}
            style={styles.input} 
          />

          <Text style={styles.text}>ชื่อ :</Text>
          <TextInput 
            value={this.state.firstname.toString()}
            onChangeText={(firstname) => this.setState({ firstname })}
            placeholder={'ชื่อ'}
            style={styles.input} 
          />

          <Text style={styles.text}>นามสกุล :</Text>
          <TextInput 
            value={this.state.lastname.toString()}
            onChangeText={(lastname) => this.setState({ lastname })}
            placeholder={'นามสกุล'}
            style={styles.input} 
          />

          <Text style={styles.text}>คณะ/หน่วยงาน :</Text>
          <TextInput 
            value={this.state.department.toString()}
            onChangeText={(department) => this.setState({  department })}
            placeholder={'คณะ/หน่วยงาน'}
            style={styles.input} 
          />


          <Text style={styles.text}>เบอร์โทร :</Text>
          <TextInput 
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
            placeholder={'099-999-9999'}
            style={styles.input}
          />

          <Text style={styles.text}>E-mail :</Text>
          <TextInput 
            value={this.state.email }
            onChangeText={(email) => this.setState({ email })}
            placeholder={'Test@gmail.com'}
            style={styles.input}
          />

           




          
                  
          <Button
            title={`บันทึก`}
            titleStyle={{ fontSize: 20 }}
            textStyle={{textAlign: 'center'}}           
            raised
            icon={{}}
            buttonStyle={ styles.button }            
            onPress={ this.AddData.bind(this) }
          />
                
          <Button
            title="ยกเลิก"
            titleStyle={{ fontSize: 20 }}
            textStyle={{ textAlign: 'center' }}            
            raised
            icon={{}}
            buttonStyle={ styles.button }
            onPress={ () =>  navigate('EXS_Reserve_View') }            
          />


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
    /*borderColor: 'gray',
    borderColor: 'gray',
    backgroundColor: 'lightgray', */
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
