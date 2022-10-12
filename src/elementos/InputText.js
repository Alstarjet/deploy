import React from "react";
function InputText(props){
 return(
    <div>
        <p className='titulos'>{props.titulo}</p>
        <input type="text" value={props.valor} onChange={(a)=>{props.funcionSet(a.target.value)}}/>
    </div>
 );   
}
export default InputText;