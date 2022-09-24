import { Point3D } from "./../../../../Implementations/Math/Point3D/Point3D";
import { EVehicleDrivingDirection } from "../EVehicleDrivingDirection";
import { EVehicleDrivingState } from "../EVehicleDrivingState";
import { ICarProfile } from "./ICarProfile";

export interface ICar {
  drivingDirection: EVehicleDrivingDirection;
  drivingState: EVehicleDrivingState;
  profile: ICarProfile;
  position: Point3D;
  // owner: Person;
  goBackward: () => void;
  goForward: () => void;
  goLeft: () => void;
  goRight: () => void;
}
