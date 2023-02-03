import axios from "axios";
import React, { Fragment, useState, useEffect ,message} from 'react';
import { Searchh } from "./Searchh";

export const ShowHotel = ({data, setData}) => {
  return (
    <Fragment>
        <Searchh setData={setData} data={data}/>

        <table class ="table">
            <thead>
            {data.map((item)=>
                    <tr>
                 <td>{item.country}</td>
                  <td>{item.name}</td>
                  <td>{item.web_pages}</td>
                  <button className="btn btn-outline-success" >+</button>
                </tr> 
                 
                    )}
          
            </thead>
       
        </table>
         </Fragment>
  )
}


// export const SelectedHotel = ({dataSelected,deletSelectedHotel}) => {
//   return (
//     <Fragment>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Description</th>
//                     <th scope="col">Image</th>
//                     <th scope="col">Actions</th>
//                 </tr>
//                 </thead>
//             <tbody>
//                 {dataSelected.map((item, idx)=>
//                     <tr key={idx}>
//                         <td>{item.strMeal}</td>
//                         <td><a href={item.strYoutube}>{item.strYoutube}</a></td>
//                         <td><img src={item.strMealThumb} className="card-img-top" alt="..." style={{height : '50px', width: '50px'}}/></td>
//                         <td><button className="btn btn-outline-success" onClick={()=>{deletSelectedHotel(item.id)}}>-</button></td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//     </Fragment>
//   )
// }

