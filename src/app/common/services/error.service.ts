import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GeneralMsg } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'Sin conexión a internet';
    }
    return GeneralMsg.error;
  }

  getClientStack(error: Error): string {
    return error.stack;
  }

  getServerMessage(error: HttpErrorResponse): string {
    if (!navigator.onLine) {
      return 'Sin conexión a internet';
    }

    if (error) {
      if (error.error) {
        if (error.status === 409) {
          return error.error.message;
        }
        return this.searchDetailsInMessage(error.error.message);
      }
      return GeneralMsg.error;
    }
    return GeneralMsg.error;
  }

  getServerStack(error: HttpErrorResponse): string {
    // handle stack trace
    return 'stack';
  }

  searchDetailsInMessage(message: string) {
    if (message ) {
      return message;
    } else {
      return GeneralMsg.error;
    }
  }
}
