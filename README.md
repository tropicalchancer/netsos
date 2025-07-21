# Netsos directory

## Overview
Netsos is a platform that tracks and showcases popup cities and temporary communities focused on technology, innovation, and human flourishing. The platform serves as a central hub for discovering, learning about, and potentially joining these unique gatherings that bring together like-minded individuals for collaborative learning and building.

## Core Features

### 1. Popup City Discovery
- Users can browse a grid of popup cities and communities
- Cities are categorized by status: Active Now, Upcoming, and Finished
- Each city card displays key information including:
  - Name and brand
  - Location
  - Dates
  - Tags
  - Brief description

### 2. Popup City Details
- Detailed information for each city including:
  - Full description
  - Amenities
  - Links to websites and applications
  - Location details (coordinates, timezone)
  - Community events and activities

### 3. Categories of Communities
The platform tracks various types of popup cities, including:
- Technology-focused gatherings (Ethereum, ZKP, Web3)
- Innovation hubs
- Co-learning communities
- Creator economy events
- Sustainability initiatives

## Core User Flow

1. **Landing Page**
   - Users arrive at the main page showing a grid of popup cities
   - Quick overview of active and upcoming cities
   - Filtering and search capabilities

2. **City Exploration**
   - Browse through different cities
   - Filter by status, location, or tags
   - View detailed information about each city

3. **City Details**
   - Access comprehensive information about specific cities
   - View amenities and available resources
   - Check dates and application deadlines
   - Access relevant links and applications

4. **Application Process**
   - Direct links to city applications
   - Information about requirements and deadlines
   - Community guidelines and expectations

## Technical Stack
- Next.js 15.1.1
- TypeScript
- Tailwind CSS
- Three.js for potential 3D visualizations
- Modern UI components (Radix UI)
- Responsive design for all devices
- Google Sheets as database (via Google Apps Script API)

## Database Architecture

### Google Spreadsheet as Database
The application uses a Google Spreadsheet as its primary database, with the following implementation:

1. **Data Source**: 
   - All popup city data is stored in a Google Spreadsheet
   - The spreadsheet schema matches the `PopupCity` type defined in the application
   - Each row represents a single popup city entry

2. **API Layer**:
   - A Google Apps Script is bound to the spreadsheet
   - The script has a `doGet` function that reads all rows and transforms them into JSON
   - The script is deployed as a web app with public access
   - The deployed URL is stored in `.env.local` as `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`

3. **Data Fetching**:
   - The `CitiesService` class handles fetching data from the Google Apps Script API
   - Data is cached for 60 seconds to improve performance
   - Cache-busting is implemented to ensure fresh data in development

4. **Required Fields**:
   - `name`: City name
   - `startDate` and `endDate`: Event duration
   - `brand`: Associated brand or organization
   - `tagline`: Brief description
   - `tags`: Comma-separated list of tags
   - `location.city` and `location.country`: Location information
   - `description`: Detailed description
   - `timezone`: Important for date calculations
   - `coordinates.latitude` and `coordinates.longitude`: Geographic coordinates
   - `links.website`: Website URL
   - `amenities`: Comma-separated list of amenities
   - `isPublished`: Boolean (TRUE/FALSE) to control visibility

5. **Optional Fields**:
   - Cover image information
   - Additional links (Twitter, Discord, etc.)
   - Notes and estimated price ranges

### Important Notes for Database Management

1. **Adding/Editing Data**:
   - Open the Google Spreadsheet to add or edit entries
   - For new entries, ensure all required fields are filled
   - For boolean fields like `isPublished`, use `TRUE`/`FALSE` or `1`/`0`
   - For array fields like `tags`, use comma-separated values

2. **Deployment Requirement**:
   - **IMPORTANT**: When changes are made to the spreadsheet, the application needs to be redeployed on Vercel for the changes to appear in production
   - This is due to Next.js static rendering and caching behavior in production
   - In development mode, changes will appear after the cache expires (60 seconds)

3. **Best Practices**:
   - Don't change column headers unless you also update the code
   - Use Google Sheets' data validation features to prevent bad data
   - The API is public, so avoid storing sensitive information
   - Consider backing up the spreadsheet periodically

## Target Audience
- Technology enthusiasts
- Community builders
- Innovators and entrepreneurs
- Digital nomads
- People interested in network states and popup cities
- Developers and creators looking for collaborative spaces

## Unique Value Proposition
NetSOS serves as a comprehensive directory and discovery platform for temporary communities and popup cities, making it easier for people to find and join these unique gatherings that foster innovation, collaboration, and human connection.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```