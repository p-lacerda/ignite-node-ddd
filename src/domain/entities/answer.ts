import { randomUUID } from "node:crypto";

export class Answer {
  uuid: string;
  content: string;

  constructor(content: string, uuid?: string) {
    this.uuid = uuid ?? randomUUID();
    this.content = content;
  }
}