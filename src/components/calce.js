import React, { useRef, useState } from 'react'
import style from './costum.module.css'

export default function Calce() {
    const [count,setcount] = useState(0);
    const [cou,setcou] = useState(0);
    const [c,setc] = useState(0);
    const inputRef = useRef();
    const input = useRef();
    const inp = useRef();
    const a1 =useRef();
    const a2 =useRef();
    const a3 =useRef();
    const b1 =useRef();
    const b2 =useRef();

    function snow(a,ref)
    {
      inputRef.current.style.backgroundColor="rgba(0,0,0,0)";
      input.current.style.backgroundColor="rgba(0,0,0,0)";
      inp.current.style.backgroundColor="rgba(0,0,0,0)"
      setcount(a);
      ref.current.style.backgroundColor="red";
    }
   
    function ram(a,raj)
    {
      a1.current.style.backgroundColor="rgba(0,0,0,0)";
      a2.current.style.backgroundColor="rgba(0,0,0,0)";
      a3.current.style.backgroundColor="rgba(0,0,0,0)";
      setcou(a);
      // if(a==0 )
      // a1.current.style.backgroundColor="red"
      // else if(a==200)
      // a2.current.style.backgroundColor="red"
      // else
      // a3.current.style.backgroundColor="red"

      raj.current.style.backgroundColor="red"

    }
    function shyam(a,rakesh)
    {
      b1.current.style.backgroundColor="rgba(0,0,0,0)";
      b2.current.style.backgroundColor="rgba(0,0,0,0)";
      setc(a);
      // if(a==0 )
      // b1.current.style.backgroundColor="red"
      // else
      // b2.current.style.backgroundColor="red"
      rakesh.current.style.backgroundColor="red"
    }
  return (
    <div className={style.margin}>
        <div className={style.box}>
            <h1>SpaceShip configurator</h1>
            <div className={style.inner}>
                <h2>select color</h2>
                <span className={style.box2} onClick={()=>snow(0,inputRef)} ref={inputRef}> Snow 0   &#8364;</span>
                <span className={style.box2} onClick={()=>snow(100,input)} ref={input}> Valcano +100  &#8364;</span>
                <span className={style.box2} onClick={()=>snow(150,inp)} ref={inp}> Sky +150 &#8364;</span>
        
                <h2>select Power</h2>
                <span className={style.box2} onClick={()=>ram(0,a1)}  ref={a1}>100mw 0 &#8364;</span>
                <span className={style.box2} onClick={()=>ram(200,a2)}  ref={a2}>150mw 200 &#8364;</span>
                <span className={style.box2} onClick={()=>ram(500,a3)}  ref={a3}>200mw 500 &#8364;</span>
       
                 <h2>wrap drive</h2>
                <span className={style.box2} onClick={()=>shyam(0,b1)} ref={b1}>0 &#8364; No</span>
                <span className={style.box2} onClick={()=>shyam(1000,b2)} ref={b2}>1000 &#8364; Yes</span>
               
            </div>
            <div  className={style.inner2}>
           <h2>Base price <span>1000 &#8364;</span></h2>
           <h2>Color <span>{count}</span></h2>
           <h2>Power <span>{cou}</span></h2>
           <h2>Wrap drive <span>{c}</span></h2>
           <hr/>
           <h2>Total <span>{count + cou + c + 1000}</span></h2>
            </div>
        </div>
    </div>
  )
}
