/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { DesignaliIcon } from "dicons";
import {
  Bird,
  Bone,
  Bug,
  BugOff,
  BugPlay,
  Cat,
  Dog,
  Egg,
  Fish,
  FishOff,
  FishSymbol,
  Origami,
  PawPrint,
  Rabbit,
  Rat,
  Shell,
  Snail,
  Squirrel,
  Turtle,
  Worm,
} from "dicons";

export type DIcon = DesignaliIcon;

export type ValidIcon = keyof typeof Animal;

export const Animal = {
  Bird,
  Bone,
  Bug,
  BugOff,
  BugPlay,
  Cat,
  Dog,
  Egg,
  Fish,
  FishOff,
  FishSymbol,
  Origami,
  PawPrint,
  Rabbit,
  Rat,
  Shell,
  Snail,
  Squirrel,
  Turtle,
  Worm,
};
