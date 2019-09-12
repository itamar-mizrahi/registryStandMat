export class FormData {
    constructor(
        public courseOrEvent:string,
        public nameOfCourse:string,
        public signature:string,
        public timeOfSign:string,
        public timeOfCourse:string,
        public nameOfManager:string,
        public phoneOfManager:string,
        public notes?:string,
    ) {
        
    }
}