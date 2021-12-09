import {Heading,Divider , Modal,InputGroup,InputLeftAddon, useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
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
        <Button type="button" class="bg-dark text-white p-2 roundedbtn btn-secondary" data-toggle="tooltip" data-placement="top" title="More info"  onClick={onOpen}>
            
            <div class="row">
                <div class="col">{props.icon}</div>
                
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
            <ModalHeader>{}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Heading>{props.tablename}</Heading>
                <Divider orientation="horizontal" />
                {Object.keys(props.data).map((key)=>{

                    return (<div class="container"> <span class="fw-bold">{key}</span>  : <span>{props.data[key]}</span></div>);
                })}


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