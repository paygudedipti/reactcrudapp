
import axios from "axios";
const API="https://github.com/paygudedipti/reactcrudapp/blob/1244b9f2a8f7fc84d06a0ece17e994a31ddeb0af/src/server/Product.json"

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
