export type Service = {
  id: string;
  title: string;
  category: "Plumbing" | "Cleaning" | "Repairs" | "Electrician" | "Auto";
  location: "Calabarzon" | "Manila";
  priceFrom: number;
  rating: number;
  reviews: number;
  verified: boolean; // "KI-RO Certified"
  malasakit: string; // highlight
};

export const services: Service[] = [
  {
    id: "svc_1",
    title: "Emergency Plumbing Fix",
    category: "Plumbing",
    location: "Calabarzon",
    priceFrom: 900,
    rating: 4.9,
    reviews: 312,
    verified: true,
    malasakit: "Quick response, explains repairs clearly.",
  },
  {
    id: "svc_2",
    title: "Deep Home Cleaning",
    category: "Cleaning",
    location: "Calabarzon",
    priceFrom: 1200,
    rating: 4.8,
    reviews: 201,
    verified: true,
    malasakit: "Very respectful and careful with belongings.",
  },
  {
    id: "svc_3",
    title: "AC & Small Repairs",
    category: "Repairs",
    location: "Manila",
    priceFrom: 700,
    rating: 4.6,
    reviews: 98,
    verified: false,
    malasakit: "Friendly service, transparent pricing.",
  },
];
