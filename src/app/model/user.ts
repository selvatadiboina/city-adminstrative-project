export class User {
    id:number
    name:string
    age:Number
    gender:string
    username:string
    password:String

    constructor(id:number,name:string, age:Number, gender:string, username:string, password:String){
        this.id=id
        this.name = name
        this.age= age
        this.gender=gender
        this.username=username
        this.password=password
    }
}
