import react, { useEffect,useState } from 'react';
import Header from "../../../component/Header";
import MiddleCompo from '../../../component/MiddleCompo';
import Footer from '../../../component/Footer';
import Card from '../../../component/Card';

const About = () =>{

    const[userDetails,setUserDetails]=useState();
    console.log('userDetails@@##1234',userDetails);
    const Users_Details=[
        {'name':'Sanket kumar','Mob':888888888,'Email':'Sanket@gmail.com'},
        {'name':'Nagesh kumar','Mob':888844545,'Email':'Sanket@gmail.com'},
        {'name':'Rajesh kumar','Mob':888848956,'Email':'Sanket@gmail.com'},
        {'name':'Shubham kumar','Mob':888885692,'Email':'Sanket@gmail.com'},
                   ]; 

    useEffect(()=>{
        setUserDetails(Users_Details);
    },[])

    return(
        <>
            <Header/>
            <Card userDetails={userDetails}/>
            {/* <MiddleCompo style="colorRed" compoName="About"/> */}
            {/* <Footer/> */}
        </>
    )
}

export default About;