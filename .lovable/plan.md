

## Portfolio Updates

Three targeted changes to the Index page:

### 1. Update LinkedIn URL
Replace the placeholder `https://linkedin.com/` with `https://www.linkedin.com/in/aishwarya-v-8aab5223a` in both the hero social icons and the footer.

### 2. Mail icon
The mailto: link is already correctly set to `aishwaryaammuv@gmail.com` in both locations -- no change needed here.

### 3. Remove Download ZIP button
- Remove the "Download ZIP" button from the hero section
- Remove the `handleDownloadZip` function
- Remove the `Download` icon import from lucide-react
- The `jszip` and `file-saver` dependencies can remain (they're only dynamically imported, so no bundle impact)

### Files Modified
- `src/pages/Index.tsx` -- all changes in this single file

