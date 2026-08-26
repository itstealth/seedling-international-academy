"""Generate app icons from the Cambridge shield source.

Run: python scripts/make-favicon.py
Source is .webp, which Next 16 does not accept for the `icon` file convention
(.ico/.jpg/.jpeg/.png/.svg only), so we emit .png + .ico here.
"""
from PIL import Image

SRC = "public/assets/Home/cambridge_shield_v2.webp"
ICON_PNG = "app/icon.png"
FAVICON = "app/favicon.ico"
APPLE = "app/apple-icon.png"

img = Image.open(SRC).convert("RGBA")
print(f"source: {img.size[0]}x{img.size[1]}")

# Trim surrounding transparency so the mark fills the frame at 16px.
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
    print(f"trimmed: {img.size[0]}x{img.size[1]}")

# Pad to a square canvas rather than stretching, so the shield keeps its shape.
w, h = img.size
side = int(max(w, h) * 1.08)  # ~4% breathing room per edge
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(img, ((side - w) // 2, (side - h) // 2), img)

square.resize((512, 512), Image.LANCZOS).save(ICON_PNG, optimize=True)
print(f"wrote {ICON_PNG} 512x512")

square.save(FAVICON, sizes=[(16, 16), (32, 32), (48, 48), (256, 256)])
print(f"wrote {FAVICON} (16/32/48/256)")

# apple-touch-icon is composited on white; iOS ignores transparency.
apple = Image.new("RGBA", square.size, (255, 255, 255, 255))
apple.paste(square, (0, 0), square)
apple.convert("RGB").resize((180, 180), Image.LANCZOS).save(APPLE, optimize=True)
print(f"wrote {APPLE} 180x180")
