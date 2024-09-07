import http from './xhr';
import { PaystackSuccessResponse, IBanks } from '@/types/payment';





export const APISendSMS = async (data: { username: string; password: string; sender: string; recipient: string; message: string }) =>
    http
        .get<any>(`/sms/sendsms`, { params: data })
        .then((res) => res)
        .catch((err) => {
            throw new Error(err.response.data?.message);
        });
