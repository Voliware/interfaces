import { IUserProfile } from "./Profile/IUserProfile";
import { IUserAccount } from "./Account/IUserAccount";

export interface IUser {
  account: IUserAccount;
  profile: IUserProfile;
}
