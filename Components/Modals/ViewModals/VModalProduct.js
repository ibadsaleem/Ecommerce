import {Heading,Divider , Modal,InputGroup,InputLeftAddon, useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
import {useRef , useState , useEffect} from 'react';
import {useCookies} from 'react-cookie';
import Image from 'next/image';
import img from '../../../public/Images/product.jpeg'
function ProductModal(props) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [base64 , setbase64] = useState("");
    const prefix = "data:image/png;base64,";
    
    const initialRef = useRef();
    const finalRef = useRef();
   const convert = (image)=>{
    let TYPED_ARRAY = new Uint8Array(image);
   
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
      return data + String.fromCharCode(byte);
    }, '');
   }
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
            <ModalHeader> <p>{props.product.PRODUCT_ID} #    </p></ModalHeader>
            <ModalCloseButton />
            <ModalBody pt={6} pb={6}>
                <Heading>{props.product.PRODUCT_NAME}</Heading>
                <Divider  orientation="horizontal" />
                
                <div class="container">
                        <br style={{minHeight : "10rem"}} />
                        <div class="row pb-2">   
                            <div class="col-4 fw-bold"> CategoryID :    </div>
                            <div class="col-8 text-start">{props.product.CATEGORY_NAME}   </div>
                        </div>
                        <div class="row pb-2"> 
                            <div class="col-4 fw-bold">Name :    </div>
                            <div class="col-8 text-start"> {props.product.PRODUCT_NAME}    </div>
                        </div>
                        <div class="row pb-2"> 
                            <div class="col-4 fw-bold"> Description :    </div>
                            <div class="col-8 text-start">{props.product.DESCRIPTION}    </div>
                        </div>

                       {props.product.IMAGEURL != null ? (<div class="container-fluid">
                            <img src={props.product.IMAGEURL}/>

                       </div>) : null}
                       <div class="row pb-2"> 
                            <div class="col-4 fw-bold">PRICE :    </div>
                            <div class="col-8 text-start"><strong>RS</strong> {props.product.PRICE}    </div>
                        </div>
                
                
                </div>

            </ModalBody>

            <ModalFooter>
             
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default ProductModal;