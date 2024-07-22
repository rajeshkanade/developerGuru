import { useEffect, useState } from "react";
import styles from "./ContactUsCard.module.scss";

const ContactUsCard = ({ student }) => {
  const [students, setStudents] = useState([]);

  console.log(students);
  useEffect(() => {
    setStudents(student);
  }, []);
  return (
    <>
      <div className={`${styles.main} pt-5 px-3`}>
        <h1 className="text-center text-uppercase text-white">Child Element</h1>
        <div className="row">
          {console.log("from jsx : ", student)}
          {students.map((item, index) => {
            return (
              <div className="col-md-3">
                <div className="card bg-light" key={index}>
                  <div className="card-body">
                    <p>
                      Name : <span>{item.name}</span>
                    </p>
                    <p>
                      Age : <span>{item.age}</span>
                    </p>
                    <p>
                      Class : <span>{item.class}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactUsCard;
