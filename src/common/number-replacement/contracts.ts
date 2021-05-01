export abstract class NumberReplacer {
  abstract replace(input: number): string;
}

export interface INumberReplacementHandlerResult {
  handled: boolean;
  value: string | null;
}

export class NumberReplacementHandlerResult implements INumberReplacementHandlerResult {
  public handled: boolean = false;
  public value: string | null = null;
}

export abstract class NumberReplacementHandler {
  abstract handle(input: number): INumberReplacementHandlerResult;
}

export abstract class NumberReplacementHandlerFactory {
  abstract create(): NumberReplacementHandler[];
}

export abstract class NumberListPrinter {
  abstract print(input: number): void;
}
