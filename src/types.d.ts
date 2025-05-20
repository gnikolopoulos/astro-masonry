export interface Link {
  href: string;
  target?: string;
  text: string;
}

export interface Box {
  size?: string;
  overlayColor: string;
  content: string;
  link?: Link;
}