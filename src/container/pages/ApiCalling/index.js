import React, { useEffect, useState } from 'react'
import { getData } from '../../../Service/api'

const APiCalling = () => {
    const [studData, setStudData] = useState([])
    console.log(studData[0])
    useEffect(()=>{
       getStudentData();
    },[])

    const getStudentData = async() =>{
       const result = await  getData();
       console.log('this is result : ',result)
       setStudData(result);
    }
  return (
    <div>
      <h1>He3llo world</h1>
      
        {
            
            studData.slice(0,3).map((item,index)=>{
                return <>
                    <p>Name : {item.name}</p>
                    <p>Age : {item.age}</p>
                    <p>Gender : {item.gender}</p>
                </>
            })
        }
    </div>
  )
}

export default APiCalling
