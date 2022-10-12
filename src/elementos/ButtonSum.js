import React from "react";
function ButtonSum(props){
    const data={
        client_id:props.cid,
        client_secret:props.csec
    };
    const url="https://sandbox.99minutos.com/api/v3/oauth/token"
async function enviar(urls){
    try{
        const datos= await fetch(urls,{
            method: 'POST',
            mode: 'no-cors',
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body:JSON.stringify(data)});
        console.log(datos+"estos datos");
        console.log((JSON.stringify(data)+"Esto se Envio"));         
    }catch(error){
        console.log(new Error(error))
    }
    
}
    return(
        <input type="button" onClick={()=>enviar(url)} value="testeo"/>
    );
}
export default ButtonSum;