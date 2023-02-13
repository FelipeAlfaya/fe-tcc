import { Log } from './log';
import { Team } from './team';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  cpf: string;
  oab: string;
  team: Team;
  logs: Log[];
}
