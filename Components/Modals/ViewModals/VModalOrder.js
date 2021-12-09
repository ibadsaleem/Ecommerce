import {Heading,Divider , Modal,InputGroup,InputLeftAddon, useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
import {useRef , useState , useEffect} from 'react';
import {useCookies} from 'react-cookie';

function OrderModal(props) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
 
    const gettotal = (items)=>{
      
        let sum  = 0;
        for (let i=0;i<items.length;i++) {
                sum += items[i].PRICE*items[i].QUANTITY;
        }
        
        return sum;
    }

    const [cookies , setcookies ] = useCookies();    
    
    const initialRef = useRef();
    const finalRef = useRef();
   
   useEffect(()=>{
      
   },[])
    return (
      <>
        <Button class="bg-dark text-white p-2 rounded" onClick={onOpen}>
            
            <div class="row">
                <p>View Detials</p>
                
            </div>
            </Button>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> <p>Order ID#  <span>{props.data.ORDER_ID}</span></p></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Heading>{props.tablename}</Heading>
                <Divider orientation="horizontal" />
                <div class="container">
                <div class="row"><p class="fw-bold col">CustomerName : </p><span class="col">{props.data.NAME1}</span></div>
                <div class="row"><p class="fw-bold col">Customer-ID# : </p><span class="col">{props.data.CUSTOMERID}</span></div>
                <div class="row"><p class="fw-bold col">STATUS : </p><span style={{color :props.data.STATUS == 'PENDING' ? 'red' : (props.data.STATUS === "DELIVERED" ? 'green' : 'black') }} class="col">{props.data.STATUS}</span></div>
                <div class="row"><p class="fw-bold col">ADDRESS : </p><span class="col">{props.data.ADDRESS != null?props.data.ADDRESS : "null" }</span></div>
                
                
               </div>
              <div class="container">
               {props.data.items.length != 0 ? (<div class="row text-center"> <h1 class="heading">ITEMS</h1></div> ) : null}
                {props.data.items.map((el,index)=>{
                    return (
                        <div key={index} class="row"><p style={{fontsize : 3}}class="fw-bold col">{el.PRODUCT_NAME} : </p> <span class="col">{el.PRICE}</span> <span class="col">{el.QUANTITY}</span>  </div>
                    );
                })}

               </div>
               <div class="row"><p class="fw-bold col">AMOUNT : </p><span  class="col">{gettotal(props.data.items)}</span></div>
                
                


            </ModalBody>

            <ModalFooter>
             
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default OrderModal;