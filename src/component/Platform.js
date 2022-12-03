import React from 'react'


export const Platform = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position)=> console.log(position),
        err => console.log(err)
         
    )
  return (
    <div>
        Platform
        </div>
  )
}
