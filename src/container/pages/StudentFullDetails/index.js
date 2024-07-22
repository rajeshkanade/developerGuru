import React, { useEffect, useState } from "react";
import { studentDetails } from "../../../constant";
import { useParams } from "react-router-dom";


const StudentFullDetails = () => {
    const {id} = useParams();
    const [student, setStudent] = useState([])
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
     setStudent(studentDetails)
     setFilterData(student.filter((item)=>{
        return item.id === parseInt(id)
     }))
    }, [student])
    
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column " style={{width : '100vw' , height:'60vh' , }}>
        <h1>Student FUll Details</h1>
        <div className="row w-100 ">
          <div className="col-md-6 m-auto">
            <div className="card">
                <div className="card-body text-center">
                    {
                        filterData.map((item)=>{
                            return <>
                                <p>Name  : <span>{item.name}</span> </p>
                                <p>Age   : <span>{item.age}</span> </p>
                                <p>Class : <span>{item.class}</span> </p>
                            </>
                        })
                    }
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentFullDetails;
