import React from 'react'

interface Props {
    open: boolean
}

const DropDownMenu = ({open}: Props) => {
  return (
    <div id='' className={`flex fixed top-16 flex-col justify-center items-center p-4 bg-white border-primary_green border-2 rounded-md gap-3 DropDown ${open ? 'content-open' : null}`}>
                    <h2 className="">Career</h2>
                    <h2>FAQs</h2>
                    <h2>Contact</h2>
    </div>  
    )
}

export default DropDownMenu