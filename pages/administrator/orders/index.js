import {  } from 'next'
import {useState , useEffect} from 'react';
import {useRouter} from 'next/router';
import { useCookies } from 'react-cookie';
import { IconButton } from "@chakra-ui/react"
import {HiMenuAlt2 , HiMenuAlt3} from 'react-icons/hi';
import Table from '../../../Components/SubComponents/tableComponent';
import OrderTable from '../../../Components/SubComponents/Tables/OrderTable';
export default function ShippersPage(){
    const [orders , setorders] = useState([]);
    const [change , setchange] = useState(false);
    const [isLoggedin , setLoggedin] = useState(false); 
    const [authorized , setAuhtorized] = useState(false);
    const router = useRouter();
    const [cookies , setcookie] = useCookies();
    
    // const get_customer = (id)=>{
    //     let pr = await new  Promise((resolve, reject)=>{
    //             fetch(`http://localhost:5002/administrator/users/${id}`)
    //             .then(data=>{resolve(data)})
    //             .catch(err=>{reject(err)});
    //     })
    //     return pr;
    // }
    useEffect(async () =>{
        const token = cookies.token;
       
        const res = await fetch('http://localhost:5002/administrator/orders' , {
        method : 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
        ) 
        const data = await res.json();
        //let data1 = data;
        if(data && data.length > 0){
                        
                     

              setorders(data);
              
        }

        

    } ,[change,orders],3000);
    const handleclick = (el)=>{
        console.log(el);
    }
    const  validate = ()=>{
        setTimeout(async ()=>{
            //validate token
            if(cookies.token && cookies.user){
                if(!isLoggedin){
                   setLoggedin(true); 
                }
               
            }
        } , 500);    
    }
    validate();
    return (
        isLoggedin ? 
        (<div class="container-fluid">
        <div style={{ alignItems: "center"}} class="row flex bg-dark h-25">
            
            <div  className="container col-12 text-white text-center p-2 fw-bold">ADMIN PANEL</div>
            
        </div>
        <div className=" container-fluid border mt-2 p-2"> 
                <p className="display-5 text-center"> Orders </p>
               
        </div>
        {/* table of shippers */}
        {/* {
    "ORDER_ID": 26,
    "AMOUNT": 100,
    "CUSTOMERID": 1,
    "STATUS": "PENDING",
    "DELIVERY_PARTNER": 1,
    "items": []
  }, */}
        <div className="container mb-3">
            <div style={{minHeight:"2rem"}}></div>
        <OrderTable change={change}  change_function={setchange} tablename="Order" handleclick = {handleclick} buttonstate={true}   data={orders} cols={["#" ,"ORDER ID" , "AMOUNT" , "CUSTOMER ID" , "CUSTOMER NAME","STATUS"]} />
        </div>
        
        </div>) 
        : (<div></div>)

    )
    

}
