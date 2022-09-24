import { IAddress } from "../../Primitives/Address/IAddress";
import { IName } from "./Name/IName";

export interface IUserProfile {
  address: IAddress
  name: IName
}