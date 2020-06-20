import React from "react";
import {Table} from "react-bootstrap";
import styled from "styled-components";
import pick from "lodash/pick";

const Tr = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const TableComponent = ({ models, columnNamesMap, mapper, columnNameForLink = '', onClick }) => {

  const TableHead = ({columns}) => {
    return (
      <thead>
        <tr>
          {columns.map(name => <th key={name}>{name}</th>)}
        </tr>
      </thead>
    )
  };

  const TableCell = ({ value }) => <td>{value}</td>

  const TableBody = ({ rows, columnNames }) => {
    return (
      <tbody>
        {rows.map((row, i) =>
          <Tr as='tr'
            onClick={() => onClick(pick(row, [...columnNameForLink]))} key={i}>
          {columnNames.map((key) =>
            <TableCell
              key={key}
              value={mapper[key] ? mapper[key](row[key]) : row[key]}
            />)}
        </Tr>)}
      </tbody>
    )
  };

  return (
    <Table variant='dark' hover>
      <TableHead columns={Object.values(columnNamesMap)} />
      <TableBody
        columnNames={Object.keys(columnNamesMap)}
        rows={models}
      />
    </Table>
  )
};


export default (TableComponent);
