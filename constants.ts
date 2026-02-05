import { Clock, MapPin, Calendar, Heart } from 'lucide-react';

export const EVENT_DETAILS = {
  name: "INFINIMENT ROSE",
  date: "10 Octobre 2026",
  isoDate: "2026-10-10T16:00:00", // Date et heure de départ (16h00)
  location: "Agence LaFORÊT, Saint-Avertin (37)",
  address: "35 rue du Général Mocquery, 37550 Saint-Avertin",
  price: 20,
  maxParticipants: 200,
  loopDistance: "6,7 km",
  loopTime: "1 heure",
  cause: "Octobre Rose",
  organizer: "Saint-Avertin Run Club"
};

export const NAV_LINKS = [
  { name: "Le Concept", href: "#concept" },
  { name: "La Cause", href: "#cause" },
  { name: "Infos", href: "#infos" },
  { name: "S'inscrire", href: "#inscription", highlight: true },
];

export const FEATURES = [
  {
    icon: Clock,
    title: "1 Boucle / Heure",
    description: "6,7 km à parcourir en moins de 60 minutes. Un nouveau départ est donné à chaque heure pile."
  },
  {
    icon: Heart,
    title: "100% Solidaire",
    description: "L'intégralité des bénéfices est reversée à la lutte contre le cancer du sein via Octobre Rose."
  },
  {
    icon: MapPin,
    title: "Parcours Nature",
    description: "Un tracé mixte route et chemin au départ de Saint-Avertin, accessible mais exigeant sur la durée."
  }
];