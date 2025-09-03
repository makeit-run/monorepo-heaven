export interface Theme {
  name: string;
  colors: {
    [key: string]: any;
  };
  boxShadow?: {
    [key: string]: string;
  };
  fontSize?: {
    [key: string]: string | [string, { lineHeight?: string; letterSpacing?: string }];
  };
  spacing?: {
    [key: string]: string;
  };
}

export interface ColorValue {
  DEFAULT?: string;
  [key: string]: string | undefined;
}

export interface ThemeColors {
  background: ColorValue;
  foreground: ColorValue;
  primary: ColorValue;
  'primary-foreground': ColorValue;
  secondary: ColorValue;
  'secondary-foreground': ColorValue;
  accent: ColorValue;
  'accent-foreground': ColorValue;
  muted: ColorValue;
  'muted-foreground': ColorValue;
  destructive: ColorValue;
  'destructive-foreground': ColorValue;
  border: ColorValue;
  input: ColorValue;
  ring: ColorValue;
  card: ColorValue;
  popover: ColorValue;
  'popover-foreground': ColorValue;
  success: ColorValue;
  warning: ColorValue;
  error: ColorValue;
  text: ColorValue;
  white: ColorValue;
  [key: string]: ColorValue;
}