import { useState , useEffect } from "react";
// import VModalShipper from '../Modals/ViewModals/VModalShipper';
// import UShipperModal from '../Modals/UpdateModals/UShipperModal';
import VModalOrder from '../../Modals/ViewModals/VModalOrder';
import UOrderModal from '../../Modals/UpdateModals/UOrderModal';
function OrderTable(props) {
  
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
  },[props.change])
   
    
    return (
        <div class="table-responsive-sm ">
        <table class="table table-hover  ">
        <thead>
   
        
                        <td  scope="col"><p class="fw-bold text-center">ID</p></td>
                        <td scope="col "><p class="fw-bold v">CustomerID</p></td>
                        <td scope="col"><p class="fw-bold text-center">CustomerName</p></td>
                        <td scope="col"><p class="fw-bold text-center">STATUS</p></td>
                       
  </thead>
        <tbody> 
                      {
                        props.data.map((el,index) =>{
                          return (
                            <tr key={index} scope="col">
                                <td class="text-center">{el.ORDER_ID}</td>
                                <td class="text-center">{el.CUSTOMERID}</td>
                                <td class="text-center">{el.NAME1}</td>
                                <td class="text-center">{el.STATUS}</td>
                                
                                <td class="text-center"> <UOrderModal  change={props.change} change_function = {props.change_function} data={el}/> </td>
                                <td class="text-center"><VModalOrder  change={props.change} change_func = {props.change_function} data={el} /></td>

                            </tr>
                          )
                        })
                      }
        </tbody>
    </table>
    </div>
  );
}

export default OrderTable;