import React from 'react'

const FilterDropdown = () => {
  return (
    <div className='dropdown'>
        <input type="text" className='inp1' placeholder='Refine By'/>
      <a href="./Home2"></a> <input type="text" placeholder='Date of registration              >' />
      <input type="text" placeholder='Vendor score                        >' />
      <input type="text" placeholder='Rating                                    >' />
      <input type="text" placeholder='Status                                    >' />
      <input type="text" placeholder='Type of business                 >' />
      <input type="text" placeholder='Location                               >' />
      <input type="text" placeholder='Assign to                              >' />
    </div>
  )
}

export default FilterDropdown
