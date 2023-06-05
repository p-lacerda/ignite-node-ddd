import { randomUUID } from "node:crypto";

export class Student {
  uuid: string;
  name: string;

  constructor(name: string, uuid?: string) {
    this.uuid = uuid ?? randomUUID();
    this.name = name;
  }
}