import { Observable } from 'rxjs'

export abstract class AuthNetwork<E> {
  abstract create(email: string, name: string): Observable<E>
  abstract login(email: string, password: string): Observable<E>
  abstract logout(): Observable<void>
}
