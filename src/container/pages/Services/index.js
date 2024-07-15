import react, { useEffect, useState } from "react";
import Header from "../../../component/Header";
import MiddleCompo from "../../../component/MiddleCompo";
import Footer from "../../../component/Footer";
import styles from "./Services.module.scss";
import ServicesCard from "../../../component/ServicesCard";

const Services = () => {
  const [details, setDetails] = useState("");
  const studentDetails = [
    { name: "rajesh", mob: 7385028130, address: "bhenda" },
    { name: "nagesh", mob: 7709458130, address: "bhenda" },
    { name: "dharm", mob: 8856881702, address: "bhenda" },
    { name: "gani", mob: 9096220424, address: "bhenda" },
    { name: "bhairav", mob: 9834232180, address: "nagapur" },
  ];
  console.log("details value ", details);
  useEffect(() => {
    console.log("hello from useEffect");
    setDetails(studentDetails);
  }, []);
  return (
    <>
      <Header />
      {/* <MiddleCompo compoName="Services"/> */}
      {/* <div className={styles.main}>
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
      </div> */}
      <ServicesCard studentDetails={studentDetails}/>
      <Footer />
    </>
  );
};

export default Services;
