// Values based on code from https://github.com/spatialillusions/milsymbol-generator

import { type SymbolValue } from "@/symbology/types";

export const dimensionValuesB: SymbolValue[] = [
  { code: "S*P********", text: "Space" },
  { code: "S*A********", text: "Air" },
  { code: "S*G*U******", text: "Ground unit" },
  { code: "S*G*E******", text: "Ground equipment" },
  { code: "S*G*I*****H", text: "Ground installations" },
  { code: "S*S********", text: "Sea surface" },
  { code: "S*U********", text: "Sea subsurface" },
  { code: "G*C********", text: "Tactical Graphics - Control Measures" },
  { code: "G*T********", text: "Tactical Graphics - Tasks" },
  { code: "G*O********", text: "Tactical Graphics - Other" },
];

export const statusValuesB: SymbolValue[] = [
  { code: "P", text: "Present" },
  { code: "A", text: "Anticipated/Planned" },
  { code: "C", text: "Present/Fully capable" },
  { code: "D", text: "Present/Damaged" },
  { code: "X", text: "Present/Destroyed" },
  { code: "F", text: "Present/Full to capacity" },
];

export const HQTFDummyValuesB: SymbolValue[] = [
  { code: "-", text: "Unspecified" },
  { code: "A", text: "Headquarters" },
  { code: "B", text: "Task force Headquarters" },
  { code: "C", text: "Feint dummy Headquarters" },
  { code: "D", text: "Feint dummy/Task force Headquarters" },
  { code: "E", text: "Task force" },
  { code: "F", text: "Feint Dummy" },
  { code: "G", text: "Feint dummy/Task force" },
];

// Symbol modifiers (position 11-12)
export const echelonValuesB: SymbolValue[] = [
  { code: "--", text: "Unspecified" },
  { code: "-A", text: "Team/Crew" },
  { code: "-B", text: "Squad" },
  { code: "-C", text: "Section" },
  { code: "-D", text: "Platoon/Detachment" },
  { code: "-E", text: "Company/Battery/Troop" },
  { code: "-F", text: "Battalion/Squadron" },
  { code: "-G", text: "Regiment/Group" },
  { code: "-H", text: "Brigade" },
  { code: "-I", text: "Division" },
  { code: "-J", text: "Corps/MEF" },
  { code: "-K", text: "Army" },
  { code: "-L", text: "Army Group/Front" },
  { code: "-M", text: "Region/Theater" },
  { code: "-N", text: "Command" },
];

export const mobilityValuesB: SymbolValue[] = [
  { code: "--", text: "Unspecified" },
  { code: "MO", text: "Wheeled limited cross country" },
  { code: "MP", text: "Wheeled cross country" },
  { code: "MQ", text: "Tracked" },
  { code: "MR", text: "Wheeled and tracked combination" },
  { code: "MS", text: "Towed" },
  { code: "MT", text: "Railway" },
  { code: "MU", text: "Over snow (prime mover)" },
  { code: "MV", text: "Sled" },
  { code: "MW", text: "Pack animals" },
  { code: "MX", text: "Barge" },
  { code: "MY", text: "Amphibious" },
];

export const installationModifiersB: SymbolValue[] = [
  { code: "H-", text: "Installation" },
  { code: "HB", text: "Feint dummy installation" },
];

export const towedArrayValuesB: SymbolValue[] = [
  { code: "--", text: "Unspecified" },
  { code: "NS", text: "Short towed array" },
  { code: "NL", text: "Long towed array" },
];