import React from 'react';
import './ChartCard.css';
import globalStyles from '../../globalStyles';
import { Card } from 'react-bootstrap';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip, AreaChart, Area, BarChart, Bar } from 'recharts';

export interface ChartData {

}

export enum ChartType {
    Pie,
    Line,
    Bar,
    Area
}

interface Props {
    title: string;
    chartType: ChartType;
    data: Array<ChartData>;

}

interface State {

}

class ChartCard extends React.Component<Props, State> {

    private getKeys() {
        return Object.keys(this.props.data[0]);
    }

    private getXAxis() {
        const keys = this.getKeys();
        return (
            <XAxis dataKey={keys[0]} tick={{ fill: globalStyles.colors.white, fontSize: 14 }} />
        );
    }

    private getLines() {
        const keys = this.getKeys();
        return keys.map((key, index) => {
            if (index !== 0) {
                return (
                    <Line type="monotone" dataKey={key} stroke={globalStyles.chartColors[index]} activeDot={{ r: 8 }} />
                );
            }
        });
    }

    private getAreas() {
        const keys = this.getKeys();
        return keys.map((key, index) => {
            if (index !== 0) {
                return (
                    <Area type="monotone" dataKey={key} stackId="1" stroke={globalStyles.chartColors[index]} fill={globalStyles.chartColors[index]} />
                );
            }
        });
    }

    private getBars() {
        const keys = this.getKeys();
        return keys.map((key, index) => {
            if (index !== 0) {
                return (
                    <Bar dataKey={key} fill={globalStyles.chartColors[index]} />
                );
            }
        });
    }

    private getChartType() {
        if (this.props.chartType === ChartType.Line) {
            return (
                <ResponsiveContainer height={300}>
                    <LineChart
                        data={this.props.data}
                        margin={{
                            top: 5, right: 5, left: 5, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        {this.getXAxis()}
                        <YAxis tick={{ fill: globalStyles.colors.white, fontSize: 14 }} />
                        <Tooltip />
                        <Legend />
                        {this.getLines()}
                    </LineChart>
                </ResponsiveContainer>
            );
        }
        else if (this.props.chartType === ChartType.Area) {
            return (
                <ResponsiveContainer height={300}>
                    <AreaChart
                        data={this.props.data}
                        margin={{
                            top: 5, right: 5, left: 5, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {this.getXAxis()}
                        <YAxis tick={{ fill: globalStyles.colors.white, fontSize: 14 }} />
                        <Tooltip />
                        {this.getAreas()}
                    </AreaChart>
                </ResponsiveContainer>
            );
        }
        else if (this.props.chartType === ChartType.Bar) {
            return (
                <ResponsiveContainer height={300}>
                    <BarChart
                        data={this.props.data}
                        margin={{
                            top: 5, right: 5, left: 5, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {this.getXAxis()}
                        <YAxis tick={{ fill: globalStyles.colors.white, fontSize: 14 }} />
                        <Tooltip />
                        <Legend />
                        {this.getBars()}
                    </BarChart>
                </ResponsiveContainer>
            );
        }
    }

    render() {

        const chart = this.getChartType();

        return (
            <Card className={"ChartCard"}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    {chart}
                </Card.Body>
            </Card>
        );
    }
}

export default ChartCard;
