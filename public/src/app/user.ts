export class User {
    constructor (
        
        public firstName : string = '',
        public lastName : string = '',
        public address : string = '',
        public city : string = '',
        public state : string = '',
        public zipCode : number = undefined,
        public birthdate : any = '',
        public email : string = '',
        public password : string = ''

    ){}
}