# AI Prompt History

This file records the prompts used to develop the Airbnb listing assignment.

## 1. Share notification

In `src/app/page.tsx` and `src/components/ListingHeader.tsx`, when the user clicks the Share button, show a bottom-center “Share options” button and automatically hide it after a short time.

## 2. Unavailable amenities

In `src/components/AmenitiesSection.tsx`, display “Carbon monoxide alarm” and “Smoke alarm” with the text and icons crossed out using `#DDDDDD`.

## 3. Categorized amenities

In `src/data/listingData.ts`, add and organize the requested amenities under Services, Parking and facilities, Location features, Outdoor, Kitchen and dining, Heating and cooling, Home safety, and Internet and office. Use appropriate icons and keep the alarm items crossed out in appearance.

## 4. Navbar image assets

In `src/components/Navbar.tsx`, replace the inline SVG logo with `public/airbnbIcon.png` and add `public/houseIcon.png` before the Anywhere button.

## 5. Calendar unavailable dates

In `src/components/DatePickerSection.tsx`, cross out and disable November 18–24 and November 29–30.

## 6. Photo tour

In `src/components/PhotoGallery.tsx`, make the gallery photos clickable. When a photo is selected, open a scrollable photo-tour view similar to the supplied screenshots; clicking the full kitchen category should scroll to and show all kitchen images.

## 7. Photo tour layout and mock photos

Fix the photo-tour grid so it is not sticky and ensure section headings are not cut off when scrolling. Add mock photos matching the screenshot-style sections.

## 8. Photo-tour categories

Add mock photo sections named Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, and Additional photos.

## 9. Submission archive

Create one project ZIP without `node_modules`, include the AI configuration files (`AGENTS.md`, `CLAUDE.md`, and `.claude/` when present), and include `architecture-diagram.pdf`.

## 10. Prompt history

Create a Markdown or text file containing the AI prompt history used to complete the assignment and include it in the submission archive.
