import React from 'react'

function Fetchapi() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))

  return (
    <div>fetchapi</div>
  )
}

export default Fetchapi