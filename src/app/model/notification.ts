export enum NotificacionType{
    Error = "ERROR" ,
    Success = "SUCCESS",
    Warning = "WARNING",
    Info = "INFO"
}
export class Notificacion {
    public message: string;
    public type : NotificacionType;

    constructor(message: string, type : NotificacionType ){
        this.message = message;
        this.type = type;
    }

    public getMessage(): string{
        return this.message
    }
    public getType(): string{
        return this.type;
    }
}