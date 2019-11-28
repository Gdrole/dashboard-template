import React from 'react';
import './DataTable.css';
import globalStyles from '../../globalStyles';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

interface Props {
    data: Array<any>;
    isEditable: boolean;
}

interface RowProps {
    data: any;
    keys: string[];
}

class DataTable extends React.Component<Props, any> {

    private getKeys() {
        return Object.keys(this.props.data[0]);
    }

    private getCellHeaders() {
        const keys = Object.keys(this.props.data[0]);

        const cellHeader = keys.map(key => {
            return (
                <th key={key}>{key.toUpperCase()}</th>
            );
        });

        if (this.props.isEditable) {
            cellHeader.push(
                <th></th>
            );
        }
        return cellHeader;
    }

    private renderRow(props: RowProps) {
        const row = props.keys.map(key => {
            return <td key={props.data[key]}>{props.data[key]}</td>
        });

        if (this.props.isEditable) {
            row.push(
                <td>
                    <Button variant="outline-primary" className={"EditButton mr-2"}>Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                </td>
            );
        }
        return row;
    }

    private getRows() {
        const keys = this.getKeys();
        return this.props.data.map((data, index) => {
            return (
                <tr key={index}>
                    {this.renderRow({ data, keys })}
                </tr>
            );
        });
    }

    render() {

        const cellHeaders = this.getCellHeaders();
        const rows = this.getRows();

        return (
            <Table responsive className={"Table"}>
                <thead>
                    {cellHeaders}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
}

export default DataTable;