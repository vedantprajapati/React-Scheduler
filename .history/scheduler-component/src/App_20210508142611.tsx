import React from 'react';
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';

class App extends React.Component{
  private localData: EventSettingsModel ={
    dataSource: [{ 
      EndTime: new Date(2021,0,11,6,30),
      StartTime: new Date(2021,0,11,4,0)}]
  };
  private remoteData = new DataManager({ 
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  public render(){
    return <ScheduleComponent currentView = 'Month' selectedDate={new Date(2021,0,11)} eventSettings={this.localData}>
      <Inject services = {[Day,Week,WorkWeek,Month,Agenda]}/> 
    </ScheduleComponent>
  }
}

export default App;
