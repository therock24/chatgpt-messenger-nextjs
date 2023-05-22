import React from 'react'
import NewChat from './NewChat'

function Sidebar() {
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <div>
                {/* NewChat */}
                <NewChat />
                <div>
                    {/* Model Selections */}
                </div>
                {/* Map through the ChatRows */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar