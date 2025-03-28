import axios from "axios";
// require('dotenv').config();

const URL = 'http://localhost:5000/api/'

export const signUp =  async (data)=>{
    try{
        console.log("Sending data to:", `${URL}/adduser`, "Payload:", data)

        let response = await axios.get(`${URL}/adduser`, data)

         console.log("API Response:", response.data);
         
        return response.data;
        
    }catch(error){
        console.error("Signup API Error:", error.response ? error.response.data : error.message);
        throw error;
    }

}

export const signIn = async(data)=>{
    try {
        let response  = await axios.post(`${URL}/loginuser`, data)   
        return response.data

    } catch (error) {
        throw error;
    }
}
