import React from "react";
import pick from 'lodash/pick';
import {Table} from "react-bootstrap";
import materialNames from '../../../constants/material/materialNames';
import producerNames from '../../../constants/producer/producerNames';
import typeNames from '../../../constants/hairTypes/hairTypeNames';
import {connect} from "react-redux";
import {selectModels} from "../../../selectors";

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

const TableComponent = ({ models }) => {
  const rows = models.map((modelObj) => pick(modelObj, [...Object.keys(columnNamesMap)]))
  return (
    <Table variant='dark'>
      <thead>
      <tr>
        {Object.values(columnNamesMap).map(name => <th key={name} >{name}</th>)}
      </tr>
      </thead>
      <tbody>
      {rows.map((row, i) => <tr key={i}>
        {Object.keys(columnNamesMap).map((key) => <td key={key}>{mapper[key] ? mapper[key](row[key]) : row[key]}</td>)}
      </tr>)}
      </tbody>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    models: selectModels(state),
  }
};

export default connect(mapStateToProps)(TableComponent);
