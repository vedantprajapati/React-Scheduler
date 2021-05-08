import React from 'react';
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';

class App extends React.Component{
  private localData: EventSettingsModel ={
    dataSource: [{ EndTime: new Date(2021,0,11,6,30), StartTime: new Date(2021,0,11,4,0)}]
  };
  public render(){
    return <ScheduleComponent currentView = 'Month'>
      <Inject services = {[Day,Week,WorkWeek,Month,Agenda]}/> 
    </ScheduleComponent>
  }
}

export default App;
