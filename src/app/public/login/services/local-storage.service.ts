import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) {

    this.storage = window.localStorage;
   }

   set(key: string, value: string) {
    this.storage.setItem(key, JSON.stringify(value));
   }

   remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true
    }

    return false;
   }
}
