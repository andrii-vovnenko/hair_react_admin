import React from "react";
import pick from 'lodash/pick';
import {Table} from "react-bootstrap";
import materialNames from '../../../constants/material/materialNames';
import producerNames from '../../../constants/producer/producerNames';
import typeNames from '../../../constants/hairTypes/hairTypeNames';
import {connect} from "react-redux";
import {selectModels} from "../../../selectors";
import {withRouter} from "react-router";
import styled from "styled-components";

const Tr = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const mapper = {
  materialId: (id) => materialNames[id],
  producer: (id) => producerNames[id],
  typeId: (id) => typeNames[id],
};

const columnNamesMap = {
  modelName: 'модель',
  materialId: 'матеріал',
  price: 'ціна',
  producer: 'виробник',
  typeId: 'тип',
};

const buildModelPageUrl = (modelId) => `/models/${modelId}`;

const TableComponent = ({ models, history }) => {

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

  const TableBody = ({ rows, columnNames, columnNameForLink = '' }) => {
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
  const rows = models.map((modelObj) => pick(modelObj, [...Object.keys(columnNamesMap), 'modelId']))
  return (
    <Table variant='dark'>
      <TableHead columns={Object.values(columnNamesMap)} />
      <TableBody
        columnNames={Object.keys(columnNamesMap)}
        rows={rows}
        columnNameForLink='modelId'
      />
    </Table>
  )
}

const mapStateToProps = (state, { history }) => {
  return {
    models: selectModels(state),
    history,
  }
};

export default withRouter(connect(mapStateToProps)(TableComponent));
