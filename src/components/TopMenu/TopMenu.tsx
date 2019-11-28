import React from 'react';
import './TopMenu.css';
import { Navbar } from 'react-bootstrap';
import globalStyles from '../../globalStyles';


class TopMenu extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className={"TopMenuContainer"}>
                <Navbar.Brand style={{ color: globalStyles.colors.white }} href="#home">My dashboard</Navbar.Brand>
            </Navbar>
        );
    }
}

export default TopMenu;
