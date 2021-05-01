import { Inject, Singleton } from "typescript-ioc";
import { NumberReplacer, NumberReplacementHandler } from "../common";
import { FizzBuzzHandlersFactory } from "./fizzbuzz-handlers-factory";

@Singleton
export class FizzBuzzReplacer implements NumberReplacer {
  private readonly handlers: NumberReplacementHandler[];

  constructor(@Inject factory: FizzBuzzHandlersFactory) {
    this.handlers = factory.create();
  }

  public replace(input: number): string {
    var outcome = String(input);

    for (let key in this.handlers) {
      var handler = this.handlers[key];
      var result = handler.handle(input);
      if (result.handled) {
        outcome = result.value as string;
        break;
      }
    }

    return outcome;
  }
}