import react, { useState } from 'react';
import Header from "../../../component/Header";
import MiddleCompo from '../../../component/MiddleCompo';
import Footer from '../../../component/Footer';


const Services = () =>{
    const [details, setDetails] = useState('')
    const getDetails = () =>{
        
    }
    return(
        <>
            <Header/>
            {/* <MiddleCompo compoName="Services"/> */}
            <div className="main">

            </div>
            <Footer/>
        </>
    )
}

export default Services;