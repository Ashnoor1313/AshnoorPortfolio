# 🔗 Quick Links Setup Guide

This is a simple reference to find and replace all the placeholder links in your portfolio.

## 📍 Where to Find Your Links

### 1. **Hero Section** (`client/src/components/hero.tsx`)
- **Line ~195**: Resume download button
- **Line ~215-217**: Social media icons (GitHub, LinkedIn, Twitter)

### 2. **Contact Section** (`client/src/components/contact.tsx`) 
- **Line ~39**: Email address
- **Line ~43**: Phone number  
- **Line ~47**: Location
- **Line ~58-60**: Social media links

### 3. **Projects Section** (`client/src/components/projects.tsx`)
- **Line ~21-22**: Project 1 - GitHub & Demo links
- **Line ~31-32**: Project 2 - GitHub & Demo links  
- **Line ~41-42**: Project 3 - GitHub & Demo links

### 4. **Footer Section** (`client/src/components/footer.tsx`)
- **Line ~13-16**: All social media links

## 🔍 Search Terms to Find Links Quickly

Use Ctrl+F (or Cmd+F on Mac) to search for:
- `🔗 REPLACE:` - Find all replacement points
- `YOUR_USERNAME` - Find social media placeholders
- `your.email@example.com` - Find email placeholder
- `https://your-resume-link.pdf` - Find resume link

## ⚡ Quick Replace List

Replace these exact strings:

| Find This | Replace With Your Actual |
|-----------|-------------------------|
| `YOUR_USERNAME` | Your actual username |
| `your.email@example.com` | Your email address |
| `+1 (555) 123-4567` | Your phone number |
| `Your City, Country` | Your location |
| `https://your-resume-link.pdf` | Your resume URL |

## 🧪 Test Your Links

After updating, test these links work:
- ✅ Resume downloads correctly
- ✅ Social media profiles open in new tabs  
- ✅ Email opens mail client
- ✅ Project GitHub repos are accessible
- ✅ Project demos work (if available)

## 📝 Example Replacements

**Before:**
```javascript
{ icon: Github, href: "https://github.com/YOUR_USERNAME" }
```

**After:** 
```javascript
{ icon: Github, href: "https://github.com/johnsmith" }
```

---

**Before:**
```javascript
value: "your.email@example.com"
```

**After:**
```javascript  
value: "john.smith@gmail.com"
```

All links are clearly marked with `🔗 REPLACE:` comments to make them easy to find!