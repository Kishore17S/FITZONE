import axios from "axios"

let jwtToken = localStorage.getItem('token');
let uid = localStorage.getItem('id');
let authHeader = `Bearer ${jwtToken}`;

export const HEADER = {
    'Authorization' : authHeader,
    'Content-Type' : "application/json"
}

const baseURL = 'http://localhost:8080';
export const gettrainer = async()=>await axios.get(`${baseURL}/trainer/trainergetall`,{headers:HEADER})
export const deletetrainerbyid=async(id)=>await axios.delete(`${baseURL}/trainer/trainerdelete/${id}`,{headers:HEADER})
export const getuser = async()=>await axios.get(`${baseURL}/gymuser/gymusergetall`,{headers:HEADER})
export const getuserfeedback = async()=>await axios.get(`${baseURL}/feedback/get`,{headers:HEADER})
export const getuserqueries = async()=>await axios.get(`${baseURL}/helpandsupport/helpandsupportgetall`,{headers:HEADER})
export const deleteuserbyid=async(id)=>await axios.delete(`${baseURL}/gymuser/gymuserdelete/${id}`,{headers:HEADER})
export const getuserprofile = async()=>await axios.get(`${baseURL}/gymuser/gymusergetall`,{headers:HEADER})
export const getuserprogress = async()=>await axios.get(`${baseURL}/processtracker/processtrackergetall`,{headers:HEADER})
export const updatetrainerbyid=async(id)=>await axios.put(`${baseURL}/trainer/trainerput/${id}`,{headers:HEADER})
export const gettrainerById=async(id)=>await axios.get(`${baseURL}/trainer/trainergetbyid/${id}`,{headers:HEADER})
