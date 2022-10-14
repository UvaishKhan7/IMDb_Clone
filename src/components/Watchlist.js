import React from 'react';

function Watchlist(props) {
  // if (!props.user){
  //   return <Navigate to='/signin' />
  // }
  return (
    <div style={{height:"100vh"}}>
      <h1>Hey {props.user} ! This is your watchlist</h1>
    </div>
  )
}

export default Watchlist;
