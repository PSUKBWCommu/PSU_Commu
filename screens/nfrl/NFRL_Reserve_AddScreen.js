
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

export default class NFRL_Reserve_AddScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'NFRL - AddReserve',
    headerStyle: {
      backgroundColor: '#3366CC',
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



  constructor(props) {
    super(props)

    this.state = {

      dataSource: null,
      //dataSource_score: null,
      dataSource_notebook_all: null,
      dataSource_notebook_rent: null,
      dataSource_customer: null,
      dataSource_reserve: null,

      //id: this.CheckParam('id'),
      id: "",
      code: "",
      name: "",
      customer_id: "",
      staff_id: "",
      notebook_id: "",
      num_machine: "",
      reserve_status: "",
      queue_order: "",
      reserve_date: "",
      num_date: "",
      use_date: "",
      appoint_date: "",
      receive_date: "",
      return_date: "",
      status: "",
      remark: "",
      created_by: "",
      updated_by: "",

      

    };
  }

  componentDidMount() {
    /*
    const { navigate } = this.props.navigation;
    AsyncStorage.multiGet(['username', 'password']).then((data) => {
        let username = data[0][1];
        let password = data[1][1];

        //if (username !== 'tonlove') {
        if(typeof username !== 'string' || username === null || username === undefined) {
          navigate('SignIn', {name: 'User'})        
        }
    });
    */

  this.GetNFRLTNew();
  this.GetNotebookAll();
  this.GetNotebookRent();
  this.GetCustomer();
  this.GetReserve();
  }

  CheckParam(p_name) {
    let p_val = this.props.navigation.getParam('param_' + p_name);
    return (p_val == null ? "" : (p_val != "null" ? String(p_val) : ""));
  }

  GetNFRLTNew = async () => {    

    fetch(
      //'http://localhost/traineedrive/public/api/nfrl2/reserve/' + this.state.id
      'http://localhost/traineedrive/public/api/nfrl2/reserve/1'
      //'http://localhost/traineedrive/public/api/nfrl2/reserve/1'
      

    )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState(
          {
            isLoading: false,
            // dataSource: responseJson.examinee_exam[0].examinee,
            // dataSource_score: responseJson.examinee_exam[0].exam_score_includes,
            id: responseJson.reserve.id,
            code: responseJson.reserve.code,
            name: responseJson.reserve.name,
            customer_id: responseJson.reserve.customer_id,
            staff_id: responseJson.reserve.staff_id,
            notebook_id: responseJson.reserve.notebook_id,
            num_machine: responseJson.reserve.num_machine,
            reserve_status: responseJson.reserve.reserve_status,
            queue_order: responseJson.reserve.queue_order,
            reserve_date: responseJson.reserve.reserve_date,
            num_date: responseJson.reserve.num_date,
            use_date: responseJson.reserve.use_date,
            appoint_date: responseJson.reserve.appoint_date,
            receive_date: responseJson.reserve.receive_date,
            return_date: responseJson.reserve.return_date,
            status: responseJson.reserve.status,
            remark: responseJson.reserve.remark,
            created_by: responseJson.reserve.created_by,
            updated_by: responseJson.reserve.updated_by,
           
          },
          function () { }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  GetNotebookAll = async () => {   

    fetch(
      'http://192.168.100.234/api/nfr/notebook_all'
    )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState(
          {
            isLoading: false,
            dataSource_notebook_all: responseJson.notebook_all,        
          },
          function () { }
        );
      })
      .catch((error) => {
        console.error(error);
      });

  }

  GetNotebookRent = async () => {  

    fetch(
      'http://192.168.100.234/api/nfr/notebook_rent'
    )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState(
          {
            isLoading: false,
            dataSource_notebook_rent: responseJson.notebook_rent,
          },
          function () { }
        );
      })
      .catch((error) => {
        console.error(error);
      });

  }

  GetCustomer= async () => {  

    fetch(
      'http://localhost/traineedrive/public/api/nfrl2/customer'
      //'http://localhost/traineedrive/public/api/nfrl2/customer'


    )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState(
          {
            isLoading: false,
            dataSource_customer: responseJson.customer,
          },
          function () { }
        );
      })
      .catch((error) => {
        console.error(error);
      });
    
  }

  GetReserve = async () => {  

    fetch(
      'http://localhost/traineedrive/public/api/nfrl2/reserve'
      //'http://localhost/traineedrive/public/api/nfrl2/reserve'

      
    )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState(
          {
            isLoading: false,
            dataSource_reserve: responseJson.reserve,
          },
          function () { }
        );
      })
      .catch((error) => {
        console.error(error);
      });
    
  }

  is_object = (mixed_var) => {
    if (mixed_var instanceof Array) {
        return false;
    } else {
        return (mixed_var !== null) && (typeof( mixed_var ) == 'object');
    }
  }

  ComputeNumDate_Appoint = async () => {

    let u_date = this.state.use_date;
    let n_date = this.state.num_date;
    let a_date = this.state.appoint_date;

/*
    alert("test");
    alert("u_date : " + u_date);
    alert("n_date : " + n_date);
    alert("a_date : " + a_date);
*/
    

  }

  AddData = async () => {    

    const { navigate } = this.props.navigation;

    const { 
      id, code, name, customer_id, staff_id, notebook_id, num_machine, reserve_status, 
      queue_order, reserve_date, num_date, use_date, appoint_date, receive_date, return_date,
      status, remark, created_by, updated_by,

    } = this.state;


    /* backup Code */
    /*
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_all[0]));
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_all[0].code));
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_all[1]));  
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_all[1].code));

      //var str_notebook_all = JSON.stringify(this.state.dataSource_notebook_all);

      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_rent[0]));
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_rent[0].notebook_code));
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_rent[1]));
      //Alert.alert(JSON.stringify(this.state.dataSource_notebook_rent[1].notebook_code));

      //var str_notebook_rent = JSON.stringify(this.state.dataSource_notebook_rent);

      //Alert.alert(JSON.stringify(this.state.dataSource_customer[0]));
      //Alert.alert(JSON.stringify(this.state.dataSource_customer[0].firstname));
      var arr_customer = JSON.stringify(this.state.dataSource_customer);

      //Alert.alert(JSON.stringify(this.state.dataSource_reserve[0]));
      //Alert.alert(JSON.stringify(this.state.dataSource_reserve[0].name));
      var arr_reserve = JSON.stringify(this.state.dataSource_reserve);
    */
    //Alert.alert(typeof(obj_notebook_all));
    //Alert.alert(typeof(JSON.parse(arr_notebook_all)));

    var str_notebook_all = JSON.stringify(this.state.dataSource_notebook_all);  
    var obj_notebook_all = JSON.parse(str_notebook_all);

    var str_notebook_rent = JSON.stringify(this.state.dataSource_notebook_rent);
    var obj_notebook_rent = JSON.parse(str_notebook_rent);   

    //var str_customer = JSON.stringify(this.state.dataSource_customer);
    
    //var str_reserve = JSON.stringify(this.state.dataSource_reserve);


    var obj_notebook_can_reserve = obj_notebook_all;
    var obj_notebook_filter;

    /* กรองเครื่องโน้ตบุ๊คที่โดนลูกค้าเช่าออก ให้เหลือแต่เครื่องที่ยังไม่โดนเช่า */
    // start   
      obj_notebook_rent.forEach(function(obj) {
        
        obj_notebook_filter = obj_notebook_can_reserve.filter(function(ele){
          return ele.code !== obj.notebook_code;
        });

        obj_notebook_can_reserve = obj_notebook_filter;

      });
    // end

        
    /* แสดงข้อมูลเครื่องที่ยังไม่โดนเช่า */
    // start
      var s = "Notebook can reserve.\n\n";
      var i = 0;
      var str_ncr = "";
      obj_notebook_can_reserve.forEach(function(obj) {

        i = i+1;     
        s = s + i.toString() + " : " + obj.code + "\n";
        str_ncr = str_ncr + obj.id + "|";
      });

      //Alert.alert(i.toString());
      //Alert.alert(s);
      //alert(s);
      alert(str_ncr);
    // end


    /* ขั้นตอนการจัดการข้อมูล array */

      /* วีธีที่ดีกว่า - Making a Remove Method */
      /*
        var array = [1, 2, 3, 4, 5, 7, 8, 9, 0]

        function arrayRemove(arr, value) {

           return arr.filter(function(ele){
               return ele != value;
           });

        }

        var result = arrayRemove(array, 6);

        // result = [1, 2, 3, 4, 5, 7, 8, 9, 0]
      */

      /* วิธีธรรมดา - Removing Array Items By Value Using Splice */
      /*
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        for( var i = 0; i < arr.length; i++){ 
           if ( arr[i] === 5) {
             arr.splice(i, 1); 
           }
        }

        //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
      */    

    //alert('customerid: ' +this.state.dataSource_customer[0].Id);


    const nFRL_ReserveApi = new NFRL_ReserveApi();


    try {
        
      let response_msg = 'no update';
      let data = {

        id: id,
        code: code,
        name: name,
        //customer_id: customer_id,
        customer_id: this.state.dataSource_customer[0].Id,
        staff_id: staff_id,

        //notebook_id: notebook_id,
        //notebook_id: this.state.dataSource_notebook_all[3].id,
        notebook_id: str_ncr,
        
        notebook_id: str_ncr,
        num_machine: num_machine,
        reserve_status: reserve_status,
        queue_order: queue_order,
        reserve_date: reserve_date,
        num_date: num_date,
        use_date: use_date,
        appoint_date: appoint_date,
        receive_date: receive_date,
        return_date: return_date,
        status: status,
        remark: remark,
        created_by: created_by,
        updated_by: updated_by,
      };

      response_msg = await nFRL_ReserveApi.create(data);

      Alert.alert(JSON.stringify(response_msg));

    } catch (error) {
      console.error(error);
    }

    //navigate('DTS_Personnel_List')
    navigate('NFRL_Reserve_List',{

      param_id: this.state.id,
      param_code: this.state.code,
      param_name: this.state.name,
      param_customer_id: this.state.customer_id,
      param_staff_id: this.state.staff_id,
      param_notebook_id: this.state.notebook_id,
      param_num_machine: this.state.num_machine,
      param_reserve_status: this.state.reserve_status,
      param_queue_order: this.state.queue_order,
      param_reserve_date: this.state.reserve_date,
      param_use_date: this.state.use_date,
      param_appoint_date: this.state.appoint_date,
      param_receive_date: this.state.receive_date,
      param_return_date: this.state.return_date,
      param_status: this.state.status,
      param_remark: this.state.remark,
      param_created_by: this.state.created_by,
      param_updated_by: this.state.updated_by,
    });
    
  }


render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>

        <View style={styles.buttonSection}>
          
      </View>

          <Text style={styles.header}>
            ข้อมูลการจอง
          </Text>

          <Text style={styles.text_index}>ลำดับที่ : </Text>
            <TextInput
              value={this.state.id}
              onChangeText={(id) => this.setState({ id })}
              style={styles.input_index}
              editable={false} 
              keyboardType='numeric'
            />  

          <Text style={styles.text_index}>รหัสจองเช่า : </Text>
            <TextInput
              value={this.state.code}
              onChangeText={(code) => this.setState({ code })}
              style={styles.input_index}
              editable={false} 
              keyboardType='numeric'
            />            

          <Text style={styles.text}>ผู้ขอใช้บริการจองเช่า :</Text>
          <TextInput 
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'ผู้ขอใช้บริการ'}
            style={styles.input} 
          />

          <Text style={styles.text}>วันที่ดำเนินการจอง :</Text>          
          <DatePicker            
            date={this.state.reserve_date}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD HH:mm:ss"
            is24Hour={true} 
            minDate="2020-01-01"
            maxDate="2020-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            placeholder="วันที่ดำเนินการจอง"
            style={{
              minWidth: 300, 
              borderColor: 'gray',
              borderRadius: 20,    
              borderWidth: 1,
              height: 49,               
              borderRadius: 20,
              paddingLeft: 10,
              paddingTop: 5,
              paddingRight: 10,
              paddingBottom: 5,  
            }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36, 
                borderWidth: 0,                              
              },
              dateText: {                
                fontSize: 18,
                borderWidth: 0, 
              },
              placeholderText: {
                fontSize: 18,                
              }              
            }}
            onDateChange={(reserve_date) => this.setState({reserve_date})}
          />

          <Text style={styles.text}>วันที่ต้องการเริ่มจอง :</Text>          
          <DatePicker            
            date={this.state.use_date}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD HH:mm:ss"
            is24Hour={true} 
            minDate="2020-01-01"
            maxDate="2020-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            placeholder="วันที่ต้องการเริ่มจอง"
            style={{
              minWidth: 300, 
              borderColor: 'gray',
              borderRadius: 20,    
              borderWidth: 1,
              height: 49,               
              borderRadius: 20,
              paddingLeft: 10,
              paddingTop: 5,
              paddingRight: 10,
              paddingBottom: 5,  
            }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36, 
                borderWidth: 0,                              
              },
              dateText: {                
                fontSize: 18,
                borderWidth: 0, 
              },
              placeholderText: {
                fontSize: 18,                
              }              
            }}
            onDateChange={(use_date) => this.setState({use_date})}
          />

          <Text style={styles.text}>จำนวนวัน :</Text>
          <TextInput 
            value={this.state.num_date.toString()}            
            placeholder={'จำนวนวัน'}
            style={styles.input} 

            
            onChangeText={(num_date) => {
              this.setState({num_date: num_date});
              if(num_date.toString().length > 0){                
                //this.ComputeNumDate_Appoint(); 
              }
            }}

          />

          <Text style={styles.text}>วันกำหนดคืน :</Text>          
          <DatePicker            
            date={this.state.appoint_date}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD HH:mm:ss"
            is24Hour={true} 
            minDate="2020-01-01"
            maxDate="2022-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            placeholder="วันกำหนดคืน"
            style={{
              minWidth: 300, 
              borderColor: 'gray',
              borderRadius: 20,    
              borderWidth: 1,
              height: 49,               
              borderRadius: 20,
              paddingLeft: 10,
              paddingTop: 5,
              paddingRight: 10,
              paddingBottom: 5,  
            }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36, 
                borderWidth: 0,                              
              },
              dateText: {                
                fontSize: 18,
                borderWidth: 0, 
              },
              placeholderText: {
                fontSize: 18,                
              }              
            }}
            //onDateChange={(appoint_date) => this.setState({appoint_date})}

            onDateChange={ this.ComputeNumDate_Appoint.bind(this) }

          />           


          

          <Text style={styles.text}>จำนวนเครื่องที่ต้องการจอง :</Text>
          <TextInput 
            value={this.state.num_machine.toString()}
            onChangeText={(num_machine) => this.setState({ num_machine })}
            placeholder={'จำนวนเครื่องที่ต้องการจอง'}
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
            onPress={ () =>  navigate('NFRL_List') }            
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

  textshow:{
    fontSize:15,
    textAlign:'center',
    color:"#000000",
    marginBottom:50,
    marginTop: 30,

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
