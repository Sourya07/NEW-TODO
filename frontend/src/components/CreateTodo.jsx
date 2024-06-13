import { useState } from "react"




 export function  CreateTodo(){
const [title , SetTitle] =useState("")
cosnt [description , setDescription]= useState("")

return <div>
    <input style={{
        padding:10,
        margin:10
    }} type="text" 
    placeholder="title"
    onChange={function(e){
      const value=e.target.value;
      SetTitle(value);
    }}
    >
    </input> <br />
    <input style={{
        padding:10,
        margin:10
    }} 
    type="text" 
    placeholder="description"
    onChange={function(e){
        const value=e.target.value;
        setDescription(value);
      }}
    ></input> <br />

    <button>add todo</button>
</div>

}

