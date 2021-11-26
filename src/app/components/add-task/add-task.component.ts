import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../service/ui.service';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text:string = "";
  day:string = "";
  reminder:boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;
  constructor(
    private uiService:UiService
  ) {
    this.subscription = this.uiService.onToggle()
                                                .subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSumbit(){
    if(!this.text){
      alert("Porfavor ingrese un titulo para la tarea!")
    }

    const {text,day,reminder} = this
    const newTask = {text, day, reminder}
    this.onAddTask.emit(newTask);
  }



}
