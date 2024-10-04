// stars
import { ShapeType } from "../lib";
import {
  Abstract1,
  Abstract2,
  Abstract3,
  Abstract4,
  Abstract5,
  Abstract6,
  Abstract7,
  Abstract8,
  Abstract9,
  Abstract10,
  Abstract11,
  Abstract12,
  Abstract13,
  Abstract14,
  Abstract15,
  Abstract16,
  Abstract17,
  Abstract18,
  Abstract19,
  Abstract20,
  Abstract21,
  Abstract22,
  Abstract23,
  Abstract24,
  Abstract25,
  Abstract26,
  Abstract27,
  Abstract28,
  Abstract29,
  Abstract30,
  Abstract31,
  Abstract32,
  Abstract33,
  Abstract34,
  Abstract35,
  Abstract36,
  Abstract37,
  Abstract38,
  Abstract39,
  Abstract40,
  Abstract41,
  Abstract42,
  Abstract43,
  Abstract44,
  Abstract45,
  Abstract46,
  Abstract47,
  Abstract48,
  Abstract49,
  Abstract50,
  Abstract51,
  Abstract52,
  Abstract53,
  Abstract54,
  Abstract55,
  Abstract56,
  Abstract57,
  Abstract58,
  Abstract59,
  Abstract60,
  Abstract61,
  Abstract62,
  Abstract63,
  Abstract64,
  Abstract65,
  Abstract66,
  Abstract67,
  Abstract68,
  Abstract69,
  Abstract70,
  Abstract71,
  Abstract72,
  Abstract73,
  Abstract74,
  Abstract75,
  Abstract76,
  Abstract77,
  Abstract78,
  Abstract79,
  Abstract80,
  Abstract81,
  Abstract82,
  Abstract83,
  Abstract84,
  Abstract85,
  Abstract86,
  Abstract87,
  Abstract88,
  Abstract89,
  Abstract90,
  Abstract91,
  Abstract92,
  Abstract93,
  Abstract94,
  Abstract95,
  Abstract96,
  Abstract97,
  Abstract98,
  Abstract99,
  Abstract100,
  Abstract101,
  Abstract102,
  Abstract103,
  Abstract104,
  Abstract105,
  Abstract106,
  Abstract107,
  Abstract108,
  Abstract109,
  Abstract110,
  Abstract111,
  Abstract112,
  Abstract113,
  Abstract114,
  Abstract115,
  Abstract116,
  Abstract117,
  Abstract118,
  Abstract119,
  Abstract120,
  Abstract121,
  Abstract122,
  Abstract123,
  Abstract124,
  Abstract125,
  Abstract126,
  Abstract127,
  Abstract128,
  Abstract129,
  Abstract130,
  Abstract131,
  Abstract132,
  Abstract133,
  Abstract134,
  Abstract135,
  Abstract136,
  Abstract137,
  Abstract138,
  Abstract139,
  Abstract140,
  Abstract141,
  Abstract142,
  Abstract143,
  Abstract144,
  Abstract145,
  Abstract146,
  Abstract147,
  Abstract148,
  Abstract149,
  Abstract150,
  Abstract151,
  Abstract152,
  Abstract153,
  Abstract154,
  Abstract155,
  Abstract156,
  Abstract157,
  Abstract158,
  Abstract159,
  Abstract160,
} from "./abstract";

const shapes = {
  abstract: [
    Abstract1,

    Abstract2,

    Abstract3,

    Abstract4,

    Abstract5,

    Abstract6,

    Abstract7,

    Abstract8,

    Abstract9,

    Abstract10,

    Abstract11,

    Abstract12,

    Abstract13,

    Abstract14,

    Abstract15,

    Abstract16,

    Abstract17,

    Abstract18,

    Abstract19,

    Abstract20,

    Abstract21,

    Abstract22,

    Abstract23,

    Abstract24,

    Abstract25,

    Abstract26,

    Abstract27,

    Abstract28,

    Abstract29,

    Abstract30,

    Abstract31,

    Abstract32,

    Abstract33,

    Abstract34,

    Abstract35,

    Abstract36,

    Abstract37,

    Abstract38,

    Abstract39,

    Abstract40,

    Abstract41,

    Abstract42,
    Abstract43,

    Abstract44,

    Abstract45,

    Abstract46,

    Abstract47,

    Abstract48,

    Abstract49,

    Abstract50,

    Abstract51,

    Abstract52,

    Abstract53,

    Abstract54,

    Abstract55,

    Abstract56,

    Abstract57,

    Abstract58,

    Abstract59,

    Abstract60,

    Abstract61,

    Abstract62,

    Abstract63,

    Abstract64,

    Abstract65,

    Abstract66,

    Abstract67,

    Abstract68,

    Abstract69,

    Abstract70,

    Abstract71,

    Abstract72,

    Abstract73,

    Abstract74,

    Abstract75,

    Abstract76,

    Abstract77,

    Abstract78,

    Abstract79,

    Abstract80,

    Abstract81,

    Abstract82,

    Abstract83,
    Abstract84,

    Abstract85,

    Abstract86,

    Abstract87,

    Abstract88,

    Abstract89,

    Abstract90,

    Abstract91,

    Abstract92,

    Abstract93,

    Abstract94,

    Abstract95,

    Abstract96,

    Abstract97,

    Abstract98,

    Abstract99,

    Abstract100,

    Abstract101,

    Abstract102,

    Abstract103,

    Abstract104,

    Abstract105,

    Abstract106,

    Abstract107,

    Abstract108,

    Abstract109,

    Abstract110,

    Abstract111,

    Abstract112,

    Abstract113,

    Abstract114,

    Abstract115,

    Abstract116,

    Abstract117,

    Abstract118,

    Abstract119,

    Abstract120,

    Abstract121,

    Abstract122,

    Abstract123,

    Abstract124,
    Abstract125,
    Abstract126,
    Abstract127,
    Abstract128,
    Abstract129,
    Abstract130,
    Abstract131,
    Abstract132,
    Abstract133,
    Abstract134,
    Abstract135,
    Abstract136,
    Abstract137,
    Abstract138,
    Abstract139,
    Abstract140,
    Abstract141,
    Abstract142,
    Abstract143,
    Abstract144,
    Abstract145,
    Abstract146,
    Abstract147,
    Abstract148,
    Abstract149,
    Abstract150,
    Abstract151,
    Abstract152,
    Abstract153,
    Abstract154,
    Abstract155,
    Abstract156,
    Abstract157,
    Abstract158,
    Abstract159,
    Abstract160,
  ],
};

// used to autocomplete types
export type shapeTypes = keyof typeof shapes;

export type componentId = { shapeType: shapeTypes; index: number };
// return random shape from the shapes list
export const getRandomShape = ({
  type,
  onlyId,
}: {
  type?: keyof typeof shapes;
  onlyId?: boolean;
} = {}): ShapeType | componentId => {
  const shapeKeys = Object.keys(shapes);
  const shapeType: keyof typeof shapes =
    type ||
    (shapeKeys[
      Math.floor(Math.random() * shapeKeys.length)
    ] as keyof typeof shapes);

  const randomIndex = Math.floor(Math.random() * shapes[shapeType].length);
  if (onlyId) {
    return {
      shapeType,
      index: randomIndex,
    };
  }
  return shapes[shapeType][randomIndex];
};

export default shapes;
