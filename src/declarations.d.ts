declare module '*.css';
declare module '*.json';
declare module '*.svg?url' {
  const url: string;
  export default url;
}
