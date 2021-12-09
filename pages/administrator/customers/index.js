import {  } from 'next'
import {useState , useEffect} from 'react';
import {useRouter} from 'next/router';
import { useCookies } from 'react-cookie';
import { IconButton } from "@chakra-ui/react"
import {HiMenuAlt2 , HiMenuAlt3} from 'react-icons/hi';
import Table from '../../../Components/SubComponents/tableComponent';
export default function CustomersPage(){
    const [customers, setcustomers] = useState([]);
    const [isLoggedin , setLoggedin] = useState(false); 
    const [authorized , setAuhtorized] = useState(false);
    const router = useRouter();
    const [error , seterror] = useState("");
    const [cookies , setcookie] = useCookies();
    useEffect(async () =>{
        const token = cookies.token;
        
        const res = await fetch('http://localhost:5002/administrator/users' , {
        method : 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
        ) ;
        let data = await res.json();
        if(!data){return null;seterror("error fetching data")}else{
            let data1 = data.map((el)=>{
                return ({
                    customer_id : el.CUSTOMER_ID,
                    FIRST_NAME : el.FIRST_NAME,
                    LAST_NAME : el.LAST_NAME,
                    EMAIL : el.EMAIL,
                    PHONE : el.PHONE_NUMBER,
                    ADDRESS : el.ADDRESS,
                    CREATED_AT : new Date(el.CREATED_AT.substr(0,10)).toUTCString()
                })
            })
    
            if(data.error){seterror(data.error)}
            setcustomers(data1);
        }
      
        

    } ,[]);

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
                <p className="display-5 text-center"> Customers </p>
               
        </div>
        {/* table of shippers */}
        <div className="container">
        <Table tablename="Customers" handleclick = {handleclick} buttonstate={true}  buttonstate={true} data={customers} cols={["#" ,"CustomerID" , "FIRST NAME" , "LAST NAME","EMAIL" , "ADDRESS" , "PHONE NUMBER" , "CREATED_AT"]} />
        
        </div>
        {error !== "" ? ( <div class="container alert alert-danger" role="alert">
  {error}
</div>) : null}
        
        </div>) 
        : (<div></div>)
        )
    

}