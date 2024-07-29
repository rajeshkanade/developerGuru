export const getData = async() =>{

    // const response = await getApiData();
    const data = await fetch('https://freetestapi.com/api/v1/students')
    .then((response)=>response.json())
    .then((json)=>{return json})


    console.log("data : " , data)
    return data;
    // console.log(response)
}