import react, { useEffect, useState } from "react";
import Header from "../../../component/Header";
import MiddleCompo from "../../../component/MiddleCompo";
import Footer from "../../../component/Footer";
import BlogChild from "../../../component/BlogChild";
import styles from "./Blog.module.scss";
import BlogChild2 from "../../../component/BlogChild2";
import { studentDetails } from "../../../constant"; 

const Blog = () => {
  const [count, setCount] = useState(0);
  const [childCount1, setChildCount1] = useState(0);
  const [student , setStudent] = useState([]);
  const [student1 , setStudent1] = useState([])


  console.log('this is student  data : ' ,student)
  console.log('this is student 1  data : ' ,student1)

  useEffect(() => {
    setStudent(studentDetails);
  }, []);

  useEffect(()=>{
    console.log('this is from the parent : ', student)
  },[student])

//   if(!student1.length) return null;

  const changeCount = () => {
    setCount(count + 1);
  };

  const childCount = () => {
    setChildCount1(childCount1 + 2);
  };

  return (
    <>
      <Header />                                                                   
      {/* <MiddleCompo compoName="Blog"/> */}
      <div className={styles.main}>
          <div className="row py-5">
            <h1 className="text-center text-white">Passing Data on Event Call</h1>
            {/* this is parent */}
            <div className={`col-md-8 bg-danger  ${styles.sub}`}>
              <h1>This is Parent Element</h1>
              <h1>{childCount1}</h1>
              <button className="btn btn-primary" onClick={changeCount}>
                Channge
              </button>
            </div>
            {/* this is child */}
            <div className={`col-md-4 bg-primary ${styles.sub}`}>
              <BlogChild count={count} childCount={childCount} />
            </div>
          </div>


    {/* Second Demo   */}    
          <div className="row py-5">
            <h1 className="text-center text-white">Passing Data Directly</h1>
            {/* this is parent */}
            <div className={`col-md-8 bg-danger  ${styles.sub}`}>
              <h1>This is Parent Element</h1>
              <h1>{student1.slice(0,1).map((item,index)=>{
                return item.name;
              })}</h1>
              
            </div>
            {/* this is child */}
            <div className={`col-md-4 bg-primary ${styles.sub}`}>
              <BlogChild2 student={student} setStudent1={setStudent1}/>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Blog;
