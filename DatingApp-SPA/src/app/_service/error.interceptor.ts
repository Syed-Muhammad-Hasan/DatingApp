import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs/';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error) => {
                if(error.status === 401){
                    return throwError(error.statusText);
                }
                if(error instanceof HttpErrorResponse)
                {
                    const ApplicationError = error.headers.get('Application-Error');
                    if(ApplicationError)
                    {
                        return throwError(ApplicationError);
                    }
                    const serverErrors = error.error;
                    let ModalErrors = '';
                    if(serverErrors.errors && typeof serverErrors.errors==='object')
                    {
                        for(const key in serverErrors.errors)
                        {
                            if(serverErrors.errors[key])
                            {
                                ModalErrors += serverErrors.errors[key] + '\n';
                            }
                        }
                    }
                    
                    return throwError(ModalErrors || serverErrors || 'Server Error');
                }
                return throwError('Server Error');
            })
            
        );      
                
    }
    
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};

