declare interface MultilineStringOptions {
  marginMark?: string;
}

declare function createMultilineString(options?: MultilineStringOptions): (text: string) => string;

export = createMultilineString;
