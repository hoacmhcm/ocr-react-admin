import { PartnerType, Role } from '../constant/enum';

export interface Auth {
  user_id: string;
  username: string;
  avatar: string;
  role: Role[];
}
