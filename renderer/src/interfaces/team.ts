import { Log } from './log';
import { User } from './user';

export interface Team {
  id: string;
  name: string;
  avatar: string;
  master: User;
  logs: Log[];
  members: User[];
}
