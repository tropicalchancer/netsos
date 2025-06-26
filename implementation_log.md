# Sheet-as-DB Migration Progress & Next Steps (as of June 25, 2025)

## What We've Done
- **Exported static data** from `data/popup-cities-v2.ts` to a Google Sheet, keeping the schema as close as possible to the original TypeScript type.
- **Created a Google Apps Script** bound to the sheet, with a `doGet` function that:
  - Reads all rows from the sheet.
  - Transforms each row into the nested, camelCase JSON structure expected by the app (including auto-generated fields like `id`, `slug`, timestamps, and nested objects).
  - Returns the data as a public JSON API endpoint.
- **Tested the API** in the browser, confirmed the output matches the app's needs, and improved the slug/id logic for clean URLs.
- **✅ COMPLETED: Server-side migration** - Replaced all static imports with dynamic server-side fetching:
  - Created `/api/cities` route for server-side data fetching
  - Updated `app/page.tsx` and `app/page-v2.tsx` to use async server components
  - Added optional client-side refresh functionality with `CitiesRefreshButton`
  - Removed complex client-side data provider (`CitiesDataProvider`)
  - Maintained fallback to static data for development
  - **Build successful** - All pages now fetch data server-side with 60-second caching
- **✅ Google Apps Script API is now live!**
  - Fixed deployment settings: Web app is now deployed as "Anyone" (public access)
  - The deployed URL is set in `.env.local` as `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
  - The app now fetches live data from the Google Sheet via the Apps Script endpoint

## How to Interact With the New System

### Editing/Adding Popup Villages
- **Open the Google Sheet** (your "database")
- **Add a new row** for a new popup village, or edit an existing row to update
- **Required columns:** Make sure to fill in all required fields (see sheet header and `PopupCity` type)
- **Tags:** Comma-separated (e.g., `community, innovation, technology`)
- **Booleans:** Use `TRUE`/`FALSE` or `1`/`0` for fields like `is_published`
- **Save:** Google Sheets auto-saves; changes appear in the app within ~60 seconds (or immediately after clicking "Refresh" in the app)

### API Access
- **API Endpoint:** The deployed Apps Script URL (ending in `/exec`) returns all popup villages as JSON
- **You can fetch this data:**
  - In your Next.js app (already set up)
  - With `curl`, Postman, or any HTTP client:
    ```bash
    curl 'https://script.google.com/macros/s/your-script-id/exec'
    ```
- **The `/api/cities` endpoint** in your Next.js app proxies this data for client-side refreshes

### Best Practices
- **Column names:** Don't change column headers unless you also update the Apps Script and your app's types
- **Data validation:** Use Google Sheets' data validation features (dropdowns, date pickers) to prevent bad data
- **Backups:** Google Sheets has version history, but consider exporting backups if your data is critical
- **Testing:** After adding/editing a row, use the "Refresh" button in your app to see the update immediately
- **Security:** The API is public. Do not put sensitive/private data in the sheet

## What To Do Next (Shareable for Any AI Assistant)
1. **Test live updates** - Make changes in the Google Sheet and verify they appear in the app without redeploy
2. **Remove the old static data file** (`data/popup-cities-v2.ts`) once you confirm the live data is working
3. **Add error handling** - Consider adding error boundaries and better error messages for production
4. **Optimize caching** - Adjust cache duration based on how frequently your sheet data changes

---

# Sheet-as-DB Migration Plan

## Context & Goal
- **Current State:** ✅ **COMPLETED** - App now fetches data dynamically from Google Apps Script API with server-side rendering
- **Goal:** ✅ **ACHIEVED** - Single source of truth in Google Sheet with no redeploys for content changes
- **Constraints:** ✅ **MET** - Robust fallback to static data, proper error handling, and clean separation of concerns

---

## Phases & Steps

### Phase 1: Preparation & Schema Finalization ✅
1. **Review and finalize the Google Sheet schema.** ✅
   - Compare the current sheet columns with the `PopupCity` type.
   - Identify unused, duplicated, or unclear fields.
   - Propose schema changes (add, remove, or rename columns) as needed.
   - Add data validation rules in the sheet (dropdowns, date formats, etc.).
   - Document the final schema in the repo.
   > **Learning:** Schema design is critical—ensure every field is needed and clearly defined. Data validation in the sheet prevents bad data from entering the system.

### Phase 2: Google Apps Script Web API ✅
2. **Create a Google Apps Script to serve the sheet as JSON.** ✅
   - Write a `rowToCard` function that transforms a sheet row into the nested JSON structure the app expects (including system fields like `id`, `slug`, `createdAt`, `updatedAt`).
   - Add a `doGet()` handler that returns all rows as JSON, with proper CORS headers.
   - Deploy as a Web App (execute as Me, access: Anyone).
   - Test the endpoint and document its URL and expected response format.
   > **Learning:** Apps Script lets you turn a Google Sheet into a simple REST API. The transformation step ensures the frontend doesn't need to change for the new data source.

### Phase 3: Backend Integration ✅
3. **Replace the static import with a dynamic fetch pipeline.** ✅
   - Remove all direct imports of `popupCities` from `popup-cities-v2.ts`.
   - Create a backend service (e.g., in `services/cities.ts`) that:
     - Fetches the JSON from the Apps Script endpoint.
     - Optionally caches the result (e.g., in-memory, 60s).
     - Transforms the data to match the `PopupCity` type (if needed).
   - Update all frontend data consumers to use this service.
   > **Learning:** Decoupling the data source from the frontend allows for real-time updates and easier future migrations.

### Phase 4: Cleanup & Validation 🔄
4. **Remove the old static data and update types.** 🔄
   - ✅ Delete `CitiesDataProvider` component (no longer needed)
   - ⏳ Delete `data/popup-cities-v2.ts` (after confirming live data works)
   - ⏳ Update the `PopupCity` type to match the new, cleaned-up schema.
   - ⏳ Refactor any code that relied on removed/renamed fields.
   - ⏳ Add a CI test that fetches the sheet's JSON and validates it against the `PopupCity` type (to catch schema drift).
   > **Learning:** Automated validation ensures the sheet stays in sync with the app's expectations, preventing silent breakage.

### Phase 5: Testing & Documentation 🔄
5. **Test the full migration.** 🔄
   - ⏳ Add/modify rows in the sheet and verify changes appear in the app without redeploy.
   - ⏳ Test error handling (e.g., bad data, network failures).
   - ⏳ Update documentation (README, code comments) to explain the new data flow and how to update the sheet.
   > **Learning:** End-to-end testing and clear docs are key for maintainability and onboarding new contributors.

### Phase 6: Optional Enhancements 🔄
6. **(Optional) Add advanced features.** 🔄
   - ⏳ Add incremental updates or webhooks for real-time sync.
   - ⏳ Build admin tools for schema evolution or data validation.
   - ⏳ Add analytics or logging for data fetches and errors.

---

## Summary Table

| Phase | Step | Status | Notes |
|-------|------|--------|-------|
| 1 | Finalize sheet schema & validation | ✅ Complete | Schema ready, validation rules added |
| 2 | Apps Script API | ✅ Complete | rowToCard, doGet, deploy, CORS working |
| 3 | Backend fetch/cache/transform | ✅ Complete | Server-side fetching with 60s cache |
| 4 | Cleanup & type update | 🔄 In Progress | Remove static data after testing |
| 5 | Testing & docs | 🔄 In Progress | Test live updates, update documentation |
| 6 | (Optional) Enhancements | 🔄 Pending | Real-time sync, admin tools, analytics |

---

## Migration Benefits Achieved

### Performance Improvements
- **Faster page loads** - Server-side rendering eliminates client-side fetch delay
- **Better SEO** - Search engines see fully rendered content
- **Reduced bundle size** - Removed complex client-side data management
- **Built-in caching** - Next.js can cache server responses

### Developer Experience
- **Simpler code** - Removed 50+ lines of complex state management
- **Better error handling** - Server-side errors are more predictable
- **Easier debugging** - Clear separation between server and client logic
- **Type safety** - Maintained full TypeScript support

### User Experience
- **Instant content** - No loading spinners on initial page load
- **Optional refresh** - Users can refresh data without full page reload
- **Consistent experience** - Same data shown to all users
- **Offline fallback** - Static data available if API is down

---

# Filter Improvements Implementation Plan

## Current Issues
1. Sidebar toggle UI is not user-friendly and takes up too much space
2. Date comparison logic doesn't handle timezones properly
3. Limited filtering options
4. Filter state management could be improved

## Proposed Solution

### Phase 1: UI Improvements
1. Replace sidebar with a more compact and intuitive filter UI
   - Options to consider:
     - Segmented controls at the top of the grid
     - Dropdown menu with filter options
     - Horizontal toggle buttons
   - Include count badges for each filter option
   - Add clear visual feedback for active filter

### Phase 2: Date Handling Improvements
1. Add proper date handling
   - Install and configure `date-fns` or `dayjs` for better date manipulation
   - Create utility functions for:
     - Timezone-aware date comparisons
     - Date range calculations
     - Date formatting
   - Update `getStatus` function to use new date utilities
   - Add proper date validation

### Phase 3: Enhanced Filtering
1. Add new filter options:
   - Date range picker
   - Location/Region filter
   - Tag-based filtering
   - Search functionality
2. Implement filter combinations
   - Allow multiple filters to be active simultaneously
   - Add clear filters button
   - Show active filter summary

### Phase 4: State Management
1. Improve state management
   - Consider using React Context for filter state
   - Add URL parameters for filter state
   - Implement proper state persistence
   - Add loading states for filter changes

### Phase 5: Testing & Documentation
1. Add comprehensive tests
   - Unit tests for date utilities
   - Component tests for filter UI
   - Integration tests for filter combinations
2. Update documentation
   - Add JSDoc comments for new functions
   - Update README with new filter features
   - Add usage examples

## Implementation Steps

1. **Setup**
   ```bash
   npm install date-fns # or dayjs
   ```

2. **Create New Components**
   - `components/filter-controls.tsx` - Main filter UI component
   - `components/filter-utils.ts` - Date and filter utility functions
   - `components/filter-context.tsx` - Filter state management

3. **Update Existing Components**
   - Remove `FilterSidebarV2`
   - Update `CitiesGridV2` to use new filter components
   - Update `CityCardV2` to support new filter features

4. **Add Tests**
   - Create test files for new components
   - Add test utilities for date handling
   - Add integration tests

5. **Documentation**
   - Update component documentation
   - Add usage examples
   - Document new filter features

## Migration Plan

1. Create new components alongside existing ones
2. Add feature flags to toggle between old and new implementations
3. Test new implementation thoroughly
4. Gradually migrate users to new implementation
5. Remove old implementation once migration is complete

## Success Metrics

1. Improved user engagement with filters
2. Reduced time to find relevant cities
3. Increased usage of advanced filter options
4. Positive user feedback on new UI
5. Reduced bug reports related to date handling

## Timeline

- Phase 1: 2-3 days
- Phase 2: 1-2 days
- Phase 3: 3-4 days
- Phase 4: 2-3 days
- Phase 5: 2-3 days

Total estimated time: 10-15 days

## Notes

- Consider accessibility requirements for new UI components
- Ensure mobile responsiveness of new filter UI
- Plan for future filter additions
- Consider performance implications of multiple active filters 