import os
from PIL import Image

def optimize_file(filepath):
    sz = os.path.getsize(filepath)
    if sz < 300 * 1024:
        return 0, 0 # Skip small files
    
    ext = os.path.splitext(filepath)[1].lower()
    if ext not in ['.jpg', '.jpeg', '.png']:
        return 0, 0
    
    try:
        with Image.open(filepath) as im:
            w, h = im.size
            orig_format = im.format
            has_alpha = (im.mode == 'RGBA' or 'transparency' in im.info)
            
            # Resample if oversized
            max_dim = 1600
            if max(w, h) > max_dim:
                im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
            
            # Save optimized
            if orig_format in ['JPEG', 'MPO'] or ext in ['.jpg', '.jpeg']:
                if im.mode != 'RGB':
                    im = im.convert('RGB')
                im.save(filepath, format='JPEG', quality=82, optimize=True, progressive=True)
            elif orig_format == 'PNG' or ext == '.png':
                if not has_alpha:
                    # Photo saved as PNG without transparency: save as high quality JPEG or optimized PNG
                    if im.mode != 'RGB':
                        im = im.convert('RGB')
                    # Save with optimize
                    im.save(filepath, format='PNG', optimize=True)
                else:
                    im.save(filepath, format='PNG', optimize=True)
            
            new_sz = os.path.getsize(filepath)
            saved = sz - new_sz
            print(f'Optimized {filepath}: {sz/1024:.1f}KB -> {new_sz/1024:.1f}KB (saved {saved/1024:.1f}KB)')
            return sz, new_sz
    except Exception as e:
        print(f'Error optimizing {filepath}: {e}')
        return 0, 0

total_orig = 0
total_new = 0

for root, dirs, files in os.walk('public'):
    for f in files:
        fp = os.path.join(root, f)
        o, n = optimize_file(fp)
        total_orig += o
        total_new += n

print(f'\n=== TOTAL IMAGE OPTIMIZATION SUMMARY ===')
print(f'Original: {total_orig / (1024*1024):.2f} MB')
print(f'Optimized: {total_new / (1024*1024):.2f} MB')
print(f'Saved: {(total_orig - total_new) / (1024*1024):.2f} MB')

