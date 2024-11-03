import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  title = 'Todo List App';
  list: any[] = [];

  addlist(item: string) {
    // console.log(item);
    this.list.push({ id: this.list.length, name: item });
  }

  removetask(id: number) {
    // console.log(id);
    this.list = this.list.filter((item) => item.id !== id);
  }

  toggleEditMode(item: any) {
    item.editMode = !item.editMode;
  }
  updateTask(item: any) {
    item.editMode = false;
  }
}
