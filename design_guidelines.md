# Design Guidelines: Ashnoor Singh AI Portfolio

## Design Approach
**Reference-Based with AI Aesthetic Enhancement**
Drawing inspiration from modern AI/tech portfolios with cutting-edge visual treatments. This design emphasizes innovation, technical sophistication, and future-forward thinking through visual language.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background Primary: 15 8% 8% (Deep charcoal)
- Background Secondary: 220 13% 12% (Slightly lighter panels)
- Background Accent: 220 13% 18% (Elevated surfaces, glassmorphism base)

**Brand Colors**
- Electric Blue: 195 100% 50% (Primary accent, glows, highlights)
- Neon Purple: 270 70% 65% (Secondary accent, gradients)
- Cyan Glow: 180 100% 45% (Particle effects, borders)

**Text Colors**
- Primary Text: 0 0% 98% (High contrast white)
- Secondary Text: 220 10% 70% (Muted gray for descriptions)
- Accent Text: 195 100% 60% (Links, highlights)

**Gradients**
- Primary Gradient: from-blue-500 via-purple-600 to-blue-600
- Hero Overlay: from-blue-500/20 via-purple-500/10 to-transparent
- Glassmorphism: bg-slate-800/30 backdrop-blur-xl with border-blue-500/20

### B. Typography

**Font Family**
- Primary: 'Poppins' (Headings, Navigation, CTAs)
- Secondary: 'Inter' (Body text, descriptions)
- Monospace: 'JetBrains Mono' (Code snippets, technical details)

**Type Scale**
- Hero Headline: text-6xl lg:text-7xl font-bold (3.75-4.5rem)
- Section Headers: text-4xl lg:text-5xl font-semibold (2.25-3rem)
- Subsection Titles: text-2xl lg:text-3xl font-medium (1.5-1.875rem)
- Body Text: text-base lg:text-lg (1-1.125rem)
- Captions: text-sm (0.875rem)

### C. Layout System

**Spacing Units**
Primary spacing: 4, 8, 12, 16, 20, 24, 32 (Tailwind units)
- Section padding: py-20 lg:py-32
- Component gaps: gap-8 lg:gap-12
- Card padding: p-6 lg:p-8

**Container Widths**
- Full sections: max-w-7xl mx-auto
- Content areas: max-w-6xl mx-auto
- Text content: max-w-4xl

**Grid Systems**
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-5
- Experience: Single column timeline with side decorations

### D. Component Library

**Navigation**
- Fixed header with glassmorphism: bg-slate-900/70 backdrop-blur-md
- Glowing underline on active link with electric blue
- Smooth scroll behavior with offset for fixed header

**Buttons**
- Primary CTA: Electric blue background with glow effect, rounded-full, px-8 py-4
- Secondary: Outline with glassmorphism, border-blue-500/50
- Icon buttons: Rounded-full with hover glow effect

**Cards (Projects, Experience)**
- Glassmorphism background: bg-slate-800/40 backdrop-blur-lg
- Border: border border-slate-700/50 with hover:border-blue-500/50 transition
- Rounded corners: rounded-2xl
- Glow effect on hover: shadow-lg shadow-blue-500/20

**Skill Tags**
- Pill-shaped: rounded-full px-4 py-2
- Glassmorphism: bg-slate-700/30 backdrop-blur-sm
- Border glow: border border-blue-500/30
- Hover lift: hover:-translate-y-1 with transition-transform

**Timeline (Experience)**
- Vertical line with gradient: from-blue-500 to-purple-500
- Glowing dots at each milestone
- Cards connected to timeline with animated lines

### E. Visual Effects & Animations

**Hero Section**
- Animated particle system or neural network background using canvas/WebGL
- Particles in electric blue and purple with connecting lines
- Gentle floating animation for hero content
- Professional photo with circular frame and glowing border

**Glassmorphism Implementation**
- All major cards and panels: backdrop-blur-xl bg-slate-800/30
- Subtle borders with opacity: border-white/10 or border-blue-500/20
- Inner glow effect using box-shadow

**Microinteractions**
- Hover scale: hover:scale-105 transition-transform duration-300
- Glow on hover: hover:shadow-xl hover:shadow-blue-500/30
- Smooth transitions: transition-all duration-300 ease-in-out
- Button ripple effect on click (subtle)

**Scroll Animations**
- Fade-in-up for sections: opacity-0 translate-y-10 → opacity-100 translate-y-0
- Stagger children animations in project grid
- Parallax effect for background elements (subtle)

**Specific Section Effects**
- Skills: Pulse animation on hover, rotating gradient borders
- Projects: Image zoom on hover, overlay fade with project details
- Contact icons: Bounce on hover, color shift to brand colors

### F. Section-Specific Guidelines

**1. Hero Section**
- Full viewport height: min-h-screen
- Animated AI background (particles/neural network)
- Centered content with z-index above animation
- Professional photo: w-48 h-48 rounded-full with border-4 border-blue-500 shadow-2xl shadow-blue-500/50
- Large hero image: NO - using animated background instead
- Gradient overlay from top to create depth
- CTA button with pulsing glow animation

**2. About Me**
- Two-column layout on desktop: Content + Visual element (abstract AI graphic or code snippet)
- Education highlighted in card with CGPA in large electric blue numbers
- Quote in italic with gradient text effect
- Technology stack icons with subtle hover animations

**3. Experience**
- Timeline design with vertical gradient line
- Cards alternating left/right on desktop (centered on mobile)
- Company logos with glassmorphism circle frames
- Key achievements as bullet points with custom blue/purple markers
- Date badges with gradient backgrounds

**4. Projects**
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Project cards with image preview (mockup/screenshot)
- Hover reveals: gradient overlay with project details and tech stack
- GitHub link icon with glow effect
- Tech stack tags at bottom of each card
- Featured project gets larger card or spotlight treatment

**5. Skills**
- Grouped by category with category headers
- Skill tags in responsive grid
- Animated progress bars showing proficiency (optional for key skills)
- Category icons with gradient fills
- Hover effect: lift + glow + slight rotation

**6. Contact**
- Centered layout with glassmorphism panel
- Large heading with gradient text
- Contact details in icon + text format
- Social links as large glowing icon buttons (GitHub, LinkedIn)
- Email and phone with copy-to-clipboard functionality
- Background with subtle AI-themed pattern or gradient mesh

## Images

**Hero Section Background**
- Animated canvas element (not static image) featuring:
  - Neural network nodes and connections
  - Particle system with blue/purple particles
  - Gentle movement and interaction on mouse move
  - Depth with blur and opacity variations

**Professional Photo**
- Circular frame, 192px diameter
- Positioned in hero section
- Glowing border effect with electric blue
- Subtle pulse animation

**Project Thumbnails**
- Create mockups for each project showing UI/dashboard
- Aspect ratio: 16:9
- Overlay gradient on hover revealing details
- 3 images total (one per project)

**About Section Visual**
- Abstract AI/tech illustration or code snippet animation
- Floating geometric shapes with glassmorphism
- Not critical - can be replaced with gradient background

## Accessibility
- Maintain WCAG AA contrast ratios with dark theme
- Ensure all interactive elements have visible focus states with blue outline
- Reduce motion for users with prefers-reduced-motion
- All text remains readable against dark backgrounds
- Icon buttons include aria-labels

## Responsive Behavior
- Mobile-first approach
- Navigation collapses to hamburger menu on mobile with slide-in glassmorphism panel
- Reduce padding/spacing by 40% on mobile
- Stack multi-column layouts vertically on mobile
- Scale down font sizes appropriately
- Simplify animations on mobile for performance