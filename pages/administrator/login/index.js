import Image  from 'next/image';
import { useState , useEffect } from 'react';
import {Flex , Heading} from '@chakra-ui/react'
import { useRouter  } from 'next/router'
import styles from '../../../Styles/login.module.scss';
import Logo from '../../../public/images/adminpanel.png';
import { useCookies } from 'react-cookie';
import cookieCutter from 'cookie-cutter';
export default function Login(){
    const router = useRouter(); 
    //console.log(router);
    
    const [cookie , setcookie]=useCookies();
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const url = "http://localhost:5002/administrator/signin";
    const [errors , seterrors] = useState("");
    const [hidden ,sethidden] = useState(true);
    const onSubmit = async (e)=>{
        seterrors("");
        sethidden(true);
        e.preventDefault();
        console.log(email + password );

       try{ 
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({email:email , password:password}) // body data type must match "Content-Type" header
          });
          const res = await response.json();
          if(res.error){
            seterrors(res.error);
            sethidden(false);
            return res.error;
          }
          console.log(res);
          setcookie("token" , res.Token,{
            path: "/administrator",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });
          const body = {email :res.data[0].EMAIL ,role : res.data[0].ROLE };
          setcookie("user" , JSON.stringify(body),{
            path: "/administrator",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });
          
          router.push({pathname :"/administrator/dashboard" , query : {token : res.Token} }, "/administrator/dashboard");
          return res; // parses JSON response into native JavaScript objects
        setemail("");
        setpassword("");
        }catch(err){
            console.log(err.message);
            seterrors("error fetching data");
            sethidden(false);
        }
    } 
    const emailHandler = (e)=>{
        e.preventDefault();
        
        setemail ( e.target.value);
    }
    const passwordHandler = (e)=>{
        e.preventDefault();
       
        setpassword ( e.target.value);
    }
    
    
    // #9225BE
    // #6d128c
    // #2f0a3b
    // #48025e
    // #9109bf
    // #B304ee
    // #542066
    // #792b71
    // #773a71
    return (

      <div class="container">
          <style jsx>{`
   .thing {
      padding: 20px;
   }
   @media (max-width: 768px) {
     .responsive {
       padding: 10px;
       
       align-content :center;
        
     }
     .text-boxes {
         align-self: center;
         position : relative;
         left : 10rem !important;
     }
   }
`}</style>
          <div class="row container"><p class=" fw-bold display-4">Admin Inteface </p></div>
              <div className="container-fluid row ">
                <div className="col-md-6 col-sm-12 responsive text-center justify-content-center text-lg-start" >
                    <div className="container mb-2 mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9225BE" class="bi bi-lightning-charge" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
</svg></div>
                    <div class="container align-items-sm-center">
                        <div class="display-5 mt-3 mb-3">Login</div>
                        <div class="">
                            
                        
                    <form action="" method="POST" class="form ">
                        <label for="email" class="form-label fw-bold">Email</label>
                            <input  value={email} onChange={emailHandler} class="form-control  mb-2 text-boxes" type="email" placeholder="Email" name="email"/>
                            <div  id="line" className={styles.line}> </div>
                            <label for="password" class="form-label fw-bold  mb-2 ">Password</label>
                      
                            <input   value={password} onChange={passwordHandler} class="form-control mb-2 text-boxes" type="password" placeholder="Password" password="password"/>
                            <div  id="line" className={styles.line}> </div>
                            <button  onClick={onSubmit}  className="btn btn-primary w-50 ">Submit</button>
                        </form>
                        <div style={{visibility: hidden ? 'hidden' :'visible'}} class="bg-danger p-3 mt-2">{errors}</div>
                        <div className={styles.copyright}>
                            <p className="fw-lighter" style={{fontSize:9}}>@copyrightFAST UNIVERSITY AHU & MIS 🍸 </p>
                        </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-6 col-sm-12 border bg-primary">
                <Image
               
                    src={Logo}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />


                </div>
        

        </div>
        
      </div>
    )

   

}


