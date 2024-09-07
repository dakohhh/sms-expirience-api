import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


// const axios = require('axios');

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://smsexperience.com/api/sms/sendsms?username=marvel6&password=09072336259Am/&sender=Chowgoo&recipient=@@07049348536@@&message=*234*3454%23',
//   headers: { }
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });


const baseURL = "https://smsexperience.com/api/";

export const config: AxiosRequestConfig = {
    baseURL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.PAYSTACK,
    },
};

const http: AxiosInstance = axios.create(config);

export default http;
