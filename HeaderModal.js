import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import OverviewContent from './OverviewContent';
import { connect } from 'react-redux';
import BackgroundContent from './BackgroundContent';
import LabReportContent from './LabReportContent';
import ChallengeContent from './ChallengeContent';
import { tabTitles } from '../components/TabList';

const getModalTitle = (props) => {
  return (props.tabs.active) < 0 ? 'untitled' : tabTitles[props.tabs.active].titleName;
};

return (props.tabs.active) < 0 ? 'untitled' : tabTitles[props.tabs.active].title;
function displayNavNModal(index) {
  const modelData = ModalContent.content[0];
  switch (index) {
    case 0:
      return <OverviewContent content={modelData} />;
    case 1:
      return <BackgroundContent content={modelData} />;
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

function mapStateToProps({ tabs }) {
  return {
    tabs,
  };
}
export default connect(mapStateToProps)(HeaderModal);