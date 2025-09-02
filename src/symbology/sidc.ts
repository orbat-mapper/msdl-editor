/**
 *  Symbol Identification Codes (SIDC) for Revision B
 *
 */

export interface SicElementsB {
  codingScheme: string;
  affiliation: string;
  battleDimension: string;
  status: string;
  functionId: string;
  context: string; 
  modifier1: string;
  modifier2: string; 
  echelon: string;
}

export class SidcB implements SicElementsB {
  codingScheme: string;
  affiliation: string;
  battleDimension: string;
  status: string;
  functionId: string;
  context: string; 
  modifier1: string;
  modifier2: string; 
  echelon: string;

  constructor(private sic: string = "SFGPU----------") {
    if (sic.length !== 15) {
      throw new Error("SIDC must be exactly 15 characters long for Revision B");
    }

    this.codingScheme = sic.substring(0, 1);
    this.affiliation = sic.substring(1, 2);
    this.battleDimension = sic.substring(2, 3);
    this.status = sic.substring(3, 4);
    this.functionId = sic.substring(4, 10);
    this.modifier1 = sic.substring(10, 11);
    this.modifier2 = sic.substring(11, 12);
    this.echelon = sic.substring(12, 13);
    this.context = sic.substring(13, 14);
  }

  toString() {
    return (
      this.codingScheme +
      this.affiliation +
      this.battleDimension +
      this.status +
      this.functionId +
      this.modifier1 +
      this.modifier2 +
      this.echelon +
      this.context + 
      '-'
    );
  }
}