# WeavenHeaven Lace Store - Fashion Clothing Website

A modern, responsive HTML website for a lace clothing store with WhatsApp integration for customer enquiries.

## 🌟 Features

### 🏠 **Home Page**
- Hero section with call-to-action
- Featured lace categories (Lace Dresses, Lace Tops, Lace Accessories)
- Featured lace products with descriptions
- Responsive navigation

### 🛍️ **Products Page**
- Categorized lace products (Lace Dresses, Lace Tops, Lace Accessories)
- Product filtering functionality
- High-quality lace product images
- WhatsApp enquiry integration for each product

### ℹ️ **About Page**
- Company story and mission focused on lace craftsmanship
- Core values emphasizing elegance and artistry
- Team member profiles
- Company statistics

### 📞 **Contact Page**
- Contact form with WhatsApp integration
- Business information and hours
- Interactive Google Maps
- FAQ section
- Direct WhatsApp support button

### 📱 **WhatsApp Integration**
- **Product Enquiry**: Click any "Enquiry" button to open WhatsApp with product details
- **Contact Form**: Submit form data directly to WhatsApp
- **Direct Support**: Quick WhatsApp support button on contact page

## 🚀 Quick Start

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the WhatsApp phone number in `script.js` (line 15)
4. **Add your lace product images** to the `images/laces/` folder
5. **Update product descriptions** and content as needed

## 📁 File Structure

```
WeavenHeaven/
├── index.html              # Home page
├── products.html           # Products page with categories
├── about.html              # About us page
├── contact.html            # Contact page with form
├── styles.css              # Complete CSS styling
├── script.js               # JavaScript functionality
├── README.md               # This file
└── images/
    ├── laces/              # Lace product images
    │   ├── lace-dress-1.jpg
    │   ├── lace-dress-2.jpg
    │   ├── lace-top-1.jpg
    │   ├── lace-top-2.jpg
    │   ├── lace-scarf-1.jpg
    │   ├── lace-gloves-1.jpg
    │   └── ... (more lace products)
    ├── categories/         # Category banner images
    │   ├── lace-dresses.jpg
    │   ├── lace-tops.jpg
    │   └── lace-accessories.jpg
    └── store/              # Store and team images
        ├── lace-store-front.jpg
        ├── sarah-johnson.jpg
        ├── michael-chen.jpg
        └── emily-rodriguez.jpg
```

## 🛠️ Customization

### Changing WhatsApp Number
Edit line 15 in `script.js`:
```javascript
const phoneNumber = '+1234567890'; // Replace with your number
```

### Adding Lace Products
1. **Add product images** to `images/laces/` folder
2. **Open** `products.html`
3. **Find** the appropriate category section
4. **Copy and modify** a product card:
```html
<div class="product-card" data-category="dresses">
    <img src="images/laces/your-lace-product.jpg" alt="Product Name">
    <h3>Product Name</h3>
    <p class="description">Beautiful description of your lace product</p>
    <button class="enquiry-btn" onclick="openWhatsApp('Product Name - Beautiful description')">Enquiry</button>
</div>
```

### Updating Images
- **Product images**: Place in `images/laces/` folder (recommended: 300x300px)
- **Category images**: Place in `images/categories/` folder (recommended: 400x400px)
- **Store images**: Place in `images/store/` folder
- Use high-quality, professional lace product images

### Styling Changes
- Edit `styles.css` to modify colors, fonts, and layout
- Main brand color: `#e74c3c` (red)
- Secondary color: `#667eea` (blue gradient)
- Focus on elegant, lace-appropriate styling

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Design Features

- **Elegant UI/UX**: Sophisticated design perfect for lace products
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Optimized for mobile devices
- **Fast Loading**: Optimized images and code
- **Accessibility**: Semantic HTML and keyboard navigation

## 🔧 Technical Features

- **Pure HTML/CSS/JavaScript**: No frameworks required
- **WhatsApp API Integration**: Direct messaging functionality
- **Form Validation**: Client-side validation
- **Image Lazy Loading**: Performance optimization
- **Smooth Scrolling**: Enhanced user experience
- **Mobile Navigation**: Hamburger menu for mobile

## 📞 WhatsApp Integration Details

### How It Works
1. User clicks "Enquiry" button on any lace product
2. WhatsApp opens with pre-filled message containing product details
3. User can modify message and send to your business

### Message Format
```
Product Name - Beautiful description of the lace product
```

### Contact Form Integration
When users submit the contact form, it opens WhatsApp with:
```
New Contact Form Submission - WeavenHeaven Lace Store:

Name: [User's Name]
Email: [User's Email]
Phone: [User's Phone]
Subject: [Selected Subject]
Message: [User's Message]
```

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For support or questions:
1. Check the FAQ section on the contact page
2. Use the WhatsApp support button
3. Submit an issue on GitHub

## 🔄 Updates

### Version 2.0
- Restructured folder organization
- Removed pricing information
- Updated to lace-focused content
- Added proper image folder structure
- Enhanced lace product descriptions

### Version 1.0
- Initial release
- Complete website with all pages
- WhatsApp integration
- Responsive design
- Modern UI/UX

---

**Made with ❤️ for lace fashion businesses** 