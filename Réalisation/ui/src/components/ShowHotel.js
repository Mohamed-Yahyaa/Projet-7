import axios from "axios";
import React, { Fragment, useState, useEffect ,message} from 'react';
import { Searchh } from "./Searchh";

export const ShowHotel = ({data, setData,selectHotel}) => {
  return ( 
    
    <Fragment>
        

        
        <div class="container">
    <div class="row">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col col-sm-3 col-xs-12">
                            <h4 class="title">Data <span>List</span></h4>
                        </div>
                       
                    </div>

                </div>
                <Searchh setData={setData} data={data}/>
                
                <div class="panel-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Name University</th>
                                <th>Lein</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item)=>
                            <tr>
                            <td>{item.country}</td>
                            <td>{item.name}</td>
                            <td>{item.web_pages}</td>
                            
                                <td>
                                    <ul class="action-list">
                                    <button className="btn btn-outline-success" onClick={()=>{selectHotel(item)}} >+</button>
                                        
                                    </ul>
                                </td>
                            </tr>
                            )}
                            </tbody>
                    </table>
                </div>
                </div>
        </div>
    </div>
</div>

    
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


