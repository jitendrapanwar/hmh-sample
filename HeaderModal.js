import React from 'react';

/* custom */
import ActivityContainer from './ActivityContainer';
import HeaderTabs from '../containers/HeaderTabs';
import HeaderPopup from '../containers/HeaderPopup';
import ToolBox from '../components/ToolBox';
import '../style/override.scss';

const App = () => (
  <div>
    <HeaderTabs>Haber Process</HeaderTabs>
    <div className="content">
      <HeaderPopup />
      <ActivityContainer/>
      <ToolBox/>
    </div>
  </div>
);

export default App;
