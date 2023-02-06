import React from 'react'
import axios from'axios'

export const Searchh = ({setData, data}) => {
  const Search = async(e) => {
    const res =  await axios.get('http://universities.hipolabs.com/search?country='+e.target.value)
    setData(res.data)
    console.log(data)
  }
  return (



    <div class="col-sm-9 col-xs-12 text-right">
    <div class="btn_group">
        <input type="text" class="form-control" placeholder="Searchh"onChange={Search}/>
     
    </div>
</div> 

  )
}
