import react,{useEffect, useState} from 'react';
import Header from "../../../component/Header";
import MiddleCompo from '../../../component/MiddleCompo';
import Footer from '../../../component/Footer';


const Home = () =>{
    //usestate hooks is used to set the difault value to the variable and we can change it at any instance. 

    const [count,setCount] = useState(0) // number value 
    const [str,setStr] = useState('rajesh') // string value 
    const [bool,setBool] = useState(true) // boolean value 
    const [arr ,setArr] = useState(['rajesh',1,'nagesh',true]) // array value 
    const [obj,setObj] = useState({'one' : 'Rajesh','two' : 'Nagesh'}); // obj value 
  
    // basically useEffect is automatically called when the page render. 

    const [studentName,setStudentName] = useState('rajesh');
    const [studentFlag,setStudentFlag] = useState(false);
    useEffect(()=>{
       
    })

    const fun1 = () => {
        console.log("hello from the function 1")
    }
    
    const main = {
        width : '100%',
        height : '80vh',
        display : "flex", 
        justifyContent : "center",
        alignItems : "center",
        flexDirection : 'column'
    }

    const addCount = () => {
        setCount( (count) =>{
            return count = count + 1;
        })
    }
    
    const changeName = () =>{
        if(studentFlag){

             setStudentName('nagesh') 
             setStudentFlag(false)
        }
        else{
            setStudentName('ganesh')
            setStudentFlag(true)
        }
        // setStudentName('nagesh')
    }
    return(
        <>
            <Header/>
            {/* <MiddleCompo compoName="Home"/> */}

            <div style={main}>
                <h1>{count}</h1>
                <h1>hello my name is {studentName}</h1>
                <button className="btn btn-danger " onClick={()=>{addCount()}}>Add</button>
                <button className='btn btn-success' onClick={()=>{changeName()}}>Change</button>
             </div>
            <Footer/>
        </>
    )
}

export default Home;