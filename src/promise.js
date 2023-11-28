import React from 'react'

const MyPromisecomponent = () => {

    const myPromise = new Promise((resolve,reject)=>{
        const success = true;
        setTimeout(()=>{
            if(success){
                resolve("operation succeeded")
            }
            else{
                reject("operation failed")
            }
        },2000)


    })

    myPromise.then((message)=>{
        console.log(message)
    })
    .catch((message)=>{
        console.error(message);
    })
  return (
    <div></div>
  )
}

export default MyPromisecomponent