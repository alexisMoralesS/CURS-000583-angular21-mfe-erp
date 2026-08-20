export {};

declare global {
  interface Window {
    isHost: boolean;
    nameHost: string;
  }
}
