import react, { useEffect, useState } from "react";
import Header from "../../../component/Header";
import MiddleCompo from "../../../component/MiddleCompo";
import Footer from "../../../component/Footer";
import styles from "./Portfolio.module.scss";
import { studentDetails } from "../../../constant";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  console.log(student);

  useEffect(() => {
    setStudent(studentDetails);
  }, []);

  return (
    <>
      <Header />
      {/* <MiddleCompo compoName="Portfolio"/> */}
      <div className={styles.main}>
          {student.map((item) => {
              return (
                  <>
                <div className="row py-3">
                <div className="col-md-3 m-auto ">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        Name : <span>{item.name}</span>
                      </p>
                      <p>
                        Age : <span>{item.age}</span>
                      </p>
                      <p>
                        Class : <span>{item.class}</span>
                      </p>
                      <button className="btn btn-danger" onClick={()=>{navigate(`/StudentFullDetails/${item.id}`)}}>More Details</button>
                    </div>
                  </div>
                </div>
        </div>
              </>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
