import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  emit<T>(event: string, detail: T): void {
    window.dispatchEvent(
      new CustomEvent(event, {
        detail,
      }),
    );
  }

  on<T>(event: string, listener: (detail: T) => void): () => void {
    const handler = (e: Event) => {
      listener((e as CustomEvent<T>).detail);
    };

    window.addEventListener(event, handler);

    return () => window.removeEventListener(event, handler);
  }
}
