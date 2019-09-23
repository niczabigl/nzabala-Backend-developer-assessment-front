export enum NotificacionType{
    ERROR = "ERROR" ,
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    INFO = "INFO"
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