import React from 'react';
import Box from '@mui/material/Box';
import {InputLabel,Select,Rating,MenuItem,Button,Alert,Tabs,Tab} from "@mui/material/";
import { useState } from 'react';

function Validate(){
    const [info,setinfo] = useState(false);
    const[flag,setflag] = useState(false);
    const[chek,setchek]=useState(false);
    
    const change = (e)=>{
        let a = e.target.value;
        if(a.length<=2){
            setinfo(true);
        }else{
            setinfo(false);
        }
    }
    
    const subm = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        const newdata = {
            text:data.get("text"),
            select:data.get("select"),
            texarea:data.get("comment")
        }
        if(newdata.text.length<=2||newdata.text.length>15||newdata.select=="Ratings"||newdata.texarea==" "){
            setinfo(true);
            setflag(true);
        }else{
            alert(` current state is:{"Auther":"${newdata.text}","rating": "${newdata.select}","comment": "${newdata.texarea}"}`)
            setinfo(false);
            setflag(false);
         document.getElementById("form").reset();
          setchek(false);
        }
    }
    const click = ()=>{
        setchek(true);
    }
    return(
        <div style={{marginLeft:"20px",textAlign:"center"}}>
            <Tabs aria-label="disabled tabs example" textAlign="center">
  <Tab label="Product Page " />
  <Tab label="Home" />
</Tabs> &nbsp;&nbsp;
   <Box sx={{width:500,height:500}}>
   <img src="https://assets-global.website-files.com/600fe6e1ff56087409a9f096/605b5a558848493df14d2d13_ecommerce-product-photography.jpg" alt="" />
     &nbsp;
   <h5>Price : $400 &nbsp;
       <button style={{padding:"10px 10px 10px 10px",backgroundColor:"green",color:"white"}}>Buy Product</button> &nbsp;&nbsp;
       <button style={{padding:"10px 10px 10px 10px",backgroundColor:"green",color:"white"}} onClick={click}>Submit Comment</button>

   </h5>
   </Box> &nbsp;
    {   chek ? <Box sx={{
            width: 750,
            height: 750,border:1}}  >
                
                    <form action="" onSubmit={subm} style={{marginLeft:"20px",marginTop:"35px"}} id="form">
                    <h1>Submit Comment</h1><br />
                    <h3 style={{marginTop:"10px"}}>Your Name</h3>
                    <Box margin="normal">
                    <input type="text" name = "text" style={{marginTop:"10px",width:"600px",height:"40px",marginBottom:"10px"}} placeholder="your name" onChange={change}/>
                    {
                        info?<Alert severity="error">Must be greater then 2 characters</Alert>:null
                    }
                </Box>&nbsp;
                    <h3 style={{marginBottom:"15px"}}>Rating</h3>
                    <Box margin="normal">
                    <select name="select"  type ="select" id="" style={{width:"600px",height:"40px"}}>
                        <option value="0">Ratings</option>
                        <option value="1">1</option> 
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </Box>&nbsp;
                    <h3 style={{marginBottom:"15px"}}>Comment</h3>
                    <Box margin="normal">
                    <textarea name="comment" type ="texarea" id="" cols="80" rows="6" placeholder='comment '></textarea>
                    </Box><br /><br />
                    <Button type="submit" name ="submit" variant='contained'>Submit</Button>
                    {
                        flag?<Alert severity="error">Invalid Data</Alert>:null
                    }
                </form>

            </Box>:null }
            </div>
    )
}

export default Validate; 