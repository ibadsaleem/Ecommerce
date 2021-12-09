import {Modal,RadioGroup ,Select ,  Stack , Radio , useDisclosure , Button , ModalOverlay , ModalContent , ModalHeader , ModalCloseButton , ModalFooter,ModalBody ,Input, FormControl , FormLabel , Form} from '@chakra-ui/react';
import {useRef , useState , useEffect} from 'react';
import {useCookies} from 'react-cookie';

function UProductModal(props) {
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

    const [productName , setproductName] = useState("");
    const [price , setprice] = useState(0);
    const [instock , setinstock] = useState(0);
    let blobbed_image = null;
    const [file , setfile] = useState(null);
    const [desc , setDesc] = useState("");
    const [tags , settags]= useState("");
    const [image_buffer , setimage_buffer] = useState({
      buffer : null,
      result : null,
    })
    const handlename = (e)=>{setproductName(e.target.value);}
    const handleprice = (e)=>{setprice(e.target.value);}
    const handlestock = (e)=>{setinstock(e.target.value);}
    const handlefile = (e)=>{
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
        // The file's text will be printed here
        let buff = new Blob(new Uint8Array(event.target.result), {type: file.type });
       setimage_buffer({buffer : buff , result : event.target.result});
       console.log(event.target.result);

      };
      
      reader.readAsArrayBuffer(file);
    
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
            'Authorization' : `Bearer ${token}`
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
   }, []);


    const handlesubmit = (e )=>{
      e.preventDefault();
    console.log(productName);
    console.log(categoryid);
    console.log(price);
    console.log(instock);
    console.log(image_buffer);
    console.log(desc);
    console.log(tags);
    let obj = {};
    let obj1 = new FormData();
    obj1.append("imageSource" , image_buffer);
    console.log(obj1.get("imageSource"))
    if(productName){obj['PRODUCT_NAME'] = productName;}
    if(categoryid != "" || categoryid != ""){obj['CATEGORYID'] = categoryid;} 
    if(price != 0){obj['PRICE'] = price;}
    if(instock != 0){obj['PIECES'] = instock;}
    if(obj1.get("imageSource")){ obj.imageSource = obj1.get("imageSource"); }
    if(desc != ""){obj['description'] = desc;}
    if(tags != ""){obj['tags'] = tags;}
    
    

     
      const token = cookies.token;
      
      const requestOptions = {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json' ,
          'cache' : 'no-cache',
          'Authorization' : `Bearer ${token}`
      
      },
        body: JSON.stringify(obj)
    };
    fetch(`http://localhost:5002/api/products/update/${props.product.PRODUCT_ID}`, requestOptions)
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
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <form method="post" action={`http://localhost:5002/api/products/update/${props.product.PRODUCT_ID}`}>
                        <div>
                        <label for="PRODUCT_NAME">PRODUCT NAME </label>
                        <input type="text" name="PRODUCT_NAME" />
                        </div>
                        <div>
                        <label for="CATEGORYID">select cateogry</label>
                        <select  name="CATEGORYID"  > 
                            {categories.map((category)=>{
                              return (<option  value={category.CATEGORYID}>{category.CATEGORY_NAME} </option>)  
                            })}
                        </select>
                        </div>
                        <div>
                        <label for="PRICE">PRICE</label>
                              <input type="number" name="PRICE"  />
                             
                        </div>
                        <div>
                        <label for="PIECES">PIECES IN STOCK</label>
                        <input type="number" name="PIECES" />
                          </div>
                          <div>
                        <label for="IMAGESOURCE">Image</label>
                        <input type="file" name="IMAGESOURCE" />
                          </div>
                          <div>
                        <label for="PIECES">PIECES IN STOCK</label>
                        <input type="number" name="PIECES"  />
                          </div>
                          <div>
                        <label for="description">Description</label>
                        <input type="text" name="description" />
                          </div>
                          
                          <div>
                        <label for="tags">Tags</label>
                        <input type="text" name="tags" />
                          </div>
                        <input type="submit" />

                </form>
             
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

export default UProductModal;