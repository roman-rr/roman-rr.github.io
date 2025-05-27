# Roman Antonov Portfolio

A personal portfolio website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/roman-rr/roman-rr.github.io.git
cd roman-rr.github.io
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

#### Logos
```bash
for img in *.png *.avif; do
  [ -e "$img" ] || continue  # skip if no matching file
  filename="${img%.*}"
  magick "$img" "../logos/${filename}.avif"
done
```