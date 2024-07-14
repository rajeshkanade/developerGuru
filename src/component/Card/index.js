

import React from "react";
import styles from "./Card.module.scss";

const Card=({studDetails,userDetails})=>{

  return <>
     <div className={styles.mainWrapper}>
                  {userDetails? userDetails?.map((item,index)=>{
                   return <div className={styles.card} key={index}> 
                   <p>Name: <span>{item.name}</span></p>
                   <p>Mobile: <span>{item.Mob}</span></p>
                   <p>Email: <span>{item.Email}</span></p>
               </div>
                }): studDetails?.map((item,index)=>{
                  return<div className={styles.card} key={index}>
                        <p>Name: <span>{item.name}</span></p>
                        <p>Mobile: <span>{item.Mob}</span></p>
                         <p>Email: <span>{item.Email}</span></p>
                     </div>
                })}
      </div>
  </>


}

export default Card;