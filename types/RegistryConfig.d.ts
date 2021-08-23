import { Configuration, WebpackOptionsNormalized } from 'webpack';

export type HOF = <T>(input: T) => T;
export type HOFP = <T>(input: T) => Promise<T>;
export type RegistryConfig = {
  register: string[];
  directoryUrl: string;
  webpackFinal?: HOFP<WebpackOptionsNormalized | Configuration>;
};
