# Gold Palace Jewellers — Premium Static Jewellery Brand Website

A modern, luxurious, high-tech and fully responsive static jewellery brand website created with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

Built specifically for **Gold Palace Jewellers** (Serving since 1951, Dharampeth, Nagpur).

---

## 💎 Features & Architecture

* **100% Static Frontend**: Zero database or server dependencies. Easily deployable to Vercel, Netlify, or GitHub Pages.
* **Authentic Brand Imagery**: Uses the real brand assets (Hero Model MorPankhi shoot, Dharampeth storefront, and genuine product catalog).
* **MorPankhi Peacock Luxury Palette**: Deep peacock teals, rich gold accents, and cream backdrops.
* **Smooth WhatsApp Ordering Flow**:
  1. Product Card → Click **Order Now** or **View Details**
  2. Integrated Modal / Drawer Checkout
  3. Enter Customer Information (Name, Mobile, Delivery Address, Optional Note)
  4. Instant Order Summary with editable quantity and auto-calculated total
  5. One-click **Confirm Order** generates a pre-formatted, URL-encoded WhatsApp message to `+91 98230 73797`
  6. Displays a post-order **Order Request Prepared** screen with order reference code (e.g., `JW-2026-001`).
* **Verified Brand Heritage (No CEO/Founder claims)**:
  * Serving Since 1951
  * Categories: Diamond | Gold | Silver | Platinum | Gemstones
  * Landmark Storefront: Near Sudama Talkies, Dharampeth, Nagpur, 440010
  * Verified Phone Numbers: `+91 98230 73797` / `+91 72189 08868`
* **Real Interactive Elements**:
  * Category navigation tabs (All, Rings, Necklaces, Earrings, Bracelets) with dynamic category headings
  * Product quick-view modal with quantity selector
  * FAQ accordion with 5 verified answers
  * Google Maps navigation direct to Sudama Talkies, Dharampeth, Nagpur
  * Floating bottom-right WhatsApp concierge button

---

## 🚀 Running Locally

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready static assets will be output in the `dist/` directory.

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── BrandIntro.jsx         # "Jewellery With a Legacy" 3 verified highlights
│   ├── BrandLogo.jsx          # Custom faceted diamond logo & luxury typography
│   ├── CategoryTabs.jsx       # Category filter pills with mobile scroll
│   ├── Checkout.jsx           # Customer form, order review & WhatsApp encoder
│   ├── Collection.jsx         # "Our Collection" grid with dynamic category titles
│   ├── FAQ.jsx                # Accordion with 5 verified store answers
│   ├── FeaturedCollection.jsx # Curated highlight cards
│   ├── FinalCTA.jsx           # Bottom invitation banner
│   ├── Footer.jsx             # Luxury footer with address, copyright, back to top
│   ├── Hero.jsx               # Hero banner featuring MorPankhi photoshoot & heritage badge
│   ├── Navbar.jsx             # Sticky glassmorphism header & mobile hamburger drawer
│   ├── OurLegacy.jsx          # Split layout with 1951 typography & real storefront photo
│   ├── ProductCard.jsx        # Product cards with hover effects & order triggers
│   ├── ProductModal.jsx       # Detailed product popover with quantity selector
│   ├── StoreSection.jsx       # "Visit Our Store" & "Discover Online. Experience In Store."
│   ├── WhatsAppButton.jsx     # Floating concierge button
│   └── WhyChooseUs.jsx        # 4 verified brand pillars
│
├── data/
│   ├── brand.js               # Central store configuration (Phone, address, heritage)
│   └── products.js            # Product catalog array
│
├── App.jsx                    # Root view & modal management
├── index.css                  # Peacock gradients, gold text shimmer & scroll styles
└── main.jsx                   # Entry mount
```

---

## ✏️ Managing Products & Brand Details

* **To add or update products**: Open [`src/data/products.js`](file:///c:/Users/Baap/Desktop/jwelaryweb/src/data/products.js).
* **To update contact numbers or address**: Open [`src/data/brand.js`](file:///c:/Users/Baap/Desktop/jwelaryweb/src/data/brand.js).
