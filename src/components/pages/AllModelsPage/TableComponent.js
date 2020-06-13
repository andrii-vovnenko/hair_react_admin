import React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import styled from "styled-components";

const Tr = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const TableComponent = ({ models, history, columnNamesMap, mapper, buildModelPageUrl, columnNameForLink = '' }) => {

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
            onClick={() => history.push(buildModelPageUrl(row[columnNameForLink]))} key={i}>
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
    <Table variant='dark'>
      <TableHead columns={Object.values(columnNamesMap)} />
      <TableBody
        columnNames={Object.keys(columnNamesMap)}
        rows={models}
      />
    </Table>
  )
};

const mapStateToProps = (state, { history }) => {
  return {
    history,
  }
};

export default withRouter(connect(mapStateToProps)(TableComponent));
