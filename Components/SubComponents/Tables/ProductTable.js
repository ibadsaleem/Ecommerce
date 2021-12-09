import { useState , useEffect } from "react";
import VModalProduct from '../../Modals/ViewModals/VModalProduct';
import UProductModal from '../../Modals/UpdateModals/UProductModal';
import AddProductModal from '../../Modals/AddModals/AddProductModal';
function ProductTable(props) {
  const handleclick= (el)=>{
    console.log(el);
  }
  
  const [isbutton , setisbutton] = useState(props.buttonstate); 
  
  const cols = props.cols;
  useEffect(()=>{
    const totalcolumns = cols.length;
    if(isbutton){
      cols.push("");
      
      cols.push("");
    }
    //change image to base64
    
  },[])

    
    return (
        <div class="table-responsive-sm ">
        <table class="table table-hover  ">
        <thead>
    <tr>
          <th  scope="col"></th>
          <th  scope="col"><p class="text-center">ID</p></th>
          <th  scope="col"><p class="text-center">Name</p></th>
          <th  scope="col"><p class="text-center">CategoryID</p></th>
          <th  scope="col"><p class="text-center">TAGS</p></th>
          <th  scope="col"><p class="text-center">Description</p></th>
          
          <th  scope="col"><p class="text-center">In-stock</p></th>
          <th  scope="col"><p class="text-center">PRICE</p></th>

          
          
          
          
    </tr>
    
  </thead>
  <tbody>
    
    {props.data.map((el , k)=>{
        return (<tr key={k}>
                <th scope="row">
                <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
                </div>
                
                </th>
               
                    <td  scope="col"><p class="text-center">{el.PRODUCT_ID}</p></td>
                    <td  scope="col"><p class="text-center">{el.PRODUCT_NAME}</p></td>
                    <td  scope="col"><p class="text-center">{el.CATEGORYID}</p></td>
                    <td  scope="col"><p class="text-center">{el.TAGS}</p></td>
                    <td  scope="col"><p class="text-center">{el.DESCRIPTION}</p></td>
                    <td  scope="col"><p class="text-center">{el.PIECES}</p></td>
                    <td  scope="col"><p class="text-center">{el.PRICE}</p></td>
               
               {isbutton ? (<td> <button onClick={()=>{
                 props.handleclick(el);
               }} style={{borderRadius : "0.5rem",backgroundColor : "darkgrey" ,  color : "black"}}  class=" p-2">  <UProductModal product={el} change_var={props.change_var} change_func={props.change_function} /> </button></td> )  : (null)}
               
              {props.defaultButton ? (<td><div style={{width : "10rem" }} className="text-center">{props.modalComponent}</div></td>) : (<td><VModalProduct  product={el} tablename={props.tablename}  icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
  <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
</svg>} title=""/></td>)}
                
                {
                  props.showdustbin ?(<td onClick={()=>{
                    console.log(el);
                    props.handle_delete(el);
                  
                  }} ><svg style={{float: "left"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg></td>) : null 
                  }
             </tr>)
    })}


    </tbody>
        </table>
        <AddProductModal change_var={props.change_var} change_func={props.change_function} />
        {/* ADD category modal component */}
        {/* Assuming everything is done */}
          {/* miscellenous command will be execuited thorigh secured entry point */}
      </div>
    );
}

export default ProductTable;