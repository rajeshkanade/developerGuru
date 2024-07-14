import React from 'react'
// import "./MiddleCompo.css" 
import styles from "./MiddleCompo.module.scss";
const MiddleCompo = (props) => {
 
  return (
    <>
        <div className={styles.container}>
            <p>This is the {props.compoName} Section</p>
        </div> 
    </>
  )
}

export default MiddleCompo
