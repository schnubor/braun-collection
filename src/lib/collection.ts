export type Category = "audio" | "radio" | "shaver" | "kitchen" | "calculator" | "lighter" | "projector" | "camera" | "haircare" | "clock" | "charger";

export interface DeviceSpec {
  label: string;
  value: string;
}

export interface Device {
  id: string;
  name: string;
  model: string;
  year: number;
  category: Category;
  designer: string;
  acquired: string; // ISO date string
  acquiredFrom: string;
  condition: "mint" | "excellent" | "good" | "fair";
  description: string;
  specs: DeviceSpec[];
  images: string[]; // placeholder paths
  featured?: boolean;
}

export const collection: Device[] = [
  {
    id: "audio-300",
    name: "Audio 300",
    model: "Audio 300",
    year: 1962,
    category: "audio",
    designer: "Dieter Rams",
    acquired: "2021-03-15",
    acquiredFrom: "eBay Germany",
    condition: "excellent",
    description:
      "The Braun Audio 300 is a compact hi-fi system that epitomises Rams' vision of 'less, but better'. Its clear, uncluttered face presents only what is necessary — no decoration, no excess. The system integrates a record player, radio tuner, and amplifier into a single unified form.",
    specs: [
      { label: "Type", value: "Integrated Hi-Fi System" },
      { label: "Year", value: "1962" },
      { label: "Output", value: "2 × 6 W" },
      { label: "FM Range", value: "87.5 – 108 MHz" },
      { label: "Dimensions", value: "540 × 310 × 200 mm" },
      { label: "Weight", value: "12.5 kg" },
      { label: "Finish", value: "Anodised aluminium, black lacquer" },
    ],
    images: ["/images/audio-300/01.jpg", "/images/audio-300/02.jpg"],
    featured: true,
  },
  {
    id: "t1000cd",
    name: "T 1000 CD",
    model: "T 1000 CD",
    year: 1968,
    category: "radio",
    designer: "Dieter Rams",
    acquired: "2020-08-22",
    acquiredFrom: "Berliner Antiquariat",
    condition: "good",
    description:
      "The T 1000 CD is one of the most sophisticated portable shortwave receivers ever produced. Spanning frequencies from long wave to shortwave, it was designed for world travellers and broadcast professionals. Its systematic dial layout — a masterpiece of information design — became a reference point for generations of designers.",
    specs: [
      { label: "Type", value: "World Receiver" },
      { label: "Year", value: "1968" },
      { label: "Bands", value: "LW, MW, FM, SW1–SW8" },
      { label: "Power", value: "Battery / Mains" },
      { label: "Dimensions", value: "330 × 215 × 90 mm" },
      { label: "Weight", value: "3.2 kg" },
      { label: "Finish", value: "Textured black plastic, chrome trim" },
    ],
    images: ["/images/t1000cd/01.jpg", "/images/t1000cd/02.jpg"],
    featured: true,
  },
  {
    id: "f1-mactron",
    name: "F 1 Mactron",
    model: "F 1",
    year: 1971,
    category: "lighter",
    designer: "Dieter Rams",
    acquired: "2022-11-04",
    acquiredFrom: "Flea market, Vienna",
    condition: "mint",
    description:
      "The Braun Mactron F 1 lighter is a perfect study in the reduction of form to its purest function. A single aluminium body, one ignition switch, one fuel window. Nothing more. The tactile quality of the brushed metal finish and the precise click of the mechanism make it one of the most satisfying objects Rams ever designed.",
    specs: [
      { label: "Type", value: "Piezo Gas Lighter" },
      { label: "Year", value: "1971" },
      { label: "Material", value: "Brushed aluminium" },
      { label: "Ignition", value: "Piezoelectric" },
      { label: "Dimensions", value: "73 × 28 × 14 mm" },
      { label: "Weight", value: "68 g" },
      { label: "Finish", value: "Brushed aluminium" },
    ],
    images: ["/images/f1-mactron/01.jpg", "/images/f1-mactron/02.jpg"],
    featured: true,
  },
  {
    id: "nizo-s560",
    name: "Nizo S560",
    model: "S560",
    year: 1973,
    category: "camera",
    designer: "Dieter Rams",
    acquired: "2023-05-18",
    acquiredFrom: "eBay Germany",
    condition: "excellent",
    description:
      "The Nizo S560 is a Super 8 film camera produced by Nizo, a Braun subsidiary. Its body follows the same formal rigour found across the Braun range — a compact, black-anodised aluminium shell with precisely placed controls. The reflex viewfinder and 1.4 aperture lens deliver exceptional image quality for the format.",
    specs: [
      { label: "Type", value: "Super 8 Film Camera" },
      { label: "Year", value: "1973" },
      { label: "Lens", value: "7–56 mm f/1.4 Variogon" },
      { label: "Zoom", value: "8× optical" },
      { label: "Film", value: "Super 8 cartridge" },
      { label: "Dimensions", value: "165 × 110 × 65 mm" },
      { label: "Weight", value: "710 g" },
      { label: "Finish", value: "Black anodised aluminium" },
    ],
    images: ["/images/nizo-s560/01.jpg", "/images/nizo-s560/02.jpg"],
  },
  {
    id: "hl70",
    name: "HL 70",
    model: "HL 70",
    year: 1970,
    category: "haircare",
    designer: "Dieter Rams",
    acquired: "2022-04-09",
    acquiredFrom: "Vintage market, Hamburg",
    condition: "good",
    description:
      "The Braun HL 70 hair dryer is a landmark in domestic product design. Where competitors offered decorative shells, Rams proposed a tool — a pure cylinder of white ABS with a single speed switch. Its form follows airflow and function with an honesty that remains striking more than fifty years on.",
    specs: [
      { label: "Type", value: "Hair Dryer" },
      { label: "Year", value: "1970" },
      { label: "Power", value: "600 W" },
      { label: "Voltage", value: "220 V" },
      { label: "Material", value: "ABS plastic" },
      { label: "Dimensions", value: "280 × 80 × 80 mm" },
      { label: "Finish", value: "White ABS, chrome ring" },
    ],
    images: ["/images/hl70/01.jpg", "/images/hl70/02.jpg"],
  },
  {
    id: "domino",
    name: "Domino",
    model: "Domino",
    year: 1965,
    category: "lighter",
    designer: "Dieter Rams",
    acquired: "2023-09-30",
    acquiredFrom: "Private seller, Munich",
    condition: "mint",
    description:
      "The Braun Domino is a table lighter of exceptional restraint. Its rectangular form — a pure white or black lacquered block — sits flush on any surface, becoming as much a sculptural object as a functional one. The ignition mechanism is hidden flush within the top face, revealing itself only to the touch.",
    specs: [
      { label: "Type", value: "Table Lighter" },
      { label: "Year", value: "1965" },
      { label: "Material", value: "Lacquered ABS plastic" },
      { label: "Ignition", value: "Piezoelectric" },
      { label: "Dimensions", value: "68 × 38 × 38 mm" },
      { label: "Weight", value: "95 g" },
      { label: "Finish", value: "White lacquer" },
    ],
    images: ["/images/domino/01.jpg", "/images/domino/02.jpg"],
  },
  {
    id: "mach2",
    name: "Mach 2",
    model: "Mach 2",
    year: 1971,
    category: "lighter",
    designer: "Dieter Rams",
    acquired: "2021-11-12",
    acquiredFrom: "Flohmarkt Berlin",
    condition: "excellent",
    description:
      "The Braun Mach 2 is a pocket gas lighter of sculptural economy. Where the F 1 is a flat, pocket-worn object, the Mach 2 stands upright — a slim rectangular column of brushed aluminium with a single ignition lever flush to the body. In the hand it disappears; on a table it becomes a small monument to precision.",
    specs: [
      { label: "Type", value: "Pocket Gas Lighter" },
      { label: "Year", value: "1971" },
      { label: "Material", value: "Brushed aluminium" },
      { label: "Ignition", value: "Piezoelectric" },
      { label: "Dimensions", value: "68 × 22 × 10 mm" },
      { label: "Weight", value: "42 g" },
      { label: "Finish", value: "Brushed aluminium" },
    ],
    images: ["/images/mach2/01.jpg", "/images/mach2/02.jpg"],
  },
  {
    id: "sixtant-sm31",
    name: "Sixtant SM 31",
    model: "SM 31",
    year: 1962,
    category: "shaver",
    designer: "Hans Gugelot & Gerd Alfred Müller",
    acquired: "2020-02-14",
    acquiredFrom: "eBay Germany",
    condition: "good",
    description:
      "The Braun Sixtant SM 31 is one of the most iconic electric shavers ever made — a design so resolved that it remained in production for decades with barely a revision. Its chrome-plated body and black foil head became the archetype for the modern foil shaver, and a touchstone of post-war German industrial design.",
    specs: [
      { label: "Type", value: "Electric Foil Shaver" },
      { label: "Year", value: "1962" },
      { label: "Head Type", value: "Oscillating foil" },
      { label: "Power", value: "Mains" },
      { label: "Voltage", value: "110 – 220 V" },
      { label: "Dimensions", value: "140 × 48 × 32 mm" },
      { label: "Finish", value: "Chrome-plated steel, black ABS" },
    ],
    images: ["/images/sixtant-sm31/01.jpg", "/images/sixtant-sm31/02.jpg"],
  },
  {
    id: "l02",
    name: "L 02",
    model: "L 02",
    year: 1958,
    category: "audio",
    designer: "Dieter Rams",
    acquired: "2022-07-03",
    acquiredFrom: "Antique dealer, Frankfurt",
    condition: "excellent",
    description:
      "The Braun L 02 speaker is one of Dieter Rams' earliest and most celebrated designs — a wall-mounted loudspeaker of radical simplicity. A stretched fabric face, an aluminium frame, and a single mounting point. It strips the speaker back to its acoustic essence, treating the wall itself as part of the composition.",
    specs: [
      { label: "Type", value: "Wall-mounted Loudspeaker" },
      { label: "Year", value: "1958" },
      { label: "Impedance", value: "8 Ω" },
      { label: "Power", value: "10 W (max)" },
      { label: "Dimensions", value: "450 × 260 × 85 mm" },
      { label: "Material", value: "Aluminium frame, acoustic fabric" },
      { label: "Finish", value: "Anodised aluminium, grey fabric" },
    ],
    images: ["/images/l02/01.jpg", "/images/l02/02.jpg"],
    featured: true,
  },
  {
    id: "l420",
    name: "L 420",
    model: "L 420",
    year: 1972,
    category: "audio",
    designer: "Dieter Rams",
    acquired: "2023-01-21",
    acquiredFrom: "Private seller, Düsseldorf",
    condition: "excellent",
    description:
      "The Braun L 420 is a freestanding column loudspeaker that brings the same formal discipline of Rams' earlier audio work into a vertical format. Its proportions are precisely calibrated — neither furniture nor appliance, but something between the two. The speaker sits on its own shadow, the cabinet appearing to float just above the floor.",
    specs: [
      { label: "Type", value: "Floorstanding Loudspeaker" },
      { label: "Year", value: "1972" },
      { label: "Configuration", value: "2-way bass reflex" },
      { label: "Impedance", value: "8 Ω" },
      { label: "Power", value: "40 W (max)" },
      { label: "Dimensions", value: "960 × 240 × 280 mm" },
      { label: "Finish", value: "White lacquer, grey acoustic fabric" },
    ],
    images: ["/images/l420/01.jpg", "/images/l420/02.jpg"],
  },
  {
    id: "fp30",
    name: "FP 30",
    model: "FP 30",
    year: 1973,
    category: "projector",
    designer: "Dieter Rams",
    acquired: "2024-03-08",
    acquiredFrom: "Flea market, Cologne",
    condition: "good",
    description:
      "The Braun FP 30 is a Super 8 film projector of characteristic restraint. Its compact black housing conceals a precise optical system behind a face reduced to the absolute essentials — a lens, a slot, a single control. The FP 30 treats projection as a quiet, domestic act, the machine receding so that the image may speak.",
    specs: [
      { label: "Type", value: "Super 8 Film Projector" },
      { label: "Year", value: "1973" },
      { label: "Film Format", value: "Super 8 / Standard 8" },
      { label: "Lamp", value: "150 W halogen" },
      { label: "Lens", value: "f/1.3 zoom" },
      { label: "Dimensions", value: "310 × 190 × 140 mm" },
      { label: "Finish", value: "Black ABS plastic" },
    ],
    images: ["/images/fp30/01.jpg", "/images/fp30/02.jpg"],
  },
  {
    id: "phase2",
    name: "Phase 2",
    model: "Phase 2",
    year: 1971,
    category: "clock",
    designer: "Dietrich Lubs",
    acquired: "2021-06-17",
    acquiredFrom: "eBay Germany",
    condition: "mint",
    description:
      "The Braun Phase 2 quartz wall clock distils timekeeping to its bare minimum. A thin white disc, a pair of hands, and nothing more. Designed by Dietrich Lubs — who worked closely with Rams — it embodies the same principles: honest materials, considered proportions, and a complete absence of decoration. Time, made visible.",
    specs: [
      { label: "Type", value: "Quartz Wall Clock" },
      { label: "Year", value: "1971" },
      { label: "Movement", value: "Quartz" },
      { label: "Diameter", value: "280 mm" },
      { label: "Depth", value: "42 mm" },
      { label: "Power", value: "1 × AA battery" },
      { label: "Finish", value: "White ABS, black hands" },
    ],
    images: ["/images/phase2/01.jpg", "/images/phase2/02.jpg"],
  },
  {
    id: "ukw1",
    name: "UKW 1",
    model: "UKW 1",
    year: 1955,
    category: "kitchen",
    designer: "Dieter Rams",
    acquired: "2023-11-05",
    acquiredFrom: "Antique dealer, Vienna",
    condition: "fair",
    description:
      "The Braun UKW 1 kitchen scale is among the earliest domestic objects to bear the hallmarks of Rams' emerging design language — a clean white body, a clearly legible dial face, and not a single unnecessary element. It applies the same rigour to the kitchen worktop that Rams would bring to hi-fi and shavers throughout the following decade.",
    specs: [
      { label: "Type", value: "Kitchen Scale" },
      { label: "Year", value: "1955" },
      { label: "Capacity", value: "5 kg" },
      { label: "Graduation", value: "20 g" },
      { label: "Mechanism", value: "Mechanical spring" },
      { label: "Dimensions", value: "220 × 200 × 120 mm" },
      { label: "Finish", value: "White lacquered steel" },
    ],
    images: ["/images/ukw1/01.jpg", "/images/ukw1/02.jpg"],
    featured: true,
  },
  {
    id: "abk30",
    name: "ABK 30",
    model: "ABK 30",
    year: 1987,
    category: "clock",
    designer: "Dietrich Lubs",
    acquired: "2022-09-14",
    acquiredFrom: "eBay Germany",
    condition: "excellent",
    description:
      "The Braun ABK 30 is a travel alarm clock of perfect economy. A hinged white case opens to reveal a clean dial and a single set button — everything needed, nothing more. Closed, it becomes an opaque white lozenge, as resolved in form as any object in the Braun range. Dietrich Lubs distilled the alarm clock to its irreducible minimum.",
    specs: [
      { label: "Type", value: "Travel Alarm Clock" },
      { label: "Year", value: "1987" },
      { label: "Movement", value: "Quartz" },
      { label: "Alarm", value: "Buzzer" },
      { label: "Power", value: "1 × AAA battery" },
      { label: "Dimensions", value: "75 × 65 × 18 mm (open)" },
      { label: "Finish", value: "White ABS plastic" },
    ],
    images: ["/images/abk30/01.jpg", "/images/abk30/02.jpg"],
  },
  {
    id: "ab1",
    name: "AB 1",
    model: "AB 1",
    year: 1987,
    category: "clock",
    designer: "Dietrich Lubs",
    acquired: "2024-01-19",
    acquiredFrom: "Private seller, Berlin",
    condition: "mint",
    description:
      "The Braun AB 1 is perhaps the most distilled alarm clock ever made. A white cylinder, a single button on top, a clear dial — nothing more. Dietrich Lubs arrived at a form so fundamental that it has remained in continuous production, largely unchanged, for nearly four decades. It sits on any surface as if it could not be otherwise.",
    specs: [
      { label: "Type", value: "Alarm Clock" },
      { label: "Year", value: "1987" },
      { label: "Movement", value: "Quartz" },
      { label: "Alarm", value: "Buzzer with snooze" },
      { label: "Power", value: "1 × AA battery" },
      { label: "Diameter", value: "100 mm" },
      { label: "Depth", value: "55 mm" },
      { label: "Finish", value: "White ABS plastic" },
    ],
    images: ["/images/ab1/01.jpg", "/images/ab1/02.jpg"],
    featured: true,
  },
  {
    id: "bwc02m",
    name: "BWC02M",
    model: "BWC02M",
    year: 2023,
    category: "charger",
    designer: "Braun Design Team",
    acquired: "2024-06-02",
    acquiredFrom: "Braun online store",
    condition: "mint",
    description:
      "The Braun BWC02M wireless charger applies the studio's long-standing formal discipline to a contemporary object. A flat white disc, a single indicator light, nothing more. It charges any Qi-compatible device and asks for nothing in return — no cable management theatre, no status display, no unnecessary surface. The quietest object on any desk.",
    specs: [
      { label: "Type", value: "Wireless Charger" },
      { label: "Year", value: "2023" },
      { label: "Standard", value: "Qi" },
      { label: "Output", value: "15 W (max)" },
      { label: "Input", value: "USB-C" },
      { label: "Diameter", value: "100 mm" },
      { label: "Finish", value: "White ABS plastic" },
    ],
    images: ["/images/bwc02m/01.jpg", "/images/bwc02m/02.jpg"],
  },
  {
    id: "xt3",
    name: "XT3",
    model: "XT3",
    year: 2022,
    category: "shaver",
    designer: "Braun Design Team",
    acquired: "2024-09-11",
    acquiredFrom: "Braun online store",
    condition: "mint",
    description:
      "The Braun XT3 is a dry-use electric trimmer that marks a departure from the studio's traditional restraint in colour. Its body is cast in a vivid signal yellow — a single, unbroken volume. The form remains true to Braun principles: no decoration, no texture for its own sake, just the shape dictated by grip and function. The yellow is not accent; it is the object.",
    specs: [
      { label: "Type", value: "Electric Trimmer" },
      { label: "Year", value: "2022" },
      { label: "Head Type", value: "Xtprecision blade" },
      { label: "Power", value: "Rechargeable Li-Ion" },
      { label: "Runtime", value: "50 min" },
      { label: "Charge Time", value: "1 hour" },
      { label: "Finish", value: "Signal yellow ABS" },
    ],
    images: ["/images/xt3/01.jpg", "/images/xt3/02.jpg"],
  },
  {
    id: "m1010",
    name: "M 1010",
    model: "M 1010",
    year: 1963,
    category: "shaver",
    designer: "Gerd Alfred Müller",
    acquired: "2023-07-22",
    acquiredFrom: "Flohmarkt Berlin",
    condition: "good",
    description:
      "The Braun M 1010 is a battery-powered dry shaver of striking compactness. Designed by Gerd Alfred Müller, its slim rectangular body fits the palm with the certainty of something inevitable. The white ABS casing, the black foil head, the single on/off switch — each element is present because it must be, and for no other reason.",
    specs: [
      { label: "Type", value: "Battery Electric Shaver" },
      { label: "Year", value: "1963" },
      { label: "Head Type", value: "Oscillating foil" },
      { label: "Power", value: "2 × AA batteries" },
      { label: "Dimensions", value: "125 × 42 × 28 mm" },
      { label: "Weight", value: "145 g" },
      { label: "Finish", value: "White ABS, black foil head" },
    ],
    images: ["/images/m1010/01.jpg", "/images/m1010/02.jpg"],
  },
];

export function getDevice(id: string): Device | undefined {
  return collection.find((d) => d.id === id);
}

export function conditionLabel(condition: Device["condition"]): string {
  const map = {
    mint: "Mint",
    excellent: "Excellent",
    good: "Good",
    fair: "Fair",
  };
  return map[condition];
}

export function formatAcquired(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
