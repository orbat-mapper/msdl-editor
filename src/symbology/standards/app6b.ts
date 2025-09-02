/**
 * STANAG APP6-B symbology data
 *
 * Based on code and data from https://github.com/spatialillusions/stanag-app6
 *
 * MIT License
 * Copyright (c) 2017 Måns Beckman - www.spatialillusions.com
 *
 */

export const app6b = {
  WAR: {
    name: "WARFIGHTING",
    SPC: {
      name: "SPACE",
      mainIcon: [
        {
          hierarchy: "1.X.1 ",
          names: [
            ,
            ,
            "SPACE TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "P",
          status: "*",
          functionid: "------",
          name: "SPACE TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.1.1 ",
          names: [
            ,
            ,
            "SPACE TRACK",
            "SATELLITE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "P",
          status: "*",
          functionid: "S-----",
          name: "SATELLITE",
          remarks: ""
        },
        {
          hierarchy: "1.X.1.2 ",
          names: [
            ,
            ,
            "SPACE TRACK",
            "CREWED SPACE VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "P",
          status: "*",
          functionid: "V-----",
          name: "CREWED SPACE VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.1.3 ",
          names: [
            ,
            ,
            "SPACE TRACK",
            "SPACE STATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "P",
          status: "*",
          functionid: "T-----",
          name: "SPACE STATION",
          remarks: ""
        }
      ]
    },
    AIRTRK: {
      name: "AIR",
      mainIcon: [
        {
          hierarchy: "1.X.2 ",
          names: [
            ,
            ,
            "AIR TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "------",
          name: "AIR TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "M-----",
          name: "MILITARY",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MF----",
          name: "FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "BOMBER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFB---",
          name: "BOMBER",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "FIGHTER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFF---",
          name: "FIGHTER",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.2.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "FIGHTER",
            "INTERCEPTOR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFFI--",
          name: "INTERCEPTOR",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "TRAINER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFT---",
          name: "TRAINER",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.4 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "ATTACK/STRIKE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFA---",
          name: "ATTACK/STRIKE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.5 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "VSTOL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFL---",
          name: "VSTOL",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.6 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "TANKER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFK---",
          name: "TANKER",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.7 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "CARGO AIRLIFT (TRANSPORT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFC---",
          name: "CARGO AIRLIFT (TRANSPORT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.7.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "CARGO AIRLIFT (TRANSPORT)",
            "CARGO AIRLIFT (LIGHT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFCL--",
          name: "CARGO AIRLIFT (LIGHT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.7.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "CARGO AIRLIFT (TRANSPORT)",
            "CARGO AIRLIFT (MEDIUM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFCM--",
          name: "CARGO AIRLIFT (MEDIUM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.7.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "CARGO AIRLIFT (TRANSPORT)",
            "CARGO AIRLIFT (HEAVY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFCH--",
          name: "CARGO AIRLIFT (HEAVY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.8 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "ELECTRONIC COUNTERMEASURES(ECM/JAMMER)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFJ---",
          name: "ELECTRONIC COUNTERMEASURES(ECM/JAMMER)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.9 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "MEDEVAC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFO---",
          name: "MEDEVAC",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.10 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "RECONNAISSANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFR---",
          name: "RECONNAISSANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.10.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "RECONNAISSANCE",
            "AIRBORNE EARLY WARNING (AEW)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFRW--",
          name: "AIRBORNE EARLY WARNING (AEW)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.10.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "RECONNAISSANCE",
            "ELECTRONIC SURVEILLANCE MEASURES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFRZ--",
          name: "ELECTRONIC SURVEILLANCE MEASURES",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.10.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "RECONNAISSANCE",
            "PHOTOGRAPHIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFRX--",
          name: "PHOTOGRAPHIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.11 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "PATROL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFP---",
          name: "PATROL",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.11.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "PATROL",
            "ANTI SURFACE WARFARE/ASUW"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFPN--",
          name: "ANTI SURFACE WARFARE/ASUW",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.11.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "PATROL",
            "MINE COUNTER MEASURES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFPM--",
          name: "MINE COUNTER MEASURES",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.12 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "UTILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFU---",
          name: "UTILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.12.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "UTILITY",
            "UTILITY (LIGHT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFUL--",
          name: "UTILITY (LIGHT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.12.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "UTILITY",
            "UTILITY (MEDIUM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFUM--",
          name: "UTILITY (MEDIUM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.12.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "UTILITY",
            "UTILITY (HEAVY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFUH--",
          name: "UTILITY (HEAVY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.13 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "COMMUNICATIONS (C3I)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFY---",
          name: "COMMUNICATIONS (C3I)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.14 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "SEARCH AND RESCUE (CSAR)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFH---",
          name: "SEARCH AND RESCUE (CSAR)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.15 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "AIRBORNE COMMAND POST (C2)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFD---",
          name: "AIRBORNE COMMAND POST (C2)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.16 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "DRONE (RPV/UAV)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFQ---",
          name: "DRONE (RPV/UAV)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.17 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "ANTI SUBMARINE WARFARE (ASW) CARRIER BASED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFS---",
          name: "ANTI SUBMARINE WARFARE (ASW) CARRIER BASED",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.1.18 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "FIXED WING",
            "SPECIAL OPERATIONS FORCE (SOF)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MFM---",
          name: "SPECIAL OPERATIONS FORCE (SOF)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MH----",
          name: "ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "ATTACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHA---",
          name: "ATTACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "ANTISUBMARINE WARFARE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHS---",
          name: "ANTISUBMARINE WARFARE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "UTILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHU---",
          name: "UTILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.3.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "UTILITY",
            "UTILITY (LIGHT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHUL--",
          name: "UTILITY (LIGHT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.3.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "UTILITY",
            "UTILITY (MEDIUM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHUM--",
          name: "UTILITY (MEDIUM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.3.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "UTILITY",
            "UTILITY (HEAVY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHUH--",
          name: "UTILITY (HEAVY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.4 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "MINE COUNTER MEASURES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHI---",
          name: "MINE COUNTER MEASURES",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.5 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "COMBAT SEARCH AND RESCUE (CSAR)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHH---",
          name: "COMBAT SEARCH AND RESCUE (CSAR)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.6 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "RECONNAISSANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHR---",
          name: "RECONNAISSANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.7 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "DRONE (RPV/UAV)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHQ---",
          name: "DRONE (RPV/UAV)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.8 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "CARGO AIRLIFT (TRANSPORT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHC---",
          name: "CARGO AIRLIFT (TRANSPORT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.8.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "CARGO AIRLIFT (TRANSPORT)",
            "CARGO AIRLIFT (LIGHT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHCL--",
          name: "CARGO AIRLIFT (LIGHT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.8.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "CARGO AIRLIFT (TRANSPORT)",
            "CARGO AIRLIFT (MEDIUM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHCM--",
          name: "CARGO AIRLIFT (MEDIUM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.8.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "CARGO AIRLIFT (TRANSPORT)",
            "CARGO AIRLIFT (HEAVY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHCH--",
          name: "CARGO AIRLIFT (HEAVY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.9 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "TRAINER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHT---",
          name: "TRAINER",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.10 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "MEDEVAC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHO---",
          name: "MEDEVAC",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.11 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "SPECIAL OPERATIONS FORCE (SOF)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHM---",
          name: "SPECIAL OPERATIONS FORCE (SOF)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.12 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "AIRBORNE COMMAND POST (C2)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHD---",
          name: "AIRBORNE COMMAND POST (C2)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.13 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "TANKER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHK---",
          name: "TANKER",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.2.14 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "ROTARY WING",
            "ELECTRONIC COUNTER MEASURES (ECM/JAMMER)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "MHJ---",
          name: "ELECTRONIC COUNTER MEASURES (ECM/JAMMER)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.1.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "MILITARY",
            "LIGHTER THAN AIR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "ML----",
          name: "LIGHTER THAN AIR",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "W-----",
          name: "WEAPON",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WM----",
          name: "MISSILE IN FLIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "SURFACE/LAND LAUNCHED MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMS---",
          name: "SURFACE/LAND LAUNCHED MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.1.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "SURFACE/LAND LAUNCHED MISSILE",
            "SURFACE TO SURFACE MISSILE (SSM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMSS--",
          name: "SURFACE TO SURFACE MISSILE (SSM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.1.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "SURFACE/LAND LAUNCHED MISSILE",
            "SURFACE TO AIR MISSILE (SAM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMSA--",
          name: "SURFACE TO AIR MISSILE (SAM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "AIR LAUNCHED MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMA---",
          name: "AIR LAUNCHED MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.2.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "AIR LAUNCHED MISSILE",
            "AIR TO SURFACE MISSILE (ASM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMAS--",
          name: "AIR TO SURFACE MISSILE (ASM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.2.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "AIR LAUNCHED MISSILE",
            "AIR TO AIR MISSILE (AAM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMAA--",
          name: "AIR TO AIR MISSILE (AAM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "SUBSURFACE TO SURFACE MISSILE (S/SSM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WMU---",
          name: "SUBSURFACE TO SURFACE MISSILE (S/SSM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.1.4 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "MISSILE IN FLIGHT",
            "LAND ATTACK MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WML---",
          name: "LAND ATTACK MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.2.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "WEAPON",
            "DECOY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "WD----",
          name: "DECOY",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "CIVIL AIRCRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "C-----",
          name: "CIVIL AIRCRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.3.1 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "CIVIL AIRCRAFT",
            "FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "CF----",
          name: "FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.3.2 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "CIVIL AIRCRAFT",
            "ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "CH----",
          name: "ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.2.3.3 ",
          names: [
            ,
            ,
            "AIR TRACK",
            "CIVIL AIRCRAFT",
            "LIGHTER THAN AIR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "A",
          status: "*",
          functionid: "CL----",
          name: "LIGHTER THAN AIR",
          remarks: ""
        }
      ]
    },
    GRDTRK_UNT: {
      name: "GROUND UNIT",
      mainIcon: [
        {
          hierarchy: "1.X.3 ",
          names: [
            ,
            ,
            "GROUND TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "------",
          name: "GROUND TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "U-----",
          name: "UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UC----",
          name: "COMBAT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCD---",
          name: "AIR DEFENCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "SHORT RANGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDS--",
          name: "SHORT RANGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "SHORT RANGE",
            "MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDS--",
          name: "MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "SHORT RANGE",
            "GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDS--",
          name: "GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "AIR DEFENCE MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDM--",
          name: "AIR DEFENCE MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "AIR DEFENCE MISSILE",
            "AIR DEFENCE MISSILE LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDML-",
          name: "AIR DEFENCE MISSILE LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.2.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "AIR DEFENCE MISSILE",
            "AIR DEFENCE MISSILE LIGHT",
            "AIR DEFENCE MISSILE MOTORIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDMLA",
          name: "AIR DEFENCE MISSILE MOTORIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "AIR DEFENCE MISSILE",
            "AIR DEFENCE MISSILE MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDMM-",
          name: "AIR DEFENCE MISSILE MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "AIR DEFENCE MISSILE",
            "AIR DEFENCE MISSILE HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDMH-",
          name: "AIR DEFENCE MISSILE HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "AIR DEFENCE MISSILE",
            "H/MAD"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDH--",
          name: "H/MAD",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "GUN UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDG--",
          name: "GUN UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "COMPOSITE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDC--",
          name: "COMPOSITE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "TARGETING UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDT--",
          name: "TARGETING UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AIR DEFENCE",
            "THEATRE MISSILE DEFENCE UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCDO--",
          name: "THEATRE MISSILE DEFENCE UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCA---",
          name: "ARMOUR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAT--",
          name: "ARMOUR TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATA-",
          name: "ARMOUR TRACK AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK AMPHIBIOUS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATW-",
          name: "ARMOUR TRACK AMPHIBIOUS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK AMPHIBIOUS",
            "ARMOUR TRACK AMPHIBIOUS RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATWR",
          name: "ARMOUR TRACK AMPHIBIOUS RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK, LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATL-",
          name: "ARMOUR TRACK, LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK, MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATM-",
          name: "ARMOUR TRACK, MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK, HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATH-",
          name: "ARMOUR TRACK, HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR TRACK",
            "ARMOUR TRACK, RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCATR-",
          name: "ARMOUR TRACK, RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAW--",
          name: "ARMOUR, WHEELED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWS-",
          name: "ARMOUR, WHEELED AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWA-",
          name: "ARMOUR, WHEELED AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED AMPHIBIOUS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWA-",
          name: "ARMOUR, WHEELED AMPHIBIOUS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWL-",
          name: "ARMOUR, WHEELED LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWM-",
          name: "ARMOUR, WHEELED MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWH-",
          name: "ARMOUR, WHEELED HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.2.2.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ARMOUR",
            "ARMOUR, WHEELED",
            "ARMOUR, WHEELED RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAWR-",
          name: "ARMOUR, WHEELED RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAA--",
          name: "ANTI ARMOUR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR DISMOUNTED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAD-",
          name: "ANTI ARMOUR DISMOUNTED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAL-",
          name: "ANTI ARMOUR LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAM-",
          name: "ANTI ARMOUR AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAS-",
          name: "ANTI ARMOUR AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR MOUNTAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAU-",
          name: "ANTI ARMOUR MOUNTAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR ARCTIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAC-",
          name: "ANTI ARMOUR ARCTIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR ARMOURED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAA-",
          name: "ANTI ARMOUR ARMOURED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.7.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR ARMOURED",
            "ANTI ARMOUR ARMOURED TRACKED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAAT",
          name: "ANTI ARMOUR ARMOURED TRACKED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.7.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR ARMOURED",
            "ANTI ARMOUR ARMOURED WHEELED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAAW",
          name: "ANTI ARMOUR ARMOURED WHEELED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.7.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR ARMOURED",
            "ANTI ARMOUR ARMOURED AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAAS",
          name: "ANTI ARMOUR ARMOURED AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR MOTORIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAO-",
          name: "ANTI ARMOUR MOTORIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.3.8.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ANTI ARMOUR",
            "ANTI ARMOUR MOTORIZED",
            "ANTI ARMOUR MOTORIZED AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCAAOS",
          name: "ANTI ARMOUR MOTORIZED AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCV---",
          name: "AVIATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVF--",
          name: "FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "FIXED WING",
            "UTILITY FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVFU-",
          name: "UTILITY FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "FIXED WING",
            "ATTACK FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVFA-",
          name: "ATTACK FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.1.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "FIXED WING",
            "ATTACK FIXED WING",
            "TACTICAL AIR CONTROL PARTY (TACP)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVUTP",
          name: "TACTICAL AIR CONTROL PARTY (TACP)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.1.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "FIXED WING",
            "ATTACK FIXED WING",
            "FORWARD AIR CONTROLLER (FAC)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVUFC",
          name: "FORWARD AIR CONTROLLER (FAC)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "FIXED WING",
            "RECON FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVFR-",
          name: "RECON FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVR--",
          name: "ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "ATTACK ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRA-",
          name: "ATTACK ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "SCOUT ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRS-",
          name: "SCOUT ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "ANTISUBMARINE WARFARE ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRW-",
          name: "ANTISUBMARINE WARFARE ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "UTILITY ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRU-",
          name: "UTILITY ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "UTILITY ROTARY WING",
            "LIGHT UTILITY ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRUL",
          name: "LIGHT UTILITY ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "UTILITY ROTARY WING",
            "MEDIUM UTILITY ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRUM",
          name: "MEDIUM UTILITY ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.4.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "UTILITY ROTARY WING",
            "HEAVY UTILITY ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRUH",
          name: "HEAVY UTILITY ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "C2 ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRUC",
          name: "C2 ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "MEDEVAC ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRUE",
          name: "MEDEVAC ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.2.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "ROTARY WING",
            "MINE COUNTERMEASURE ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVRM-",
          name: "MINE COUNTERMEASURE ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "PERSONNEL RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVS--",
          name: "PERSONNEL RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "COMPOSITE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVC--",
          name: "COMPOSITE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "VERTICAL/SHORT TAKEOFF AND LANDING (V/STOL)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVV--",
          name: "VERTICAL/SHORT TAKEOFF AND LANDING (V/STOL)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVU--",
          name: "UNMANNED AERIAL VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "UNMANNED AERIAL VEHICLE FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVUF-",
          name: "UNMANNED AERIAL VEHICLE FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.6.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "UNMANNED AERIAL VEHICLE FIXED WING",
            "AVIATION UAV CONTROL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVU--",
          name: "AVIATION UAV CONTROL",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.4.6.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "UNMANNED AERIAL VEHICLE FIXED WING",
            "AVIATION UAV LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVU--",
          name: "AVIATION UAV LAUNCHER",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.4.6.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "UNMANNED AERIAL VEHICLE FIXED WING",
            "AVIATION UAV RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVU--",
          name: "AVIATION UAV RECOVERY",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.4.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "UNMANNED AERIAL VEHICLE ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVUR-",
          name: "UNMANNED AERIAL VEHICLE ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.6.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "TACTICAL AIR CONTROL PARTY (TACP)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVUTP",
          name: "TACTICAL AIR CONTROL PARTY (TACP)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.4.6.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "AVIATION",
            "UNMANNED AERIAL VEHICLE",
            "FORWARD AIR CONTROLLER (FAC)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCVUFC",
          name: "FORWARD AIR CONTROLLER (FAC)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCI---",
          name: "INFANTRY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIL--",
          name: "INFANTRY LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY MOTORIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIM--",
          name: "INFANTRY MOTORIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY MOUNTAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIO--",
          name: "INFANTRY MOUNTAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIA--",
          name: "INFANTRY AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIS--",
          name: "INFANTRY AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY MECHANIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIZ--",
          name: "INFANTRY MECHANIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY NAVAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIN--",
          name: "INFANTRY NAVAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY FIGHTING VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCII--",
          name: "INFANTRY FIGHTING VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY ARCTIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIC--",
          name: "INFANTRY ARCTIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.5.10 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INFANTRY",
            "INFANTRY SNIPER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCIC--",
          name: "INFANTRY SNIPER",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCE---",
          name: "ENGINEER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCEC--",
          name: "ENGINEER COMBAT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECS-",
          name: "ENGINEER COMBAT AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECA-",
          name: "ENGINEER COMBAT AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT ARCTIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECC-",
          name: "ENGINEER COMBAT ARCTIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECL-",
          name: "ENGINEER COMBAT LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECM-",
          name: "ENGINEER COMBAT MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECH-",
          name: "ENGINEER COMBAT HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT MECHANIZED (TRACK)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECT-",
          name: "ENGINEER COMBAT MECHANIZED (TRACK)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT MOTORIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECW-",
          name: "ENGINEER COMBAT MOTORIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT MOUNTAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECO-",
          name: "ENGINEER COMBAT MOUNTAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.10 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT RECON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCECR-",
          name: "ENGINEER COMBAT RECON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.1.11 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT BRIDGING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCEC--",
          name: "ENGINEER COMBAT BRIDGING",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.6.1.12 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT MINE CLEARING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCEC--",
          name: "ENGINEER COMBAT MINE CLEARING",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.6.1.13 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT MINE LAYING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCEC--",
          name: "ENGINEER COMBAT MINE LAYING",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.6.1.14 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER COMBAT",
            "ENGINEER COMBAT DIVING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCEC--",
          name: "ENGINEER COMBAT DIVING",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER CONSTRUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCEN--",
          name: "ENGINEER CONSTRUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.6.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "ENGINEER",
            "ENGINEER CONSTRUCTION",
            "ENGINEER NAVAL CONSTRUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCENN-",
          name: "ENGINEER NAVAL CONSTRUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCF---",
          name: "FIELD ARTILLERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFH--",
          name: "HOWITZER/GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "SELF PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHE-",
          name: "SELF PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHS-",
          name: "AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHA-",
          name: "AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "ARCTIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHC-",
          name: "ARCTIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "MOUNTAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHO-",
          name: "MOUNTAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHL-",
          name: "LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHM-",
          name: "MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHH-",
          name: "HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.1.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "HOWITZER/GUN",
            "AMPHIBIOUS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFHX-",
          name: "AMPHIBIOUS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFR--",
          name: "ROCKET",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "SINGLE ROCKET LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRS-",
          name: "SINGLE ROCKET LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "SINGLE ROCKET LAUNCHER",
            "SINGLE ROCKET SELF PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRSS",
          name: "SINGLE ROCKET SELF PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "SINGLE ROCKET LAUNCHER",
            "SINGLE ROCKET TRUCK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRSR",
          name: "SINGLE ROCKET TRUCK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "SINGLE ROCKET LAUNCHER",
            "SINGLE ROCKET TOWED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRST",
          name: "SINGLE ROCKET TOWED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "MULTI ROCKET LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRM-",
          name: "MULTI ROCKET LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "MULTI ROCKET LAUNCHER",
            "MULTI ROCKET SELF PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRMS",
          name: "MULTI ROCKET SELF PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "MULTI ROCKET LAUNCHER",
            "MULTI ROCKET TRUCK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRMR",
          name: "MULTI ROCKET TRUCK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.2.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ROCKET",
            "MULTI ROCKET LAUNCHER",
            "MULTI ROCKET TOWED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFRMT",
          name: "MULTI ROCKET TOWED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFT--",
          name: "TARGET ACQUISITION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "RADAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTR-",
          name: "RADAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "SOUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTS-",
          name: "SOUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "FLASH (OPTICAL)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTF-",
          name: "FLASH (OPTICAL)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "TARGET ACQUISITION MOUNTED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTC-",
          name: "TARGET ACQUISITION MOUNTED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "TARGET ACQUISITION MOUNTED",
            "TARGET ACQUISITION DISMOUNTED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTCD",
          name: "TARGET ACQUISITION DISMOUNTED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "TARGET ACQUISITION MOUNTED",
            "TARGET ACQUISITION TRACKED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTCM",
          name: "TARGET ACQUISITION TRACKED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.3.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "TARGET ACQUISITION",
            "TARGET ACQUISITION NAVAL GUNFIRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFTA-",
          name: "TARGET ACQUISITION NAVAL GUNFIRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFM--",
          name: "MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "SELF PROPELLED (SP) TRACKED MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMS-",
          name: "SELF PROPELLED (SP) TRACKED MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "SP WHEELED MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMSW",
          name: "SP WHEELED MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "TOWED MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMT-",
          name: "TOWED MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "TOWED MORTAR",
            "TOWED AIRBORNE MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMTA",
          name: "TOWED AIRBORNE MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "TOWED MORTAR",
            "TOWED AIR ASSAULT MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMTS",
          name: "TOWED AIR ASSAULT MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.3.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "TOWED MORTAR",
            "TOWED ARCTIC MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMTC",
          name: "TOWED ARCTIC MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.3.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "TOWED MORTAR",
            "TOWED MOUNTAIN MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFMTO",
          name: "TOWED MOUNTAIN MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.4.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "MORTAR",
            "AMPHIBIOUS MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFML-",
          name: "AMPHIBIOUS MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ARTILLERY SURVEY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFS--",
          name: "ARTILLERY SURVEY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ARTILLERY SURVEY",
            "AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFSS-",
          name: "AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ARTILLERY SURVEY",
            "AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFSA-",
          name: "AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.5.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ARTILLERY SURVEY",
            "LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFSL-",
          name: "LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.5.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "ARTILLERY SURVEY",
            "MOUNTAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFSO-",
          name: "MOUNTAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "METEOROLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFO--",
          name: "METEOROLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "METEOROLOGICAL",
            "AIR ASSAULT METEOROLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFOS-",
          name: "AIR ASSAULT METEOROLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "METEOROLOGICAL",
            "AIRBORNE METEOROLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFOA-",
          name: "AIRBORNE METEOROLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.6.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "METEOROLOGICAL",
            "LIGHT METEOROLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFOL-",
          name: "LIGHT METEOROLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.6.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "METEOROLOGICAL",
            "MOUNTAIN METEOROLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCFOO-",
          name: "MOUNTAIN METEOROLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.7.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "FIRE DIRECTION CENTRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCF---",
          name: "FIRE DIRECTION CENTRE",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.7.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "FIELD ARTILLERY",
            "OBERSERVER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCF---",
          name: "OBERSERVER",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.1.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCR---",
          name: "RECONNAISSANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE HORSE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRH--",
          name: "RECONNAISSANCE HORSE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE CAVALRY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRV--",
          name: "RECONNAISSANCE CAVALRY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE CAVALRY",
            "RECONNAISSANCE CAVALRY ARMOURED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRVA-",
          name: "RECONNAISSANCE CAVALRY ARMOURED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE CAVALRY",
            "RECONNAISSANCE CAVALRY MOTORIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRVM-",
          name: "RECONNAISSANCE CAVALRY MOTORIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE CAVALRY",
            "RECONNAISSANCE CAVALRY GROUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRVG-",
          name: "RECONNAISSANCE CAVALRY GROUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE CAVALRY",
            "RECONNAISSANCE CAVALRY AIR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRVO-",
          name: "RECONNAISSANCE CAVALRY AIR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE ARCTIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRC--",
          name: "RECONNAISSANCE ARCTIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE AIR ASSAULT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRS--",
          name: "RECONNAISSANCE AIR ASSAULT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE AIRBORNE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRA--",
          name: "RECONNAISSANCE AIRBORNE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE MOUNTAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRO--",
          name: "RECONNAISSANCE MOUNTAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRLL--",
          name: "RECONNAISSANCE LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE MARINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRR--",
          name: "RECONNAISSANCE MARINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.8.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE MARINE",
            "RECONNAISSANCE MARINE DIVISION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRRD-",
          name: "RECONNAISSANCE MARINE DIVISION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.8.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE MARINE",
            "RECONNAISSANCE MARINE FORCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRRF-",
          name: "RECONNAISSANCE MARINE FORCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.8.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE MARINE",
            "RECONNAISSANCE MARINE LIGHT ARMOURED RECONNAISSANCE (LAR)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRRL-",
          name: "RECONNAISSANCE MARINE LIGHT ARMOURED RECONNAISSANCE (LAR)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.8.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "RECONNAISSANCE",
            "RECONNAISSANCE LONG RANGE SURVEILLANCE (LRS)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCRX--",
          name: "RECONNAISSANCE LONG RANGE SURVEILLANCE (LRS)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "MISSILE (SURFACE-SURFACE)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCM---",
          name: "MISSILE (SURFACE-SURFACE)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.9.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "MISSILE (SURFACE-SURFACE)",
            "MISSILE (SURFACE-SURFACE) TACTICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCMT--",
          name: "MISSILE (SURFACE-SURFACE) TACTICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.9.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "MISSILE (SURFACE-SURFACE)",
            "MISSILE (SURFACE-SURFACE) STRATEGIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCMS--",
          name: "MISSILE (SURFACE-SURFACE) STRATEGIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCS---",
          name: "INTERNAL SECURITY FORCES",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "RIVERINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSW--",
          name: "RIVERINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "GROUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSG--",
          name: "GROUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "GROUND",
            "DISMOUNTED GROUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSGD-",
          name: "DISMOUNTED GROUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "GROUND",
            "MOTORIZED GROUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSGM-",
          name: "MOTORIZED GROUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "GROUND",
            "MECHANIZED GROUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSGA-",
          name: "MECHANIZED GROUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "WHEELED MECHANIZED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSM--",
          name: "WHEELED MECHANIZED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "RAILROAD"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSR--",
          name: "RAILROAD",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.1.10.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT",
            "INTERNAL SECURITY FORCES",
            "AVIATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UCSA--",
          name: "AVIATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UU----",
          name: "COMBAT SUPPORT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUA---",
          name: "COMBAT SUPPORT CBRN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUAC--",
          name: "CHEMICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "SMOKE/DECON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACC-",
          name: "SMOKE/DECON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "SMOKE/DECON",
            "MECHANIZED SMOKE/DECON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACCK",
          name: "MECHANIZED SMOKE/DECON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "SMOKE/DECON",
            "MOTORIZED SMOKE/DECON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACCM",
          name: "MOTORIZED SMOKE/DECON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "SMOKE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACS-",
          name: "SMOKE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "SMOKE",
            "MOTORIZED SMOKE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACSM",
          name: "MOTORIZED SMOKE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "SMOKE",
            "ARMOUR SMOKE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACSA",
          name: "ARMOUR SMOKE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "CHEMICAL RECON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACR-",
          name: "CHEMICAL RECON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "CHEMICAL RECON",
            "CHEMICAL WHEELED ARMOURED VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACRW",
          name: "CHEMICAL WHEELED ARMOURED VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.1.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "CHEMICAL",
            "CHEMICAL RECON",
            "CHEMICAL WHEELED ARMOURED VEHICLE RECONNAISSANCE SURVEILLANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUACRS",
          name: "CHEMICAL WHEELED ARMOURED VEHICLE RECONNAISSANCE SURVEILLANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "NUCLEAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUAN--",
          name: "NUCLEAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "BIOLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUAB--",
          name: "BIOLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "BIOLOGICAL",
            "RECON EQUIPPED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUABR-",
          name: "RECON EQUIPPED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "COMBAT SUPPORT CBRN",
            "DECONTAMINATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUAD--",
          name: "DECONTAMINATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUM---",
          name: "MILITARY INTELLIGENCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "AERIAL EXPLOITATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMA--",
          name: "AERIAL EXPLOITATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMS--",
          name: "SIGNAL INTELLIGENCE (SIGINT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSE-",
          name: "ELECTRONIC WARFARE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE",
            "ARMOURED WHEELED VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSEA",
          name: "ARMOURED WHEELED VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE",
            "DIRECTION FINDING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSED",
          name: "DIRECTION FINDING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE",
            "INTERCEPT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSEI",
          name: "INTERCEPT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE",
            "JAMMING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSEJ",
          name: "JAMMING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE",
            "THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSET",
          name: "THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.2.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SIGNAL INTELLIGENCE (SIGINT)",
            "ELECTRONIC WARFARE",
            "CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMSEC",
          name: "CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "COUNTER INTELLIGENCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMC--",
          name: "COUNTER INTELLIGENCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SURVEILLANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMR--",
          name: "SURVEILLANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SURVEILLANCE",
            "GROUND SURVEILLANCE RADAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMRG-",
          name: "GROUND SURVEILLANCE RADAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SURVEILLANCE",
            "SENSOR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMRS-",
          name: "SENSOR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.4.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SURVEILLANCE",
            "SENSOR",
            "SENSOR SCM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMRSS",
          name: "SENSOR SCM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.4.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SURVEILLANCE",
            "GROUND STATION MODULE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMRX-",
          name: "GROUND STATION MODULE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.4.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "SURVEILLANCE",
            "METEOROLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMMO-",
          name: "METEOROLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "OPERATIONS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMO--",
          name: "OPERATIONS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "TACTICAL EXPLOIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMT--",
          name: "TACTICAL EXPLOIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "INTERROGATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMQ--",
          name: "INTERROGATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.2.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "MILITARY INTELLIGENCE",
            "JOINT INTELLIGENCE CENTRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUMJ--",
          name: "JOINT INTELLIGENCE CENTRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LAW ENFORCEMENT UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUL---",
          name: "LAW ENFORCEMENT UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LAW ENFORCEMENT UNIT",
            "SHORE PATROL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UULS--",
          name: "SHORE PATROL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LAW ENFORCEMENT UNIT",
            "MILITARY POLICE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UULM--",
          name: "MILITARY POLICE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.3.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LAW ENFORCEMENT UNIT",
            "CIVILIAN LAW ENFORCEMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UULC--",
          name: "CIVILIAN LAW ENFORCEMENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.3.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LAW ENFORCEMENT UNIT",
            "SECURITY POLICE (AIR)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UULF--",
          name: "SECURITY POLICE (AIR)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.3.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LAW ENFORCEMENT UNIT",
            "CENTRAL INTELLIGENCE DIVISION (CID)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UULD--",
          name: "CENTRAL INTELLIGENCE DIVISION (CID)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUS---",
          name: "SIGNAL UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "AREA"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSA--",
          name: "AREA",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "COMMUNICATION CONFIGURED PACKAGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSC--",
          name: "COMMUNICATION CONFIGURED PACKAGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "COMMUNICATION CONFIGURED PACKAGE",
            "LARGE COMMUNICATION CONFIGURED PACKAGE (LCCP)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSCL-",
          name: "LARGE COMMUNICATION CONFIGURED PACKAGE (LCCP)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "COMMAND OPERATIONS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSO--",
          name: "COMMAND OPERATIONS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "FORWARD COMMUNICATIONS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSF--",
          name: "FORWARD COMMUNICATIONS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "MULTIPLE SUBSCRIBER ELEMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSM--",
          name: "MULTIPLE SUBSCRIBER ELEMENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "MULTIPLE SUBSCRIBER ELEMENT",
            "SMALL EXTENSION NODE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSMS-",
          name: "SMALL EXTENSION NODE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "MULTIPLE SUBSCRIBER ELEMENT",
            "LARGE EXTENSION NODE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSML-",
          name: "LARGE EXTENSION NODE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.5.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "MULTIPLE SUBSCRIBER ELEMENT",
            "NODE CENTRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSMN-",
          name: "NODE CENTRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "RADIO UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSR--",
          name: "RADIO UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "RADIO UNIT",
            "TACTICAL SATELLITE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSRS-",
          name: "TACTICAL SATELLITE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "RADIO UNIT",
            "TELETYPE CENTRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSRT-",
          name: "TELETYPE CENTRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.6.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "RADIO UNIT",
            "RELAY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSRW-",
          name: "RELAY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "SIGNAL SUPPORT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSS--",
          name: "SIGNAL SUPPORT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "TELEPHONE SWITCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSW--",
          name: "TELEPHONE SWITCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.4.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "SIGNAL UNIT",
            "ELECTRONIC RANGING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUSX--",
          name: "ELECTRONIC RANGING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "INFORMATION WARFARE UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUI---",
          name: "INFORMATION WARFARE UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "LANDING SUPPORT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUX---",
          name: "LANDING SUPPORT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "EXPLOSIVE ORDINANCE DISPOSAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUE---",
          name: "EXPLOSIVE ORDINANCE DISPOSAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "TOPOGRAPHIC"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUT---",
          name: "TOPOGRAPHIC",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.2.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "DOG"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UU----",
          name: "DOG",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.2.10 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SUPPORT",
            "DRILLING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UUD---",
          name: "DRILLING",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "US----",
          name: "COMBAT SERVICE SUPPORT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USA---",
          name: "ADMINISTRATIVE (ADMIN)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "ADMIN THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAT--",
          name: "ADMIN THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "ADMIN CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAC--",
          name: "ADMIN CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "JUDGE ADVOCATE GENERAL (JAG)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAJ--",
          name: "JUDGE ADVOCATE GENERAL (JAG)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "JUDGE ADVOCATE GENERAL (JAG)",
            "JAG THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAJT-",
          name: "JAG THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "JUDGE ADVOCATE GENERAL (JAG)",
            "JAG CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAJC-",
          name: "JAG CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "POSTAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAO--",
          name: "POSTAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "POSTAL",
            "POSTAL THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAOT-",
          name: "POSTAL THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "POSTAL",
            "POSTAL CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAOC-",
          name: "POSTAL CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "FINANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAF--",
          name: "FINANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "FINANCE",
            "FINANCE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAFT-",
          name: "FINANCE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "FINANCE",
            "FINANCE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAFC-",
          name: "FINANCE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PERSONNEL SERVICES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAS--",
          name: "PERSONNEL SERVICES",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PERSONNEL SERVICES",
            "PERSONNEL THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAST-",
          name: "PERSONNEL THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PERSONNEL SERVICES",
            "PERSONNEL CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USASC-",
          name: "PERSONNEL CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "MORTUARY/GRAVES REGISTRY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAM--",
          name: "MORTUARY/GRAVES REGISTRY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.7.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "MORTUARY/GRAVES REGISTRY",
            "MORTUARY/GRAVES REGISTRY THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAMT-",
          name: "MORTUARY/GRAVES REGISTRY THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.7.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "MORTUARY/GRAVES REGISTRY",
            "MORTUARY/GRAVES REGISTRY CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAMC-",
          name: "MORTUARY/GRAVES REGISTRY CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "RELIGIOUS/CHAPLAIN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAR--",
          name: "RELIGIOUS/CHAPLAIN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.8.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "RELIGIOUS/CHAPLAIN",
            "RELIGIOUS/CHAPLAIN THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USART-",
          name: "RELIGIOUS/CHAPLAIN THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.8.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "RELIGIOUS/CHAPLAIN",
            "RELIGIOUS/CHAPLAIN CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USARC-",
          name: "RELIGIOUS/CHAPLAIN CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAP--",
          name: "PUBLIC AFFAIRS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPT-",
          name: "PUBLIC AFFAIRS THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPC-",
          name: "PUBLIC AFFAIRS CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS BROADCAST"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPB-",
          name: "PUBLIC AFFAIRS BROADCAST",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS BROADCAST",
            "PUBLIC AFFAIRS BROADCAST THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPBT",
          name: "PUBLIC AFFAIRS BROADCAST THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS BROADCAST",
            "PUBLIC AFFAIRS BROADCAST CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPBC",
          name: "PUBLIC AFFAIRS BROADCAST CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS JOINT INFORMATION BUREAU (JIB)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPM-",
          name: "PUBLIC AFFAIRS JOINT INFORMATION BUREAU (JIB)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS JOINT INFORMATION BUREAU (JIB)",
            "PUBLIC AFFAIRS JIB THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPMT",
          name: "PUBLIC AFFAIRS JIB THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.9.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "PUBLIC AFFAIRS",
            "PUBLIC AFFAIRS JOINT INFORMATION BUREAU (JIB)",
            "PUBLIC AFFAIRS JIB CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAPMC",
          name: "PUBLIC AFFAIRS JIB CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.10 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "REPLACEMENT HOLDING UNIT (RHU)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAX--",
          name: "REPLACEMENT HOLDING UNIT (RHU)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.10.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "REPLACEMENT HOLDING UNIT (RHU)",
            "RHU THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAXT-",
          name: "RHU THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.10.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "REPLACEMENT HOLDING UNIT (RHU)",
            "RHU CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAXC-",
          name: "RHU CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.11 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "LABOUR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAL--",
          name: "LABOUR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.11.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "LABOUR",
            "LABOUR THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USALT-",
          name: "LABOUR THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.11.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "LABOUR",
            "LABOUR CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USALC-",
          name: "LABOUR CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.12 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "MORAL, WELFARE, RECREATION (MWR)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAW--",
          name: "MORAL, WELFARE, RECREATION (MWR)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.12.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "MORAL, WELFARE, RECREATION (MWR)",
            "MWR THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAWT-",
          name: "MWR THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.12.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "MORAL, WELFARE, RECREATION (MWR)",
            "MWR CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAWC-",
          name: "MWR CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.13 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "QUARTERMASTER (SUPPLY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAQ--",
          name: "QUARTERMASTER (SUPPLY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.13.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "QUARTERMASTER (SUPPLY)",
            "QUARTERMASTER (SUPPLY) THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAQT-",
          name: "QUARTERMASTER (SUPPLY) THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.1.13.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ADMINISTRATIVE (ADMIN)",
            "QUARTERMASTER (SUPPLY)",
            "QUARTERMASTER (SUPPLY) CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USAQC-",
          name: "QUARTERMASTER (SUPPLY) CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USM---",
          name: "MEDICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMT--",
          name: "MEDICAL THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMC--",
          name: "MEDICAL CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL TREATMENT FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMM--",
          name: "MEDICAL TREATMENT FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL TREATMENT FACILITY",
            "MEDICAL TREATMENT FACILITY THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMMT-",
          name: "MEDICAL TREATMENT FACILITY THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL TREATMENT FACILITY",
            "MEDICAL TREATMENT FACILITY CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMMC-",
          name: "MEDICAL TREATMENT FACILITY CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL VETERINARY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMV--",
          name: "MEDICAL VETERINARY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL VETERINARY",
            "MEDICAL VETERINARY THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMVT-",
          name: "MEDICAL VETERINARY THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL VETERINARY",
            "MEDICAL VETERINARY CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMVC-",
          name: "MEDICAL VETERINARY CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL DENTAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMD--",
          name: "MEDICAL DENTAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL DENTAL",
            "MEDICAL DENTAL THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMDT-",
          name: "MEDICAL DENTAL THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL DENTAL",
            "MEDICAL DENTAL CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMDC-",
          name: "MEDICAL DENTAL CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL PSYCHOLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMP--",
          name: "MEDICAL PSYCHOLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL PSYCHOLOGICAL",
            "MEDICAL PSYCHOLOGICAL THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMPT-",
          name: "MEDICAL PSYCHOLOGICAL THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.2.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MEDICAL",
            "MEDICAL PSYCHOLOGICAL",
            "MEDICAL PSYCHOLOGICAL CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USMPC-",
          name: "MEDICAL PSYCHOLOGICAL CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS---",
          name: "SUPPLY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USST--",
          name: "SUPPLY THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSC--",
          name: "SUPPLY CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS I"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS1--",
          name: "SUPPLY CLASS I",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS I",
            "SUPPLY CLASS I THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS1T-",
          name: "SUPPLY CLASS I THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS I",
            "SUPPLY CLASS I CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS1C-",
          name: "SUPPLY CLASS I CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS II"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS2--",
          name: "SUPPLY CLASS II",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS II",
            "SUPPLY CLASS II THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS2T-",
          name: "SUPPLY CLASS II THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS II",
            "SUPPLY CLASS II CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS2C-",
          name: "SUPPLY CLASS II CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS III"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS3--",
          name: "SUPPLY CLASS III",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS III",
            "SUPPLY CLASS III THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS3T-",
          name: "SUPPLY CLASS III THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS III",
            "SUPPLY CLASS III CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS3C-",
          name: "SUPPLY CLASS III CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.5.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS III",
            "SUPPLY CLASS III AVIATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS3A-",
          name: "SUPPLY CLASS III AVIATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.5.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS III",
            "SUPPLY CLASS III AVIATION",
            "SUPPLY CLASS III AVIATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS3AT",
          name: "SUPPLY CLASS III AVIATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.5.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS III",
            "SUPPLY CLASS III AVIATION",
            "SUPPLY CLASS III AVIATION CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS3AC",
          name: "SUPPLY CLASS III AVIATION CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS IV"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS4--",
          name: "SUPPLY CLASS IV",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS IV",
            "SUPPLY CLASS IV THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS4T-",
          name: "SUPPLY CLASS IV THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS IV",
            "SUPPLY CLASS IV CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS4C-",
          name: "SUPPLY CLASS IV CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS V"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS5--",
          name: "SUPPLY CLASS V",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.7.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS V",
            "SUPPLY CLASS V THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS5T-",
          name: "SUPPLY CLASS V THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.7.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS V",
            "SUPPLY CLASS V CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS5C-",
          name: "SUPPLY CLASS V CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VI"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS6--",
          name: "SUPPLY CLASS VI",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.8.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VI",
            "SUPPLY CLASS VI THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS6T-",
          name: "SUPPLY CLASS VI THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.8.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VI",
            "SUPPLY CLASS VI CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS6C-",
          name: "SUPPLY CLASS VI CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.9 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VII"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS7--",
          name: "SUPPLY CLASS VII",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.9.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VII",
            "SUPPLY CLASS VII THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS7T-",
          name: "SUPPLY CLASS VII THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.9.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VII",
            "SUPPLY CLASS VII CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS7C-",
          name: "SUPPLY CLASS VII CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.10 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VIII"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS8--",
          name: "SUPPLY CLASS VIII",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.10.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VIII",
            "SUPPLY CLASS VIII THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS8T-",
          name: "SUPPLY CLASS VIII THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.10.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS VIII",
            "SUPPLY CLASS VIII CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS8C-",
          name: "SUPPLY CLASS VIII CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.11 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS IX"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS9--",
          name: "SUPPLY CLASS IX",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.11.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS IX",
            "SUPPLY CLASS IX THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS9T-",
          name: "SUPPLY CLASS IX THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.11.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS IX",
            "SUPPLY CLASS IX CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USS9C-",
          name: "SUPPLY CLASS IX CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.12 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS X"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSX--",
          name: "SUPPLY CLASS X",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.12.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS X",
            "SUPPLY CLASS X THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSXT-",
          name: "SUPPLY CLASS X THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.12.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY CLASS X",
            "SUPPLY CLASS X CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSXC-",
          name: "SUPPLY CLASS X CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.13 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY LAUNDRY/BATH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSL--",
          name: "SUPPLY LAUNDRY/BATH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.13.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY LAUNDRY/BATH",
            "SUPPLY LAUNDRY/BATH THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSLT-",
          name: "SUPPLY LAUNDRY/BATH THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.13.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY LAUNDRY/BATH",
            "SUPPLY LAUNDRY/BATH CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSLC-",
          name: "SUPPLY LAUNDRY/BATH CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.14 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY WATER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSW--",
          name: "SUPPLY WATER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.14.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY WATER",
            "SUPPLY WATER THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSWT-",
          name: "SUPPLY WATER THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.14.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY WATER",
            "SUPPLY WATER CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSWC-",
          name: "SUPPLY WATER CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.14.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY WATER",
            "SUPPLY WATER PURIFICATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSWP-",
          name: "SUPPLY WATER PURIFICATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.14.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY WATER",
            "SUPPLY WATER PURIFICATION",
            "SUPPLY WATER PURIFICATION THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSWPT",
          name: "SUPPLY WATER PURIFICATION THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.3.14.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "SUPPLY",
            "SUPPLY WATER",
            "SUPPLY WATER PURIFICATION",
            "SUPPLY WATER PURIFICATION CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USSWPC",
          name: "SUPPLY WATER PURIFICATION CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UST---",
          name: "TRANSPORTATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "TRANSPORTATION THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTT--",
          name: "TRANSPORTATION THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "TRANSPORTATION CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTC--",
          name: "TRANSPORTATION CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "MOVEMENT CONTROL CENTRE(MCC)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTM--",
          name: "MOVEMENT CONTROL CENTRE(MCC)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "MOVEMENT CONTROL CENTRE(MCC)",
            "MCC THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTMT-",
          name: "MCC THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "MOVEMENT CONTROL CENTRE(MCC)",
            "MCC CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTMC-",
          name: "MCC CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "RAILHEAD"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTR--",
          name: "RAILHEAD",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "RAILHEAD",
            "RAILHEAD THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTRT-",
          name: "RAILHEAD THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "RAILHEAD",
            "RAILHEAD CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTRC-",
          name: "RAILHEAD CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "SPOD/SPOE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTS--",
          name: "SPOD/SPOE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "SPOD/SPOE",
            "SPOD/SPOE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTST-",
          name: "SPOD/SPOE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "SPOD/SPOE",
            "SPOD/SPOE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTSC-",
          name: "SPOD/SPOE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "APOD/APOE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTA--",
          name: "APOD/APOE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "APOD/APOE",
            "APOD/APOE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTAT-",
          name: "APOD/APOE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "APOD/APOE",
            "APOD/APOE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTAC-",
          name: "APOD/APOE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTI--",
          name: "MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.7.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "MISSILE",
            "MISSILE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTIT-",
          name: "MISSILE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.4.7.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "TRANSPORTATION",
            "MISSILE",
            "MISSILE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USTIC-",
          name: "MISSILE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USX---",
          name: "MAINTENANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXT--",
          name: "MAINTENANCE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXC--",
          name: "MAINTENANCE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXH--",
          name: "MAINTENANCE HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE HEAVY",
            "MAINTENANCE HEAVY THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXHT-",
          name: "MAINTENANCE HEAVY THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE HEAVY",
            "MAINTENANCE HEAVY CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXHC-",
          name: "MAINTENANCE HEAVY CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXR--",
          name: "MAINTENANCE RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.4.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE RECOVERY",
            "MAINTENANCE RECOVERY THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXRT-",
          name: "MAINTENANCE RECOVERY THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.4.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "MAINTENANCE RECOVERY",
            "MAINTENANCE RECOVERY CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXRC-",
          name: "MAINTENANCE RECOVERY CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ORDINANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXO--",
          name: "ORDINANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.5.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ORDINANCE",
            "ORDINANCE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXOT-",
          name: "ORDINANCE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.5.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ORDINANCE",
            "ORDINANCE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXOC-",
          name: "ORDINANCE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.5.3 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ORDINANCE",
            "ORDINANCE MISSILE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXOM-",
          name: "ORDINANCE MISSILE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.5.3.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ORDINANCE",
            "ORDINANCE MISSILE",
            "ORDINANCE MISSILE THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXOMT",
          name: "ORDINANCE MISSILE THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.5.3.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ORDINANCE",
            "ORDINANCE MISSILE",
            "ORDINANCE MISSILE CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXOMC",
          name: "ORDINANCE MISSILE CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ELECTRO-OPTICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXE--",
          name: "ELECTRO-OPTICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.6.1 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ELECTRO-OPTICAL",
            "ELECTRO-OPTICAL THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXET-",
          name: "ELECTRO-OPTICAL THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.6.2 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "ELECTRO-OPTICAL",
            "ELECTRO-OPTICAL CORPS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXEC-",
          name: "ELECTRO-OPTICAL CORPS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "BATTLE DAMAGE REPAIR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXBDR",
          name: "BATTLE DAMAGE REPAIR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.5.8 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "MAINTENANCE",
            "PREVENTIVE MAINTANANCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXPM-",
          name: "PREVENTIVE MAINTANANCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "PIPELINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXP--",
          name: "PIPELINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.3.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "COMBAT SERVICE SUPPORT",
            "ENVIRONMENTAL PROTECTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "USXEP-",
          name: "ENVIRONMENTAL PROTECTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.4 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "SPECIAL C2 HEADQUARTERS COMPONENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UH----",
          name: "SPECIAL C2 HEADQUARTERS COMPONENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.1.5 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "UNIT GENERAL HEADQUARTERS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UH----",
          name: "UNIT GENERAL HEADQUARTERS",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.6 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "GENERAL HEADQUARTERS AND SERVICE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UH----",
          name: "GENERAL HEADQUARTERS AND SERVICE",
          remarks: "Error in standard"
        },
        {
          hierarchy: "1.X.3.1.7 ",
          names: [
            ,
            ,
            "GROUND TRACK",
            "UNIT",
            "UNIT GENERAL LIAISON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "UHGL--",
          name: "UNIT GENERAL LIAISON",
          remarks: ""
        }
      ]
    },
    GRDTRK_EQT: {
      name: "GROUND EQUIPMENT",
      mainIcon: [
        {
          hierarchy: "1.X.3.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "E-----",
          name: "GROUND TRACK EQUIPMENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EW----",
          name: "WEAPONS",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.3.2.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWM---",
          name: "MISSILE LAUNCHERS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "AIR DEFENCE (AD) MISSILE LAUNCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMA--",
          name: "AIR DEFENCE (AD) MISSILE LAUNCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "AIR DEFENCE (AD) MISSILE LAUNCH",
            "SHORT RANGE AD MISSILE LAUNCHERS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMAS-",
          name: "SHORT RANGE AD MISSILE LAUNCHERS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.1.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "AIR DEFENCE (AD) MISSILE LAUNCH",
            "INTERMEDIATE RANGE AD MISSILE LAUNCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMAI-",
          name: "INTERMEDIATE RANGE AD MISSILE LAUNCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.1.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "AIR DEFENCE (AD) MISSILE LAUNCH",
            "LONG RANGE AD MISSILE LAUNCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMAL-",
          name: "LONG RANGE AD MISSILE LAUNCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.1.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "AIR DEFENCE (AD) MISSILE LAUNCH",
            "AD MISSILE LAUNCH THEATRE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMAT-",
          name: "AD MISSILE LAUNCH THEATRE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "SURFACE-SURFACE (SS) MISSILE LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMS--",
          name: "SURFACE-SURFACE (SS) MISSILE LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "SURFACE-SURFACE (SS) MISSILE LAUNCHER",
            "SHORT RANGE SS MISSILE LAUNCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMSS-",
          name: "SHORT RANGE SS MISSILE LAUNCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.2.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "SURFACE-SURFACE (SS) MISSILE LAUNCHER",
            "INTERMEDIATE RANGE SS MISSILE LAUNCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMSI-",
          name: "INTERMEDIATE RANGE SS MISSILE LAUNCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.2.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "SURFACE-SURFACE (SS) MISSILE LAUNCHER",
            "LONG RANGE SS MISSILE LAUNCH"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMSL-",
          name: "LONG RANGE SS MISSILE LAUNCH",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "MISSILE LAUNCHERS ANTI TANK (AT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMT--",
          name: "MISSILE LAUNCHERS ANTI TANK (AT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "MISSILE LAUNCHERS ANTI TANK (AT)",
            "MISSILE LAUNCHERS AT LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMTL-",
          name: "MISSILE LAUNCHERS AT LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.3.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "MISSILE LAUNCHERS ANTI TANK (AT)",
            "MISSILE LAUNCHER AT MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMTM-",
          name: "MISSILE LAUNCHER AT MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.1.3.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MISSILE LAUNCHERS",
            "MISSILE LAUNCHERS ANTI TANK (AT)",
            "MISSILE LAUNCHER AT HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWMTH-",
          name: "MISSILE LAUNCHER AT HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "SINGLE ROCKET LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWS---",
          name: "SINGLE ROCKET LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "SINGLE ROCKET LAUNCHER",
            "SINGLE ROCKET LAUNCHER LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWSL--",
          name: "SINGLE ROCKET LAUNCHER LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.2.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "SINGLE ROCKET LAUNCHER",
            "SINGLE ROCKET LAUNCHER MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWSM--",
          name: "SINGLE ROCKET LAUNCHER MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.2.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "SINGLE ROCKET LAUNCHER",
            "SINGLE ROCKET LAUNCHER HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWSH--",
          name: "SINGLE ROCKET LAUNCHER HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MULTIPLE ROCKET LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWX---",
          name: "MULTIPLE ROCKET LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MULTIPLE ROCKET LAUNCHER",
            "MULTIPLE ROCKET LAUNCHER LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWXL--",
          name: "MULTIPLE ROCKET LAUNCHER LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.3.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MULTIPLE ROCKET LAUNCHER",
            "MULTIPLE ROCKET LAUNCHER MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWXM--",
          name: "MULTIPLE ROCKET LAUNCHER MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.3.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MULTIPLE ROCKET LAUNCHER",
            "MULTIPLE ROCKET LAUNCHER HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWXH--",
          name: "MULTIPLE ROCKET LAUNCHER HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK ROCKET LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWT---",
          name: "ANTITANK ROCKET LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.4.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK ROCKET LAUNCHER",
            "ANTITANK ROCKET LAUNCHER LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWTL--",
          name: "ANTITANK ROCKET LAUNCHER LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.4.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK ROCKET LAUNCHER",
            "ANTITANK ROCKET LAUNCHER MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWTM--",
          name: "ANTITANK ROCKET LAUNCHER MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.4.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK ROCKET LAUNCHER",
            "ANTITANK ROCKET LAUNCHER HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWTH--",
          name: "ANTITANK ROCKET LAUNCHER HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.5 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "RIFLE/AUTOMATIC WEAPON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWR---",
          name: "RIFLE/AUTOMATIC WEAPON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.5.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "RIFLE/AUTOMATIC WEAPON",
            "RIFLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWRR--",
          name: "RIFLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.5.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "RIFLE/AUTOMATIC WEAPON",
            "LIGHT MACHINE GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWRL--",
          name: "LIGHT MACHINE GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.5.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "RIFLE/AUTOMATIC WEAPON",
            "HEAVY MACHINE GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWRH--",
          name: "HEAVY MACHINE GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.6 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "GRENADE LAUNCHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWZ---",
          name: "GRENADE LAUNCHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.6.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "GRENADE LAUNCHER",
            "GRENADE LAUNCHER LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWZL--",
          name: "GRENADE LAUNCHER LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.6.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "GRENADE LAUNCHER",
            "GRENADE LAUNCHER MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWZM--",
          name: "GRENADE LAUNCHER MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.6.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "GRENADE LAUNCHER",
            "GRENADE LAUNCHER HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWZH--",
          name: "GRENADE LAUNCHER HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.7 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MORTAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWO---",
          name: "MORTAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.7.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MORTAR",
            "MORTAR LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWOL--",
          name: "MORTAR LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.7.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MORTAR",
            "MORTAR MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWOM--",
          name: "MORTAR MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.7.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "MORTAR",
            "MORTAR HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWOH--",
          name: "MORTAR HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWH---",
          name: "HOWITZER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER",
            "HOWITZER LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWHL--",
          name: "HOWITZER LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER",
            "HOWITZER LIGHT",
            "HOWITZER LIGHT SELF-PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWHLS-",
          name: "HOWITZER LIGHT SELF-PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER",
            "HOWITZER MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWHM--",
          name: "HOWITZER MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER",
            "HOWITZER MEDIUM",
            "HOWITZER MEDIUM SELF-PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWHMS-",
          name: "HOWITZER MEDIUM SELF-PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER",
            "HOWITZER HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWHH--",
          name: "HOWITZER HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.8.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "HOWITZER",
            "HOWITZER HEAVY",
            "HOWITZER HEAVY SELF-PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWHHS-",
          name: "HOWITZER HEAVY SELF-PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.9 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWG---",
          name: "ANTITANK GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.9.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK GUN",
            "ANTITANK GUN RECOILLESS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWGR--",
          name: "ANTITANK GUN RECOILLESS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.9.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK GUN",
            "ANTITANK GUN LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWGL--",
          name: "ANTITANK GUN LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.9.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK GUN",
            "ANTITANK GUN MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWGM--",
          name: "ANTITANK GUN MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.9.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "ANTITANK GUN",
            "ANTITANK GUN HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWGH--",
          name: "ANTITANK GUN HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWD---",
          name: "DIRECT FIRE GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN",
            "DIRECT FIRE GUN LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWDL--",
          name: "DIRECT FIRE GUN LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN",
            "DIRECT FIRE GUN LIGHT",
            "DIRECT FIRE GUN LIGHT SELF-PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWDLS-",
          name: "DIRECT FIRE GUN LIGHT SELF-PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN",
            "DIRECT FIRE GUN MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWDM--",
          name: "DIRECT FIRE GUN MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN",
            "DIRECT FIRE GUN MEDIUM",
            "DIRECT FIRE GUN MEDIUM SELF-PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWDMS-",
          name: "DIRECT FIRE GUN MEDIUM SELF-PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN",
            "DIRECT FIRE GUN HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWDH--",
          name: "DIRECT FIRE GUN HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.10.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "DIRECT FIRE GUN",
            "DIRECT FIRE GUN HEAVY",
            "DIRECT FIRE GUN HEAVY SELF-PROPELLED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWDHS-",
          name: "DIRECT FIRE GUN HEAVY SELF-PROPELLED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.11 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "AIR DEFENCE GUN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWA---",
          name: "AIR DEFENCE GUN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.11.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "AIR DEFENCE GUN",
            "AIR DEFENCE GUN LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWAL--",
          name: "AIR DEFENCE GUN LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.11.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "AIR DEFENCE GUN",
            "AIR DEFENCE GUN MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWAM--",
          name: "AIR DEFENCE GUN MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.1.11.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "WEAPONS",
            "AIR DEFENCE GUN",
            "AIR DEFENCE GUN HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EWAH--",
          name: "AIR DEFENCE GUN HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EV----",
          name: "GROUND VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVA---",
          name: "ARMOURED VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAT--",
          name: "TANK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK",
            "TANK LIGHT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVATL-",
          name: "TANK LIGHT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1.1.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK",
            "TANK LIGHT",
            "TANK LIGHT RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVATW-",
          name: "TANK LIGHT RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK",
            "TANK MEDIUM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVATM-",
          name: "TANK MEDIUM",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK",
            "TANK MEDIUM",
            "TANK MEDIUM RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVATX-",
          name: "TANK MEDIUM RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK",
            "TANK HEAVY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVATH-",
          name: "TANK HEAVY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.1.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "TANK",
            "TANK HEAVY",
            "TANK HEAVY RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVATY-",
          name: "TANK HEAVY RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "ARMOURED PERSONNEL CARRIER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAA--",
          name: "ARMOURED PERSONNEL CARRIER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "ARMOURED PERSONNEL CARRIER",
            "ARMOURED PERSONNEL CARRIER RECOVERY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAAR-",
          name: "ARMOURED PERSONNEL CARRIER RECOVERY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "ARMOURED INFANTRY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAI--",
          name: "ARMOURED INFANTRY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "C2V/ACV"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAC--",
          name: "C2V/ACV",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.5 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "COMBAT SERVICE SUPPORT VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAS--",
          name: "COMBAT SERVICE SUPPORT VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.1.6 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ARMOURED VEHICLE",
            "LIGHT ARMOURED VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVAL--",
          name: "LIGHT ARMOURED VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "UTILITY VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVU---",
          name: "UTILITY VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "UTILITY VEHICLE",
            "BUS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVUB--",
          name: "BUS",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.2.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "UTILITY VEHICLE",
            "SEMI"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVUS--",
          name: "SEMI",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.2.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "UTILITY VEHICLE",
            "LIMITED CROSS-COUNTRY TRUCK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVUL--",
          name: "LIMITED CROSS-COUNTRY TRUCK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.2.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "UTILITY VEHICLE",
            "CROSS-COUNTRY TRUCK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVUX--",
          name: "CROSS-COUNTRY TRUCK",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.2.5 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "UTILITY VEHICLE",
            "WATER CRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVUR--",
          name: "WATER CRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVE---",
          name: "ENGINEER VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "BRIDGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEB--",
          name: "BRIDGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "EARTHMOVER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEE--",
          name: "EARTHMOVER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.2.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "EARTHMOVER",
            "MULTIFUNCTIONAL EARTHMOVER/DIGGER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEE--",
          name: "MULTIFUNCTIONAL EARTHMOVER/DIGGER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "CONSTRUCTION VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEC--",
          name: "CONSTRUCTION VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "MINE LAYING VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEM--",
          name: "MINE LAYING VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.4.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "MINE LAYING VEHICLE",
            "ARMOURED VEHICLE MOUNTED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEMA-",
          name: "ARMOURED VEHICLE MOUNTED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.4.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "MINE LAYING VEHICLE",
            "TRAILER MOUNTED"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEMT-",
          name: "TRAILER MOUNTED",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.4.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "MINE LAYING VEHICLE",
            "ARMOURED CARRIER WITH VOLCANO"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEMV-",
          name: "ARMOURED CARRIER WITH VOLCANO",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.4.5 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "MINE LAYING VEHICLE",
            "ARMOURED CARRIER WITH SCATTERABLE MINES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVEMSM",
          name: "ARMOURED CARRIER WITH SCATTERABLE MINES",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.5 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "DOZER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVED--",
          name: "DOZER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.3.6 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "ENGINEER VEHICLE",
            "DRILLING VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVD---",
          name: "DRILLING VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "TRAIN LOCOMOTIVE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVST--",
          name: "TRAIN LOCOMOTIVE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.2.5 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "GROUND VEHICLE",
            "CIVILIAN VEHICLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EVC---",
          name: "CIVILIAN VEHICLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SENSOR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "ES----",
          name: "SENSOR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.3.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SENSOR",
            "RADAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "ESR---",
          name: "RADAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.3.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SENSOR",
            "EMPLACED SENSOR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "ESE---",
          name: "EMPLACED SENSOR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EX----",
          name: "SPECIAL EQUIPMENT",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.3.2.4.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT",
            "LASER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EXL---",
          name: "LASER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.4.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT",
            "CBRN EQUIPMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EXN---",
          name: "CBRN EQUIPMENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.4.3 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT",
            "FLAME THROWER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EXF---",
          name: "FLAME THROWER",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.4.4 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT",
            "LAND MINES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EXM---",
          name: "LAND MINES",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.4.4.1 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT",
            "LAND MINES",
            "LAND MINES, LETHAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EXMC--",
          name: "LAND MINES, LETHAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.2.4.4.2 ",
          names: [
            ,
            ,
            ,
            "GROUND TRACK EQUIPMENT",
            "SPECIAL EQUIPMENT",
            "LAND MINES",
            "LESS THAN LETHAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "EXML--",
          name: "LESS THAN LETHAL",
          remarks: ""
        }
      ]
    },
    GRDTRK_INS: {
      name: "GROUND INSTALLATION",
      mainIcon: [
        {
          hierarchy: "1.X.3.3 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "I-----",
          name: "INSTALLATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IR----",
          name: "RAW MATERIAL PRODUCTION/STORAGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE",
            "MINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRM---",
          name: "MINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1.2 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE",
            "PETROLEUM/GAS/OIL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRP---",
          name: "PETROLEUM/GAS/OIL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1.3 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE",
            "CBRN"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRN---",
          name: "CBRN",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1.3.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE",
            "CBRN",
            "BIOLOGICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRNB--",
          name: "BIOLOGICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1.3.2 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE",
            "CBRN",
            "CHEMICAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRNC--",
          name: "CHEMICAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.1.3.3 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "RAW MATERIAL PRODUCTION/STORAGE",
            "CBRN",
            "NUCLEAR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRNN--",
          name: "NUCLEAR",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.2 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "PROCESSING FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IP----",
          name: "PROCESSING FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.2.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "PROCESSING FACILITY",
            "DECON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IPD---",
          name: "DECON",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.3 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "EQUIPMENT MANUFACTURE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IE----",
          name: "EQUIPMENT MANUFACTURE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.4 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "SERVICE, RESEARCH, UTILITY FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IU----",
          name: "SERVICE, RESEARCH, UTILITY FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.4.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "SERVICE, RESEARCH, UTILITY FACILITY",
            "TECHNOLOGICAL RESEARCH FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IUR---",
          name: "TECHNOLOGICAL RESEARCH FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.4.2 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "SERVICE, RESEARCH, UTILITY FACILITY",
            "TELECOMMUNICATIONS FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IUT---",
          name: "TELECOMMUNICATIONS FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.4.3 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "SERVICE, RESEARCH, UTILITY FACILITY",
            "ELECTRIC POWER FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IUE---",
          name: "ELECTRIC POWER FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.4.4 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "SERVICE, RESEARCH, UTILITY FACILITY",
            "PUBLIC WATER SERVICES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IUP---",
          name: "PUBLIC WATER SERVICES",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IM----",
          name: "MILITARY MATERIEL FACILITY",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.3.3.5.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "ATOMIC ENERGY PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMF---",
          name: "ATOMIC ENERGY PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.2 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "AIRCRAFT PRODUCTION & ASSEMBLY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMA---",
          name: "AIRCRAFT PRODUCTION & ASSEMBLY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.3 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "AMMUNITION AND EXPLOSIVES PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IME---",
          name: "AMMUNITION AND EXPLOSIVES PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.4 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "ARMAMENT PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMG---",
          name: "ARMAMENT PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.5 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "MILITARY VEHICLE PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMV---",
          name: "MILITARY VEHICLE PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.6 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "ENGINEERING EQUIPMENT PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMN---",
          name: "ENGINEERING EQUIPMENT PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.6.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "ENGINEERING EQUIPMENT PRODUCTION",
            "BRIDGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMNB--",
          name: "BRIDGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.7 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "CHEMICAL & BIOLOGICAL WARFARE PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMC---",
          name: "CHEMICAL & BIOLOGICAL WARFARE PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.8 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "SHIP CONSTRUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMS---",
          name: "SHIP CONSTRUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.5.9 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY MATERIEL FACILITY",
            "MISSILE & SPACE SYSTEM PRODUCTION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IMM---",
          name: "MISSILE & SPACE SYSTEM PRODUCTION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.6 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "GOVERNMENT LEADERSHIP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IG----",
          name: "GOVERNMENT LEADERSHIP",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.7 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY BASE/FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IB----",
          name: "MILITARY BASE/FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.7.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY BASE/FACILITY",
            "AIRPORT/AIRBASE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IBA---",
          name: "AIRPORT/AIRBASE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.7.2 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MILITARY BASE/FACILITY",
            "SEAPORT/NAVAL BASE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IBN---",
          name: "SEAPORT/NAVAL BASE",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.8 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "TRANSPORT FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IT----",
          name: "TRANSPORT FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.9 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MEDICAL FACILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IX----",
          name: "MEDICAL FACILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.3.9.1 ",
          names: [
            ,
            ,
            ,
            "INSTALLATION",
            "MEDICAL FACILITY",
            "HOSPITAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IXH---",
          name: "HOSPITAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.4 ",
          names: [
            ,
            ,
            ,
            "SEA SURFACE INSTALLATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IR----",
          name: "SEA SURFACE INSTALLATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.3.4.1 ",
          names: [
            ,
            ,
            ,
            "SEA SURFACE INSTALLATION",
            "SEA SURFACE INSTALLATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "G",
          status: "*",
          functionid: "IRR---",
          name: "SEA SURFACE INSTALLATION",
          remarks: ""
        }
      ]
    },
    SSUF: {
      name: "SEA SURFACE",
      mainIcon: [
        {
          hierarchy: "1.X.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "------",
          name: "SEA SURFACE TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "C-----",
          name: "COMBATANT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "LINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CL----",
          name: "LINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.1.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "LINE",
            "CARRIER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CLCV--",
          name: "CARRIER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.1.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "LINE",
            "BATTLESHIP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CLBB--",
          name: "BATTLESHIP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.1.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "LINE",
            "CRUISER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CLCC--",
          name: "CRUISER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.1.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "LINE",
            "DESTROYER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CLDD--",
          name: "DESTROYER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.1.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "LINE",
            "FRIGATE/CORVETTE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CLFF--",
          name: "FRIGATE/CORVETTE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "AMPHIBIOUS WARFARE SHIP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CA----",
          name: "AMPHIBIOUS WARFARE SHIP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.2.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "AMPHIBIOUS WARFARE SHIP",
            "ASSAULT VESSEL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CALA--",
          name: "ASSAULT VESSEL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.2.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "AMPHIBIOUS WARFARE SHIP",
            "LANDING SHIP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CALS--",
          name: "LANDING SHIP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.2.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "AMPHIBIOUS WARFARE SHIP",
            "LANDING CRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CALC--",
          name: "LANDING CRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "MINE WARFARE VESSEL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CM----",
          name: "MINE WARFARE VESSEL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.3.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "MINE WARFARE VESSEL",
            "MINELAYER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CMML--",
          name: "MINELAYER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.3.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "MINE WARFARE VESSEL",
            "MINESWEEPER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CMMS--",
          name: "MINESWEEPER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.3.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "MINE WARFARE VESSEL",
            "MINEHUNTER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CMMH--",
          name: "MINEHUNTER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.3.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "MINE WARFARE VESSEL",
            "MCM SUPPORT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CMMA--",
          name: "MCM SUPPORT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.3.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "MINE WARFARE VESSEL",
            "MCM DRONE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CMMD--",
          name: "MCM DRONE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "PATROL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CP----",
          name: "PATROL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.4.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "PATROL",
            "ANTI SUBMARINE WARFARE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CPSB--",
          name: "ANTI SUBMARINE WARFARE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.4.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "PATROL",
            "ANTI SURFACE WARFARE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CPSU--",
          name: "ANTI SURFACE WARFARE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "HOVERCRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "CH----",
          name: "HOVERCRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.6 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "NAVY GROUP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "G-----",
          name: "NAVY GROUP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.6.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "NAVY GROUP",
            "NAVY TASK FORCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "GT----",
          name: "NAVY TASK FORCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.6.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "NAVY GROUP",
            "NAVY TASK GROUP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "GG----",
          name: "NAVY TASK GROUP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.6.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "NAVY GROUP",
            "NAVY TASK UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "GU----",
          name: "NAVY TASK UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.6.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "NAVY GROUP",
            "NAVY TASK ELEMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "GE----",
          name: "NAVY TASK ELEMENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.1.6.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "COMBATANT",
            "NAVY GROUP",
            "CONVOY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "GC----",
          name: "CONVOY",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "N-----",
          name: "NONCOMBATANT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "UNDERWAY REPLENISHMENT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NR----",
          name: "UNDERWAY REPLENISHMENT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.1.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "UNDERWAY REPLENISHMENT",
            "UNDERWAY REPLENISHMENT, AMMO"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NRA---",
          name: "UNDERWAY REPLENISHMENT, AMMO",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.1.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "UNDERWAY REPLENISHMENT",
            "UNDERWAY REPLENISHMENT, OIL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NRO---",
          name: "UNDERWAY REPLENISHMENT, OIL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "FLEET SUPPORT, TUG, OCEAN GOING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NFT---",
          name: "FLEET SUPPORT, TUG, OCEAN GOING",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "INTELLIGENCE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NI----",
          name: "INTELLIGENCE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "HOSPITAL SHIP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NM----",
          name: "HOSPITAL SHIP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "REPAIR SHIP"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NR----",
          name: "REPAIR SHIP",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.6 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "SUBMARINE TENDER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NTS---",
          name: "SUBMARINE TENDER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.7 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "HOVERCRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NH----",
          name: "HOVERCRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.2.8 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NONCOMBATANT",
            "SERVICE & SUPPORT HARBOUR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "NS----",
          name: "SERVICE & SUPPORT HARBOUR",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "X-----",
          name: "NON MILITARY",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.4.3.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XM----",
          name: "MERCHANT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "CARGO"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMC---",
          name: "CARGO",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "ROLL ON-ROLL OFF"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XME---",
          name: "ROLL ON-ROLL OFF",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "OILER/TANKER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMO---",
          name: "OILER/TANKER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "TUG"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMT---",
          name: "TUG",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "FERRY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMF---",
          name: "FERRY",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.6 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "PASSENGER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMP---",
          name: "PASSENGER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.7 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "HAZARDOUS MATERIALS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMH---",
          name: "HAZARDOUS MATERIALS",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.1.8 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "MERCHANT",
            "DREDGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XMD---",
          name: "DREDGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "FISHING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XF----",
          name: "FISHING",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.2.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "FISHING",
            "DRIFTER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XFDF--",
          name: "DRIFTER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.2.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "FISHING",
            "DREDGE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XFDR--",
          name: "DREDGE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.2.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "FISHING",
            "TRAWLER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XFTR--",
          name: "TRAWLER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "LEISURE CRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XR----",
          name: "LEISURE CRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "LAW ENFORCEMENT VESSEL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XL----",
          name: "LAW ENFORCEMENT VESSEL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.3.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "NON MILITARY",
            "HOVERCRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "XH----",
          name: "HOVERCRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.4 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "OWN TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "O-----",
          name: "OWN TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.5 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "EMERGENCY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "E-----",
          name: "EMERGENCY",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.5.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "EMERGENCY",
            "DITCHED AIRCRAFT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "ED----",
          name: "DITCHED AIRCRAFT",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.5.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "EMERGENCY",
            "PERSON IN WATER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "EP----",
          name: "PERSON IN WATER",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.5.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "EMERGENCY",
            "DISTRESSED VESSEL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "EV----",
          name: "DISTRESSED VESSEL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.6 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "HAZARD"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "Z-----",
          name: "HAZARD",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.4.6.1 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "HAZARD",
            "SEA MINELIKE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "ZM----",
          name: "SEA MINELIKE",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.6.2 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "HAZARD",
            "NAVIGATIONAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "ZN----",
          name: "NAVIGATIONAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.4.6.3 ",
          names: [
            ,
            ,
            "SEA SURFACE TRACK",
            "HAZARD",
            "ICEBERG"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "S",
          status: "*",
          functionid: "ZI----",
          name: "ICEBERG",
          remarks: ""
        }
      ]
    },
    SBSUF: {
      name: "SUBSURFACE",
      mainIcon: [
        {
          hierarchy: "1.X.5 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "------",
          name: "SUBSURFACE TRACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "SUBMARINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "S-----",
          name: "SUBMARINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.1.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "SUBMARINE",
            "NUCLEAR PROPULSION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "SN----",
          name: "NUCLEAR PROPULSION",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.1.2 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "SUBMARINE",
            "CONVENTIONAL PROPULSION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "SC----",
          name: "CONVENTIONAL PROPULSION",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.1.3 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "SUBMARINE",
            "OTHER SUBMERSIBLE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "SO----",
          name: "OTHER SUBMERSIBLE",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "W-----",
          name: "UNDERWATER WEAPON",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "TORPEDO"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WT----",
          name: "TORPEDO",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WM----",
          name: "SEA MINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE DEALT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMD---",
          name: "SEA MINE DEALT",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.2 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (GROUND)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMG---",
          name: "SEA MINE (GROUND)",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.2.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (GROUND)",
            "SEA MINE (GROUND) DEALT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMGD--",
          name: "SEA MINE (GROUND) DEALT",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.3 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (MOORED)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMM---",
          name: "SEA MINE (MOORED)",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.3.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (MOORED)",
            "SEA MINE (MOORED DEALT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMMD--",
          name: "SEA MINE (MOORED DEALT",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.4 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (FLOATING)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMF---",
          name: "SEA MINE (FLOATING)",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.4.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (FLOATING)",
            "SEA MINE (FLOATING) DEALT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMFD--",
          name: "SEA MINE (FLOATING) DEALT",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.5 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (IN OTHER POSITION)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMO---",
          name: "SEA MINE (IN OTHER POSITION)",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.2.5.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "SEA MINE",
            "SEA MINE (IN OTHER POSITION)",
            "SEA MINE (IN OTHER POSITION) DEALT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WMOD--",
          name: "SEA MINE (IN OTHER POSITION) DEALT",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.2.3 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER WEAPON",
            "DRONE (UUV)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WV----",
          name: "DRONE (UUV)",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.3 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER DECOY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WD----",
          name: "UNDERWATER DECOY",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.3.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "UNDERWATER DECOY",
            "SEA MINE DECOY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "WDM---",
          name: "SEA MINE DECOY",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "N-----",
          name: "NON-SUBMARINE",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "DIVER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "ND----",
          name: "DIVER",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4.2 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "BOTTOM RETURN/NOMBO"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "NB----",
          name: "BOTTOM RETURN/NOMBO",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.5.4.2.1 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "BOTTOM RETURN/NOMBO",
            "SEABED INSTALLATION/MANMADE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "NBS---",
          name: "SEABED INSTALLATION/MANMADE",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4.2.2 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "BOTTOM RETURN/NOMBO",
            "SEABED ROCK/STONE, OBSTACLE, OTHER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "NBR---",
          name: "SEABED ROCK/STONE, OBSTACLE, OTHER",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4.2.3 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "BOTTOM RETURN/NOMBO",
            "WRECK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "NBW---",
          name: "WRECK",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4.3 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "MARINE LIFE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "NM----",
          name: "MARINE LIFE",
          remarks: ""
        },
        {
          hierarchy: "1.X.5.4.4 ",
          names: [
            ,
            ,
            "SUBSURFACE TRACK",
            "NON-SUBMARINE",
            "SEA ANOMALY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "U",
          status: "*",
          functionid: "NA----",
          name: "SEA ANOMALY",
          remarks: ""
        }
      ]
    },
    SOFUNT: {
      name: "SPECIAL OPERATIONS FORCE (SOF)",
      mainIcon: [
        {
          hierarchy: "1.X.6 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "------",
          name: "SPECIAL OPERATIONS FORCE (SOF) UNIT",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "A-----",
          name: "SOF UNIT AVIATION",
          remarks: "N/A"
        },
        {
          hierarchy: "1.X.6.1.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AF----",
          name: "SOF UNIT FIXED WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.1.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING",
            "SOF UNIT ATTACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AFA---",
          name: "SOF UNIT ATTACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.1.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING",
            "SOF UNIT REFUEL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AFK---",
          name: "SOF UNIT REFUEL",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.1.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING",
            "SOF UNIT UTILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AFU---",
          name: "SOF UNIT UTILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.1.3.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING",
            "SOF UNIT UTILITY",
            "SOF UNIT UTILITY (LIGHT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AFUL--",
          name: "SOF UNIT UTILITY (LIGHT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.1.3.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING",
            "SOF UNIT UTILITY",
            "SOF UNIT UTILITY (MEDIUM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AFUM--",
          name: "SOF UNIT UTILITY (MEDIUM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.1.3.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT FIXED WING",
            "SOF UNIT UTILITY",
            "SOF UNIT UTILITY (HEAVY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AFUH--",
          name: "SOF UNIT UTILITY (HEAVY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT VSTOL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AV----",
          name: "SOF UNIT VSTOL",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AH----",
          name: "SOF UNIT ROTARY WING",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING",
            "SOF UNIT COMBAT SEARCH AND RESCUE"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AHH---",
          name: "SOF UNIT COMBAT SEARCH AND RESCUE",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING",
            "SOF UNIT ATTACK"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AHA---",
          name: "SOF UNIT ATTACK",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING",
            "SOF UNIT UTILITY"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AHU---",
          name: "SOF UNIT UTILITY",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3.3.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING",
            "SOF UNIT UTILITY",
            "SOF UNIT UTILITY (LIGHT)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AHUL--",
          name: "SOF UNIT UTILITY (LIGHT)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3.3.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING",
            "SOF UNIT UTILITY",
            "SOF UNIT UTILITY (MEDIUM)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AHUM--",
          name: "SOF UNIT UTILITY (MEDIUM)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.1.3.3.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT AVIATION",
            "SOF UNIT ROTARY WING",
            "SOF UNIT UTILITY",
            "SOF UNIT UTILITY (HEAVY)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "AHUH--",
          name: "SOF UNIT UTILITY (HEAVY)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT SOF UNIT NAVAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "SN----",
          name: "SOF UNIT SOF UNIT NAVAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.2.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT SOF UNIT NAVAL",
            "SOF UNIT SEAL"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "SNS---",
          name: "SOF UNIT SEAL",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.2.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT SOF UNIT NAVAL",
            "SOF UNIT UNDERWATER DEMOLITION TEAM"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "SNU---",
          name: "SOF UNIT UNDERWATER DEMOLITION TEAM",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.2.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT SOF UNIT NAVAL",
            "SOF UNIT SPECIAL BOAT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "SNB---",
          name: "SOF UNIT SPECIAL BOAT",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.2.4 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT SOF UNIT NAVAL",
            "SOF UNIT SPECIAL SSNR"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "SNN---",
          name: "SOF UNIT SPECIAL SSNR",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT GROUND"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "G-----",
          name: "SOF UNIT GROUND",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.3.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT GROUND",
            "SOF UNIT SPECIAL FORCES"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "GS----",
          name: "SOF UNIT SPECIAL FORCES",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.3.2 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT GROUND",
            "SOF UNIT RANGER"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "GSR---",
          name: "SOF UNIT RANGER",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.3.3 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT GROUND",
            "SOF UNIT PSYCHOLOGICAL OPERATIONS (PSYOPS)"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "GSP---",
          name: "SOF UNIT PSYCHOLOGICAL OPERATIONS (PSYOPS)",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.3.3.1 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT GROUND",
            "SOF UNIT PSYCHOLOGICAL OPERATIONS (PSYOPS)",
            "SOF UNIT FIXED AVIATION"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "GSPA--",
          name: "SOF UNIT FIXED AVIATION",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.3.4 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT GROUND",
            "SOF UNIT CIVIL AFFAIRS"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "GCA---",
          name: "SOF UNIT CIVIL AFFAIRS",
          remarks: ""
        },
        {
          hierarchy: "1.X.6.4 ",
          names: [
            ,
            ,
            "SPECIAL OPERATIONS FORCE (SOF) UNIT",
            "SOF UNIT SUPPORT"
          ],
          codingscheme: "S",
          affiliation: "*",
          battledimension: "F",
          status: "*",
          functionid: "GB----",
          name: "SOF UNIT SUPPORT",
          remarks: ""
        }
      ]
    }
  },
  TACGRP: {
    name: "TACTICAL GRAPHICS",
    mainIcon: [
      {
        geometry: "",
        hierarchy: "2.X",
        names: [
          ,
          "TACTICAL GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "--",
        battledimension: "--",
        status: "-",
        functionid: "------",
        name: "TACTICAL GRAPHICS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "------",
        name: "TASKS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "G-----",
        name: "TASK GRAPHICSMULTIPOINT",
        remarks: "N/A"
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "BLOCK"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GB----",
        name: "BLOCK",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "BREACH"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GH----",
        name: "BREACH",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "BYPASS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GY----",
        name: "BYPASS",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "CANALIZE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GC----",
        name: "CANALIZE",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "CLEAR"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GX----",
        name: "CLEAR",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "CONTAIN"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GJ----",
        name: "CONTAIN",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "COUNTERATTACK (CATK)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GK----",
        name: "COUNTERATTACK (CATK)",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.7.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "COUNTERATTACK (CATK)",
          "COUNTERATTACK BY FIRE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GKF---",
        name: "COUNTERATTACK BY FIRE",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "DELAY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GL----",
        name: "DELAY",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.8.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "DELAY",
          "DELAY (UNTIL A SPECIFIED TIME)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GLT---",
        name: "DELAY (UNTIL A SPECIFIED TIME)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.1.1.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "DESTROY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GD----",
        name: "DESTROY",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "DISRUPT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GT----",
        name: "DISRUPT",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "FIX"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GF----",
        name: "FIX",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "FOLLOW AND ASSUME"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GA----",
        name: "FOLLOW AND ASSUME",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.12.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "FOLLOW AND ASSUME",
          "FOLLOW AND SUPPORT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GAS---",
        name: "FOLLOW AND SUPPORT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.1.1.13",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "INTERDICT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GI----",
        name: "INTERDICT",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.14",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "ISOLATE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GE----",
        name: "ISOLATE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.1.1.15",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "NEUTRALIZE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GN----",
        name: "NEUTRALIZE",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.16",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "OCCUPY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GO----",
        name: "OCCUPY",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.17",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "PENETRATE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GP----",
        name: "PENETRATE",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.18",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "RELIEF IN PLACE (RIP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GR----",
        name: "RELIEF IN PLACE (RIP)",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.19",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "RETAIN"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GQ----",
        name: "RETAIN",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.20",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "RETIREMENT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GM----",
        name: "RETIREMENT",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.21",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "SECURE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GS----",
        name: "SECURE",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.21.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "SECURE",
          "SECURITY (SCREEN)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GSS---",
        name: "SECURITY (SCREEN)",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.21.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "SECURE",
          "SECURITY (GUARD)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GSG---",
        name: "SECURITY (GUARD)",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.21.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "SECURE",
          "SECURITY (COVER)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GSC---",
        name: "SECURITY (COVER)",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.22",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "SEIZE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GZ----",
        name: "SEIZE",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.23",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "WITHDRAW"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GW----",
        name: "WITHDRAW",
        remarks: ""
      },
      {
        geometry: "MULTIPOINT",
        hierarchy: "2.X.1.1.23.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "TASKS",
          "TASK GRAPHICSMULTIPOINT",
          "WITHDRAW",
          "WITHDRAW UNDER PRESSURE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "T",
        status: "*",
        functionid: "GWP---",
        name: "WITHDRAW UNDER PRESSURE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "------",
        name: "CONTROL MEASURES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "M-----",
        name: "MANOEUVRE GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MG----",
        name: "GENERAL MANOEUVRE GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "POINTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGP---",
        name: "POINTS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "POINTS",
          "FIX"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGPF--",
        name: "FIX",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.1.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "POINTS",
          "FIX",
          "ELECTRO-MAGNETIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGPFE-",
        name: "ELECTRO-MAGNETIC",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.1.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "POINTS",
          "FIX",
          "ACOUSTIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGPFA-",
        name: "ACOUSTIC",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.1.1.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "POINTS",
          "FIX",
          "ELECTRO-OPTICAL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGPFO-",
        name: "ELECTRO-OPTICAL",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "POINTS",
          "POINT OF INTEREST"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGPI--",
        name: "POINT OF INTEREST",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGL---",
        name: "LINES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLB--",
        name: "BOUNDARIES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "GENERAL BOUNDARIES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLBG-",
        name: "GENERAL BOUNDARIES",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "GENERAL BOUNDARIES",
          "FRIENDLY PRESENT"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MGLBGF",
        name: "FRIENDLY PRESENT",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "GENERAL BOUNDARIES",
          "FRIENDLY PLANNED OR ON ORDER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MGLBGO",
        name: "FRIENDLY PLANNED OR ON ORDER",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "GENERAL BOUNDARIES",
          "ENEMY KNOWN"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MGLBGK",
        name: "ENEMY KNOWN",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "GENERAL BOUNDARIES",
          "ENEMY SUSPECTED OR TEMPLATED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MGLBGS",
        name: "ENEMY SUSPECTED OR TEMPLATED",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "LATERAL BOUNDARY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLBL-",
        name: "LATERAL BOUNDARY",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "FORWARD BOUNDARY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLBF-",
        name: "FORWARD BOUNDARY",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BOUNDARIES",
          "REAR BOUNDARY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLBR-",
        name: "REAR BOUNDARY",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "FORWARD LINE OF TROOPS (FLOT)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLF--",
        name: "FORWARD LINE OF TROOPS (FLOT)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "LINE OF CONTACT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLL--",
        name: "LINE OF CONTACT",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "PHASE/COORDINATION LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLP--",
        name: "PHASE/COORDINATION LINE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BEARING LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLE--",
        name: "BEARING LINE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.5.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BEARING LINE",
          "ELECTRONIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLEE-",
        name: "ELECTRONIC",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.5.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BEARING LINE",
          "ACOUSTIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLEA-",
        name: "ACOUSTIC",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.5.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BEARING LINE",
          "TORPEDO"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLET-",
        name: "TORPEDO",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.1.2.5.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "LINES",
          "BEARING LINE",
          "ELECTRO-OPTICAL INTERCEPT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGLEO-",
        name: "ELECTRO-OPTICAL INTERCEPT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGA---",
        name: "AREAS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAU--",
        name: "UNSPECIFIED AREA",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.3.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "GENERAL AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAUA-",
        name: "GENERAL AREA",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "GENERAL AREA",
          "FRIENDLY"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MGAUAF",
        name: "FRIENDLY",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "GENERAL AREA",
          "FRIENDLY PLANNED/ON ORDER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MGAUAP",
        name: "FRIENDLY PLANNED/ON ORDER",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "GENERAL AREA",
          "ENEMY KNOWN/CONFIRMED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MGAUAE",
        name: "ENEMY KNOWN/CONFIRMED",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "GENERAL AREA",
          "ENEMY SUSPECTED/TEMPLATED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MGAUAS",
        name: "ENEMY SUSPECTED/TEMPLATED",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "ASSEMBLY AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAUB-",
        name: "ASSEMBLY AREA",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "ASSEMBLY AREA",
          "OCCUPIED"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAUBO",
        name: "OCCUPIED",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "ASSEMBLY AREA",
          "OCCUPIED BY MULTIPLE UNITS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAUBM",
        name: "OCCUPIED BY MULTIPLE UNITS",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.1.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "UNSPECIFIED AREA",
          "ASSEMBLY AREA",
          "PROPOSED/ON ORDER"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAUBR",
        name: "PROPOSED/ON ORDER",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.1.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAS--",
        name: "SPECIFIED AREA",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "DROP ZONE (DZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASD-",
        name: "DROP ZONE (DZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "EXTRACTION ZONE (EZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASE-",
        name: "EXTRACTION ZONE (EZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "LANDING ZONE (LZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASL-",
        name: "LANDING ZONE (LZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "PICKUP ZONE (PZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASP-",
        name: "PICKUP ZONE (PZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "SEARCH AREA/RECONNAISSANCE AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASS-",
        name: "SEARCH AREA/RECONNAISSANCE AREA",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "LIMITED ACCESS AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASM-",
        name: "LIMITED ACCESS AREA",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "ENGAGEMENT AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASG-",
        name: "ENGAGEMENT AREA",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "FORTIFIED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGASF-",
        name: "FORTIFIED AREA",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.1.3.2.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "GENERAL MANOEUVRE GRAPHICS",
          "AREAS",
          "SPECIFIED AREA",
          "STAGING AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MGAST-",
        name: "STAGING AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MA----",
        name: "AVIATION MANOEUVRE GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION POINTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAA---",
        name: "AVIATION POINTS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION POINTS",
          "AIR CONTROL POINT (ACP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAAP--",
        name: "AIR CONTROL POINT (ACP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION POINTS",
          "COMMUNICATIONS CHECKPOINT (CCP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAAC--",
        name: "COMMUNICATIONS CHECKPOINT (CCP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.2.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION POINTS",
          "POP UP POINT (PUP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAAU--",
        name: "POP UP POINT (PUP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.2.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION POINTS",
          "DOWNED AIRCREW PICK UP POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAAD--",
        name: "DOWNED AIRCREW PICK UP POINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAL---",
        name: "AVIATION LINES",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "AIR CORRIDOR"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALC--",
        name: "AIR CORRIDOR",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "MINIMUM RISK ROUTE (MRR)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALM--",
        name: "MINIMUM RISK ROUTE (MRR)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "STANDARD-USE ARMY AIRCRAFT FLIGHT ROUTE (SAAFR)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALS--",
        name: "STANDARD-USE ARMY AIRCRAFT FLIGHT ROUTE (SAAFR)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "UNMANNED AERIAL VEHICLE (UAV) ROUTE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALU--",
        name: "UNMANNED AERIAL VEHICLE (UAV) ROUTE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "LOW LEVEL TRANSIT ROUTE (LLTR)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALL--",
        name: "LOW LEVEL TRANSIT ROUTE (LLTR)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "IFF ON LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALIN-",
        name: "IFF ON LINE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.2.2.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION LINES",
          "IFF OFF LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MALIF-",
        name: "IFF OFF LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAV---",
        name: "AVIATION AREAS",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "RESTRICTED OPERATIONS ZONE (ROZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVR--",
        name: "RESTRICTED OPERATIONS ZONE (ROZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "FORWARD AREA AIR DEFENCE ZONE (FAADEZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVF--",
        name: "FORWARD AREA AIR DEFENCE ZONE (FAADEZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "HIGH DENSITY AIRSPACE CONTROL ZONE (HIDACZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVH--",
        name: "HIGH DENSITY AIRSPACE CONTROL ZONE (HIDACZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "MISSILE ENGAGEMENT ZONE (MEZ)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVM--",
        name: "MISSILE ENGAGEMENT ZONE (MEZ)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "MISSILE ENGAGEMENT ZONE (MEZ)",
          "LOW ALTITUDE MEZ"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVML-",
        name: "LOW ALTITUDE MEZ",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "MISSILE ENGAGEMENT ZONE (MEZ)",
          "HIGH ALTITUDE MEZ"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVMH-",
        name: "HIGH ALTITUDE MEZ",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.2.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "AVIATION MANOEUVRE GRAPHICS",
          "AVIATION AREAS",
          "WEAPONS FREE ZONE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MAVW--",
        name: "WEAPONS FREE ZONE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MD----",
        name: "DECEPTION GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS",
          "DUMMY (DECEPTION)(DECOY)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MDD---",
        name: "DUMMY (DECEPTION)(DECOY)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS",
          "AXIS OF ADVANCE FOR FEINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MDA---",
        name: "AXIS OF ADVANCE FOR FEINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS",
          "DIRECTION OF ATTACK FOR FEINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MDF---",
        name: "DIRECTION OF ATTACK FOR FEINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS",
          "DECOY MINED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MDM---",
        name: "DECOY MINED AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS",
          "DECOY MINED AREA, FENCED"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MDY---",
        name: "DECOY MINED AREA, FENCED",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DECEPTION GRAPHICS",
          "DUMMY MINEFIELD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MDN---",
        name: "DUMMY MINEFIELD",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MM----",
        name: "DEFENCE MANOEUVRE GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMP---",
        name: "DEFENCE POINT GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "TARGET REFERENCE POINT (TRP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPT--",
        name: "TARGET REFERENCE POINT (TRP)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.4.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "BATTLE POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPB--",
        name: "BATTLE POSITION",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.4.1.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "BATTLE POSITION",
          "OCCUPIED (BATTALION SIZED UNIT)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPB O-",
        name: "OCCUPIED (BATTALION SIZED UNIT)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.4.1.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "BATTLE POSITION",
          "PREPARED \"(P)\" BUT NOT OCCUPIED"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPB P-",
        name: "PREPARED \"(P)\" BUT NOT OCCUPIED",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.4.1.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "BATTLE POSITION",
          "PLANNED"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPB L-",
        name: "PLANNED",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.4.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "STRONG POINT (SP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPS--",
        name: "STRONG POINT (SP)",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.4.1.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "STRONG POINT (SP)",
          "FRIENDLY"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MMPSF-",
        name: "FRIENDLY",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.4.1.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "STRONG POINT (SP)",
          "ENEMY KNOWN AND CONFIRMED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MMPSE-",
        name: "ENEMY KNOWN AND CONFIRMED",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPO--",
        name: "OBSERVATION POST/OUTPOST",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "COMBAT OUTPOST"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPOC-",
        name: "COMBAT OUTPOST",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "OBSERVATION POST OCCUPIED BY DISMOUNTED SCOUTS OR RECONNAISSANCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPOR-",
        name: "OBSERVATION POST OCCUPIED BY DISMOUNTED SCOUTS OR RECONNAISSANCE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "FORWARD OBSERVER POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPOF-",
        name: "FORWARD OBSERVER POSITION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "SENSOR OUTPOST/LISTENING POST (OP/LP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPOS-",
        name: "SENSOR OUTPOST/LISTENING POST (OP/LP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "CBRN OBSERVATION POST (DISMOUNTED)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPON-",
        name: "CBRN OBSERVATION POST (DISMOUNTED)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "FORWARD AIR CONTROLLER (FAC)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPON-",
        name: "FORWARD AIR CONTROLLER (FAC)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.4.1.4.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE POINT GRAPHIC",
          "OBSERVATION POST/OUTPOST",
          "TACTICAL AIR CONTROL PARTY (TACP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMPON-",
        name: "TACTICAL AIR CONTROL PARTY (TACP)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE LINE GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMD---",
        name: "DEFENCE LINE GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.4.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE LINE GRAPHIC",
          "FORWARD EDGE OF BATTLE AREA (FEBA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMDF--",
        name: "FORWARD EDGE OF BATTLE AREA (FEBA)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.4.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE LINE GRAPHIC",
          "FORWARD EDGE OF BATTLE AREA (FEBA)",
          "ACTUAL TRACE OF THE FEBA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMDFA-",
        name: "ACTUAL TRACE OF THE FEBA",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.4.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE LINE GRAPHIC",
          "FORWARD EDGE OF BATTLE AREA (FEBA)",
          "PROPOSED OR ON ORDER TRACE OF THE FEBA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMDFP-",
        name: "PROPOSED OR ON ORDER TRACE OF THE FEBA",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.4.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE LINE GRAPHIC",
          "PRINCIPLE DIRECTION OF FIRE (PDF)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMDP--",
        name: "PRINCIPLE DIRECTION OF FIRE (PDF)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE AREA GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMA---",
        name: "DEFENCE AREA GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.4.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "DEFENCE MANOEUVRE GRAPHIC",
          "DEFENCE AREA GRAPHIC",
          "ENGAGEMENT AREA (EA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MMAE--",
        name: "ENGAGEMENT AREA (EA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MO----",
        name: "OFFENCE MANOEUVRE GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE POINT GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOP---",
        name: "OFFENCE POINT GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.1.5.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE POINT GRAPHIC",
          "POINT OF DEPARTURE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOPD--",
        name: "POINT OF DEPARTURE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOL---",
        name: "OFFENCE LINE GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLA--",
        name: "AXIS OF ADVANCE",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "FRIENDLY AVIATION"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLAF-",
        name: "FRIENDLY AVIATION",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "FRIENDLY AIRBORNE"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLAA-",
        name: "FRIENDLY AIRBORNE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "FRIENDLY ATTACK HELICOPTER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLAH-",
        name: "FRIENDLY ATTACK HELICOPTER",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "FRIENDLY GROUND AXIS OF SUPPORTING ATTACK"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLAS-",
        name: "FRIENDLY GROUND AXIS OF SUPPORTING ATTACK",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "FRIENDLY GROUND AXIS OF MAIN ATTACK"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLAM-",
        name: "FRIENDLY GROUND AXIS OF MAIN ATTACK",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "FRIENDLY GROUND AXIS ON ORDER WITH DATE AND TIME (IF KNOWN) EFFECTIVE"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLAO-",
        name: "FRIENDLY GROUND AXIS ON ORDER WITH DATE AND TIME (IF KNOWN) EFFECTIVE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "ENEMY CONFIRMED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MOLAE-",
        name: "ENEMY CONFIRMED",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.1.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "AXIS OF ADVANCE",
          "ENEMY TEMPLATED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MOLAT-",
        name: "ENEMY TEMPLATED",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLD--",
        name: "DIRECTION OF ATTACK",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "FRIENDLY AVIATION"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLDF-",
        name: "FRIENDLY AVIATION",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "FRIENDLY AVIATION PLANNED OR ON ORDER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLDY-",
        name: "FRIENDLY AVIATION PLANNED OR ON ORDER",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "ENEMY KNOWN/CONFIRMED A VIA TION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MOLDE-",
        name: "ENEMY KNOWN/CONFIRMED A VIA TION",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "TEMPLATED ENEMY AVIATION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MOLDT-",
        name: "TEMPLATED ENEMY AVIATION",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "ENEMY CONFIRMED/KNOWN GROUND"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MOLDG-",
        name: "ENEMY CONFIRMED/KNOWN GROUND",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "TEMPLATED ENEMY GROUND"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MOLDR-",
        name: "TEMPLATED ENEMY GROUND",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "FRIENDLY DIRECTION OF SUPPORTING ATTACK"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLDS-",
        name: "FRIENDLY DIRECTION OF SUPPORTING ATTACK",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "FRIENDLY DIRECTION OF MAIN ATTACK"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLDM-",
        name: "FRIENDLY DIRECTION OF MAIN ATTACK",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.2.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "DIRECTION OF ATTACK",
          "FRIENDLY PLANNED OR ON ORDER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOLDO-",
        name: "FRIENDLY PLANNED OR ON ORDER",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "FINAL COORDINATION LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLF--",
        name: "FINAL COORDINATION LINE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "INFILTRATION LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLI--",
        name: "INFILTRATION LINE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "LIMIT OF ADVANCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLL--",
        name: "LIMIT OF ADVANCE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "LINE OF DEPARTURE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLT--",
        name: "LINE OF DEPARTURE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "LINE OF DEPARTURE/LINE OF CONTACT (LD/LC)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLC--",
        name: "LINE OF DEPARTURE/LINE OF CONTACT (LD/LC)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "PROBABLE LINE OF DEPLOYMENT (PLD)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLP--",
        name: "PROBABLE LINE OF DEPLOYMENT (PLD)",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.5.2.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE LINE GRAPHIC",
          "RAID"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOLR--",
        name: "RAID",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOO---",
        name: "OFFENCE AREA GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.5.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "ASSAULT POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOA--",
        name: "ASSAULT POSITION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "ATTACK POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOT--",
        name: "ATTACK POSITION",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "ATTACK POSITION",
          "FRIENDLY ATTACK POSITION"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOOTF-",
        name: "FRIENDLY ATTACK POSITION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "ATTACK POSITION",
          "FRIENDLY OCCUPIED (ONLY IF A UNIT MUST STOP IN THE ATTACK POSITION)"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOOTC-",
        name: "FRIENDLY OCCUPIED (ONLY IF A UNIT MUST STOP IN THE ATTACK POSITION)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "ATTACK POSITION",
          "FRIENDLY PLANNED, PROPOSED OR ON ORDER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MOOTP-",
        name: "FRIENDLY PLANNED, PROPOSED OR ON ORDER",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "ATTACK BY FIRE POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOP--",
        name: "ATTACK BY FIRE POSITION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "SUPPORT BY FIRE POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOS--",
        name: "SUPPORT BY FIRE POSITION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "OBJECTIVE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOJ--",
        name: "OBJECTIVE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "PENETRATION BOX"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOX--",
        name: "PENETRATION BOX",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.5.3.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "OFFENCE MANOEUVRE GRAPHICS",
          "OFFENCE AREA GRAPHIC",
          "RAID AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MOOR--",
        name: "RAID AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MS----",
        name: "SPECIAL MANOEUVRE GRAPHIC",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "GENERAL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSG---",
        name: "GENERAL",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "GENERAL",
          "ENCIRCLEMENT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSGE--",
        name: "ENCIRCLEMENT",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "GENERAL",
          "ENCIRCLEMENT",
          "FRIENDLY"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "MSGEF-",
        name: "FRIENDLY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "GENERAL",
          "ENCIRCLEMENT",
          "ENEMY"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "MSGEY-",
        name: "ENEMY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "GENERAL",
          "AMBUSH"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSGA--",
        name: "AMBUSH",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSL---",
        name: "LINE",
        remarks: "N/A"
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.6.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "LINE",
          "AIR HEAD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSLA--",
        name: "AIR HEAD",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.6.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "LINE",
          "BRIDGEHEAD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSLB--",
        name: "BRIDGEHEAD",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.6.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "LINE",
          "HOLDING LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSLH--",
        name: "HOLDING LINE",
        remarks: ""
      },
      {
        geometry: "LINE",
        hierarchy: "2.X.2.1.6.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "LINE",
          "RELEASE LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSLR--",
        name: "RELEASE LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.1.6.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSA---",
        name: "AREA",
        remarks: "N/A"
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.6.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "AREA",
          "AREA OF OPERATIONS (AO)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSAO--",
        name: "AREA OF OPERATIONS (AO)",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.6.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "AREA",
          "NAMED AREA OF INTEREST"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSAN--",
        name: "NAMED AREA OF INTEREST",
        remarks: ""
      },
      {
        geometry: "POLYGON",
        hierarchy: "2.X.2.1.6.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MANOEUVRE GRAPHICS",
          "SPECIAL MANOEUVRE GRAPHIC",
          "AREA",
          "TARGETED AREA OF INTEREST"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "MSAT--",
        name: "TARGETED AREA OF INTEREST",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "B-----",
        name: "MOBILITY/SURVIVABILITY",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BO----",
        name: "OBSTACLES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "GENERAL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOG---",
        name: "GENERAL",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "GENERAL",
          "BELT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOGB--",
        name: "BELT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "GENERAL",
          "LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOGL--",
        name: "LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "GENERAL",
          "ZONE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOGZ--",
        name: "ZONE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ABA TIS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOA---",
        name: "ABA TIS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ANTITANK OBSTACLES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAT--",
        name: "ANTITANK OBSTACLES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ANTITANK OBSTACLES",
          "ANTITANK DITCH"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOATO-",
        name: "ANTITANK DITCH",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ANTITANK OBSTACLES",
          "ANTITANK DITCH REINFORCED WITH ANTITANK MINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOATM-",
        name: "ANTITANK DITCH REINFORCED WITH ANTITANK MINES",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ANTITANK OBSTACLES",
          "ANTITANK OBSTACLES, TETRAHEDRONS, DRAGON'S TEETH AND OTHER SIMILAR OBSTACLES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOATD-",
        name: "ANTITANK OBSTACLES, TETRAHEDRONS, DRAGON'S TEETH AND OTHER SIMILAR OBSTACLES",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ANTITANK OBSTACLES",
          "ANTITANK WALL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOATW-",
        name: "ANTITANK WALL",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "BOOBY TRAP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAB--",
        name: "BOOBY TRAP",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAM--",
        name: "MINES",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.5.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "ANTIPERSONNEL (AP) MINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMA-",
        name: "ANTIPERSONNEL (AP) MINE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.5.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "ANTITANK (AT) MINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMT-",
        name: "ANTITANK (AT) MINE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.5.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "ANTITANK MINE WITH ANTIHANDLING DEVISE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMD-",
        name: "ANTITANK MINE WITH ANTIHANDLING DEVISE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.5.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "ANTITANK MINE (ARROW SHOWS EFFECTS) \"CLAYMORE MINE\""
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMC-",
        name: "ANTITANK MINE (ARROW SHOWS EFFECTS) \"CLAYMORE MINE\"",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.5.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "UNSPECIFIED MINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMU-",
        name: "UNSPECIFIED MINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.5.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "MINE CLUSTER"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMN-",
        name: "MINE CLUSTER",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.5.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINES",
          "WIDE AREA MINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAMW-",
        name: "WIDE AREA MINES",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAI--",
        name: "MINEFIELDS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.6.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "PLANNED MINEFIELD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIP-",
        name: "PLANNED MINEFIELD",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.6.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "COMPLETED MINEFIELD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIC-",
        name: "COMPLETED MINEFIELD",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.6.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "ANTIPERSONNEL (AP) MINEFIELD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIL-",
        name: "ANTIPERSONNEL (AP) MINEFIELD",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.6.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "ANTITANK (AT) MINEFIELD WITH GAP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIG-",
        name: "ANTITANK (AT) MINEFIELD WITH GAP",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.6.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "ANTITANK (AT) MINEFIELD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIN-",
        name: "ANTITANK (AT) MINEFIELD",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.6.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "SCATTERABLE MINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIS-",
        name: "SCATTERABLE MINES",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.6.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "ANTIPERSONNEL (AP) MINEFIELD REINFORCED WITH SCATTERABLE WITH SELF-DESTRUCT DATE-TIME-GROUP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIH-",
        name: "ANTIPERSONNEL (AP) MINEFIELD REINFORCED WITH SCATTERABLE WITH SELF-DESTRUCT DATE-TIME-GROUP",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.1.6.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAID-",
        name: "SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.6.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "MINEFIELDS",
          "MINED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAIM-",
        name: "MINED AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "EXECUTED VOLCANO MINEFIELD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAV--",
        name: "EXECUTED VOLCANO MINEFIELD",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE EFFECT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAE--",
        name: "OBSTACLE EFFECT",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.8.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE EFFECT",
          "BLOCK"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAEB-",
        name: "BLOCK",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.8.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE EFFECT",
          "FIX"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAEF-",
        name: "FIX",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.8.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE EFFECT",
          "TURN"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAET-",
        name: "TURN",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.8.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE EFFECT",
          "DISRUPT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAED-",
        name: "DISRUPT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE FREE AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAF--",
        name: "OBSTACLE FREE AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.9.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "OBSTACLE FREE AREA",
          "OBSTACLE-RESTRICTED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAFR-",
        name: "OBSTACLE-RESTRICTED AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "UN-EXPLODED ORDNANCE AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAU--",
        name: "UN-EXPLODED ORDNANCE AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ROAD BLOCKS, CRATERS, AND BLOWN BRIDGES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAR--",
        name: "ROAD BLOCKS, CRATERS, AND BLOWN BRIDGES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.11.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ROAD BLOCKS, CRATERS, AND BLOWN BRIDGES",
          "ROADBLOCK PLANNED"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOARP-",
        name: "ROADBLOCK PLANNED",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.11.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ROAD BLOCKS, CRATERS, AND BLOWN BRIDGES",
          "ROADBLOCK WITH EXPLOSIVES, STATE OF READINESS 1(SAFE)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOARE-",
        name: "ROADBLOCK WITH EXPLOSIVES, STATE OF READINESS 1(SAFE)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.11.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ROAD BLOCKS, CRATERS, AND BLOWN BRIDGES",
          "ROADBLOCK WITH EXPLOSIVES, STATE OF READINESS 2 (ARMED BUT PASSABLE)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOARS-",
        name: "ROADBLOCK WITH EXPLOSIVES, STATE OF READINESS 2 (ARMED BUT PASSABLE)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.11.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "ROAD BLOCKS, CRATERS, AND BLOWN BRIDGES",
          "ROADBLOCK COMPLETED (EXECUTED)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOARC-",
        name: "ROADBLOCK COMPLETED (EXECUTED)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "TRIP WIRE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAP--",
        name: "TRIP WIRE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAW--",
        name: "WIRE OBSTACLES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "UNSPECIFIED"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWU-",
        name: "UNSPECIFIED",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "SINGLE FENCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWS-",
        name: "SINGLE FENCE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "DOUBLE FENCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWD-",
        name: "DOUBLE FENCE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "DOUBLE APRON FENCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWA-",
        name: "DOUBLE APRON FENCE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "LOW WIRE FENCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWL-",
        name: "LOW WIRE FENCE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "HIGH WIRE FENCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWH-",
        name: "HIGH WIRE FENCE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "SINGLE CONCERTINA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWC-",
        name: "SINGLE CONCERTINA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "DOUBLE STRAND CONCERTINA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWB-",
        name: "DOUBLE STRAND CONCERTINA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.1.13.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLES",
          "WIRE OBSTACLES",
          "TRIPLE STRAND CONCERTINA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BOAWR-",
        name: "TRIPLE STRAND CONCERTINA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BY----",
        name: "OBSTACLE BYPASS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "OBSTACLE BYPASS DIFFICULTY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYO---",
        name: "OBSTACLE BYPASS DIFFICULTY",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "OBSTACLE BYPASS DIFFICULTY",
          "BYPASS EASY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYOE--",
        name: "BYPASS EASY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "OBSTACLE BYPASS DIFFICULTY",
          "BYPASS DIFFICULT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYOD--",
        name: "BYPASS DIFFICULT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "OBSTACLE BYPASS DIFFICULTY",
          "BYPASS IMPOSSIBLE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYOI--",
        name: "BYPASS IMPOSSIBLE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYC---",
        name: "CROSSING SITE/WATER CROSSING",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "ASSAULT CROSSING AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCA--",
        name: "ASSAULT CROSSING AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "BRIDGE OR GAP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCB--",
        name: "BRIDGE OR GAP",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "FERRY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCF--",
        name: "FERRY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "FORD/FORD EASY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCE--",
        name: "FORD/FORD EASY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "FORD DIFFICULT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCD--",
        name: "FORD DIFFICULT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "LANE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCL--",
        name: "LANE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.2.2.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "RAFT SITE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCR--",
        name: "RAFT SITE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.2.2.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "OBSTACLE BYPASS",
          "CROSSING SITE/WATER CROSSING",
          "ENGINEER REGULATING POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BYCG--",
        name: "ENGINEER REGULATING POINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BS----",
        name: "SURVIVABILITY",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "EARTHWORK, SMALL TRENCH OR FORTIFICATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSE---",
        name: "EARTHWORK, SMALL TRENCH OR FORTIFICATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "FORT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSF---",
        name: "FORT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "FORTIFIED LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSL---",
        name: "FORTIFIED LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "FOXHOLE, EMPLACEMENT OR WEAPON SITE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSW---",
        name: "FOXHOLE, EMPLACEMENT OR WEAPON SITE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "STRONG POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSP---",
        name: "STRONG POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "SURFACE SHELTER"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSH---",
        name: "SURFACE SHELTER",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.3.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "SURVIVABILITY",
          "UNDERGROUND SHELTER"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BSU---",
        name: "UNDERGROUND SHELTER",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BW----",
        name: "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "MINIMUM SAFE DISTANCE ZONES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWM---",
        name: "MINIMUM SAFE DISTANCE ZONES",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "NUCLEAR DETONATIONS FRIENDLY GROUND ZERO"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWN---",
        name: "NUCLEAR DETONATIONS FRIENDLY GROUND ZERO",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "ENEMY KNOWN GROUND ZERO"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "BWE---",
        name: "ENEMY KNOWN GROUND ZERO",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "ENEMY TEMPLATED"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "C",
        status: "*",
        functionid: "BWI---",
        name: "ENEMY TEMPLATED",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "FRIENDLY PLANNED OR ON-ORDER"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "C",
        status: "*",
        functionid: "BWF---",
        name: "FRIENDLY PLANNED OR ON-ORDER",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "FALLOUT PRODUCING"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWP---",
        name: "FALLOUT PRODUCING",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "RADIOACTIVE AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWA---",
        name: "RADIOACTIVE AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "BIOLOGICALLY CONTAMINATED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWC---",
        name: "BIOLOGICALLY CONTAMINATED AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "CHEMICALLY CONTAMINATED AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWH---",
        name: "CHEMICALLY CONTAMINATED AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "BIOLOGICAL AND CHEMICAL ATTACK, RELEASE EVENTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWK---",
        name: "BIOLOGICAL AND CHEMICAL ATTACK, RELEASE EVENTS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWD---",
        name: "DECONTAMINATION (DECON) POINTS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON SITE/POINT (UNSPECIFIED)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDP--",
        name: "DECON SITE/POINT (UNSPECIFIED)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "ALTERNATE DECON SITE/POINT (UNSPECIFIED)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDA--",
        name: "ALTERNATE DECON SITE/POINT (UNSPECIFIED)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON SITE/POINT (TROOPS)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDT--",
        name: "DECON SITE/POINT (TROOPS)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON SITE/POINT (EQUIPMENT)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDE--",
        name: "DECON SITE/POINT (EQUIPMENT)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON SITE/POINT (EQUIPMENT AND TROOPS)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDS--",
        name: "DECON SITE/POINT (EQUIPMENT AND TROOPS)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDO--",
        name: "DECON SITE/POINT (OPERATIONAL DECONTAMINATION)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON SITE/POINT (THOROUGH DECONTAMINATION)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDG--",
        name: "DECON SITE/POINT (THOROUGH DECONTAMINATION)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON POINT (MAIN) EQUIPMENT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDEM-",
        name: "DECON POINT (MAIN) EQUIPMENT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.2.4.11.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DECONTAMINATION (DECON) POINTS",
          "DECON POINT (FORWARD) TROOPS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWDTF-",
        name: "DECON POINT (FORWARD) TROOPS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.2.4.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "MOBILITY/SURVIVABILITY",
          "NUCLEAR, BIOLOGICAL AND CHEMICAL GRAPHICS",
          "DOSE RATE CONTOUR LINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "BWR---",
        name: "DOSE RATE CONTOUR LINES",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "F-----",
        name: "FIRE SUPPORT GRAPHICS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FS----",
        name: "FIRE SUPPORT POINT",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT POINT",
          "TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FST---",
        name: "TARGET",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.3.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT POINT",
          "TARGET",
          "POINT /SINGLE TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FSTP--",
        name: "POINT /SINGLE TARGET",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT POINT",
          "TARGET",
          "CIRCULAR TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FSTC--",
        name: "CIRCULAR TARGET",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.3.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT POINT",
          "FIRE SUPPORT STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FSS---",
        name: "FIRE SUPPORT STATION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FL----",
        name: "FIRE SUPPORT LINES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "FIRE SUPPORT COORDINATION LINE (FSCL)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLC---",
        name: "FIRE SUPPORT COORDINATION LINE (FSCL)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "COORDINATION FIRE LINE (CFL)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLF---",
        name: "COORDINATION FIRE LINE (CFL)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "LINEAR TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLT---",
        name: "LINEAR TARGET",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "LINEAR TARGET",
          "FINAL PROTECTIVE FIRE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLTP--",
        name: "FINAL PROTECTIVE FIRE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "SMOKE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLK---",
        name: "SMOKE",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "SMOKE",
          "PLANNED WITH DESIGNATED TIME SHOWN"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLKP--",
        name: "PLANNED WITH DESIGNATED TIME SHOWN",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "SMOKE",
          "SMOKE (ACTUALLY IN PLACE)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLKS--",
        name: "SMOKE (ACTUALLY IN PLACE)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "SMOKE",
          "LINEAR SMOKE TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLKT--",
        name: "LINEAR SMOKE TARGET",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "NO FIRE LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLN---",
        name: "NO FIRE LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "FIRE SUPPORT LINES",
          "RESTRICTED FIRE LINE (RFL)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FLR---",
        name: "RESTRICTED FIRE LINE (RFL)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FA----",
        name: "AREAS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "FIRE SUPPORT AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAS---",
        name: "FIRE SUPPORT AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "AIRSPACE COORDINATION AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAC---",
        name: "AIRSPACE COORDINATION AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "AREA TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAT---",
        name: "AREA TARGET",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "SERIES TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAR---",
        name: "SERIES TARGET",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "SERIES TARGET",
          "SERIES OF TARGETS USING REGULAR TARGETS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FARS--",
        name: "SERIES OF TARGETS USING REGULAR TARGETS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "SERIES TARGET",
          "SERIES OF TARGETS USING RECTANGULAR TARGETS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FARU--",
        name: "SERIES OF TARGETS USING RECTANGULAR TARGETS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "BOMB AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAB---",
        name: "BOMB AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "FREE FIRE AREA (FFA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAI---",
        name: "FREE FIRE AREA (FFA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "GROUP OF TARGETS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAZ---",
        name: "GROUP OF TARGETS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.7.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "GROUP OF TARGETS",
          "GROUP OF TARGETS USING REGULAR TARGETS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAZT--",
        name: "GROUP OF TARGETS USING REGULAR TARGETS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.7.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "GROUP OF TARGETS",
          "GROUP OF TARGETS USING RECTANGULAR TARGETS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAZU--",
        name: "GROUP OF TARGETS USING RECTANGULAR TARGETS",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "NO FIRE AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAN---",
        name: "NO FIRE AREA",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.3.3.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "NUCLEAR TARGET"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAU---",
        name: "NUCLEAR TARGET",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "RESTRICTED FIRE AREA (RFA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAD---",
        name: "RESTRICTED FIRE AREA (RFA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "POSITION AREA FOR ARTILLERY (PAA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FAP---",
        name: "POSITION AREA FOR ARTILLERY (PAA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.3.3.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "FIRE SUPPORT GRAPHICS",
          "AREAS",
          "TARGET ACQUISITION AREA (TAA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "FATA--",
        name: "TARGET ACQUISITION AREA (TAA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "S-----",
        name: "COMBAT SERVICE SUPPORT",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SP----",
        name: "POINTS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "AMBULANCE EXCHANGE POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPA---",
        name: "AMBULANCE EXCHANGE POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "CANNIBALIZATION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPC---",
        name: "CANNIBALIZATION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "CASUALTY COLLECTION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPY---",
        name: "CASUALTY COLLECTION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "CIVILIAN COLLECTION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPT---",
        name: "CIVILIAN COLLECTION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "DETAINEE COLLECTION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPD---",
        name: "DETAINEE COLLECTION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "ENEMY PRISONER OF WAR (EPW) COLLECTION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPE---",
        name: "ENEMY PRISONER OF WAR (EPW) COLLECTION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "LOGISTICS RELEASE POINT (LRP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPL---",
        name: "LOGISTICS RELEASE POINT (LRP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "MAINTENANCE COLLECTION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPM---",
        name: "MAINTENANCE COLLECTION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "REARM, REFUEL AND RE-SUPPLY POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPR---",
        name: "REARM, REFUEL AND RE-SUPPLY POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "REFUEL ON THE MOVE (ROM) POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPU---",
        name: "REFUEL ON THE MOVE (ROM) POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "TRAFFIC CONTROL POST (TCP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPO---",
        name: "TRAFFIC CONTROL POST (TCP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "TRAILER TRANSFER POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPI---",
        name: "TRAILER TRANSFER POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.13",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "UNIT MAINTENANCE COLLECTION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPN---",
        name: "UNIT MAINTENANCE COLLECTION POINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.1.14",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQ---",
        name: "SUPPLY POINTS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "GENERAL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQT--",
        name: "GENERAL",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS I"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQA--",
        name: "CLASS I",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS II"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQB--",
        name: "CLASS II",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS III"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQC--",
        name: "CLASS III",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS IV"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQD--",
        name: "CLASS IV",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS V"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQE--",
        name: "CLASS V",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS VI"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQF--",
        name: "CLASS VI",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS VII"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQG--",
        name: "CLASS VII",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS VIII"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQH--",
        name: "CLASS VIII",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS IX"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQI--",
        name: "CLASS IX",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.14.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "SUPPLY POINTS",
          "CLASS X"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPQJ--",
        name: "CLASS X",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.1.15",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "AMMUNITION POINTS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPM---",
        name: "AMMUNITION POINTS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.15.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "AMMUNITION POINTS",
          "AMMUNITION SUPPLY POINT (ASP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPMA--",
        name: "AMMUNITION SUPPLY POINT (ASP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.4.1.15.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "POINTS",
          "AMMUNITION POINTS",
          "AMMUNITION TRANSFER POINT (ATP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SPMT--",
        name: "AMMUNITION TRANSFER POINT (ATP)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SL----",
        name: "LINES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "CONVOYS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLC---",
        name: "CONVOYS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "CONVOYS",
          "MOVING CONVOY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLCM--",
        name: "MOVING CONVOY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "CONVOYS",
          "HALTED CONVOY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLCH--",
        name: "HALTED CONVOY",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "SUPPLY ROUTES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLR---",
        name: "SUPPLY ROUTES",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "SUPPLY ROUTES",
          "MAIN SUPPLY ROUTE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLRM--",
        name: "MAIN SUPPLY ROUTE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "SUPPLY ROUTES",
          "ALTERNATE SUPPLY ROUTE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLRA--",
        name: "ALTERNATE SUPPLY ROUTE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "SUPPLY ROUTES",
          "ONE-WAY TRAFFIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLRO--",
        name: "ONE-WAY TRAFFIC",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "SUPPLY ROUTES",
          "ALTERNATING TRAFFIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLRT--",
        name: "ALTERNATING TRAFFIC",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.2.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "LINES",
          "SUPPLY ROUTES",
          "TWO-WAY TRAFFIC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SLRW--",
        name: "TWO-WAY TRAFFIC",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SA----",
        name: "AREA",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "DETAINEE HOLDING AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SAD---",
        name: "DETAINEE HOLDING AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "ENEMY PRISONER OF WAR (EPW) HOLDING AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SAP---",
        name: "ENEMY PRISONER OF WAR (EPW) HOLDING AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "FORWARD ARMING AND REFUELLING AREA (FARP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SAR---",
        name: "FORWARD ARMING AND REFUELLING AREA (FARP)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "REFUGEE HOLDING AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SAH---",
        name: "REFUGEE HOLDING AREA",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "SUPPORT AREAS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SAT---",
        name: "SUPPORT AREAS",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.5.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "SUPPORT AREAS",
          "BRIGADE (BSA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SATB--",
        name: "BRIGADE (BSA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.5.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "SUPPORT AREAS",
          "DIVISION (DSA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SATD--",
        name: "DIVISION (DSA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.5.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "SUPPORT AREAS",
          "REGIMENTAL (RSA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SATR--",
        name: "REGIMENTAL (RSA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.4.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMBAT SERVICE SUPPORT",
          "AREA",
          "REST (RA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "SARR--",
        name: "REST (RA)",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "O-----",
        name: "COMMAND AND CONTROL",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OX----",
        name: "SPECIAL POINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "REFERENCE POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXE---",
        name: "REFERENCE POINT",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "REFERENCE POINT",
          "NAV REFERENCE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRN--",
        name: "NAV REFERENCE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "REFERENCE POINT",
          "DLRP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRD--",
        name: "DLRP",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "UNDERWATER"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXU---",
        name: "UNDERWATER",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "UNDERWATER",
          "DATUM"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXUD--",
        name: "DATUM",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "UNDERWATER",
          "BRIEF CONTACT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXUB--",
        name: "BRIEF CONTACT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "UNDERWATER",
          "LOST CONTACT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXUL--",
        name: "LOST CONTACT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "UNDERWATER",
          "SINKER"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXUS--",
        name: "SINKER",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXW---",
        name: "WEAPON",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "AIM POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWA--",
        name: "AIM POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "DROP POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWD--",
        name: "DROP POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "ENTRY POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWE--",
        name: "ENTRY POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "GROUND ZERO"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWG--",
        name: "GROUND ZERO",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "MSL DETECT POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWM--",
        name: "MSL DETECT POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "IMPACT POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWI--",
        name: "IMPACT POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.3.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "WEAPON",
          "PREDICTED IMPACT POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXWP--",
        name: "PREDICTED IMPACT POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXY---",
        name: "SONOBUOY",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "PATTERN CENTRE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYP--",
        name: "PATTERN CENTRE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "DIFAR"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYD--",
        name: "DIFAR",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "LOFAR"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYL--",
        name: "LOFAR",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "CASS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYC--",
        name: "CASS",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "DICASS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYS--",
        name: "DICASS",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "BT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYB--",
        name: "BT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "ANM"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYA--",
        name: "ANM",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "VLAD"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYV--",
        name: "VLAD",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "ATAC"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYT--",
        name: "ATAC",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "RO"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYR--",
        name: "RO",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.4.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SONOBUOY",
          "KINGPIN"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXYK--",
        name: "KINGPIN",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "FORMATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXN---",
        name: "FORMATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "HARBOUR"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXH---",
        name: "HARBOUR",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.6.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "HARBOUR",
          "POINT Q"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXHQ--",
        name: "POINT Q",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.6.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "HARBOUR",
          "POINT A"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXHA--",
        name: "POINT A",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.6.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "HARBOUR",
          "POINT Y"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXHY--",
        name: "POINT Y",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.6.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "HARBOUR",
          "POINT X"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXHX--",
        name: "POINT X",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "ROUTE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXR---",
        name: "ROUTE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.7.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "ROUTE",
          "RENDEZVOUS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRR--",
        name: "RENDEZVOUS",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.7.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "ROUTE",
          "DIVERSIONS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRD--",
        name: "DIVERSIONS",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.7.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "ROUTE",
          "WAYPOINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRW--",
        name: "WAYPOINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.7.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "ROUTE",
          "PIM"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRP--",
        name: "PIM",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.7.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "ROUTE",
          "POINT R"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXRT--",
        name: "POINT R",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.1.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXST--",
        name: "STATION",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "COMBATANT STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTC-",
        name: "COMBATANT STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "COMBATANT STATION",
          "PICKET STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTCP",
        name: "PICKET STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "COMBATANT STATION",
          "ASW SHIP STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTCA",
        name: "ASW SHIP STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "REPLENISHMENT AT SEA (RAS) STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTR-",
        name: "REPLENISHMENT AT SEA (RAS) STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "RESCUE STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTH-",
        name: "RESCUE STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "SUBMARINE STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTS-",
        name: "SUBMARINE STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.8.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "STATION",
          "ASW SUBMARINE STATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSTSA",
        name: "ASW SUBMARINE STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SEARCH"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXS---",
        name: "SEARCH",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.9.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SEARCH",
          "SEARCH AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSA--",
        name: "SEARCH AREA",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.9.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SEARCH",
          "DIP POSITION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSD--",
        name: "DIP POSITION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.9.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "SEARCH",
          "SEARCH CENTRE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXSC--",
        name: "SEARCH CENTRE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.1.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXA---",
        name: "AIR CONTROL",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "COMBAT AIR PATROL (CAP)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAC--",
        name: "COMBAT AIR PATROL (CAP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "AIRBORNE EARLY WARNING (AEW)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAA--",
        name: "AIRBORNE EARLY WARNING (AEW)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "TACAN"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAT--",
        name: "TACAN",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "TANKING"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAK--",
        name: "TANKING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "ANTISUBMARINE WARFARE FIXED WING"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAF--",
        name: "ANTISUBMARINE WARFARE FIXED WING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "ANTISUBMARINE WARFARE ROTARY WING"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAH--",
        name: "ANTISUBMARINE WARFARE ROTARY WING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "TOMCAT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAO--",
        name: "TOMCAT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "RESCUE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAR--",
        name: "RESCUE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "REPLENISH"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAP--",
        name: "REPLENISH",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "MARSHALL"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAM--",
        name: "MARSHALL",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "STRIKE IP"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAS--",
        name: "STRIKE IP",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.1.10.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "SPECIAL POINT",
          "AIR CONTROL",
          "CORRIDOR TAB"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OXAD--",
        name: "CORRIDOR TAB",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OG----",
        name: "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "CHECKPOINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGC---",
        name: "CHECKPOINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "CONTACT POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGP---",
        name: "CONTACT POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "COORDINATION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGT---",
        name: "COORDINATION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "DECISION POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGD---",
        name: "DECISION POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "LINKUP POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGL---",
        name: "LINKUP POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "PASSAGE POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGN---",
        name: "PASSAGE POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "RALLY POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGR---",
        name: "RALLY POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "RELEASE POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGS---",
        name: "RELEASE POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "START POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGI---",
        name: "START POINT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.2.5.2.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT",
          "WAY POINT"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OGW---",
        name: "WAY POINT",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OL----",
        name: "LINE",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "LINE",
          "LIGHT LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OLN---",
        name: "LIGHT LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "LINE",
          "PHASE LINE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OLP---",
        name: "PHASE LINE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "AREA"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OA----",
        name: "AREA",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.2.5.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "CONTROL MEASURES",
          "COMMAND AND CONTROL",
          "AREA",
          "AIRFIELD ZONE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "C",
        status: "*",
        functionid: "OAZ---",
        name: "AIRFIELD ZONE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "------",
        name: "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
        remarks: "N/A"
      },
      {
        geometry: "",
        hierarchy: "2.X.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "V-----",
        name: "VIOLENT ACTIVITIES (DEATH CAUSING)",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "ARSON/FIRE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VA----",
        name: "ARSON/FIRE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "ARTILLERY/ARTILLERY FIRE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VR----",
        name: "ARTILLERY/ARTILLERY FIRE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "ASSASSINATION/MURDER/EXECUTION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VE----",
        name: "ASSASSINATION/MURDER/EXECUTION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "BOMB/BOMBING"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "VB----",
        name: "BOMB/BOMBING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "BOOBYTRAP"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VY----",
        name: "BOOBYTRAP",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "DRIVE-BY SHOOTING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VD----",
        name: "DRIVE-BY SHOOTING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "INDIRECT FIRE (UNSPECIFIED TYPE)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VI----",
        name: "INDIRECT FIRE (UNSPECIFIED TYPE)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "MORTAR/MORTAR FIRE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VM----",
        name: "MORTAR/MORTAR FIRE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "ROCKET/ROCKET FIRE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VK----",
        name: "ROCKET/ROCKET FIRE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "SNIPING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VS----",
        name: "SNIPING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "POISONING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VP----",
        name: "POISONING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "AMBUSH"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VU----",
        name: "AMBUSH",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.13",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "AMMUNITION CACHE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VC----",
        name: "AMMUNITION CACHE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.14",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "HELICOPTER (CIVILIAN BEING USED BY HOSTILE OR INSURGENTS)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VH----",
        name: "HELICOPTER (CIVILIAN BEING USED BY HOSTILE OR INSURGENTS)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.15",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "HOSTILE OR INSURGENT MOTORIZED INFANTRY"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VF----",
        name: "HOSTILE OR INSURGENT MOTORIZED INFANTRY",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.16",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "HOSTILE OR INSURGENT INFANTRY"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VO----",
        name: "HOSTILE OR INSURGENT INFANTRY",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.17",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "RECONNAISSANCE/SURVEILLANCE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VL----",
        name: "RECONNAISSANCE/SURVEILLANCE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.18",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "SIGNAL/RADIO STATION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VX----",
        name: "SIGNAL/RADIO STATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.1.19",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "VIOLENT ACTIVITIES (DEATH CAUSING)",
          "SUPPLY CACHE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "VZ----",
        name: "SUPPLY CACHE",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "LOCATIONS"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "L-----",
        name: "LOCATIONS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.2.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "LOCATIONS",
          "BLACK LIST LOCATION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "LB----",
        name: "BLACK LIST LOCATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.2.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "LOCATIONS",
          "GRAY LIST LOCATION"
        ],
        codingscheme: "G",
        affiliation: "U",
        battledimension: "O",
        status: "*",
        functionid: "LG----",
        name: "GRAY LIST LOCATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.2.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "LOCATIONS",
          "WHITE LIST LOCATION"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "O",
        status: "*",
        functionid: "LW----",
        name: "WHITE LIST LOCATION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "P-----",
        name: "OPERATIONS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "ROAD BLOCK"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PR----",
        name: "ROAD BLOCK",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.1.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "ROAD BLOCK",
          "ROAD BLOCK (UNDER CONSTRUCTION)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PRB---",
        name: "ROAD BLOCK (UNDER CONSTRUCTION)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "PATROLLING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PT----",
        name: "PATROLLING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "RECRUITMENT (WILLING)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PC----",
        name: "RECRUITMENT (WILLING)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.3.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "RECRUITMENT (WILLING)",
          "RECRUITMENT (COERCED/IMPRESSED)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PCU---",
        name: "RECRUITMENT (COERCED/IMPRESSED)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "DEMONSTRATION"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "PD----",
        name: "DEMONSTRATION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "MINELAYING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PM----",
        name: "MINELAYING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "PSYCHOLOGICAL OPERATIONS (PSYOP)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PH----",
        name: "PSYCHOLOGICAL OPERATIONS (PSYOP)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.6.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "PSYCHOLOGICAL OPERATIONS (PSYOP)",
          "PSYOP (TV AND RADIO PROPAGANDA)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PHY---",
        name: "PSYOP (TV AND RADIO PROPAGANDA)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.6.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "PSYCHOLOGICAL OPERATIONS (PSYOP)",
          "PSYOP (WRITTEN PROPAGANDA)"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "PHW---",
        name: "PSYOP (WRITTEN PROPAGANDA)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.6.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "PSYCHOLOGICAL OPERATIONS (PSYOP)",
          "WRITTEN PROPAGANDA"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "O",
        status: "*",
        functionid: "PHG---",
        name: "WRITTEN PROPAGANDA",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.6.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "PSYCHOLOGICAL OPERATIONS (PSYOP)",
          "HOUSE-TO-HOUSE PROPAGANDA"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "O",
        status: "*",
        functionid: "PHT---",
        name: "HOUSE-TO-HOUSE PROPAGANDA",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "FORAGING/SEARCHING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PG----",
        name: "FORAGING/SEARCHING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.8",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "SPY"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PS----",
        name: "SPY",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.9",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "FOOD DISTRIBUTION"
        ],
        codingscheme: "G",
        affiliation: "N",
        battledimension: "O",
        status: "*",
        functionid: "PF----",
        name: "FOOD DISTRIBUTION",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.10",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "MEDICAL TREATMENT FACILITY"
        ],
        codingscheme: "G",
        affiliation: "N",
        battledimension: "O",
        status: "*",
        functionid: "PI----",
        name: "MEDICAL TREATMENT FACILITY",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.11",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "ELECTRONIC WARFARE INTERCEPT"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PE----",
        name: "ELECTRONIC WARFARE INTERCEPT",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.12",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "EXTORTION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PX----",
        name: "EXTORTION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.3.3.13",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "HIJACKING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PJ----",
        name: "HIJACKING",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.13.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "HIJACKING",
          "HIJACKING (VEHICLE)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PJV---",
        name: "HIJACKING (VEHICLE)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.13.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "HIJACKING",
          "HIJACKING (AIRPLANE)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PJA---",
        name: "HIJACKING (AIRPLANE)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.13.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "HIJACKING",
          "HIJACKING (BOAT)"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PJB---",
        name: "HIJACKING (BOAT)",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.14",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "KIDNAPPING"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PK----",
        name: "KIDNAPPING",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.15",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "ARREST"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "O",
        status: "*",
        functionid: "PA----",
        name: "ARREST",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.3.16",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "OPERATIONS",
          "DRUG OPERATION"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "PO----",
        name: "DRUG OPERATION",
        remarks: ""
      },
      {
        geometry: "",
        hierarchy: "2.X.3.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "I-----",
        name: "ITEMS",
        remarks: "N/A"
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.1",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "REFUGEES"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "IR----",
        name: "REFUGEES",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.2",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "SAFE HOUSE"
        ],
        codingscheme: "G",
        affiliation: "*",
        battledimension: "O",
        status: "*",
        functionid: "IS----",
        name: "SAFE HOUSE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.3",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "GRAFFITI"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "IG----",
        name: "GRAFFITI",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.4",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "VANDALISM/RAPE/LOOT/RANSACK/PLUNDER/SACK"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "IV----",
        name: "VANDALISM/RAPE/LOOT/RANSACK/PLUNDER/SACK",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.5",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "KNOWN INSURGENT VEHICLE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "IK----",
        name: "KNOWN INSURGENT VEHICLE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.6",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "DRUG VEHICLE"
        ],
        codingscheme: "G",
        affiliation: "H",
        battledimension: "O",
        status: "*",
        functionid: "ID----",
        name: "DRUG VEHICLE",
        remarks: ""
      },
      {
        geometry: "POINT",
        hierarchy: "2.X.3.4.7",
        names: [
          ,
          "TACTICAL GRAPHICS",
          "NON ARTICLE 5 CRISIS RESPONSE OPERATIONS (NA5CRO)",
          "ITEMS",
          "INTERNAL SECURITY FORCE"
        ],
        codingscheme: "G",
        affiliation: "F",
        battledimension: "O",
        status: "*",
        functionid: "IF----",
        name: "INTERNAL SECURITY FORCE",
        remarks: ""
      }
    ]
  }
};