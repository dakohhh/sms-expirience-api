import { APISendSMS } from "./http";
import dotenv from 'dotenv';

dotenv.config();


APISendSMS({
    username: String(process.env.SMS_USER),
    password: String(process.env.SMS_PASSWORD),
    sender: String(process.env.SMS_SENDER),
    recipient: '@@07052316803@@',
    message: '*234*3454#'
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.request.data);
});