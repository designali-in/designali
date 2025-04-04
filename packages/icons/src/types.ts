import type {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

export interface DesignaliProps extends ElementAttributes {
  children?: never;
  color?: string;
  size?: number;
}

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

import { ReactSVG } from "react-svg";

export type IconNode = [
  elementName: keyof ReactSVG,
  attrs: Record<string, string>,
][];

export type DesignaliIcon = ForwardRefExoticComponent<
  Omit<DesignaliProps, "ref"> & RefAttributes<SVGSVGElement>
>;
