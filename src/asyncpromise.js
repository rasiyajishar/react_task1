import React from 'react'

function Asyncpromise() {
    const myPromise= new Promise((resolve,reject)=>{
        const success = true;
        setTimeout(()=>{
            if(success){
                resolve("operation success")
            }else{
                reject("failed")
            }
        },2000)
    });
   const runasync = async()=>{
    try {
        
        const message = await myPromise
        console.log(message);
    } catch (error) {
        console.error(error)
    }
   }
   runasync()
  return (
    <div>asyncpromise</div>
  )
}

export default Asyncpromise