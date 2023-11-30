
import { useState, useEffect, useRef  } from 'react';
import { HiArrowsUpDown } from "react-icons/hi2";

import './Dropdown.css';

function Dropdown({options}) {
  const valueLocal = localStorage.getItem('selectedId');
  const initialSelectedId = valueLocal ? valueLocal : options.selectedId;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(initialSelectedId);
  const arrowRef = useRef(null);

  const toggleDropdown = () =>{
    setIsOpen(!isOpen);

  }
  const selectItem = (itemId) =>{
    setSelectedId(itemId)
    setIsOpen(!isOpen)
    console.log('selectedId:', itemId);
    localStorage.setItem('selectedId', itemId.toString());
  }

  useEffect(() => {
    if (isOpen) {
      arrowRef.current.classList.add('rotate');
    } else {
      arrowRef.current.classList.remove('rotate');
    }
  }, [isOpen]);


  return (
    <div className='dropdown'>
      <div className="dropdown__select-item" onClick={() => toggleDropdown()}>
      {
        options.items.find(item => item.id === selectedId).label
      }
        <span ref={arrowRef} className={isOpen ? 'rotate' : ''}>
          <HiArrowsUpDown />
        </span>
        
      </div>
      {
        isOpen && (
          <div className="dropdown__list">
            {
              options.items.map(item =>(
                <div className="dropdown__item" key={item.id} onClick={()=> selectItem(item.id)}>
                  {item.label}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
export default Dropdown