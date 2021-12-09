import {Modal,RadioGroup , Stack , Radio , useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
import {useRef , useState , useEffect} from 'react';
import {useCookies} from 'react-cookie';

function ShipperModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [address ,  setaddress ] = useState("");
    
    const [cookies , setcookies ] = useCookies();    
    const initialRef = useRef();
    const finalRef = useRef();
    const [tog , settog] = useState(false);
    const [error , seterror] = useState("");
    const [show , setshow] = useState(false);
    const [display , setdisplay] = useState(false);
    const [to_delete , set_to_delete ] = useState([]);
    const [status , setstatus] = useState("PENDING");
    // const []
    const handle_delete = ()=>{
      if(to_delete.length <= 0){return null;}
      const token = cookies.token;
      const requestOptions = {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json' ,
          'cache' : 'no-cache',
          'Authorization' : `Bearer ${token}`
      
      },
        body: JSON.stringify({ ids : to_delete })
    };
    fetch(`http://localhost:5002/administrator/orders/delete`, requestOptions)
    .then(response => response.json())
    .then(data => {
      if(data){
        

        if(data.error){
            seterror(data.error);
            setshow(true);
            
        } else{
            setdisplay(true);
            setTimeout(()=>{
                setdisplay(false);
              },5000);
        }
        
        props.change_function(!props.change_var);
        settog(!tog);
        set_to_delete([]);
      
      }
      
   
    })
    .catch(err=>{seterror(err.message);
    setshow(true);
    set_to_delete([]);
   });
    }
    const handlesubmit = (e )=>{
      e.preventDefault();
      handle_delete();
      let obj = {};
      if(address != '' ){obj.ADDRESS=  address;}
      if(status != ''){obj.STATUS = status;}

      const token = cookies.token;
      const requestOptions = {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json' ,
          'cache' : 'no-cache',
          'Authorization' : `Bearer ${token}`
      
      },
        body: JSON.stringify({ data : obj })
    };
    fetch(`http://localhost:5002/administrator/orders/update/${props.data.ORDER_ID}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data){
            //console.log(data);

            if(data.error){
                seterror(data.error);
                setshow(true);
                
            } else{
                setdisplay(true);
                setTimeout(()=>{
                    setdisplay(false);
                  },5000);
            }
            
            props.change_function(!props.change_var);
            settog(!tog);
            
          
          }
          
     
       
        })
        .catch(err=>{seterror(err.message);
        setshow(true);
        set_to_delete([]);
    });

      //console.log(name,  phone,country)
    }
    
    const handleaddress = (e)=>{
        setshow(false);
        seterror("")
        e.preventDefault();
        setaddress(e.target.value);
      }
   
    return (
      <>
        <Button class="bg-dark text-white p-2 rounded" onClick={onOpen}>
            
          UPDATE
     </Button>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input type="text" ref={initialRef} 
                placeholder="NAME" 
                value={address}
        onChange={handleaddress}/>
              </FormControl>
                <FormControl>
                <FormLabel>STATUS</FormLabel>
                <RadioGroup  onChange={setstatus} value={status} >
      <Stack direction='row'>
        <Radio value='CANCELLED'>CANCEL</Radio>
        <Radio value='PENDING'>PENDING</Radio>
        <Radio value='DISPATCHED'>CONFIRM</Radio>
        <Radio value='DELIVERED'>Delivered</Radio>
      </Stack>
    </RadioGroup>
            </FormControl>
            <FormLabel >Items</FormLabel>
            {/* //code hjere */}
                {props.data.items.map((el,index)=>{
                   
                    return (<div key={el.PRODUCT_ID}>item {index+1}# {el.PRODUCT_NAME}     x{el.QUANTITY}    <button onClick={()=>{
                        
                        to_delete.push(el.ORDER_ITEMS_ID);
                        props.data.items.splice(index,1);
                        props.change_function(!props.change);
                        
                    }}>             <p class="fw-bold">X</p></button></div>);
                })}

                {/* code jere */}
              {show ? <div style={{color : "white" , opacity : "0.8"}} class="container text-center rounded bg-danger p-2 mt-2">{error}</div> : null}
              {display ? (<div class="alert alert-success mt-3" role="alert">
                  Updated Shipper shipper
              </div>) : null}
            </ModalBody>

            <ModalFooter>
              <Button onClick= {handlesubmit} colorScheme="blue" mr={3}>
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default ShipperModal;