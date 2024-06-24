import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import './selectAvatar.scss'
import { useState } from 'react'

export default function SelectAvatar() {
    const [num, setNum] = useState(1)
    const handleClick = (number) => {
        if ((number === -1 && num === 1) || (number === 1 && num === 10)) return
        setNum(num + number)
    }
    return (
        <div className='SelectAvatar'>
            <p>בחר</p>
            <div className='container'>

                <button type='button' onClick={()=>{ handleClick(-1)}} className={`arrowButton ${num == 1 ? "disabled" : ""}`}> <FaArrowAltCircleRight /></button>
                {/* <div className="avatarContainer">{[1,2,3,4,5,6,7,8,9,10].map(e=><div key={"avatarIcon-" + e} className={'avatarIcon avatarIcon-'+e}> </div>)} </div> */}

                <div className={`avatarIcon avatar-` + num}> </div>
                <button type='button' onClick={()=>{ handleClick(1)}}  className={`arrowButton ${num == 10 ? "disabled" : ""}`}> <FaArrowAltCircleLeft /></button>
            </div>
        </div>
    )
}
