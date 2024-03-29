import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Request {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  Request_userId: string;

  @Column('text')
  Request_motivation: string;

  constructor() {
    this.Request_motivation =
      'My dream is becoming the most famous author on the world <3';
  }
}
