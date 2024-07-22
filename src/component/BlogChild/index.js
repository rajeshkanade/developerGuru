import React from 'react'

const BlogChild = ({count , childCount}) => {
    // const [childUpdate, setChildUpdate] = useState(0)
    // const childCount = () =>{
    //     setChildUpdate(childCount + 2)
    // }
  return (
    <>
      <h1>This is Blog child</h1>
      <h1>{count}</h1>
      <button className='btn btn-danger' onClick={childCount}>Update</button>
    </>
  )
}

export default BlogChild
