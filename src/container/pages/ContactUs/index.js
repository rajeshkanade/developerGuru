import react, { useEffect, useState } from "react";
import Header from "../../../component/Header";
import MiddleCompo from "../../../component/MiddleCompo";
import Footer from "../../../component/Footer";
import styles from "./ContactUs.module.scss";
import ContactUsCard from "../../../component/ContactUsCard";
import {studentDetails} from '../../../constant'


const ContactUs = () => {
const [student, setStudent] = useState([]);



console.log(student)
useEffect(()=>{
    setStudent(studentDetails)
},[])
  
  return (    <>
      <Header />
      {/* <MiddleCompo compoName="ContactUs"/> */}
      <div className={`${styles.main} pt-5 px-3`}>
        <div className="row">

        {console.log('from jsx : ' , student)}
        {
            student.map((item,index)=>{
                return <div className="col-md-3">

                <div className="card bg-light" key={index}>
                <div className="card-body">
                  <p>
                    Name : <span>{item.name}</span>
                  </p>
                  <p>
                    Age : <span>{item.age}</span>
                  </p>
                  <p>
                    Class : <span>{item.class}</span>
                  </p>
                </div>
                </div>
              </div>            })
        }
        </div>

        {/* <ContactUsCard student={student}/> */}
      </div> 
      

      <Footer />
    </>
  );
};

export default ContactUs;
