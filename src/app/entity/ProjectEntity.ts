import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { UserEntity } from "./UserEntity";

export class ProjectEntity{
    id: number = 0;
    name: string = "";
    assigneeId: number = 0;
    assignee: UserEntity = new UserEntity();
}