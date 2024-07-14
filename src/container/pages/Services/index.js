import react, { useState,useEffect } from 'react';
import Header from "../../../component/Header";
import MiddleCompo from '../../../component/MiddleCompo';
import Footer from '../../../component/Footer';
import styles from "./Services.module.scss";
import Card from "../../../component/Card";



const Services = () =>{
    const [details, setDetails] = useState('');
    const [studDetails,setStudeDetails]=useState();

   const student_Details=[
               {'name':'Sanket Patil','Mob':888888888,'Email':'Sanket@gmail.com'},
               {'name':'Nagesh Patil','Mob':888844545,'Email':'Sanket@gmail.com'},
               {'name':'Rajesh Patil','Mob':888848956,'Email':'Sanket@gmail.com'},
               {'name':'Shubham Patil','Mob':888885692,'Email':'Sanket@gmail.com'},
            
                    ]; 

    useEffect(()=>{
       setStudeDetails(student_Details);
    },[])

       return(
        <>
            <Header/>
           <Card studDetails={studDetails}/>
             {/* <div className={styles.main}>
                {studDetails.map((item)=>{
                   return <div className={styles.card}> 
                   <p>Name: <span>{item.name}</span></p>
                   <p>Mobile: <span>{item.Mob}</span></p>
                   <p>Email: <span>{item.Email}</span></p>
               </div>
                })}
            </div> */}
          
            {/* <Footer/> */}
        </>
    )
}

export default Services;