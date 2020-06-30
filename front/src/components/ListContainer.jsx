import React from "react";
import { Paper } from '@material-ui/core';

export default function ListContainer(props) {

    return (
        <Paper className={props.className}>
            <table className="blueTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descrição</th>
                        <th>Tempo</th>
                        <th>Edit</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {props.lista.length > 0 &&
                        props.lista.map((item, key) =>
                            <tr key={key}>
                                <td>{item._id}</td>
                                <td style={{ textAlign: "left" }}>{item.description}</td>
                                <td>{item.time}</td>
                                <td><button onClick={() => props.editItem(item)}>E</button></td>
                                <td><button onClick={() => props.removeItem(item._id)}>X</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </Paper>
    )
}