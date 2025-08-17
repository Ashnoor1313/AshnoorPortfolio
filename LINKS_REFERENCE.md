# Links Reference Guide

This file contains all the links used throughout the portfolio website. Replace the example/placeholder links with your actual links.

## 🔗 Hero Section Links
**File:** `client/src/components/hero.tsx`

```javascript
// CTA Buttons
const resumeLink = "https://your-resume-link.pdf"; // Replace with your resume/CV link
const portfolioLink = "#projects"; // Links to projects section (can be external portfolio)
```

## 🔗 Social Media Links
**File:** `client/src/components/contact.tsx`

```javascript
const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/YOUR_USERNAME", // Replace with your GitHub profile
    color: "hover:bg-accent-blue" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/YOUR_USERNAME", // Replace with your LinkedIn profile
    color: "hover:bg-accent-blue" 
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com/YOUR_USERNAME", // Replace with your Twitter/X profile
    color: "hover:bg-accent-purple" 
  },
  // Optional: Add more social platforms
  // { icon: Instagram, href: "https://instagram.com/YOUR_USERNAME", color: "hover:bg-pink-500" },
];
```

## 🔗 Project Links
**File:** `client/src/components/projects.tsx`

Each project should have:
- `github: "https://github.com/YOUR_USERNAME/PROJECT_NAME"` - Link to GitHub repository
- `demo: "https://your-project-demo.com"` - Link to live demo/website
- Use `"#"` as placeholder if link not available yet

```javascript
const projects = [
  {
    title: "Your Project Name",
    github: "https://github.com/YOUR_USERNAME/project-repo", // Replace with actual repo
    demo: "https://your-project-demo.com", // Replace with live demo
  },
  // Add more projects...
];
```

## 🔗 Footer Links
**File:** `client/src/components/footer.tsx`

```javascript
const footerLinks = {
  social: [
    { name: "GitHub", href: "https://github.com/YOUR_USERNAME" },
    { name: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME" },
    { name: "Twitter", href: "https://twitter.com/YOUR_USERNAME" },
  ],
  quick: [
    { name: "Resume", href: "https://your-resume-link.pdf" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]
};
```

## 🔗 Navigation Links
**File:** `client/src/components/navigation.tsx`

All navigation links are internal anchors (#section-name) - no changes needed unless adding external pages.

## 🔗 Contact Information
**File:** `client/src/components/contact.tsx`

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com", // Replace with your email
    color: "from-accent-blue to-accent-purple",
  },
  {
    icon: Phone,
    label: "Phone", 
    value: "+1 (555) 123-4567", // Replace with your phone number
    color: "from-accent-purple to-pink-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country", // Replace with your location
    color: "from-green-500 to-teal-500",
  },
];
```

## 🔗 External Resource Links

### Images
- Profile photos: Use your actual headshots
- Project screenshots: Use actual project images
- Replace Unsplash URLs with your own images when available

### Documents
- Resume/CV: Host on Google Drive, Dropbox, or your own server
- Certificates: Link to credential verification pages when available

### Portfolios
- Behance, Dribbble, or other design portfolios
- CodePen, Repl.it for code demos
- YouTube channel for video content

## 📝 Quick Replace Checklist

1. **GitHub Profile:** Replace "YOUR_USERNAME" with your actual GitHub username
2. **LinkedIn Profile:** Replace "YOUR_USERNAME" with your LinkedIn username  
3. **Email:** Replace "your.email@example.com" with your actual email
4. **Phone:** Replace "+1 (555) 123-4567" with your actual phone number
5. **Location:** Replace "Your City, Country" with your actual location
6. **Resume Link:** Replace "https://your-resume-link.pdf" with actual resume URL
7. **Project Links:** Replace "#" placeholders with actual GitHub repos and demo URLs

## 🔧 How to Update Links

1. Find the component file mentioned above
2. Locate the specific section (search for the variable name)
3. Replace the placeholder text with your actual link
4. Test the link to make sure it works
5. Save the file - changes will update automatically

## ⚠️ Important Notes

- Always use `https://` for external links
- Test all links before deployment
- Use `target="_blank"` for external links (already configured)
- Keep backup of original links in case you need to revert
- Consider using URL shorteners for very long links