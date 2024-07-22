import React, { useEffect, useState } from 'react'
import { studentDetails } from '../../constant'

const BlogChild2 = ({student,setStudent1}) => {

    console.log('this is from child 2 : ',student);


    
    useEffect(() => {
        setStudent1(studentDetails);
    }, [setStudent1])
    
    if(!student.length) return null;

    

  return (
    <>
      <h1>This is Blog child 2</h1>
      <h1>{student[0].name} (from parent )</h1>
    </>
  )
}

export default BlogChild2
