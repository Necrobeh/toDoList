export class Task{
    constructor(
        public name : string,
        public description : string,
        public category : string,
        public status : string = 'stand by',
        public priority : string = 'medium',
        public deadLine : Date,
        public creationDate : Date,
        public modifieddate : Date,
        public creator : string,
        public lastUserToUpdate : string
    ){}
}