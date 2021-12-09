import {  } from 'next';
import {useState , useEffect} from 'react';
import {useRouter} from 'next/router';
import { useCookies } from 'react-cookie';
import { IconButton } from "@chakra-ui/react"
import {HiMenuAlt2 , HiMenuAlt3} from 'react-icons/hi';
import TableSupplier from '../../../Components/SubComponents/tableSupplier';
import ShipperModal from '../../../Components/Modals/ShipperModal';
import SupplierModal from '../../../Components/Modals/SupplierModal';
import USupplierModal from '../../../Components/Modals/UpdateModals/USupplierModal';
export default function SuppliersPage(){
    const [suppliers , setsuppliers] = useState([]);
    const [isLoggedin , setLoggedin] = useState(false); 
    const [authorized , setAuhtorized] = useState(false);
    const router = useRouter();
    const [cookies , setcookie] = useCookies();
    const [change , setchange] = useState(false);
    useEffect(async () =>{
        const token = cookies.token;
       
        const res = await fetch('http://localhost:5002/administrator/api/supplier' , {
        method : 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
        ) ;
        const data = await res.json();
        setsuppliers(data);
        

    } ,[change]);

    const handle_delete = (el)=>{
        const token = cookies.token;
      const requestOptions = {
        method: 'DELETE',
        headers: { 
          
          'cache' : 'no-cache',
          'Authorization' : `Bearer ${token}`
      
      }
        
    };
    
    fetch(`http://localhost:5002/administrator/api/supplier/delete/${JSON.stringify(el.SUPPLIER_ID)}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(suppliers.length == 0){
                setsuppliers([]);
            }
            setchange(!change);
        })
        .catch(err=>{console.log(err.message);
    });
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
                <p className="display-5 text-center"> Suppliers </p>
               
        </div>
        <div style={{position: "relative"}} class=" bg-primary container mt-2 mb-2 ">
      <div style={{position : "absolute" , right : 0}}>


        <SupplierModal change_var={change} change_function={setchange} icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>}  title="Add Supplier"/>
      </div>
      </div>
        {/* table of shippers */}
        <div style={{minHeight : "2rem"}}></div>
        <div className="container">
        <TableSupplier change_var={change} change_function={setchange} tablename="Suppliers" defaultButton={false} handle_delete={handle_delete} showdustbin={true}  modalComponent={<ShipperModal icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
  <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
</svg>} title="View Details"/>}  buttonstate={true} data={suppliers} cols={["#" ,"Supplier ID" , "Name" , "Contact no","Address","City" , "Postal Code" , "Country"]} />
        </div>
        </div>) 
        : (<div></div>)
        )
    

}