

export const sendStudentDetails = (isStorgeKey,data,path,navigate) =>{

    navigate(path);
    localStorage.setItem(isStorgeKey,JSON.stringify(data))

    console.log(isStorgeKey)
    console.log(data)
    console.log(path)
    console.log(navigate)

}