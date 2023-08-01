import  { useEffect, useState } from 'react'

const UseFetch = (url) => {
    // console.log(url)
    const[data,setData] = useState(null)
    const[isPending,setIsPending]=useState(true)
    const[error,setError] = useState(null)
    useEffect(()=>{
        // const abortCont
        setTimeout(()=>{

            fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error("didn't contected")
                }
               return res.json()
            })
            .then((result)=>{
                setData(result)
                setIsPending(false)
                setError(null)
                console.log("hook",result)
            })
            .catch(err=>{
                setError("Error ...,\n please try again after some time")
                console.warn("error",err.message)
                setIsPending(false)
                
            })
        },1000)

        return () => console.log("clean up")
    },[url])
  return {data, isPending,error}
}

export default UseFetch
