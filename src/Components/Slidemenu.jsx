import React from 'react'
import "../styles/Slidemenu.css"
import { useNavigate } from 'react-router-dom';
import { faCaretDown, faHouse, faUserPlus, faWifi, faXmark, faTriangleExclamation, faMessage, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from './ThemeContext';

const Slidemenu = ({ isOpen, closeMenu, toggleTheme }) => {
  const { theme } = useTheme();

  const navigate = useNavigate()
  return (

    <div className={`sliding-menu ${isOpen ? 'open' : ''} themed-component ${theme}`}>
      <div className='menu-content'>
        <div id='cross-icon'>
          <FontAwesomeIcon size='2x' icon={faXmark} onClick={closeMenu} />
        </div>
        <ul>
          <div className='sidebartools' onClick={() => { navigate("/roomsdashboard") }}>
            <div className='siderbarcontent' >
              <FontAwesomeIcon icon={faHouse} />
              <li>Rooms</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='sidebartools' onClick={() => { navigate("/Guestfoam") }}>
            <div className='siderbarcontent'>
              <FontAwesomeIcon icon={faUserPlus}  />
              <li>Client</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='sidebartools' onClick={()=> { navigate('/GuestTable')}} >
            <div className='siderbarcontent'>
              <FontAwesomeIcon icon={faHouse} />
              <li>Client Data</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='sidebartools' >
            <div className='siderbarcontent'>
              <FontAwesomeIcon icon={faMoneyBill} />
              <li>Payment</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='sidebartools' >
            <div className='siderbarcontent'>
              <FontAwesomeIcon icon={faWifi} />
              <li>Wifi</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='sidebartools' >
            <div className='siderbarcontent'>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <li>Complains</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='sidebartools' >
            <div className='siderbarcontent'>
              <FontAwesomeIcon icon={faMessage} />
              <li>Feedback</li>
            </div>
            <div className='arrowdown'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className='siderbarcontent'>
            <li>More...</li>
          </div>
          <div>

          </div>

        </ul>

      </div>
    </div>

  )
}

export default Slidemenu