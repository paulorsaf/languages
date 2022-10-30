import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private platform: Platform,
    private nativeStorage: NativeStorage
  ) { }

  getItem(key: string): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.nativeStorage.getItem(key)
        .catch(() => null);
    }
    return Promise.resolve(localStorage.getItem(key));
  }

  removeItem(key: string): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.nativeStorage.remove(key)
        .catch(() => null);
    }
    localStorage.removeItem(key);
    return Promise.resolve();
  }

  setItem(key: string, value: string): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.nativeStorage.setItem(key, value)
        .catch(() => null);
    }
    localStorage.setItem(key, value)
    return Promise.resolve();
  }

}