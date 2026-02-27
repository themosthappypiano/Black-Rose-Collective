## Packages
clsx | Class name merging for custom brutalist components
tailwind-merge | Class name merging for custom brutalist components
react-hook-form | Form state management
@hookform/resolvers | Zod validation integration
framer-motion | Animation and transitions
wouter | Lightweight React router
lucide-react | Icon library

## Notes
Tailwind config assumptions:
The application uses raw, brutalist aesthetics with custom fonts.
We inject `--font-display` and `--font-sans` into the CSS.
Images are sourced from Unsplash to fit the skate/tattoo aesthetic.

## Features Implemented
- Hero section with rotating background videos (single wide + dual portrait layout)
- Google Reviews integration with star ratings
- Featured work gallery with hover effects
- Location section with embedded Google Maps
- Responsive design with mobile-first approach
- Brutal design aesthetic with custom components
- Contact information and hours display

## Video Hero Layout
The hero section displays videos in two modes:
1. Single wide video (vid1) taking full screen
2. Two portrait videos side by side with spacing (vid2/vid3 and vid4/vid2)
Rotation occurs every 5 seconds with smooth fade transitions.
