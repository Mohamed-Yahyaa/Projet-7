import axios from "axios";
import React, { Fragment, useState, useEffect ,message} from 'react';
import { Searchh } from "./Searchh";

export const ShowHotel = ({data, setData,selectHotel}) => {
  return (
    <Fragment>
        <Searchh setData={setData} data={data}/>

        <table class ="table">
            <thead>
            <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Name University</th>
                    <th scope="col">Lein</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
            {data.map((item)=>
                    <tr>
                 <td>{item.country}</td>
                  <td>{item.name}</td>
                  <td>{item.web_pages}</td>
                 <td><button className="btn btn-outline-success" onClick={()=>{selectHotel(item)}} >+</button></td> 
                </tr> 
                 
                    )}
                    </tbody>
        </table>
         </Fragment>
  )
}


export const SelectedHotel = ({dataSelected,deletSelectedHotel}) => {
  return (
    <Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Name University</th>
                    <th scope="col">Lein</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
            <tbody>
                {dataSelected.map((item)=>
                    <tr>
                          <td>{item.country}</td>
                          <td>{item.name}</td>
                          <td>{item.web_pages}</td>
                        <td><button className="btn btn-outline-success" onClick={()=>{deletSelectedHotel(item)}}>-</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </Fragment>
  )
}

