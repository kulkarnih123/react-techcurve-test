import React, {useState} from 'react'
import { MdFilterList } from "react-icons/md";
import FilterDropdown from './FilterDropdown'


const Home = () => {

    const[isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
  return (
    <div className='filter'>
      <button onClick={toggleDropdown} className='Filter_btn'>
        <MdFilterList /> Filters
      </button>
      {isDropdownOpen && <FilterDropdown/>}
    </div>
  )
}

export default Home
