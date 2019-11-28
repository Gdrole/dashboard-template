import React from 'react';
import logo from './logo.svg';
import './SideMenu.css';
import { Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuestionCircle } from 'react-icons/fa';
import globalStyles from '../../globalStyles';

class SideMenu extends React.Component {
    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column SideMenu">
                <header className={"SideMenuHeader"}>
                    HEADER 1
  								</header>
                <Nav.Link className={"SideMenuItem"} eventKey="link-1" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 1
									</span>
                </Nav.Link>
                <Nav.Link className={"SideMenuItem"} eventKey="link-2" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 2
									</span>
                </Nav.Link>
                <Nav.Link className={"SideMenuItem"} eventKey="link-3" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 3
									</span>
                </Nav.Link>
                <br />
                <header className={"SideMenuHeader"}>
                    HEADER 2
  								</header>
                <Nav.Link className={"SideMenuItem"} href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 4
									</span>
                </Nav.Link>
                <Nav.Link className={"SideMenuItem"} eventKey="link-4" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 5
									</span>
                </Nav.Link>
                <Nav.Link className={"SideMenuItem"} eventKey="link-5" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 6
									</span>
                </Nav.Link>
                <br />
                <header className={"SideMenuHeader"}>
                    HEADER 3
  								</header>
                <Nav.Link className={"SideMenuItem"} eventKey="link-6" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 7
									</span>
                </Nav.Link>
                <Nav.Link className={"SideMenuItem"} eventKey="link-7" href="#">
                    <FaQuestionCircle color={globalStyles.colors.grey} style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <span>
                        Page 8
									</span>
                </Nav.Link>
            </Nav>
        );
    }
}

export default SideMenu;
