import RestfulClient from 'react-native-restful-client/index';

export default class NFRL_NotebookRentApi extends RestfulClient {
  constructor () {
    super(
 	  'http://localhost/api', {    // The base URL of the API to consume
        resource: 'nfr/notebook_rent'           // The resource of the API to consume
    })
  }
}