import React, { useEffect, useState } from 'react'

const AboutChild3 = ({student , setNewCopyStudent}) => {
  const [copyStudent, setCopyStudent] = useState(student)
  console.log('from child 3 : ', copyStudent)
  useEffect(() => {
    setCopyStudent(student)
    setNewCopyStudent(copyStudent)
  }, [copyStudent])
  
  return (
    <>
     <h1>This is Child 3</h1>
     <p>Data from parent to 3 child : {copyStudent.slice(0,1).map((item)=>{
      return item.name
     })}</p>

    </>
  )
}

export default AboutChild3
