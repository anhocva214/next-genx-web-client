export class User{
    name: string;
    title: string;
    avatar: string;

    constructor()
    constructor(obj?: User)
    constructor(obj?: any){
        this.name = obj?.name || '';
        this.title = obj?.title || '';
        this.avatar = obj?.avatar || '';
    }
}