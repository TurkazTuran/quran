# How to Extract Quran Data and Use the HTML

This guide will help you set up the Digital Quran Mushaf application step by step.

## Step 1: Download the Quran Text File

1. Go to: https://github.com/DigitalKhatt/digitalkhatt.org/blob/master/ClientApp/src/app/services/quran_text_madina.ts
2. Click the **"Raw"** button at the top right of the file viewer
3. Save the file as `quran_text_madina.ts` to your computer

> **Tip**: Right-click on the page and select "Save As" to save the raw file directly.

## Step 2: Convert TypeScript to JSON

You have **two options** to convert the TypeScript file to JSON format:

### Option A: Browser Tool (Easier - No Installation Required)

This is the **recommended method** for most users.

1. Open `download-helper.html` in your web browser
2. Follow the on-screen instructions:
   - **Step 1**: Click the download button (or use the link from Step 1 above)
   - **Step 2**: Drag and drop the `quran_text_madina.ts` file onto the drop zone, or click to select it
3. The tool will automatically:
   - Extract the Quran data
   - Convert it to JSON format
   - Download `quran-data.json` to your computer
4. Success! You now have the `quran-data.json` file

### Option B: Node.js Script (For Developers)

If you prefer using command-line tools:

1. **Install Node.js** if you don't have it already:
   - Download from https://nodejs.org/
   - Install the LTS (Long Term Support) version

2. **Place both files in the same folder**:
   - `convert.js`
   - `quran_text_madina.ts`

3. **Run the conversion script**:
   ```bash
   node convert.js
   ```

4. The script will create `quran-data.json` in the same directory

## Step 3: Use the HTML Mushaf

1. **Place files together**: Put `quran-data.json` in the same folder as the HTML files:
   ```
   your-folder/
   ├── quran-mushaf.html
   ├── quran-mushaf-customizable.html
   ├── download-helper.html
   ├── convert.js
   ├── quran-data.json          ← The file you created
   ├── INSTRUCTIONS.md
   └── README.md
   ```

2. **Open the Mushaf**: Double-click on either:
   - `quran-mushaf.html` - Basic beautiful Quran viewer
   - `quran-mushaf-customizable.html` - Advanced version with customization options

3. **Enjoy reading!** 📖

## Features

### Basic Version (quran-mushaf.html)

✅ **604 pages** of the complete Quran (Madinah Mushaf)  
✅ **Beautiful Arabic typography** using Amiri Quran font  
✅ **Decorative Surah headers** with traditional styling  
✅ **Verse numbers** in circular badges  
✅ **Page navigation** (previous/next buttons)  
✅ **Jump to page** - Enter any page number (1-604)  
✅ **Complete Surah index** - All 114 surahs with page numbers  
✅ **Keyboard shortcuts** - Use arrow keys (← →)  
✅ **Responsive design** - Works on mobile and desktop  
✅ **Works offline** - No internet required after loading

### Advanced Version (quran-mushaf-customizable.html)

All basic features PLUS:

⚙️ **Customizable font family** - Choose from 3 Arabic fonts  
📏 **Adjustable font size** - Range from 20px to 40px  
📐 **Line height control** - Adjust spacing between lines  
🎨 **Custom colors** - Change text, background, and border colors  
🌞 **Light theme** - Clean and bright  
🌙 **Dark theme** - Easy on the eyes at night  
📜 **Sepia theme** - Classic vintage look  
💾 **Saves your preferences** - Settings persist across sessions  
📱 **Fully responsive** - Optimized for all screen sizes

## Keyboard Shortcuts

- **← (Left Arrow)**: Go to next page
- **→ (Right Arrow)**: Go to previous page
- **Enter** (in page input): Jump to the entered page

## Troubleshooting

### Problem: "Failed to load Quran data" Error

**Solution**: Make sure `quran-data.json` is in the **same folder** as the HTML files.

### Problem: Blank page or nothing displays

**Solution**: 
1. Open your browser's Developer Tools (press F12)
2. Check the Console tab for error messages
3. Ensure the file path is correct
4. Try using a local web server (see below)

### Problem: No verse numbers showing

**Solution**: 
- Verify that the data file contains verse markers (۝ symbols)
- Make sure the conversion completed successfully
- Check that you downloaded the correct file

### Problem: File won't open or shows CORS error

**Solution**: Some browsers block local file access. Use a local web server instead:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000/quran-mushaf.html

#### Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server

# Or use npx (no installation needed)
npx http-server
```

Then open: http://localhost:8080/quran-mushaf.html

#### Using PHP:
```bash
php -S localhost:8000
```

Then open: http://localhost:8000/quran-mushaf.html

### Problem: Settings not saving (customizable version)

**Solution**:
1. Make sure your browser allows localStorage
2. Check that you're not in private/incognito mode
3. Clear your browser cache and try again

### Problem: Arabic text not displaying correctly

**Solution**:
1. Ensure your browser is up to date
2. Check that Arabic fonts are installed on your system
3. The application uses Google Fonts, so internet is needed on first load

## Browser Compatibility

The Digital Quran Mushaf works best on modern browsers:

✅ **Chrome** 80+  
✅ **Firefox** 75+  
✅ **Safari** 13+  
✅ **Edge** 80+  
✅ **Opera** 67+

Mobile browsers:
✅ Chrome for Android  
✅ Safari for iOS  
✅ Firefox Mobile

## File Sizes

- `quran_text_madina.ts`: ~3.5 MB
- `quran-data.json`: ~3.2 MB
- `quran-mushaf.html`: ~19 KB
- `quran-mushaf-customizable.html`: ~32 KB
- `download-helper.html`: ~13 KB
- `convert.js`: ~2.5 KB

## Privacy & Security

🔒 **Completely Private**: All data processing happens locally in your browser  
🔒 **No Tracking**: No analytics, no cookies, no data collection  
🔒 **Offline Ready**: Once loaded, works without internet  
🔒 **Open Source**: All code is visible and auditable

## Data Source

The Quran text data is provided by the [DigitalKhatt Project](https://github.com/DigitalKhatt/digitalkhatt.org), which is licensed under AGPL-3.0.

The DigitalKhatt project provides high-quality Arabic text rendering and typesetting for the Holy Quran.

## Credits

- **Quran Text**: DigitalKhatt project (AGPL-3.0 license)
- **Arabic Fonts**: Google Fonts (Amiri, Amiri Quran, Scheherazade New)
- **Design**: Custom Mushaf-inspired layout
- **Development**: Open source community

## Technical Details

### For Developers

The application uses:
- **Pure HTML/CSS/JavaScript** - No frameworks required
- **CSS Custom Properties** - For theme customization
- **LocalStorage API** - For saving user preferences
- **Fetch API** - For loading JSON data
- **FileReader API** - For drag-and-drop conversion
- **Responsive Design** - Mobile-first approach

### Data Structure

The `quran-data.json` file is an array of 604 pages, where each page is an array of text lines:

```json
[
  ["line 1 of page 1", "line 2 of page 1", ...],
  ["line 1 of page 2", "line 2 of page 2", ...],
  ...
]
```

Verse numbers are marked with the ۝ symbol followed by the verse number (e.g., `۝1`, `۝2`, etc.).

## Support

If you encounter any issues or have questions:

1. Check this troubleshooting guide first
2. Review the README.md file
3. Open an issue on the GitHub repository
4. Check browser console for error messages

## License

The HTML viewer application is open source. The Quran text data is provided under the AGPL-3.0 license by the DigitalKhatt project.

---

**Enjoy your Digital Mushaf!** 🕌📖

May Allah accept this effort and make it beneficial for all readers of the Holy Quran.

بارك الله فيكم 🤲
