import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function DropDown({options,type}) {

    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState(type)
    const departments = ['Faculty1', 'Faculty2', 'Faculty3', 'Faculty4']

    return (
        <div className='relative flex flex-col items-center w-full h-auto rounded'>
            <button className='p-4 w-full h-12 flex items-center justify-between font-normal text-[16px] rounded-lg tracking-wider border-[1px] border-drop-down-border focus:border-secondary focus:border-2 active:border-white duration-300 active:text-white '
                onClick={() => setIsOpen(!isOpen)}
            >
                {option}
                {isOpen ? (<FaAngleUp size={18}  />): (<FaAngleDown  size={18}/>)
            }
            </button>
            {isOpen && (
                <div className='absolute top-16 w-full rounded-lg z-20 bg-tertiary-bg'>
                    {options.map((option, index) => (
                        <div className='p-4 border-b border-white hover:bg-secondary hover:text-white cursor-pointer' key={index}
                          onClick={() => setOption(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropDown
