import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { from } from 'rxjs';


@Component({
  selector: 'app-calendar-c',
  templateUrl: './calendar-c.component.html',
  styleUrls: ['./calendar-c.component.css']
})
export class CalendarCComponent {

  Data:any
  Type:any
  flag:boolean = false
  Event:boolean = false;
  Task:boolean =false;
  GlobalEventType:any;
  click:boolean=false;


  listData : {
    date:Date[],
    data:string,
    type:string,
    eventType:string,
    startTime?:Date,
    endTime?:Date,
    isCompleted?:boolean
  }[]=[{date:[new Date('2023-09-30')],data:"My Birthday",type:"success",eventType:'Event',}];
  
  selectedValue = new Date();
  rangeStartDate: Date = new Date();
  rangeEndDate: Date = new Date();
  rangeStartTime :any;
  rangeEndTime :any;



  selectChange(select: Date): any {
    this.flag=false;
    console.log(`Select value: ${select}`);
    this.Data='';
    return true;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getTrue()
  {
    this.flag=true;
  }
  getCTrue(item:any){
    
      item.isCompleted = true;
  }
  
  storeData(Data : any, Type:any, EType:any){

    this.listData.push({date:[new Date(this.selectedValue)],data:Data,type:Type,eventType:EType});

    // this.listData[0].data;
    console.log(this.listData);
    console.log('Get Date',this.listData[0].date[0].getDate());
    this.flag=false;
  }

  deleteEvent(Item:any){

    this.listData.splice(this.listData.indexOf(Item),1);

    console.log(this.listData);
  }

  addEventtoMultipleDates(Data: any, Type: any, EType:any,st:any,et:any) {
    // const datesInRange = this.getDatesInRange(this.rangeStartDate, this.rangeEndDate);
    // for (let i = 0; i < datesInRange.length; i++) {
    //   this.listData.push({ date: datesInRange[i], data: Data, type: Type, eventType:EType, startTime:st, endTime:et });
    // }
    let listObj : {date:Date[], data:string,
      type:string,
      eventType:string,
      startTime?:Date,
      endTime?:Date,
      isCompleted?:boolean} = {
      date:[], data: Data, type: Type, eventType:EType, startTime:st, endTime:et
    }
    // push dates 
    const datesInRange = this.getDatesInRange(this.rangeStartDate, this.rangeEndDate);
     for (let i = 0; i < datesInRange.length; i++) {
       listObj.date.push(datesInRange[i]);
     }

    // push object in list data
    this.listData.push(listObj);


    console.log(this.listData);
    this.flag = false;
    this.Event=false;
    this.Task=false;
    this.GlobalEventType=undefined;
    this.rangeStartTime=undefined;
    this.rangeEndTime=undefined;
  }

  helperFunction(startDate:any):any {
    console.log('Cheker',startDate,'-',typeof(startDate.toString()))
    return startDate.toString();
  }

  getDatesInRange(startDate: Date, endDate: Date) {
    const dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

}