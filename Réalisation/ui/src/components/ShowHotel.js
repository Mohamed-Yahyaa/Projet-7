import axios from "axios";
import React, { Fragment, useState, useEffect ,message} from 'react';

export const ShowHotel = ({currentMeals, selectHotel, message}) => {
  return (
    <Fragment>
        {currentMeals.map((item, idx)=>
            <div className='col-md-3' style={{marginBottom : '3em'}} key={idx}>
                <div className="card" >
                    <img src={item.strMealThumb} className="card-img-top" alt="..." style={{height : '12em'}}/>
                    <div className="card-strMealThumb">
                        <h5 className="card-title">{item.strMeal}</h5>
                        Youtube :<a href={item.strYoutube}> {item.strYoutube}</a>
                    </div>
                    <button className="btn btn-outline-success" onClick={()=>{selectHotel(item)}}>+</button>
                </div>
            </div>
        )}
    </Fragment>
  )
}


export const SelectedHotel = ({dataSelected,deletSelectedHotel}) => {
  return (
    <Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
            <tbody>
                {dataSelected.map((item, idx)=>
                    <tr key={idx}>
                        <td>{item.strMeal}</td>
                        <td><a href={item.strYoutube}>{item.strYoutube}</a></td>
                        <td><img src={item.strMealThumb} className="card-img-top" alt="..." style={{height : '50px', width: '50px'}}/></td>
                        <td><button className="btn btn-outline-success" onClick={()=>{deletSelectedHotel(item.id)}}>-</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </Fragment>
  )
}

