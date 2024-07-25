import React, { useEffect, useState } from 'react'

const Student_details = () => {
    const [studData,setStudData] = useState([])
    
    useEffect(()=>{
        const filteredStudent = JSON.parse(localStorage.getItem('student_details'));
        console.log('filtered Data : ' , filteredStudent);        
        setStudData(filteredStudent)
    },[])
  return (
    <>
        <div className="container">
            <div className="row ">
                <div className="d-flex justify-content-center align-items-center text-center" style={{height:'100vh'}}>
                       {
                        studData.map((item)=>{
                            return  <div className="card w-50 ">
                            <div className="card-body">
                                <p>Name  : <span>{item.name}</span></p>
                                <p>Age   : <span>{item.age}</span></p>
                                <p>Class :<span>{item.class}</span></p>
                            </div>
                        </div>
                        })
                       }
                </div>
            </div>
        </div> 
    </>
  )
}

export default Student_details
