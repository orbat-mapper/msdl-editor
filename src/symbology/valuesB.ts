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
// -
export const echelonValuesB: SymbolValue[] = [
  { code: "-", text: "Unspecified" },
  { code: "A", text: "Team/Crew" },
  { code: "B", text: "Squad" },
  { code: "C", text: "Section" },
  { code: "D", text: "Platoon/Detachment" },
  { code: "E", text: "Company/Battery/Troop" },
  { code: "F", text: "Battalion/Squadron" },
  { code: "G", text: "Regiment/Group" },
  { code: "H", text: "Brigade" },
  { code: "I", text: "Division" },
  { code: "J", text: "Corps/MEF" },
  { code: "K", text: "Army" },
  { code: "L", text: "Army Group/Front" },
  { code: "M", text: "Region/Theater" },
  { code: "N", text: "Command" },
];

// M
export const mobilityValuesB: SymbolValue[] = [
  { code: "-", text: "Unspecified" },
  { code: "O", text: "Wheeled limited cross country" },
  { code: "P", text: "Wheeled cross country" },
  { code: "Q", text: "Tracked" },
  { code: "R", text: "Wheeled and tracked combination" },
  { code: "S", text: "Towed" },
  { code: "T", text: "Railway" },
  { code: "U", text: "Over snow (prime mover)" },
  { code: "V", text: "Sled" },
  { code: "W", text: "Pack animals" },
  { code: "X", text: "Barge" },
  { code: "MY", text: "Amphibious" },
];

// H
export const installationModifiersB: SymbolValue[] = [
  { code: "-", text: "Installation" },
  { code: "B", text: "Feint dummy installation" },
];

// N
export const towedArrayValuesB: SymbolValue[] = [
  { code: "--", text: "Unspecified" },
  { code: "NS", text: "Short towed array" },
  { code: "NL", text: "Long towed array" },
];