
import axios from "axios";
const API="http://localhost:3001/products/"

function getAllProduct(){
    return axios.get(API);
}
function getProductById(id){
    return axios.get(`${API}${id}`);
}
function deleteProduct(id){
    return axios.delete(`${API}${id}`);
}
function addProduct(data){
    return axios.post(API,data);
}

function editProduct(id,data){
    return axios.put(`${API}${id}`,data);
}

export {getAllProduct,getProductById,deleteProduct,addProduct,editProduct};
