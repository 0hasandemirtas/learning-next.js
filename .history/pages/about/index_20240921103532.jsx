import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"
const Index= () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='bg-white h-max text-red-600 font-dancing text-center'>About 
      </div>
      <div>
        <button className='btn-primary  uppercase' onClick={setIsOpen(true)}>test</button>
      </div>
     {first && <OutsideClickHandler>
      <div className="font-bold">deneme</div>
      </OutsideClickHandler>}
    </>
  )
}

export default Index
