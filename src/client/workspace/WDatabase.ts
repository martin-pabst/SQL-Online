import { DatabaseData } from "../communication/Data.js";

export class WDatabase {

    id: number;
    name: string;

    templateStatements: string;
    templateId: number;
    templateName: string;

    statements: string;
    published_to: number;
    version: number;
    description: string;

    static fromDatabaseData(data: DatabaseData): WDatabase {

        let db = new WDatabase();

        db.id = data.id;
        db.name = data.name;
        db.statements = data.statements;
        db.published_to = data.published_to;
        db.version = data.version;
        db.description = data.description;

        if(data.template != null){
            db.templateStatements = data.template.statements;
            db.templateId = data.template.id;
            db.templateName = data.template.name;
        }

        return db;
    }



}
