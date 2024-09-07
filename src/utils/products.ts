import powerProtection from "../assets/images/power_protection.jpg";
import cableManagement from "../assets/images/cable_management.jpg";
import enclosures from "../assets/images/enclosure-home-page.jpg";
import warehouse from "../assets/images/storage-systems.jpg";
import gaskets from "../assets/images/gaskets.jpg";
import powerGeneration from "../assets/images/power_generation.jpg";
import lights from "../assets/images/lighting_wiring-device.jpg";

// low voltage images
import TranosEliteImage from "../assets/images/tranos-elite.jpg";
import SiemensSivacon from "../assets/images/sivacon-8.jpg";
import AtexPowerPanels from "../assets/images/atex-power-panel.jpg";

// medium voltage images
import SiemensSIMOPRIME from "../assets/images/simoprime.jpg";
import SiemensSIMOSEC from "../assets/images/simosec.jpg";

// atex power panels
import ExplosionProofControlStations from "../assets/images/Explosion-proof-Control-Stations.jpg";

// cable management
import CableTracFront from "../assets/images/cable-magt-card-trac.svg";
import CableTracBack from "../assets/images/trac-card.jpg";
import ErisFront from "../assets/images/cable-magt-card-eris.svg";
import ErisBack from "../assets/images/eris-card.jpg";
import EllisFront from "../assets/images/cable-magt-card-ellis.svg";
import EllisBack from "../assets/images/ellis-card.jpg";
import CableGlandsFront from "../assets/images/cable-glands.png";
import CableGlandsBack from "../assets/images/AISI-303-Cable-glands.jpg";

// cable glands
import IP45 from "../assets/images/IP54-Nickel-plated-brass-glands.png";
import IP68 from "../assets/images/IP68-Nickel-plated-brass-glands.png";
import AISI303 from "../assets/images/AISI-303-Cable-glands.png";
import AISI316L from "../assets/images/AISI-316L-Cable-glands.png";
import Polyamide from "../assets/images/Polyamide-Cable-glands.png";
import ATEXCableGlands from "../assets/images/Explosion-proof-Cable-Glands.png";

// enclosures images
import Electrical from "../assets/images/electrical-card.jpg";
import Mechanical from "../assets/images/mechanical.jpg";
import Servers from "../assets/images/datacentre.jpg";
import Battery from "../assets/images/battery-cabinet.jpg";
import HeavyDuty from "../assets/images/heavyduty.jpg";
import Customised from "../assets/images/customised.jpg";
import JunctionBoxes from "../assets/images/junction-boxes.jpg";
import MeterBox from "../assets/images/meterbox.jpg";

// atex junction boxes
import ExplosionProofJBOne from "../assets/images/Explosion-proof-Junction-Boxes.jpg";
import ExplosionProofJBTwo from "../assets/images/Explosion-proof-Junction-Boxes2.jpg";
import ExplosionProofTB from "../assets/images/Explosion-proof-Terminal-Boxes.jpg";
import ExplosionProofTBOneGlassFibre from "../assets/images/Explosion-proof-Terminal-Boxes-(glass-fibre-reinforced-polyester).jpg";
import ExplosionProofTBoxes from "../assets/images/Terminal-Boxes.jpg";
import ExplosionProofTBoxesCopper from "../assets/images/Explosion-proof-Terminal-Boxes-(Copper-free-Aluminium-Alloy).jpg";
import ExplosionProofTBoxesAlluminium from "../assets/images/EP-Terminal-Boxes-Aluminium.jpg";
import Eight from "../assets/images/Explosion-proof-Enclosures.jpg";
import Nine from "../assets/images/Increased-Safety-Enclosure-(copper-free-aluminum-alloy).jpg";
import Ten from "../assets/images/Increased-Safety-Enclosures-(Ex-e).jpg";
import Eleven from "../assets/images/Series-Explosion-proof-Enclosures-(Ex-e).jpg";

// valor images
import CeilingLight from "../assets/images/ceiling-light.png";
import SensingLight from "../assets/images/sensing-ceiling-light.png";
import SP1 from "../assets/images/sp1.png";
import T5 from "../assets/images/t5.png";
import T8DoubleEnd from "../assets/images/t8-double-end.png";
import LEDBulbs from "../assets/images/led-bulb.png";
import Downlight from "../assets/images/downlight.png";

// duro images
import FT40 from "../assets/images/ft40.png";
import Grace from "../assets/images/grace.png";
import Wave from "../assets/images/wave.png";
import KCI from "../assets/images/kc1.png";
import PL from "../assets/images/pl.png";
import GU10 from "../assets/images/gu10.png";
import LL20 from "../assets/images/ll20.png";
import T8SingleEnd from "../assets/images/t8-single-end.png";
import JLGen3HVStrip from "../assets/images/jl.png";
import SS20 from "../assets/images/ss20.png";
import Mirroright from "../assets/images/mirror-light.png";

export const PRODUCTS = [
  {
    menu: "power protection <br> & distribution",
    to: "/products/power-protection-and-distribution",
    image: powerProtection,
  },
  {
    menu: "cable management <br> & support system",
    to: "/products/cable-management",
    image: cableManagement,
  },
  {
    menu: "enclosures",
    to: "/products/enclosures",
    image: enclosures,
  },
  {
    menu: "warehouse <br> storage system",
    to: "/products/warehouse-storage",
    image: warehouse,
  },
  {
    menu: "gaskets",
    to: "/products/gaskets",
    image: gaskets,
  },
  {
    menu: "power generation <br> & backup",
    to: "/products/power-generation",
    image: powerGeneration,
  },
  {
    menu: "lights & <br> wiring devices",
    to: "lights-wiring",
    image: lights,
  },
];

// low voltage products
export const LOWVOLTAGE = [
  {
    title: "tranos elite range",
    img: TranosEliteImage,
    to: "/products/power-protection-and-distribution/tranos-elite-range",
  },
  {
    title: "Siemens SIVACON S8",
    img: SiemensSivacon,
    to: "/products/power-protection-and-distribution/siemens-sivacon",
  },
  {
    title: "ATEX power panels",
    img: AtexPowerPanels,
    to: "/products/power-protection-and-distribution/atex-power-panels",
  },
];

// medium voltage products
export const MEDIUMVOLTAGE = [
  {
    title: "siemens SIMOPRIME",
    img: SiemensSIMOPRIME,
    to: "/products/power-protection-and-distribution/siemens-simoprime",
  },
  {
    title: "Siemens SIMOSEC",
    img: SiemensSIMOSEC,
    to: "/products/power-protection-and-distribution/siemens-simosec",
  },
];

// ATEX power panels
export const ATEXPOWERPANELS = [
  {
    img: ExplosionProofControlStations,
    title: "Explosion-Proof Control Stations",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22 Class I Division 1 Groups B, C, D",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
      "Six types of enclosures",
    ],
  },
  {
    img: ExplosionProofControlStations,
    title: "Explosion-Proof Lighting Distribution Boxes (Ex D E IIB)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22 Class I Division 2 Groups C, D",
      "Main switch and branch switch are operated with external rotary actuator.",
      "Internal wiring to the terminal is finished.",
      "International brand of explosion-proof terminal blocks.",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
    ],
  },
  {
    img: ExplosionProofControlStations,
    title: "Explosion-Proof Illumination(Power) Distribution Boxes",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22 Class I Division 1, Groups C, D",
      "Flameproof enclosure (Ex d IIB)",
      "Main switch and branch switch are operated with external rotary actuator",
      "Internal wiring to the terminal is finished.",
      "International brand of terminal blocks and components.",
      "Copper-free Aluminium Alloy (carbon steel), powder coated surface, or stainless steel.",
      "Special requirements on request.",
    ],
  },
  {
    img: ExplosionProofControlStations,
    title: "Explosion-Proof Distribution Panels",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22 Class I Division 1, Groups B, C, D",
      "Flameproof enclosure (Ex d IIB+H2), which can be used as feed distribution equipment in control and distribution system(such as distribution box, switch box of main circuit ,control box, terminal box or motor starting box etc.)",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
      "Equipped with specialized hinge structure, which can prevent the flameproof joints from damage when opening and closing the box, and greatly prolong the service life of box.",
      "The boxes can be combined and installed freely to save space and meet the requirements of various distribution systems.",
      "Special requirements on request.",
    ],
  },
  {
    img: ExplosionProofControlStations,
    title: "Explosion-Proof Distribution Panels",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22 Class I Division 1, Groups B, C, D",
      "Flameproof enclosure (Ex d IIB+H2), which can be used as feed distribution equipment in control and distribution system(such as distribution box, switch box of main circuit ,control box, terminal box or motor starting box etc.)",
      "Enclosure: 316 stainless steel",
      "Equipped with specialized hinge structure, which can prevent the flameproof joints from damage when opening and closing the box, and greatly prolong the service life of box.",
      "The boxes can be combined and installed freely to save space and meet the requirements of various distribution systems.",
    ],
  },
];

// cable management
export const CABLEMANAGEMENT = [
  {
    frontImage: CableTracFront,
    backImage: CableTracBack,
    to: "/products/cable-management/trac",
  },
  {
    frontImage: ErisFront,
    backImage: ErisBack,
    to: "/products/cable-management/eris",
  },
  {
    frontImage: EllisFront,
    backImage: EllisBack,
    to: "/products/cable-management/ellis",
  },
  {
    frontImage: CableGlandsFront,
    backImage: CableGlandsBack,
    to: "/products/cable-management/cable-glands",
  },
];

export const CABLEGLANDS = [
  {
    name: "Nickel plated brass Cable glands IP54",
    img: IP45,
    to: "ip45",
    description: {
      desc: "Ip54 nickel plated brass glands. Made of brass which is then nickel plated in order to improve resistance to hard environmental conditions in which they are used. Consisting of a body within which is located a neoprene washer that deforms as a result of the nut being tightened, and guarantees IP54 water tightness and good levels of cableretention. The seals are resistant to ageing, corrosion and oils andremain inert to the material that sheathes the cables.",
      features: [
        { product: 'Nickel plated brass gland G1" 19÷22', code: "6018-01" },
        { product: 'Nickel plated brass gland G2" 37÷45', code: "6018-02" },
        { product: 'Nickel plated brass gland PG07" 5÷7', code: "6018-07" },
        { product: 'Nickel plated brass gland PG09" 6÷8', code: "6018-09" },
        { product: 'Nickel plated brass gland PG11" 8÷10', code: "6018-11" },
        // second batch
        { product: 'Nickel plated brass gland G1"1/2 33÷35', code: "6018-112" },
        { product: 'Nickel plated brass gland G1"1/4 26÷30', code: "6018-114" },
        { product: 'Nickel plated brass gland G1/2" 10÷12', code: "6018-12" },
        { product: "Nickel plated brass gland M12x1.5 4÷6", code: "6018-12A" },
        { product: "Nickel plated brass gland PG13 10÷12", code: "6018-13" },
        { product: 'Nickel plated brass gland G1/4" 4÷6', code: "6018-14" },
        { product: 'Nickel plated brass gland Pg16" 12÷14', code: "6018-15" },
        { product: "Nickel plated brass gland M16x1.5 8÷10", code: "6018-16" },
        { product: "Nickel plated brass gland M20x1.5 10÷12", code: "6018-20" },
        { product: 'Nickel plated brass gland PG21" 15÷17', code: "6018-21" },
        { product: 'Nickel plated brass gland PG21" 15÷17', code: "6018-21" },
        { product: "Nickel plated brass gland M24x1.5 17÷19", code: "6018-25" },
        { product: 'Nickel plated brass gland PG29" 24÷26', code: "6018-29" },
        { product: "Nickel plated brass gland M32x1.5 19÷22", code: "6018-32" },
        { product: 'Nickel plated brass gland G3/4" 17÷19', code: "6018-34" },
        { product: "Nickel plated brass gland PG36 31÷35", code: "6018-36" },
        { product: 'Nickel plated brass gland G3/8" 8÷10', code: "6018-38" },
        { product: "Nickel plated brass gland M40x1.5 26÷30", code: "6018-40" },
        { product: "Nickel plated brass gland PG42 39÷41", code: "6018-42" },
        { product: "Nickel plated brass gland PG48 44÷46", code: "6018-48" },
        { product: "Nickel plated brass gland M50x1.5 39÷41", code: "6018-50" },
        { product: "Nickel plated brass gland M63x1.5 37÷45", code: "6018-63" },
      ],
    },
  },
  {
    name: "Nickel plated brass Cable glands IP68",
    img: IP68,
    to: "ip68",
    description: {
      desc: "IP68 nickel plated brass glands. Made of brass which is then nickel plated in order to improve resistance to the harsh environmental conditions in which they are to be used. The tightening of the nut causes the seal to deform so that, in addition to guaranteeing an IP68 watertight seal of 5 bars pressure, it also ensures exceptional cable retention. A further o-ring seal located in an appropriate shaped housing also maintains the levels of water tightness at the thread. ISO Metric and complies with CEI EN 60423",
      features: [
        {
          product: "Nickel plated brass gland M12x1,5 5÷9",
          code: "6018-M1216",
        },
        {
          product: "Nickel plated brass gland M16x1,5 8÷12",
          code: "6018-M1620",
        },
        { product: "Nickel plated brass gland M16x1,5 5÷9", code: "6018-M16A" },
        { product: "Nickel plated brass gland M20x1,5 8÷12", code: "6018-M20" },
        {
          product: "Nickel plated brass gland M20x1,5 11÷16",
          code: "6018-M2025",
        },
        //second batch
        {
          product: "Nickel plated brass gland M25x1,5 11÷16",
          code: "6018-M25",
        },
        {
          product: "Nickel plated brass gland M25x1,5 15÷21",
          code: "6018-M2532",
        },
        {
          product: "Nickel plated brass gland M25x1,5 15÷21",
          code: "6018-M2532",
        },
        {
          product: "Nickel plated brass gland M32x1,5 15÷21",
          code: "6018-M32",
        },
        {
          product: "Nickel plated brass gland M32x1,5 20÷27",
          code: "6018-M3240",
        },
        {
          product: "Nickel plated brass gland M40x1,5 20÷27",
          code: "6018-M40",
        },
        {
          product: "Nickel plated brass gland M50x1,5 22÷35",
          code: "6018-M50",
        },
        {
          product: "Nickel plated brass gland M63x1,5 36÷46",
          code: "6018-M63",
        },
      ],
    },
  },
  {
    name: "Stainless Steel Cable glands AISI 303",
    img: AISI303,
    to: "aisi303",
    description: {
      desc: "Glands - IP68. Made in AISI 303 (X8CrNi1809 1.4305 UNI EN10088-1) stainless steel, the Perbunan seal forms a barrier effect against radioactive radiation of up to 2.5x105 Grays. Starting with PG09, it has been produced in two pieces to guarantee improved tightening and to reduce the gap between the cable and the metal parts of the gland. They offer excellent resistance to cable traction and have an IP68 rating.Suggested threads are: ISO metric in accordance with CEI EN 60423.",
      features: [
        {
          product: "Stainless steel gland AISI 303 M8x1,25 2,5÷3,5",
          code: "6018X-M08",
        },
        {
          product: "Stainless steel gland AISI 303 M8x1,25 2,5÷5",
          code: "6018X-M081",
        },
        {
          product: "Stainless steel gland AISI 303 M10x1,5 3÷4",
          code: "6018X-M10",
        },
        {
          product: "Stainless steel gland AISI 303 M10x1,5 4÷6",
          code: "6018X-M101",
        },
        {
          product: "Stainless steel gland AISI 303 M12 3,5÷5",
          code: "6018X-M12",
        },
        //second batch
        {
          product: "Stainless steel gland AISI 303 M12 5÷6,5",
          code: "6018X-M121",
        },
        {
          product: "Stainless steel gland AISI 303 M12 6,5÷8",
          code: "6018X-M123",
        },
        {
          product: "Stainless steel gland AISI 303 M16 8÷10,5",
          code: "6018X-M16",
        },
        {
          product: "Stainless steel gland AISI 303 M20 11÷15",
          code: "6018X-M20",
        },
        {
          product: "Stainless steel gland AISI 303 M25 16÷20,5",
          code: "6018X-M25",
        },
        {
          product: "Stainless steel gland AISI 303 M32 21÷25,5",
          code: "6018X-M32",
        },
        {
          product: "Stainless steel gland AISI 303 M40 28,5÷33",
          code: "6018X-M40",
        },
        {
          product: "Stainless steel gland AISI 303 M50 37÷42",
          code: "6018X-M50",
        },
        {
          product: "Stainless steel gland AISI 303 M63 46÷52",
          code: "6018X-M63",
        },
      ],
    },
  },

  {
    name: "Stainless Steel Cable glands AISI 316L",
    img: AISI316L,
    to: "aisi316l",
    description: {
      desc: "Gglands - IP68. Made in AISI 316L (X2CrNiMo17-12-2 1.4404 UNI EN 10088-1) stainless steel. The tightening of the nut causes the seal to deform so that, in addition to guaranteeing an IP68 watertight seal of 5 bars pressure, it also ensures exceptional cable retention. A further o-ring seal located in a appropriate shaped housing also maintains the levels of water tightness at the thread. They have excellent resistance to corrosion. ISO metric thread in compliance with CEI EN 60423 standard.",
      features: [
        {
          product: "Stainless steel gland AISI 316L M12 5÷9",
          code: "6018XX-M1216",
        },
        {
          product: "Stainless steel gland AISI 316L M16 5÷9",
          code: "6018XX-M16",
        },
        {
          product: "Stainless steel gland AISI 316L M16 8÷12",
          code: "6018XX-M1620",
        },
        {
          product: "Stainless steel gland AISI 316L M20 8÷12",
          code: "6018XX-M20",
        },
        {
          product: "Stainless steel gland AISI 316L M20 11÷16",
          code: "6018XX-M25",
        },
        //second batch
        {
          product: "Stainless steel gland AISI 316L M25 11÷16",
          code: "6018XX-M2025",
        },
        {
          product: "Stainless steel gland AISI 316L M25 11÷16",
          code: "6018XX-M25",
        },
        {
          product: "Stainless steel gland AISI 316L M25 15÷21",
          code: "6018XX-M2532",
        },
        {
          product: "Stainless steel gland AISI 316L M32 15÷21",
          code: "6018XX-M32",
        },
        {
          product: "Stainless steel gland AISI 316L M32 20÷27",
          code: "6018XX-M3240",
        },
        {
          product: "Stainless steel gland AISI 316L M40 20÷27",
          code: "6018XX-M40",
        },
      ],
    },
  },
  {
    name: "Polyamide Cable glands (Also available with complete Locknut)",
    img: Polyamide,
    to: "polyamide",
    description: {
      desc: "IP68 polyamide glands consist of a body fitted with elastic fins that, when a nut is tightened, tighten concentrically and uniformly around an NBR washer seal, and guarantee an IP68 water tightness and efficient cable retention. The particular trapezoidal shape of the thread ensures an efficient way of preventing accidental unscrewing through vibrations. The seals are resistant to ageing, corrosion and oils and remain inert to the material that sheathes the cables. PG thread in accordance with DIN 40430.",
      features: [
        { product: "Polyamide gland PG07 3÷6,5", code: "6018-P07" },
        { product: "Polyamide gland PG09 3, 5÷8", code: "6018-P09" },
        { product: "Polyamide gland PG11 4, 5÷10", code: "6018-P11" },
        { product: "Polyamide gland M12 3,5÷7", code: "6018-P12" },
        { product: "Polyamide gland M13 6÷12", code: "6018-P13" },
        //second batch
        { product: "Polyamide gland M16 7÷14", code: "6018-P15" },
        { product: "Polyamide gland M16 4,5÷10", code: "6018-P16" },
        { product: "Polyamide gland M20 6÷13", code: "6018-P20" },
        { product: "Polyamide gland M21 12÷18", code: "6018-P21" },
        { product: "Polyamide gland M25 9÷17", code: "6018-P25" },
        { product: "Polyamide gland PG29 17÷25", code: "6018-P29" },
        { product: "Polyamide gland M32 15÷21", code: "6018-P32" },
        { product: "Polyamide gland PG36 20÷32", code: "6018-P36" },
        { product: "Polyamide gland M40 16÷28", code: "6018-P40" },
        { product: "Polyamide gland PG42 26÷38", code: "6018-P42" },
        { product: "Polyamide gland PG42 26÷38", code: "6018-P42" },
        { product: "Polyamide gland M50 30÷44", code: "6018-P48" },
        { product: "Polyamide gland PG48 27÷35", code: "6018-P50" },
        { product: "Polyamide gland M63 34÷48", code: "6018-P63" },
      ],
    },
  },
  {
    name: "ATEX (Explosion Proof) Cable Glands",
    img: ATEXCableGlands,
    to: "#",
    description: {
      desc: "IP68 polyamide glands consist of a body fitted with elastic fins that, when a nut is tightened, tighten concentrically and uniformly around an NBR washer seal, and guarantee an IP68 water tightness and efficient cable retention. The particular trapezoidal shape of the thread ensures an efficient way of preventing accidental unscrewing through vibrations. The seals are resistant to ageing, corrosion and oils and remain inert to the material that sheathes the cables. PG thread in accordance with DIN 40430.",
      features: [
        { product: "Polyamide gland PG07 3÷6,5", code: "6018-P07" },
        { product: "Polyamide gland PG09 3, 5÷8", code: "6018-P09" },
        { product: "Polyamide gland PG11 4, 5÷10", code: "6018-P11" },
        { product: "Polyamide gland M12 3,5÷7", code: "6018-P12" },
        { product: "Polyamide gland M13 6÷12", code: "6018-P13" },
        //second batch
        { product: "Polyamide gland M16 7÷14", code: "6018-P15" },
        { product: "Polyamide gland M16 4,5÷10", code: "6018-P16" },
        { product: "Polyamide gland M20 6÷13", code: "6018-P20" },
        { product: "Polyamide gland M21 12÷18", code: "6018-P21" },
        { product: "Polyamide gland M25 9÷17", code: "6018-P25" },
        { product: "Polyamide gland PG29 17÷25", code: "6018-P29" },
        { product: "Polyamide gland M32 15÷21", code: "6018-P32" },
        { product: "Polyamide gland PG36 20÷32", code: "6018-P36" },
        { product: "Polyamide gland M40 16÷28", code: "6018-P40" },
        { product: "Polyamide gland PG42 26÷38", code: "6018-P42" },
        { product: "Polyamide gland PG42 26÷38", code: "6018-P42" },
        { product: "Polyamide gland M50 30÷44", code: "6018-P48" },
        { product: "Polyamide gland PG48 27÷35", code: "6018-P50" },
        { product: "Polyamide gland M63 34÷48", code: "6018-P63" },
      ],
    },
  },
];

// enclosures
export const ENCLOSURES = [
  {
    img: Electrical,
    name: "Electrical <br> Enclosures",
    to: "/products/enclosures/electrical",
  },
  {
    img: Mechanical,
    name: "Mechanical <br> Enclosures",
    to: "/products/enclosures/mechanical",
  },
  {
    img: Servers,
    name: "Servers and <br> Datacenter <br> Racks",
    to: "/products/enclosures/servers",
  },
  {
    img: Battery,
    name: "Battery <br> Cabinets <br> & Racks",
    to: "/products/enclosures/battery",
  },
  {
    img: HeavyDuty,
    name: "Heavy Duty <br> Enclosures",
    to: "/products/enclosures/heavy-duty",
  },
  {
    img: Customised,
    name: "Customised <br> Enclosures",
    to: "/products/enclosures/customised",
  },
  {
    img: JunctionBoxes,
    name: "ATEX <br> Junction <br> Boxes",
    to: "/products/enclosures/atex-junction-boxes",
  },
  {
    img: MeterBox,
    name: "Meter <br> Boxes",
    to: "/products/enclosures/meter-boxes",
  },
];

export const ATEXJUNCTIONBOXES = [
  {
    img: ExplosionProofJBOne,
    title: "Explosion proof-Junction Boxes",
    features: [
      "Explosion protection following IEC, NEC, EN, UL, CSA standards.",
      "Can be used in Zone 1,2,21,22, Class I, Division 1, Groups A, B, C, D",
      "Four types: A,B,C,D",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
    ],
  },
  {
    img: ExplosionProofJBTwo,
    title: "Explosion-proof Junction Boxes",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22 Class I, Division 1, Groups A, B, C, D",
      "Six types: A,B,C,D,E,F.",
      "Type A, B, C, D, E in Copper-free Aluminium Alloy only, Type F in Copper-free Aluminium Alloy or cast iron.",
    ],
  },
  {
    img: ExplosionProofTB,
    title: "Explosion-proof Terminal Boxes - Type 1 Stainless Steel",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 0,1,2,21,22, Class I, Division 2, Groups A, B, C, D, Stainless steel enclosure.",
    ],
  },
  {
    img: ExplosionProofTBOneGlassFibre,
    title: "Explosion-proof Terminal Boxes (glass fibre-reinforced polyester)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 0,1,2,21,22, Class I, Division 2, Groups A, B, C, D.",
      "GRP (glass fibre-reinforced polyester resin) enclosure",
    ],
  },
  {
    img: ExplosionProofTBoxes,
    title: "Terminal Boxes",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.",
      "Explosion-proof types(Ex e)",
      "Enclosure: Copper-free Aluminium Alloy(carbon steel or stainless steel is optional),powder coated surface.",
      "Size and direction of cable entries can be customized on request.",
    ],
  },
  {
    img: ExplosionProofTBoxesCopper,
    title: "Explosion-proof Terminal Boxes (Copper-free Aluminium Alloy)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.",
      "Explosion-proof types(Ex d IIC)",
      "Enclosure: Copper-free Aluminium Alloy(carbon steel or stainless steel is optional),powder coated surface.",
      "Size and direction of cable entries can be customized on request.",
    ],
  },
  {
    img: ExplosionProofTBoxesAlluminium,
    title: "EP Terminal Boxes Aluminium",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.",
      "Explosion-proof types(Ex d IIB)",
      "Enclosure: Copper-free Aluminium Alloy(carbon steel or stainless steel is optional)",
    ],
  },
  {
    img: Eight,
    title: "Explosion-proof Enclosures",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.",
      "Flameproof enclosure (Ex d IIB) in aluminium alloy, formed of low pressure casting. 13 versions (external flange)",
      "Cable entries can be drilled, and components can be installed by user on request.",
      "Safety shall be considered when installing",
    ],
  },
  {
    img: Nine,
    title: "Increased Safety Enclosure (copper-free aluminum alloy)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.",
      "Copper-free Aluminium Alloy enclosure (Ex e), 8 versions.",
      "Cable entries can be drilled and components can be installed by user on request.",
      "Safety shall be considered when installing components according to related electrical standards.",
      "Special requirements on request.",
    ],
  },
  {
    img: Ten,
    title: "Increased Safety Enclosures (Ex e)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2, Class I, Division 2, Groups A, B, C, D.",
      "Increased-safety enclosure (Ex e) in stainless steel, 8 versions.",
      "Cable entries can be drilled and components can be installed by user on request.",
      "Safety shall be considered when installing components according to related electrical standards.",
      "Special requirements on request.",
    ],
  },
  {
    img: Eleven,
    title: "Series Explosion-proof Enclosures (Ex e)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in Zone 1,2, Class I, Division 2, Groups A, B, C, D.",
      "Increased-safety enclosure (Ex e) in GRP, 12 versions.",
      "Cable entries can be drilled and components can be installed by user on request.",
      "Safety shall be considered when installing components according to related electrical standards.",
      "Special requirements on request.",
    ],
  },
];

export const VALOR = [
  {
    name: "Ceiling Light",
    description:
      "Ceiling Light is ideal for places that require ambient lighting to decorate and to light in specific areas with surface installation. It has timeless and neutral design to cover lighting needs in transit areas (staircases, corridors and halls, emergency exits, etc.), it is suitable for hotels, shopping centers and commercial places of all kinds. It can also be used at homes.",
    img: CeilingLight,
    id: "ceiling-light",
  },
  {
    name: "Sensing CL",
    description:
      "Sensing CL is ideal for places that require ambient lighting for specific areas with surface installation. Also, it includes a presence detector to improve the functionality and increase the energy saving. Sensing CL has timeless and neutral design to cover lighting needs in transit areas (staircases, corridors and halls, emergency exits, etc.), in open-plan areas or places that need extra lighting.",
    img: SensingLight,
  },
  {
    name: "SP1",
    description:
      "SP1 is ideal home lighting with 36° beam angle and different color temperature to choose. Two different lumen packages for better adaptability to your installation. This spotlight finishing is white, which integrates seamlessly into any space, without clash in no way with the decoration chosen for the place.",
    img: SP1,
    id: "spotlight",
  },
  {
    name: "T5",
    description:
      "Offers decorative or ambient lighting. Intended for use in areas such as cavities, reception areas, shelves or anywhere else to complement general lighting. Available in two different lengths that could be inter-connected.",
    img: T5,
    id: "batten",
  },
  {
    name: "T8 Double End",
    description:
      "Great choice if you are looking for replace your old fluorescent T8. With LED T8 can achieve no noise, no flickering and long-life installation. Valor LED we use a double electrical entrance with a more competitive price. Thanks to all its technical features, it can reach good energy efficiency in the lighting installations at the different spaces from the first day.",
    img: T8DoubleEnd,
    id: "tube",
  },
  {
    name: "LED Bulbs",
    description:
      "A great choice if you are looking for replace your old Bulb. With Valor LED bulb can achieve no flickering, opal diffuser and long-life installation. Different sizes and luminous packages to fit your needs. Thanks to all the technical features, it can reach good energy efficiency in the lighting installations at the different spaces from the first day.",
    img: LEDBulbs,
    id: "bulb",
  },
  {
    name: "Downlight",
    description:
      "The Downlight flush-mounted in white finishing with general optic improves the conditions of indoor lighting. For its construction we use PMMA optic which provide uniform illumination. For the lighting emission, we use direct light to maximize the efficiency. And thanks to the different sizes and shapes, round and square, it can replace any existing product in your installation.",
    img: Downlight,
    id: "downlight",
  },
];

export const DURO = [
  {
    name: "FT40",
    description:
      "The downlight has surface and recessed installation options, bring more versatility to the different spaces. With a slim profile, it can fit any ceilings. It is commonly used in office projects or in commercial spaces. Thus, as in areas of passage or lobbies that require homogeneous general lighting.",
    img: FT40,
    id: "downlight",
  },
  {
    name: "Grace",
    description:
      "The Downlight flush-mounted in ivory finishing with general optic improves the conditions of indoor lighting. For its construction we use PMMA optic with a small cut off to improve the glare control. For the lighting emission, we use direct light to maximize the efficiency. And thanks to the different sizes, it can replace any existing product in your installation.",
    img: Grace,
  },
  {
    name: "Wave",
    description:
      "The Downlight flush-mounted in ivory finishing with general optic improves the conditions of indoor lighting. For its construction we use PMMA optic. For the lighting emission, we use direct light to maximize the efficiency. And thanks to the different sizes, it can replace any existing product in your installation.",
    img: Wave,
  },
  {
    name: "KCI",
    description:
      "The scope of application is very broad; it is ideal for lighting in hotels, restaurants and residential spaces. Also, it is ideal to be used as complementary lighting in any other type of work such as education, leisure spaces, public equipment buildings or commercial spaces.",
    img: KCI,
    id: "spotlight",
  },
  {
    name: "PL",
    description:
      "Modular Luminaire can be seamlessly integrated into different suspended metal ceiling solutions. Its optical system provides uniform lighting for very large areas. And thanks to its different size and luminaire output, it adapts to the lighting needs of the space.",
    img: PL,
    id: "pl",
  },
  {
    name: "GU10",
    description:
      "A great choice if you are looking for replace your old Bulb. With GU10 can achieve no flickering, opal diffuser and long-life installation. Thanks to all the technical features, it can reach good energy efficiency in the lighting installations at the different spaces from the first day. Also, with the versatility of dimming options.",
    img: GU10,
    id: "bulb",
  },
  {
    name: "LL20",
    description:
      "A suspended or surface luminaire installed on the ceiling, providing adequate lighting for even lighting requirement. With the different finishing, it can blend in different environment.",
    img: LL20,
    id: "ll",
  },
  {
    name: "T8 Single End",
    description:
      "Great choice if you are looking for replace your old fluorescent T8. With LED T8 can achieve no noise, no flickering and long-life installation. Duro LED is ready with a single electrical entrance, high power factor (0,9) and efficiency higher than 100 lm/w. Thanks to all its technical features, it can reach good energy efficiency in the lighting installations at the different spaces from the first day.",
    img: T8SingleEnd,
    id: "t8",
  },
  {
    name: "JL Gen3 HV Strip",
    description:
      "JL Gen3 HV strip, provides ideal ambient lighting. Also allows highlighting of the shapes around it, and to apply different color effects that are attractive and ideal for many types of situations. It is perfect for corridors, open-plan areas, cabinets or display cases, shelving, etc. For better flexibility, it offers different lumen packages and color temperatures. For installation, it can connect to grid directly, no need power driver.",
    img: JLGen3HVStrip,
    id: "strip-light",
  },
  {
    name: "SS20",
    description:
      "SS20 range provides decorative or ambient lighting for areas such as hallways, reception areas, shelves or any other space to complement the general lighting. Several versions are available with different power, CCT, IP level…",
    img: SS20,
  },
  {
    name: "Mirror Light",
    description:
      "Mirror Light is designed to be placed above the mirror for LED lighting projects in washbasins, bathrooms and toilets. Duro Mirror Light has been made of aluminum and its elongated design allows a greater distribution of light. The LEDs are distributed around 360°, without dark areas on both sides, bringing uniform and clear light effect.",
    img: Mirroright,
    id: "mirror-light",
  },
];

// wiring device images
import WD1 from "../assets/images/Explosion-proof-Plug-and-Sockets-(GRP).jpg";
import WD2 from "../assets/images/Explosion-proof-Plug-and-Sockets-(Aluminium).jpg";
import WD3 from "../assets/images/Explosion-proof-Plug-Connectors.jpg";
import WD4 from "../assets/images/Explosion-proof-Movable-Distribution-Boards.jpg";
import WD5 from "../assets/images/Explosion-proof-Control-Stations.jpg";
import WD6 from "../assets/images/Explosion-proof-control-system.jpg";
import WD7 from "../assets/images/Motor-Starters.jpg";
import WD8 from "../assets/images/Explosion-proof-Motor-Starters-(Ex-d-e-IIC).jpg";
import WD9 from "../assets/images/Explosion-proof-Switches.jpg";
import WD10 from "../assets/images/Explosion-proof-Motor-Switches.jpg";
import WD11 from "../assets/images/Explosion-proof-Motor-Switches(Ex-d-IIC).jpg";

export const WIRINGDEVICES = [
  {
    img: WD1,
    name: "Explosion-proof Plug & Sockets (GRP)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D, 2P,3P,4P and 5P.",
      "Only the switch in the socket cut off can plug be pulled out, power after inserting the plug.",
    ],
  },

  {
    img: WD2,
    name: "Explosion-proof Plug & Sockets (Aluminium)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups A, B, C, D\n",
      "Four enclosure types; Four current ratings(16A,32A,63A,125A);3P, 4P or 5P.",
      "Only the switch in the socket cut off can plug be pulled out, power after inserting the plug.",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
    ],
  },

  {
    img: WD3,
    name: "Explosion-proof Plug Connectors",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 3,21,22\n" +
        "   Class I\n" +
        "   Division 2\n" +
        "   Groups A, B, C, D\n",
      " 4 enclosure types; 8 current ratings ( 10A,16A,25A,32A,63A,80A,100A,125A); 2P,3P,4P and 5P.",
      "Copper-free aluminium enclosure, anodic-oxidation treatment for surface",
    ],
  },

  {
    img: WD4,
    name: "Explosion-proof Movable Distribution Boards",
    features: [
      " Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" + "Groups A, B, C, D\n",
      "Type A(portable type) and type B(push type)for option.",
      "The enclosure of type A(portable type):Stainless steel or GRP(glass fibre-reinforced polyester resin), the Max.transformer capacity of stainless-steel product: 1600V A; the Max. transformer capacity of GRP product: 300V A",
      "Several kinds of voltage for option.",
      "Portable type is equipped with 5m cable; push type is equipped with 20m cable; also, can be customized on request.",
      "Type A with transformer function.",
    ],
  },

  {
    img: WD5,
    name: "Explosion-proof Control Stations",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups  B, C, D\n",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
      "Six types of enclosure.",
    ],
  },

  {
    img: WD6,
    name: "Explosion-proof Control Unit Systems",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 2\n" +
        "Groups A, B, C, D\n",
      "GRP (glass fibre-reinforced polyester resin) enclosure",
      "Three types of enclosure.",
      "Individual unit can be combined into larger units.",
    ],
  },

  {
    img: WD7,
    name: "Motor Starters",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups C, D\n",
      "Classified as IIB according to gas atmosphere.",
      "Different motor starters.",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
    ],
  },

  {
    img: WD8,
    name: "Explosion-proof Motor Starters (Ex d e IIC)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2\n" +
        "Class I, \n" +
        "Division 2, Groups A , B, C, D\n",
      "Classified as IIC according to gas atmosphere.",
      "Different motor starters.",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
    ],
  },

  {
    img: WD9,
    name: "Explosion-proof Switches",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups A, B, C, D\n",
      "Copper-free Aluminium Alloy enclosure, powder coated surface.",
      "Two options: -On-off switch, -Changeover switch",
    ],
  },

  {
    img: WD10,
    name: "Explosion-proof Motor Switches",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups C, D\n",
      "Classified as IIB according to gas atmosphere.",
      "Copper-free Aluminium Alloy enclosure, powder-coated surface.",
      "Built-in MCB (miniature circuit breaker), MCCB (Molded Case Circuit Breaker)",
    ],
  },

  {
    img: WD11,
    name: "Explosion-proof Motor Switches (Ex d IIC)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups A, B, C, D\n",
      "Classified as IIC according to gas atmosphere.",
      "Copper-free Aluminium Alloy enclosure, powder-coated surface.",
      "Built-in MCB (miniature circuit breaker), MCCB (moulded case circuit breaker).",
    ],
  },
];

// industrial lighting images
import INDL1 from "../assets/images/Explosion-proof-Light-Fittings-for-Fluorescent-Lamp.jpg";
import INDL2 from "../assets/images/Explosion-proof-Light-Fittings-for-Fluorescent-Lamp-(LED).jpg";
import INDL3 from "../assets/images/Explosion-proof-LED-Lightings.jpg";
import INDL4 from "../assets/images/Explosion-proof-LED-Lightings-1.jpg";
import INDL5 from "../assets/images/Explosion-proof-LED-Lightings2.jpg";
import INDL6 from "../assets/images/Explosion-proof-LED-Lightings3.jpg";
import INDL7 from "../assets/images/Explosion-proof-LED-Floodlights.jpg";
import INDL8 from "../assets/images/Explosion-proof-LED-Floodlights2.jpg";
import INDL9 from "../assets/images/Explosion-proof-LED-Floodlights3.jpg";
import INDL10 from "../assets/images/Explosion-proof-Light-Fittings.jpg";
import INDL11 from "../assets/images/Explosion-proof-Light-Fittings2.jpg";
import INDL12 from "../assets/images/Explosion-proof-Light-Fittings3.jpg";

export const INDUSTRIALLIGHTING = [
  {
    img: INDL1,
    name: "Explosion-proof Light Fittings for Fluorescent Lamp",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D",
      "Ex e enclosure with explosion-proof components inside.",
      "Safety interlock between enclosure and diffuser, switches off on opening.",
      "Bult-in electronic ballast, power factor≥0.95.",
      "Emergency unit with protections against overcharge and discharge.",
      "End of lamp life (EOL) rectification effect protection.",
    ],
  },
  {
    img: INDL2,
    name: "Explosion-proof Light Fittings for Fluorescent Lamp (LED)",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D",
      "Two enclosure types: Type I and Type II\n" +
        "    Available lamp and power\n" +
        "    Type I:20W,40WType II:60W",
      "The glass tube stands 4J impact.",
      "Enclosure in Copper-free Aluminium Alloy, powder-coated surface, yellow (RAL1021)",
      "Built-in LED driver, wide voltage input, CC-CV",
      "Built-in LED driver,wide voltage input,CC-CV (constant current-constant voltage) output,power factor ≥0.95",
      "End of lamp life (EOL) rectification effect protection.",
      "Emergency functions are available on request.",
    ],
  },
  {
    img: INDL3,
    name: "Explosion-proof LED Lightings",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D",
      "Two enclosure types: Type I and Type II\n" +
        "    Available lamp and power\n" +
        "    Type I:20W,40WType II:60W",
      "Two enclosure types:50, 100, LED : 30W, 50W, 70W, 100W",
      "Isolated LED lamp compartment, CC-CV (constant current-constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure",
      "Low-maintenance due to long service life is up to 100,000 operating hours.",
    ],
  },
  {
    img: INDL4,
    name: "Explosion-proof LED Lightings",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D",
      "Two enclosure types: Type I and Type II\n" +
        "    Available lamp and power\n" +
        "    Type I:20W,40WType II:60W",
      "Three enclosure types: 90, 160, 240",
      "Applicable lamp and power (max.240W)\n" +
        "LED: 60W, 90W, 120W, 160W, 200W, 240W\n",
      "Isolated LED lamp compartment, CC-CV (constant current - constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure.",
      "International brand white light LED, reasonable arrangement of multi LED, high lighting efficiency and long service life.",
      "Two types of light distribution: spotlight and floodlight, which can be selected on request.",
      "Low-maintenance due to long service life is up to 100,000 operating hours.",
    ],
  },
  {
    img: INDL5,
    name: "Explosion-proof LED Lightings",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D",
      "Three enclosure type: 30, 60, 120",
      "Applicable lamp and power (max.120W), LED : 30W, 60W, 120W",
      "Isolated LED lamp compartment, CC-CV (constant current -constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure",
      "Low-maintenance due to long service life is up to 100,000 operating hours.",
    ],
  },
  {
    img: INDL6,
    name: "Explosion-proof LED Lightings",
    features: [
      "Explosion protection to\n" + "IEC,NEC\n",
      "Can be used in\n" +
        "Zone 1,2,21,22\n" +
        "Class I,Zone 1,2,22\n" +
        "Division 1, Groups A, B, C, D\n",
      "Applicable lamp and power(max.20W)\n" + "LED : 10W, 20W\n",
      "Isolated LED lamp compartment, CC-CV (constant current-constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure",
      "Low-maintenance due to long service life is up to 100,000 operating hours.",
    ],
  },
  {
    img: INDL7,
    name: "Explosion-proof LED Floodlights",
    features: [
      "Explosion protection to\n" + "IEC,IEC\n",
      "Can be used in\n" +
        "Zone 1,2,21,22\n" +
        "Class I,Zone 1,2,22\n" +
        "Division 1, Groups A, B, C, D\n",
      "Three enclosure types:90, 160, 240",
      "Applicable lamps and power (max.240W)LED: 60W, 90W, 120W, 160W, 200W, 240W",
      "Isolated LED lamp compartment, CC-CV (constant current-constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure",
      "Standard product is of floodlight effect, the lens of 60°and 90° can be provided on request to realize spotlight effect",
      "Low-maintenance due to long service life is up to 100,000 operating hours.",
    ],
  },
  {
    img: INDL8,
    name: "Explosion-proof LED Floodlights",
    features: [
      "Explosion protection to\n" + "IEC,IEC\n",
      "Can be used in\n" +
        "Zone 1,2,21,22\n" +
        "Class I,Zone 1,2,22\n" +
        "Division 1, Groups A, B, C, D\n",
      "Three enclosure types:90, 160, 240",
      "Applicable lamp and power (max.240W)",
      "LED: 80W, 160W,240W",
      "Isolated LED lamp compartment and terminal compartment; Wind-convection heat dissipation structure.",
    ],
  },
  {
    img: INDL9,
    name: "Explosion-proof LED Floodlights",
    features: [
      "Explosion protection to\n" + "IEC,IEC\n",
      "Explosion Protection to \n" + "EN, IEC\n",
      "Can be used in\n" +
        "Zone 2,22\n" +
        "Class I, Zone 2\n" +
        "Division 2,Groups A, B, C, D\n",
      "Applicable lamp and power (max.300W).\n" +
        "LED: 80W, 120W, 240W, 300W\n",
      "International brand white light LED, reasonable arrangement of multi LED, high lighting efficiency and long service life.",
      "Two types of light distribution: spotlight and floodlight, which can be selected on request.",
      "Standard luminaries equip without lens, 30° lens and 60° lens which are optional, please indicate when placing an order.",
      "Low-maintenance due to long service life is up to 100,000 operating hours.",
    ],
  },
  {
    img: INDL10,
    name: "Explosion-proof Light Fittings",
    features: [
      "Explosion protection to\n" + "IEC,IEC\n",
      "Zone 2,21,22\n" +
        "\n" +
        "Class I\n" +
        "Division 2\n" +
        "Groups A, B, C, D\n",
      "Available lamp(max.400W):\n" +
        "-Metal halide lamp (HIE)\n" +
        "-High pressure sodium lamp(HSE)\n" +
        "-High pressure mercury lamp(HME)\n",
      "Three enclosure types:150,250,400.",
      "Integral control gear, easy installation and maintenance",
      "Both American standard and European standard are available",
    ],
  },
  {
    img: INDL11,
    name: "Explosion-proof Light Fittings",
    features: [
      "Can be used in\n" +
        "\n" +
        "Zone 1,2,21,22\n" +
        "\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups A, B, C, D\n",
      "Applicable lamp(max.400W):\n" +
        "\n" +
        "  -Metal halide lamp (HIE)\n" +
        "\n" +
        "  -High pressure sodium lamp(HSE)\n" +
        "\n" +
        "  -High pressure mercury lamp(HME)\n",
      "Three enclosure types:150,250,400.",
      "Integral control gear, easy installation and maintenance",
    ],
  },
  {
    img: INDL12,
    name: "Explosion-proof Lightings",
    features: [
      "Explosion protection following EN, IEC standards.",
      "Can be used in\n" +
        "\n" +
        "Zone 1,2,21,22\n" +
        "Class I\n" +
        "Division 1\n" +
        "Groups A, B, C, D\n",
      "Available lamp and power:\n" +
        "Incandescent lamp: 25W, 40W, 60W, 100W\n" +
        "Energy-saving lamp: 9W, 11W\n" +
        "LED lamp: 3W, 5W, 8W\n",
      "Enclosure in Copper-free Aluminium Alloy, powder coated surface, yellow (RAL1021).",
      "The light fittings are supplied without lamp. PHILIPS lamps are recommended",
    ],
  },
];
