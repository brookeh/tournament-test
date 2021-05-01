import { Inject, Singleton } from "typescript-ioc";
import { Logger, NumberListPrinter } from "../common";
import { FizzBuzzReplacer } from "./fizzbuzz-replacer";

@Singleton
export class FizzBuzzPrinter implements NumberListPrinter {
  private readonly logger: Logger;
  private readonly replacer: FizzBuzzReplacer;

  constructor(@Inject logger: Logger, @Inject replacer: FizzBuzzReplacer) {
    this.logger = logger;
    this.replacer = replacer;
  }

  public print(input: number): void {
    for (let i = 1; i <= input; i++) {
      this.logger.log(this.replacer.replace(i));
    }
  }
}
