import React from 'react'

function Check() {
  let userData = JSON.parse(localStorage.getItem('userData'));
  console.log('userData');
  if(userData){
    console.log('Name exists');
  }else{
    console.log('Name is not found');
  }
  console.log('abc')
  return (
    <div>
  check();    
    </div>
  )
}
export default Check;