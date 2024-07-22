import React from "react";
import AboutChild2 from "../AboutChild2";
import styles from './AboutChild1.module.scss'
const AboutChild1 = ({student , setNewCopyStudent}) => {
    console.log('from child 1 : ' , student)
  return (
    <>
      <h1>This is child 1</h1>
      <div className={styles.child2}>
        <AboutChild2 student={student} setNewCopyStudent={setNewCopyStudent} />
       
      </div>
    </>
  );
};

export default AboutChild1;
