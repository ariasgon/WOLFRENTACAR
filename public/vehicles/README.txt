Wolf Rent a Car — vehicle photos

Drop cutout/hero photos here. They light up automatically on the cards via
`imageUrl` in `src/lib/vehicles.ts` (or via the admin panel at /admin/fleet).

Recommended format: 800x450 PNG or JPEG, focused car on a transparent or
light background.

Expected ids (match `src/lib/vehicles.ts`):
  - renault-logan.png
  - renault-sandero.png
  - renault-duster.png
  - chevrolet-onix-sedan.png
  - kia-sportage.png
  - toyota-fortuner.png
  - toyota-hiace.png
  - chevrolet-traverse.png

If a file is present at /public/vehicles/{id}.png, set the matching vehicle's
`imageUrl` to `/vehicles/{id}.png` (either by hand in vehicles.ts or via admin).
External URLs (images.unsplash.com, Cloudinary, etc.) also work out of the box.
