import {User} from "../user/user";

export class Conversation {
    id: number;
    created_at: string;
    name: string;
    author_id: number;
    users: User[]
    new_messages: number;
}