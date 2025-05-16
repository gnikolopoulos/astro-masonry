export interface Image {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface Link {
  href: string;
  target?: string;
  text: string;
}

export interface Box {
  size?: string;
  image: Image;
  overlayColor: string;
  content: string;
  link?: Link;
}