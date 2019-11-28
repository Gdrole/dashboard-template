import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col, Dropdown, NavItem, Card, Accordion, CardDeck, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLink from 'react-bootstrap/NavLink';
import { FaQuestionCircle } from 'react-icons/fa';
import { SideMenu, TopMenu, ChartCard } from './components';
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import globalStyles from './globalStyles';
import { ChartType } from './components/ChartCard/ChartCard';
import DataTable from './components/DataTable/DataTable';

const data = [
	{
		name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
	},
	{
		name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
	},
	{
		name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
	},
	{
		name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
	},
	{
		name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
	},
	{
		name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
	},
	{
		name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
	},
];

class App extends React.Component {
	render() {
		return (
			<div style={{ height: '100%' }}>
				<TopMenu />
				<Container fluid style={{ height: '100%' }}>
					<Row style={{ height: '100%' }}>
						<Col sm={2} className={"SideMenuContainer"} style={{ paddingLeft: 0, paddingRight: 0 }}>
							<SideMenu />
						</Col>
						<Col sm={10} className={"Main"}>
							<CardDeck>
								<ChartCard data={data} chartType={ChartType.Line} title={'Some title 1'} />
								<ChartCard data={data} chartType={ChartType.Bar} title={'Some title 2'} />
								<ChartCard data={data} chartType={ChartType.Line} title={'Some title 3'} />
							</CardDeck>
							<CardDeck>
								<ChartCard data={data} chartType={ChartType.Area} title={'Some title 4'} />
							</CardDeck>
							<div className={"TableContainer"}>
								<DataTable isEditable={true} data={[
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
									{
										Column_1: "Test",
										Column_2: "Test",
										Column_3: "Test",
										Column_4: "Test",
										Column_5: "Test",
										Column_6: "Test",
										Column_7: "Test",
									},
								]} />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
