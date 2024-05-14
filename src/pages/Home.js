import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

const UserContext = createContext();

function Home() {

    const [color,setColor] = useState("");
    const prevColor = useRef('');
    const [count,setCount] = useState(-1);

    useEffect(() => setCount((c) => (c+1)),[color]);

  return (
    <UserContext.Provider value={color}>
      <h1 className='text-3xl text-center'>Home</h1>
      <p>I've changed the colour {count} times.</p>
      <p>Home favourite colour is {color}.</p>
      <p>Previous colour is {prevColor.current}</p>

      <button className='border-2 px-2 border-solid border-gray-950 rounded m-2' onClick={() => {
        const prev = color;
        setColor("blue")
        prevColor.current = prev;
        }}>Blue</button>
      <button className='px-2 border-solid border-gray-950 rounded border-2 m-2' onClick={() => {
        const prev = color;
        setColor("green")
        prevColor.current = prev;
        }}>Green</button>
      <button className='px-2 border-solid border-gray-950 rounded border-2 m-2' onClick={() => {
        const prev = color;
        setColor("pink")
        prevColor.current = prev;
        }}>Pink</button>
      <button className='px-2 border-solid border-gray-950 rounded border-2 m-2' onClick={() => {
        const prev = color;
        setColor("yellow")
        prevColor.current = prev;
        }}>Yellow</button>
      <Home1 />
    </UserContext.Provider>
  )
}

function Home1() {
  return (
    <>
      <p>Home1 favourite colour is black.</p>
      <Home2 />
    </>
  )
}
function Home2() {
  return (
    <>
      <p>Home2 favourite colour is orange.</p>
      <Home3 />
    </>
  )
}
function Home3() {
  return (
    <>
      <p>Home3 favourite colour is brown.</p>
      <Home4 />
    </>
  )
}
function Home4() {

  const color = useContext(UserContext);

  return (
    <>
      <p>Home4 favourite colour is {color}.</p>
    </>
  )
}

export default Home
