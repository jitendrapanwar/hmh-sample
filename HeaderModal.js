import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/lib/Modal';
import OverviewContent from './OverviewContent';
import BackgroundContent from './BackgroundContent';
import LabReportContent from './LabReportContent';
import ChallengeContent from './ChallengeContent';
import { tabTitles } from '../components/TabList';
import ModalContent from '../json/modal-content.json';
import '../style/nav-modal.scss';

const getModalTitle = (props) => {
  return (props.tabs.active) < 0 ? 'untitled' : tabTitles[props.tabs.active].title;
};

function displayNavNModal(index) {
  const modelData = ModalContent.content[index];
  switch (index) {
    case 0:
      return <OverviewContent content={modelData} />;
    case 1:
      return <BackgroundContent content={modelData} />;
    case 2:
      return <LabReportContent content={modelData} />;
    case 3:
      return <ChallengeContent content={modelData} />;
    default:
      return <OverviewContent content={modelData} />;
  }
}

const HeaderModal = (props) => (
  <Modal id="navModal"
    {...props}
  >
    <Modal.Header closeButton>
      <Modal.Title>{getModalTitle(props)}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {displayNavNModal(props.tabs.active)}
    </Modal.Body>
  </Modal>
);

HeaderModal.propTypes = {
  tabs: PropTypes.object,
};

function mapStateToProps({ tabs }) {
  return {
    tabs,
  };
}
export default connect(mapStateToProps)(HeaderModal);