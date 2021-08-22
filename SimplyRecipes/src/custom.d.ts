declare module '*.jpg' {
  const content: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}
