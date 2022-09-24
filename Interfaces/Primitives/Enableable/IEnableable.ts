export interface IEnableable {
  enabled: boolean;
  disable: () => void;
  enable: () => void;
}