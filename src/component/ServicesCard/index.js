import React from 'react'
import styles from './ServicesCard.module.scss'

const ServicesCard = ({studentDetails}) => {
  return (
    <>
       <div className={styles.main}>
        <div className="row">
          {studentDetails.map((item) => {
            return (
              <div className="card w-25 bg-dark m-2 text-white">
                <div className="card-body">
                  <p>Name : {item.name}</p>
                  <p>Name : {item.mob}</p>
                  <p>Name : {item.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default ServicesCard
