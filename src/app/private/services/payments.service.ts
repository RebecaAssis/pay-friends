import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  totalTasks: number;

  constructor(private http: HttpClient) { }

  getPaymentsList (page: number, limit: number): Observable<any> {
    return this.http.get(`http://localhost:3000/tasks?_page=${page}&_limit=${limit}`, {observe: 'response'})
    .pipe(map((res) => {
       const totalTasks = Number(res.headers.get('X-Total-Count'));
       const tasksList = res.body;
       return {tasksList, totalTasks}
    }));
  }

  addNewTask (payload: Payment) {
    return this.http.post('http://localhost:3000/tasks', payload).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    })
  }

  editTask (payload: Payment) {
    return this.http.patch(`http://localhost:3000/tasks/${payload.id}`, payload).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    })
  }

  deleteTask (id: number) {
    return this.http.delete(`http://localhost:3000/tasks/${id}`).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    })
  }
}