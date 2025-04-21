import axios from "axios";
import { toast } from 'sonner';

const URL = 'http://localhost:5000/api'

export const signUp =  async (data)=>{
    try{
        console.log("Sending data to:", `${URL}/adduser`, "Payload:", data)

        let response = await axios.post(`${URL}/adduser`, data)

         console.log("API Response:", response.data);
         
        return response.data;
        
    }catch(error){
        console.error("Signup API Error:", error.response ? error.response.data : error.message);
        throw error;
    }

}

export const signIn = async(data, navigate)=>{
    try {
        let response  = await axios.post(`${URL}/loginuser`, data)   
        let result = response.data
        if(result.success){
            toast.success(result.message || "Login successful!");
            console.log('hey mc this is your token', result.token);
            localStorage.setItem('token', result.token)
            
            navigate('/home');
            
        }else{

            toast.error(result.message || "Login failed!");
        }

    } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error('Sign-in error', error);
        
    }
}
