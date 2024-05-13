
import { Dropdown, Nav, Navbar } from 'react-bootstrap'; // Import necessary Bootstrap components
import { CgProfile } from "react-icons/cg";
const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ height: '60px', display: 'flex', justifyContent: 'end', paddingRight: '80px' }}>
      {/* <Navbar.Brand className="color-light ">Navbar</Navbar.Brand> */}

      <Nav className="ml-auto d-flex justify-content-end"> {/* ml-auto pushes items to the right */}
        <CgProfile className="text-dark fs-3 pt-1" style={{ width: '37px' }} />
        <i className="bi bi-person-circle bg-dark " style={{ fontSize: '1.5rem', color: 'dark' }}></i>
        <Dropdown >
          <Dropdown.Toggle variant="ligth" id="dropdown-basic" >


          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
