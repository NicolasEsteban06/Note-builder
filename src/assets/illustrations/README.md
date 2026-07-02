# 🎨 Digital Art Illustrations Guide

## How to Add Your Museum Digital Art

### Step 1: Copy Your Images Here

Copy your images from:
```
C:\Users\mirgu\Documents\Client File\CaseloadViewerApp\_Launchpad Source\src\assets\museum_digital
```

To this folder:
```
/Note-builder/src/assets/illustrations/
```

### Step 2: Recommended Image Names

For best results, rename your images to match these names (or update the paths in `src/data/illustrations.js`):

- **header-art.png** - Displays in the header area
- **client-actions.png** - Left sidebar illustration
- **provider-actions.png** - Right sidebar illustration  
- **support-coordinator.png** - Support Coordinator guide section
- **recovery-coach.png** - Recovery Coach guide section
- **background.png** - Optional background pattern

### Step 3: Supported Formats

- PNG (recommended for transparency)
- JPG/JPEG
- SVG (best for scalability)
- WebP

### Step 4: Image Size Recommendations

- **Small icons**: 100-200px
- **Decorative elements**: 200-400px  
- **Large illustrations**: 400-800px
- **Background patterns**: 1920x1080px or larger

Keep file sizes under 500KB each for best performance.

### Step 5: Test Your Images

1. Add your images to this folder
2. Run `npm run dev`
3. Open the app in your browser
4. Click the ⚙️ Settings button
5. Toggle illustrations on/off to see them

### Tips for Best Results

✅ **Use transparent PNGs** for illustrations that overlay content
✅ **Optimize images** before adding (use tools like TinyPNG)
✅ **Keep consistent style** across all artwork
✅ **Test in light mode** (the app uses a light color scheme)

### Customizing Positions

Edit `src/data/illustrations.js` to:
- Change which images display where
- Enable/disable specific illustrations
- Adjust default settings

### Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive!)
- Verify images are in the correct folder
- Make sure "Show Illustrations" is enabled in Settings
- Check browser console for errors (F12)

**Images too big/small?**
- Use the Size setting (Small/Medium/Large)
- Or edit the CSS in `src/components/IllustrationWrapper.css`

**Images blocking content?**
- Adjust the Opacity slider in Settings
- Images have `pointer-events: none` so they won't block clicks

---

## Example Setup

If you have these museum digital files:
```
artwork-1.png
artwork-2.png  
artwork-3.png
background-pattern.png
```

Copy them here and rename to:
```
header-art.png (was artwork-1.png)
client-actions.png (was artwork-2.png)
provider-actions.png (was artwork-3.png)
background.png (was background-pattern.png)
```

Then they'll automatically display in the app! 🎉
