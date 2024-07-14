import react from 'react';
import Header from "../../../component/Header";
import MiddleCompo from '../../../component/MiddleCompo';
import Footer from '../../../component/Footer';

const About = () =>{
    return(
        <>
            <Header/>
            <MiddleCompo style="colorRed" compoName="About"/>
            <Footer/>
        </>
    )
}

export default About;