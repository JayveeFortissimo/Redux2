import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { Infos } from "../Store/store";
const Registration = () =>{

    const dispatch = useDispatch();

    const iformData = useSelector(state => state.Datas)

const [datas,setDatas] = useState({
    name:'',
    address:'',
    password:'',
    confirm:''
})


const handleInputs = (type,value) =>{
setDatas(elements =>{
    return{
        ...elements,
        [type]:value
    }
})
}


const HandleSubmit = (e) =>{
    e.preventDefault();

dispatch(
Infos.AddData({
    name:datas.name
,address:datas.address,
password:datas.password
}))

}
console.log(iformData)
return{HandleSubmit,handleInputs}

}


export default Registration;