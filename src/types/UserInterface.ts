export interface UserProps{
    avatar_url?:string,
    login?: string,
    location?: string,
    followers?:number,
    following?:number,
    name?:string,
    bio?:string;
    isInitial?:boolean
}