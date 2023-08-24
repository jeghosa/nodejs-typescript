import {Body, Status} from "./express/body"
 export {}
declare global {
    namespace Express {
        export interface Request {
            body?:Body;
            
        }
    }
}
declare global {
    namespace Express {
        export interface Response {
            
            status?:Status
        }
    }
}