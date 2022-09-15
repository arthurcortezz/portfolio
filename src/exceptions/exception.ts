export class Exception extends Error {
  stats?: number;
  message: string;
  constructor(messages: string, stats?: number) {
    super(messages);
    this.stats = stats;
    this.message = messages;
  }
}
