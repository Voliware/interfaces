import { IAddress } from "../../../Interfaces/Primitives/Address/Address";

export class Address implements IAddress {
  public country: string;
  public number: string;
  public postalcode: string;
  public province: string;
  public state: string;
  public street: string;
  public unit: string;
  public zipcode: string;
}
