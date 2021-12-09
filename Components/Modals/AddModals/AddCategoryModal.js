import {Modal,RadioGroup ,Select ,  Stack , Radio , useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
import {useRef , useState , useEffect} from 'react';
import {useCookies} from 'react-cookie';

function AddCategoryModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [cookies , setcookies ] = useCookies();    
    const initialRef = useRef();
    const finalRef = useRef();
    const [tog , settog] = useState(false);
    const [error , seterror] = useState("");
    const [show , setshow] = useState(false);
    const [display , setdisplay] = useState(false);
    const [categories , setcategories] = useState([]);
    const [categoryid , setcategoryid] = useState("");
    const [suppliers , setsuppliers] = useState([]);
    const [supplierid , setsupplierid] = useState(null);
    
    const [productName , setproductName] = useState("");
    const [price , setprice] = useState(0);
    const [instock , setinstock] = useState(0);
    let blobbed_image = null;
    const [file , setfile] = useState(null);
    const [desc , setDesc] = useState("");
    const [tags , settags]= useState("");
    
    const [image_buffer , setimage_buffer] = useState({
      buffer : null,
      name : null,
      extension : null,
      size : null
    });
    const [imagetest , setimagetest] = useState(null);
    const reset_inputs = ()=>{
      setcategoryid("");
      setsupplierid("");
      setproductName("");
      setprice(0);
      setinstock(0);
      setfile(null);
      setDesc("");settags("");

    }
    const handlelink =(e)=>{
      e.preventDefault();
      setimagetest(e.target.value);
    }
    const handlename = (e)=>{setproductName(e.target.value);}
    const handleprice = (e)=>{setprice(e.target.value);}
    const handlestock = (e)=>{setinstock(e.target.value);}
    const handlefile = (e)=>{
      var file = e.target.files[0];
      blobbed_image = file;  
      console.log(blobbed_image)
      var reader = new FileReader();
      reader.onload = function(event) {
        // The file's  text will be printed here
       
       setimage_buffer({
         buffer :  e.target.files[0],
         name : file.name,
         extension : file.type,
         size : file.size
       })
       

      };
      
      reader.readAsText(file);
    
    }
    const handledesc = (e)=>{setDesc(e.target.value);}
    const handletags = (e)=>{settags(e.target.value);}

    // const []
   useEffect(()=>{
    const token = cookies.token;   
    const requestOptions= {
        method : 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        
           
       }
        fetch("http://localhost:5002/api/category" , requestOptions)
        .then(data=>{
            return data.json();
        })
        .then(data=>{
           
            setcategories(data);
            console.log(categories);
        })
        .catch(err=>{
            console.log(err.message);
        })
        fetch("http://localhost:5002/administrator/api/supplier" , requestOptions)
        .then(data=>{
            return data.json();
        })
        .then(data=>{
           
            setsuppliers(data);
            console.log(suppliers);
        })
        .catch(err=>{
            console.log(err.message);
        })
   }, []);


    const handlesubmit = (e )=>{
     
      e.preventDefault();
      seterror("");
      setshow(false);
      console.log(productName);
  
    console.log(categoryid);
    console.log(price);
    console.log(instock);
    
    console.log(desc);
    console.log(tags);
    let obj = {};
  
 
    
       
    if(productName){obj['PRODUCT_NAME'] = productName;}
    if(categoryid != "" && categoryid != null){obj['CATEGORYID'] = categoryid;} 
    if(supplierid != "" && supplierid != null){obj['SUPPLIER_ID'] = supplierid;}
    if(price != 0){obj['PRICE'] = price;}
    if(instock != 0){obj['PIECES'] = instock;}
    if(imagetest != null){
      
        obj['IMAGESOURCE'] = imagetest;
  }
    if(desc != ""){obj['description'] = desc;}
    if(tags != ""){obj['tags'] = tags;}
    
    let len = 0;
    for (let key in obj){
      len++;

    }
    if(len == 0){
      seterror("har field toh na choro beta");
      setshow(true);
      return null;
    }
    
  
     
      const token = cookies.token;
      
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' ,
          'cache' : 'no-cache',
          'Authorization' : `Bearer ${token}`,
          'Access-Control-Allow-Origin' : 'no-cors'
      },
        body: JSON.stringify(obj)
     };
    //update/${props.product.PRODUCT_ID}
    fetch(`http://localhost:5002/api/products/add`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data){
            // console.log(data);

            if(data.error){
                seterror(data.error);
                setshow(true);
                
            } else{
                setdisplay(true);
                setTimeout(()=>{
                    setdisplay(false);
                  },5000);
            }
            
            props.change_func(!props.change_var);
            settog(!tog);
            
          
          }
          
     
       
        })
        .catch(err=>{seterror(err.message);
        setshow(true);
       
    });
        reset_inputs();
    }
 
  
    return (
      <>
        <Button class="bg-dark text-white p-2 rounded" onClick={onOpen}>
            
          + Add Category
     </Button>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            
              <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input name="categoryName" type="text" ref={initialRef} 
                placeholder="NAME" 
                value={productName}
        onChange={handlename}
        />
              </FormControl>
                <FormControl>
                <FormLabel>Parent CATEGORY</FormLabel>
                <Select value={categoryid} onChange={(e)=>{
                    setcategoryid(e.target.value)
                }} placeholder='Select option'>
        {categories.map(el=>{return ( <option value={el.CATEGORY_ID}>{el.CATEGORY_NAME}</option>)})}
  
</Select>
            </FormControl>
          
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input name="productName" type="text" ref={initialRef} 
                placeholder="https://ecample.com/image/1" 
                value={imagetest}
        onChange={handlelink}
        />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input type="text" ref={initialRef} 
                placeholder="add description" 
                value={desc}
        onChange={handledesc}
        />
              </FormControl>
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Input type="text" ref={initialRef} 
                placeholder="Tags" 
                value={tags}
        onChange={handletags}
        />
              </FormControl>
            
              {show ? <div style={{color : "white" , opacity : "0.8"}} class="container text-center rounded bg-danger p-2 mt-2">{error}</div> : null}
              {display ? (<div class="alert alert-success mt-3" role="alert">
                  Updated Shipper shipper
              </div>) : null}
            </ModalBody>

            <ModalFooter>
              <Button onClick= {handlesubmit} colorScheme="blue" mr={3}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default AddCategoryModal;