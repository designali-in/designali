/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { DesignaliIcon } from "dicons";
import {
  Anvil,
  BrickWall,
  Building,
  Building2,
  Castle,
  Church,
  Cuboid,
  Dam,
  Factory,
  Fence,
  GraduationCap,
  Hospital,
  Hotel,
  House,
  HousePlug,
  HousePlus,
  Landmark,
  School,
  Store,
  Theater,
  University,
  UtilityPole,
  Warehouse,
} from "dicons";

export type DIcon = DesignaliIcon;

export type ValidIcon = keyof typeof Buildings;

export const Buildings = {
  Anvil: Anvil,
  Brickwall: BrickWall,
  Building: Building,
  Bulding2: Building2,
  Castle: Castle,
  Church: Church,
  Cuboid: Cuboid,
  Dam: Dam,
  Factory: Factory,
  Fence: Fence,
  Graduation: GraduationCap,
  Hospital: Hospital,
  Hotel: Hotel,
  House: House,
  HousePlus: HousePlus,
  HousePlug: HousePlug,
  Landmark: Landmark,
  School: School,
  Store: Store,
  Theater: Theater,
  University: University,
  UtilityPole: UtilityPole,
  Warehouse: Warehouse,
};
