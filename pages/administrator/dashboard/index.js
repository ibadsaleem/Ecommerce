import { Flex } from '@chakra-ui/react';
import  Image from 'next/Image';
import Link from 'next/Link';
import { useRouter  } from 'next/router'
import  '../../../Styles/Dashboard.module.scss';
import { useLayoutEffect,useState , useEffect } from 'react';
import { IconButton } from "@chakra-ui/react"
import {HiMenuAlt2 , HiMenuAlt3} from 'react-icons/hi';
import cookieCutter from 'cookie-cutter';
import { useCookies } from "react-cookie";
export default function Dashboard(){
    const [isLoggedin , setLoggedin] = useState(false); 
    const [authorized , setAuhtorized] = useState(false);
    const router = useRouter();
    const [cookies , setcookie] = useCookies();
    
    
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
    
    const get_Icon = (value)=>{
        return (value == true ? <HiMenuAlt3 />  : <HiMenuAlt2 /> ); 

    }
    const [sidebar, setsidebar] = useState(true)
    return (
            isLoggedin ? (    <div class="container-fluid">
            <div style={{ alignItems: "center"}} class="row flex bg-dark h-25">
                
                <div class="col-1 col-sm-2 pt-2"><IconButton
                    onClick={() => { setsidebar(!sidebar) }}
                    colorScheme="red"
                    aria-label="Call Segun"
                    size="md"
                    icon={get_Icon(sidebar)}
                />
                </div>
                <div  class="col-11 col-sm-10 text-center fw-bold mt-3 p-2 rounded text-white">ADMIN PANEL</div>
                
            </div>
            <br />
            <div  class="container-fluid w-100">
                <div className="container-fluid row w-100">
                    {sidebar ? <div class="col-lg-2 col-sm-12 bg-light">
                            <ul class="list-group list-group-flush">
                               
                                    {/* <div class="col-2 w-25"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></div> */}
                            
                                    <Link   className="list-group-item link" href="/administrator/orders"><a>ORDERS</a></Link> 
                              
                                    
                      
                                 <Link className="list-group-item link" href="/administrator/suppliers"><a>SUPPLIERS</a></Link> 
                               <Link className="list-group-item" href="/administrator/shippers"><a>SHIPPERS </a></Link> 
                                <Link className="list-group-item" href="/administrator/customers"><a>CUSTOMERS </a></Link> 
                                <Link className="list-group-item" href="/administrator/Products"><a>PRODUCTS</a></Link>
                               {/* <Link style={{visibility: 'hidden'}} className="list-group-item " href="/administrator/orders"><a>CUSTOMER FEEDBACKS</a></Link> */}
  
                                
                            </ul>

                    </div> : null}
                    <div style={{  width: !sidebar ? "100%": "80%"  }} class="col-lg-10 col-sm-12">
                                <div class="container"> 
                                    <div class="display-2 text-center fw-bold"> Welcome to Admin Panel </div>
                                    <div class="text-body text-center"> All the actions you perfrom here will be recorded in the server side</div>

                                </div>

                    </div>

                </div>
            </div>
    </div>
) : (<h1 className="text-center display-3 fw-bold">Loading</h1>)
    )
    

}