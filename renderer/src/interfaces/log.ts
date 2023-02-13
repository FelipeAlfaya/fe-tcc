import { Team } from './team';
import { User } from './user';

export interface Log {
  id: string;
  entry: string;
  team: Team;
  user: User;
}
