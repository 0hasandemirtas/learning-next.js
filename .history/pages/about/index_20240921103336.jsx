import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"
const Index= () => {
  const [first, setfirst] = useState(false)
  return (
    <>
      <div className='bg-white h-max text-red-600 font-dancing text-center'>About 
      </div>
      <div>
        <button className='btn-primary  uppercase' onClick={setfirst(true)}>test</button>
      </div>
     
    </>
  )
}

export default Index
