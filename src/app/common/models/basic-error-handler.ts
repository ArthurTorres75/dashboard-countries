import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/error.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {}

    handleError(error: Error | HttpErrorResponse) {

        const errorService = this.injector.get(ErrorService);
        // const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(ToastrService);

        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // Server Error
            message = errorService.getServerMessage(error);
            stackTrace = errorService.getServerStack(error);
            notifier.error(message);
        } else {
            // Client Error
            message = errorService.getClientMessage(error);
            stackTrace = errorService.getClientStack(error);
            notifier.error(message);
            console.error(stackTrace);
        }

        // Always log errors
        // logger.logError(message, stackTrace);

        console.error(error);
    }
}