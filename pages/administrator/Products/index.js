import {  } from 'next'
import {useState , useEffect} from 'react';
import {useRouter} from 'next/router';
import { useCookies } from 'react-cookie';
import { IconButton } from "@chakra-ui/react"
import {HiMenuAlt2 , HiMenuAlt3} from 'react-icons/hi';
import Table from '../../../Components/SubComponents/Tables/ProductTable';


export default function ProductPage(){
    const [products , setproducts] = useState([]);
    const [isLoggedin , setLoggedin]=useState(true);
    const router = useRouter();
   
    const [authorized , setAuhtorized] = useState(false);

    const [cookies , setcookie] = useCookies();
    const [change , setchange] = useState(false);
    useEffect(async () =>{
       
        const res = await fetch('http://localhost:5002/api/products/products' , {
        method : 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
        ) 
        const data = await res.json();
        setproducts(data);

    } ,[change]);
    const handleclick =(el)=>{
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
                <p className="display-5 text-center"> Products </p>
               
        </div>
        {/* table of shippers */}
        <div className="container">
        <Table change_var={change} change_function={setchange} defaultButton={false} tablename="products" handleclick = {handleclick} buttonstate={true}  data={products} cols={["#" ,"PRODUCT ID" , "PRODUCT NAME" , "CATEGORY ID","DESCRIPTION","TAGS","SUPPLIER ID","PIECES"]} />
        </div>
        </div>) 
        : (<div></div>)

    )
    

}
