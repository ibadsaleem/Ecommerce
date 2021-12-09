import {Modal,InputGroup,InputLeftAddon, useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
import {useRef , useState} from 'react';
import {useCookies} from 'react-cookie';

function SupplierModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [name ,  setname ] = useState("");
    const [phone ,  setphone ] = useState("");
    const [country ,  setcountry ] = useState("");
    const [address ,  setaddress ] = useState("");
    const [city , setcity ] = useState("");
    const [postalCode , setpostalCode ] = useState("");

    

    const [cookies , setcookies ] = useCookies();    
    
    const initialRef = useRef();
    const finalRef = useRef();
    const [tog , settog] = useState(false);
    const [error , seterror] = useState("");
    const [show , setshow] = useState(false);
    const [display , setdisplay] = useState(false);
    const reset_input = ()=>{
        setname("");
        setphone("");
        setcountry("");
        setaddress("");
        setcity("");
        setpostalCode("");
    }
    const handlesubmit = (e )=>{
      e.preventDefault();
      console.log(cookies.token);
      const token = cookies.token;
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' ,
          'cache' : 'no-cache',
          'Authorization' : `Bearer ${token}`
      
      },
        body: JSON.stringify({ NAME :name , CONTACT:phone , COUNTRY : country , ADDRESS: address , CITY : city, POSTALCODE : postalCode })
    };
    fetch('http://localhost:5002/administrator/api/supplier/add', requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data){
            //console.log(data);

            if(data.error){
                seterror(data.error);
                show(true);
            } 
          
            props.change_function(!props.change_var);
            settog(!tog);
            setdisplay(true);
            setTimeout(()=>{
              setdisplay(false);
            },5000);
          }
          
       reset_input();
        })
        .catch(err=>{seterror(err.message);
        setshow(true);
        reset_input();});

      //console.log(name,  phone,country)
    }
    const handlename = (e)=>{
      setshow(false);
      seterror("")
      e.preventDefault();
      setname(e.target.value);
    }
    const handlephone = (e)=>{
      setshow(false);
      seterror("")
      e.preventDefault();
      setphone(e.target.value);
    }
    const handlecountry = (e)=>{
      setshow(false);
      seterror("")
      e.preventDefault();
      setcountry(e.target.value);
    }
    const handlecity = (e)=>{
        setshow(false);
        seterror("")
        e.preventDefault();
        setcity(e.target.value);
    }
    const handleaddress= (e)=>{
        setshow(false);
      seterror("")
      e.preventDefault();
     setaddress(e.target.value);
    }
    const handlepostalCode = (e)=>{
        setshow(false);
        seterror("")
        e.preventDefault();
        setpostalCode(e.target.value);
    }
    return (
      <>
        <Button class="bg-dark text-white p-2 rounded" onClick={onOpen}>
            
            <div class="row">
                <div class="col-2">{props.icon}</div>
                <div class="col-10">{props.title}</div>
                
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
            <ModalHeader>Add Supplier</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Supplier Name</FormLabel>
                <Input type="text" ref={initialRef} 
                placeholder="NAME" 
                value={name}
        onChange={handlename}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Contact</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+92" />
                  <Input   
                value={phone}
        onChange={handlephone} type="tel" placeholder="xxx-xxxxxxxx" />
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input value={country} onChange={handlecountry} type="text" placeholder="Country" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input value={address} onChange={handleaddress} type="text" placeholder="Country" />
              </FormControl>
           
              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input value={city} onChange={handlecity} type="text" placeholder="Country" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Postal Code</FormLabel>
                <Input value={postalCode} onChange={handlepostalCode} type="text" placeholder="Country" />
              </FormControl>
              {show ? <div style={{color : "white" , opacity : "0.8"}} class="container text-center rounded bg-danger p-2 mt-2">{error}</div> : null}
              {display ? (<div class="alert alert-success mt-3" role="alert">
                  Added shipper
              </div>) : null}
            </ModalBody>

            <ModalFooter>
              <Button onClick= {handlesubmit} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default SupplierModal;