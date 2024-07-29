import React, { useEffect, useState } from 'react'
import Header from '../../../component/Header'
import styles from './Navigate.module.scss'
import Footer from '../../../component/Footer'
import { studentDetails } from '../../../constant'
import { useNavigate } from 'react-router-dom'
import { sendStudentDetails } from '../../../Helper'
const Navigate = () => {
    const [student , setStudent] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
     setStudent(studentDetails)
    }, [])
    
    // const sendStudentDetails = (id) =>{
    //     const filteredStudent = student.filter((item,index)=>{
    //         return item.id === id;
    //     })
    //     navigate('/Student_details')
    //   localStorage.setItem('student_details' , JSON.stringify(filteredStudent))
  


    // }
  return (
    <>
      <Header/>
      <div className={styles.main}>
          <div className="row py-3">
      {student.map((item) => {
          return (
            <>
                <div className="col-md-3 m-auto ">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        Name : <span>{item.name}</span>
                      </p>
                      <p>
                        Age : <span>{item.age}</span>
                      </p>
                      <p>
                        Class : <span>{item.class}</span>
                      </p>
                      {/* <button
                        className="btn btn-danger"
                        onClick={() => {
                            sendStudentDetails(item.id)
                        }}
                      > */}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                            sendStudentDetails('student_details',[item],'/Student_details',navigate);
                        }}
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
            </>
          );
        })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Navigate
