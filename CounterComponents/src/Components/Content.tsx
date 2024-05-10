import { useState } from "react"

const Content = () => {

    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount((counterI) => counterI + 1);
    }

    const countDown = () => {
        if(count === 0){
            return;
        }
        setCount((counterI) => counterI - 1);
    }

    const restart = () => {
        setCount(0)
    }



  return (
    <>
    <main className="background">
        <h1 className="">Counter Component Project</h1>
        <p className="counterStyle">Counter : {count}</p>
        <button onClick={countUp} className="btn btn-primary backShadow" style={{margin:"21px", justifyContent:"space-around"}}>Count Up</button>
      <button onClick={countDown} className="btn btn-danger" style={{margin:"21px"}}>Count Down</button>
      <button onClick={restart} className="btn btn-warning" style={{margin:"21px"}}>Reset</button>
    </main>
    </>
  )
}

export default Content