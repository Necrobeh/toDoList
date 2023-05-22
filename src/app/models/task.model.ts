export class Task{
    constructor(
        public id : number,
        public name : string,
        public description : string,
        public category : string,
        public status : string,
        public priority : string,
        public deadLine : Date,
        public creationDate : Date,
        public modifiedDate : Date,
        public creator : string,
        public lastUserToUpdate : string
    ){}
}