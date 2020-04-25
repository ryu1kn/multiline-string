declare type Options = {
  marginMark?: string;
};

declare type MultilineString = (options?: Options) => (text: string) => string;

export = MultilineString;
