export default class todoDb{
    constructor(name){
        this.name = name;
    }
    set(val){
        window.localStorage.setItem(this.name,JSON.stringify(val));
    }
    get(){
        return JSON.parse(window.localStorage.getItem(this.name));
    }
}
