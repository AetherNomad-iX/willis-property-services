import type { LucideIcon } from "lucide-react";
import {
  BrickWall,
  Paintbrush,
  Droplets,
  Layers,
  Grid2x2,
  Landmark,
  Armchair,
  DoorOpen,
  Refrigerator,
  Trash2,
  Wrench,
  Building2,
  Home,
  ClipboardList,
} from "lucide-react";

export const SITE = {
  name: "Willis Property Services",
  shortName: "WPS",
  owner: "Hyrum Kaleb Willis",
  tagline: "Handyman | Labor | Property Support",
  kicker: "Jacksonville, Florida",
  headline: "Let's get your project done.",
  lede: "Dependable handyman, labor, and property support for apartment communities, property managers, and local residents — from the first call through the finished job.",
  phone: "9043124930",
  phoneDisplay: "(904) 312-4930",
  phoneHref: "tel:+19043124930",
  smsHref: "sms:+19043124930",
  email: "Kaleb@WillisPropertyServices.com",
  emailHref: "mailto:Kaleb@WillisPropertyServices.com",
  city: "Jacksonville, Florida",
  area: "Throughout Jacksonville",
} as const;

export const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  icon: LucideIcon;
  image?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "drywall",
    title: "Drywall repairs",
    summary: "Patches, seams, texture match, and a clean finish ready for paint.",
    details:
      "From nail pops and water stains to larger holes, we repair drywall so the wall looks like the damage was never there. Smooth, paint-ready finishes for units, common areas, and homes.",
    icon: BrickWall,
    image: "/images/drywall.jpg",
  },
  {
    slug: "painting",
    title: "Painting",
    summary: "Interior walls, trim, and unit turn-ready paint with clean lines.",
    details:
      "Crisp cuts, even coverage, and respectful prep. We paint interiors for make-readies, punch lists, and homeowners who want a room done right without the weekend project.",
    icon: Paintbrush,
    image: "/images/interior-paint.jpg",
  },
  {
    slug: "caulking",
    title: "Caulking",
    summary: "Clean beads around tubs, windows, trim, and wet areas.",
    details:
      "Failed caulk is how moisture gets behind tile and trim. We cut out the old material and recaulk wet areas, windows, and base so the finish is tight and clean.",
    icon: Droplets,
  },
  {
    slug: "flooring",
    title: "Flooring",
    summary: "Repairs and install help for common residential floor systems.",
    details:
      "We help with flooring repairs and installation support in occupied homes and apartment turnovers — keeping transitions clean and rooms usable as quickly as possible.",
    icon: Layers,
  },
  {
    slug: "tile",
    title: "Tile",
    summary: "Tile repair, replacement, and clean grout lines that last.",
    details:
      "Loose, cracked, or missing tile in baths, kitchens, and entries. We cut in replacements, reset lippage, and leave grout lines straight so the surface looks finished — not patched.",
    icon: Grid2x2,
    image: "/images/tile-work.jpg",
  },
  {
    slug: "concrete",
    title: "Concrete pouring & repair",
    summary: "Pads, walkways, and patch work with clean edges and joints.",
    details:
      "Small pours, patches, and repairs for walkways, pads, and steps. Formed edges, proper joints, and a finish that belongs next to the rest of the property.",
    icon: Landmark,
    image: "/images/concrete.jpg",
  },
  {
    slug: "furniture",
    title: "Furniture assembly",
    summary: "Beds, desks, storage, and common-area pieces put together right.",
    details:
      "New furniture for units, offices, and homes — assembled square, hardware accounted for, and placed where it belongs. Faster than a Saturday with a missing Allen key.",
    icon: Armchair,
  },
  {
    slug: "doors",
    title: "Door repairs",
    summary: "Doors that stick, sag, won't latch, or need hardware replaced.",
    details:
      "We plane, rehang, replace hardware, and adjust strikes so doors close quietly and lock the way they should — a small thing that makes a unit feel maintained.",
    icon: DoorOpen,
    image: "/images/door-repair.jpg",
  },
  {
    slug: "appliances",
    title: "Appliance placement",
    summary: "Moving and setting ranges, fridges, and laundry in tight spaces.",
    details:
      "Careful appliance placement and swap-outs in kitchens and laundry rooms. We protect floors, fit the opening, and leave the space ready to use.",
    icon: Refrigerator,
  },
  {
    slug: "cleanouts",
    title: "Property cleanouts",
    summary: "Clearing units and spaces so the next job — or the next resident — can start.",
    details:
      "Debris, left-behind belongings, and turnover cleanouts for apartment communities and homeowners. We haul it out so you can paint, repair, or rent.",
    icon: Trash2,
    image: "/images/apartments.jpg",
  },
  {
    slug: "maintenance",
    title: "Property maintenance",
    summary: "The punch-list work that keeps a building looking looked-after.",
    details:
      "General property maintenance and related labor across Jacksonville. If it is on the list and it is honest work, we will tell you plainly whether we can take it.",
    icon: Wrench,
    image: "/images/home-exterior.jpg",
  },
];

export const AUDIENCES = [
  {
    title: "Local residents",
    copy: "The repair you have been putting off, handled by someone who lives here too. Fair pricing, clear communication, and work you do not have to redo.",
    icon: Home,
  },
  {
    title: "Apartment communities",
    copy: "Make-readies, punch lists, and the in-between work that keeps occupancy moving. One call, a crew that shows, and a unit that is rent-ready.",
    icon: Building2,
  },
  {
    title: "Property managers",
    copy: "A dependable labor partner for the tickets that stack up. Fast response from the first request through completion — so you can close the work order.",
    icon: ClipboardList,
  },
];

export const PROMISES = [
  {
    title: "Dependable work",
    copy: "We show up, we do what we said, and we leave the space cleaner than we found it.",
  },
  {
    title: "Competitive pricing",
    copy: "Honest numbers for Jacksonville work. No theater, no surprise add-ons after the fact.",
  },
  {
    title: "Fast communication",
    copy: "Call or text and you reach Kaleb. From the first request through the last walkthrough.",
  },
];

export const ABOUT = {
  greeting: "Hey y'all — I'm Kaleb.",
  intro:
    "My name is Hyrum Kaleb Willis, and I'm the owner of Willis Property Services. I was born and raised right here in Jacksonville, Florida, and I've lived here all my life.",
  faith:
    "I'm a devoted follower of Jesus Christ, and I'm a patriot of this great country we call home.",
  why: "I started this company because I'm passionate about serving my fellow Americans and Jacksonville residents. I believe we all have a story — trials we've overcome, goals we're working towards, and accomplishments we're proud of.",
  goal: "My goal as a business owner is to keep growing this company so I can serve as many hard-working Americans as possible: saving them money, giving them peace of mind, and allowing them to get back to what's most important in their life.",
  close: "Let's get your project done.",
};

export const GALLERY = [
  {
    src: "/images/home-exterior.jpg",
    alt: "Well-kept Jacksonville home with fresh exterior finish and tidy landscaping",
    caption: "Homes that look looked-after",
  },
  {
    src: "/images/interior-paint.jpg",
    alt: "Freshly painted living room with clean walls and natural Florida light",
    caption: "Paint that sits flat",
  },
  {
    src: "/images/tile-work.jpg",
    alt: "Professional bathroom tile with straight grout lines",
    caption: "Tile with honest lines",
  },
  {
    src: "/images/door-repair.jpg",
    alt: "Interior door with clean trim and new hardware",
    caption: "Doors that close right",
  },
  {
    src: "/images/concrete.jpg",
    alt: "Freshly finished concrete patio with clean control joints",
    caption: "Concrete, formed and finished",
  },
  {
    src: "/images/apartments.jpg",
    alt: "Landscaped Florida apartment community exterior",
    caption: "Communities, unit by unit",
  },
];
