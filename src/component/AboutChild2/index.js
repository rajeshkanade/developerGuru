import React from "react";
import AboutChild3 from "../AboutChild3";
import styles from './AboutChild2.module.scss'

const AboutChild2 = ({student,setNewCopyStudent}) => {
  console.log('from child 2 : ' , student)
  return (
    <>
      <h1>This is child 2</h1>
      <div className={styles.child3}>
        <AboutChild3 student={student} setNewCopyStudent={setNewCopyStudent}/>
      </div>
    </>
  );
};

export default AboutChild2;
