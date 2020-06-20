import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import { getStatisticsAction } from '../../../actions/statisticActionCreator'
import {selectSellStatistics, selectStatisticsLoad} from "../../../selectors/statisticsSelectors";
import TableComponent from "../AllModelsPage/TableComponent";
import SpinnerComponent from "../../Spinner";
import ModalComponent from "../../modals/ModalComponent";
import { sendFormAction } from "../../../actions/sendForm";

const ConfirmReturnModalComponent = ({ show, sellData, setShow, cancelPurchase }) => {

  return (
    <>
      <ModalComponent
        show={show}
        close={() => setShow(false)}
        submit={() => {
          cancelPurchase(sellData.sellId);
          setShow(false);
        }}
        headerText='відмінити продажу???'
        submitText='відмінити'
      >
        {`відмінити продаж ${new Date(sellData.sellDate).toLocaleDateString()}
        моделі ${sellData.modelName} кольору ${sellData.colorName}`}
      </ModalComponent>
    </>
  )
}

const mapper = {
  sellDate: (date) => new Date(date).toLocaleDateString(),
}

const columnNamesMap = {
  modelName: 'модель',
  colorName: 'колір',
  price: 'ціна',
  sellDate: 'дата',
};

const SellStatisticPage = ({ getStatistics, statistics, load, cancelPurchase }) => {
  const [soldItemData, setSoldItemData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getStatistics();
  }, []);

  if (load) return <SpinnerComponent />
  const setSelectedSellData = (data) => setSoldItemData(data);
  return (
    <>
      <TableComponent
        mapper={mapper}
        columnNamesMap={columnNamesMap}
        models={statistics}
        columnNameForLink={['sellId', 'modelName', 'colorName', 'sellDate']}
        onClick={(data) => {
          setSelectedSellData(data);
          setShowModal(true);
        }}
      />
      <ConfirmReturnModalComponent
        show={showModal}
        sellData={soldItemData}
        setShow={setShowModal}
        cancelPurchase={cancelPurchase}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    statistics: selectSellStatistics(state),
    load: selectStatisticsLoad(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getStatistics: () => dispatch(getStatisticsAction()),
  cancelPurchase: (sellId) => dispatch(sendFormAction({ actionTo: 'cancelPurchase', body: {sellId} })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellStatisticPage);
