import react, { useEffect, useState } from 'react';
import Header from "../../../component/Header";
import MiddleCompo from '../../../component/MiddleCompo';
import Footer from '../../../component/Footer';
import styles from "./About.module.scss"

import { studentDetails } from '../../../constant';
import AboutChild1 from '../../../component/AboutChild1';


const About = () =>{
    const [student, setStudent] = useState([])
    const [newCopyStudent, setNewCopyStudent] = useState([])

    console.log(student)
    console.log('new copy student : ' , newCopyStudent)
    useEffect(() => {
        setStudent(studentDetails)


    }, [])

    if(!student.length) return <div>Loading ...</div>
    
    return(
        <>
            <Header/>
            {/* <MiddleCompo style="colorRed" compoName="About"/> */}
            <div className={styles.main}>
                <div className={styles.parent}>
                    <h1>This is the parent </h1>
                    <p>Data from child 3 to parent : {newCopyStudent.slice(2,3).map((item)=>{
                        return item.name
                    })}</p>
                    <div className={styles.child1}>
                        <AboutChild1 student={student} setNewCopyStudent={setNewCopyStudent}/>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;