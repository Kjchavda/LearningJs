
import { use, useState, useCallback, useEffect, useRef} from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed){ str+="1234567890"};
    if(symbolsAllowed){str+="-@#$%^&*()!"};
    for(let i=1; i<=length; i++){
      let char = Math.floor((Math.random()*str.length + 1));
      pass += str.charAt(char);
    }


    setPassword(pass);

  }, [length, numberAllowed, symbolsAllowed, setPassword]);
  

  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, symbolsAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white my-3 rounded-2xl ' 
          placeholder='password'
          readOnly
          ref={passwordRef}/>

          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-1 my-3 shrink-0 rounded-2xl cursor-pointer'> Copy </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=> {setNumberAllowed((prev) => !prev)}} />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={symbolsAllowed}
            id='symbolsInput'
            onChange={()=> {setSymbolsAllowed((prev) => !prev)}} />
            <label htmlFor="symbolsInput"> Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
