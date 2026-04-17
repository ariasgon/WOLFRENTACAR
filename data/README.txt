Wolf Rent a Car — file-based data store (MVP)

This folder holds two JSON files that persist between app restarts:

  bookings.json          — array of Booking records
  fleet-overrides.json   — object keyed by vehicleId, storing runtime
                           overrides (availability toggle, imageUrl, etc.)

The app reads/writes these via `src/lib/db.ts`. Good enough for local
development and a single-instance deploy. For a horizontally-scaled deploy
(multiple Railway containers), migrate to Postgres/SQLite — the `db.ts`
interface is the only file that needs to change.
