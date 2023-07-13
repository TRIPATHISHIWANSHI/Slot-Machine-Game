import React from 'react';
import './App.css';
function SlotM(props){
let x=props.x;
let y=props.y;
let z=props.z;
  if((x===y && y===z)){
    return(
      <>
      <div className='slot_inner'>
        <h1>{x} {y} {z}</h1>
        <h1>This is matching</h1>
        <hr/>
      </div>
      </>
    );
  }else{
  return(
    <>
    <div className='slot_inner'>
      <h1>{x} {y} {z}</h1>
      <h1>This is not matching</h1>
      <hr/>
    </div>
    </>
  );
}
};
const App=()=>{
  return(
    <>
    <h1 className='heading_style'> Welcome to <span style={{fontWeight:"bold"}}>SLOT MACHINE GAME</span></h1>
      <div className='slot_machine'>
      <SlotM x='😄' y='😄' z='😄' />
      <hr/>
      <SlotM x='😄' y=' 😈' z='🥰' />
      <hr/>
      <SlotM x=' 🔥' y=' 💯' z=' 🔫' />
      <hr/>
      <SlotM x='😄' y=' 😄' z=' 😄' />
      <hr/>
      </div>
    </>
  )
};
export default App;
