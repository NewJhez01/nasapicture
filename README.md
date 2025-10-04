# NASA Picture of the Day Viewer

# > [!WARNING]

> The Nasa API has been discontinued meaning this website no longer works. Thank the lack of funding from the US Government. I apologize sincerely.

A modern web application that allows users to explore NASA's Astronomy Picture of the Day (APOD) from any date. Built with Next.js 15 and featuring a clean, responsive interface for discovering the cosmos through NASA's daily featured images.

## Features

- **Date Selection**: Interactive date picker to select any date (past or present)
- **NASA APOD Integration**: Direct integration with NASA's official Astronomy Picture of the Day API
- **Database Caching**: Efficient storage and retrieval of picture metadata using PostgreSQL
- **Responsive Design**: Beautiful, modern UI built with Tailwind CSS
- **High-Quality Images**: Access to both standard and high-definition versions of NASA images
- **Metadata Storage**: Comprehensive picture information including titles, explanations, and copyright details

Check it out! <https://nasapicture.vercel.app/>

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **React Query** - Server state management
- **React DatePicker** - Date selection component

### Backend

- **Next.js API Routes** - Serverless backend functions deployed on Vercel
- **Prisma ORM** - Type-safe database operations
- **PostgreSQL** - Robust relational database deployed on Supabase

### Development Tools

- **Biome** - Fast linter and formatter
- **Turbopack** - Ultra-fast bundler
- **date-fns** - Modern date utility library

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── (controller)/
│   │       ├── nasa-picture-of-the-day/    # Fetch today's picture from NASA
│   │       └── url-for-picture/            # Get picture URL by date
│   ├── components/
│   │   ├── button.tsx                      # Reusable button component
│   │   ├── headline.tsx                    # Main heading
│   │   └── subline.tsx                     # Descriptive subtitle
│   ├── hooks/
│   │   └── useFetchPictureMutation.ts      # React Query mutation for API calls
│   ├── layout.tsx                          # Root layout
│   ├── page.tsx                            # Home page
│   └── provider.tsx                        # React Query provider
└── server/
    ├── core/
    │   ├── command/
    │   │   └── savePictureofTheDayCommand.ts   # Save picture data
    │   ├── factory/
    │   │   ├── pictureOfTheDayDtoFactory.ts    # Data transformation
    │   │   └── pictureOfTheDayWriteDto.ts      # Write data structure
    │   └── query/
    │       ├── pictureOfTheDayQuery.ts         # Fetch from NASA API
    │       └── pictureUrlQuery.ts              # Get picture URL from DB
    └── data/
        └── pictureOfTheDayRepository.ts        # Database operations
```

## Setup Instructions

### Prerequisites

- Node.js 18+
- PostgreSQL database
- NASA API key (free from [NASA API Portal](https://api.nasa.gov/))

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nasapicture
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/nasapicture"
   NASA_API_KEY="your_nasa_api_key_here"
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate deploy

   # (Optional) View database in Prisma Studio
   npx prisma studio
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses a simple but effective schema:

```sql
model Picture {
  id          Int    @id @default(autoincrement())
  copyright   String  -- Image copyright information
  date        String  @unique -- Date in YYYY-MM-DD format
  explanation String  -- NASA's description of the image
  hdUrl       String  -- High-definition image URL
  title       String  -- Image title
  url         String  -- Standard resolution image URL
}
```

## API Endpoints

### GET `/api/nasa-picture-of-the-day`

Fetches and stores today's picture from NASA's APOD API.

**Response**: `200 OK` on success, `404` on error

### GET `/api/url-for-picture?date=YYYY-MM-DD`

Retrieves the picture URL for a specific date from the database.

**Parameters**:

- `date` (required): Date in YYYY-MM-DD format

**Response**:

```json
{
  "url": "https://apod.nasa.gov/apod/image/..."
}
```

**Error Responses**:

- `400 Bad Request`: Missing date parameter
- `404 Not Found`: No picture found for the specified date

## How It Works

1. **User Interaction**: Users select a date using the interactive date picker
2. **API Query**: The app queries the database for the picture URL associated with that date
3. **Data Fetching**: If no data exists, the app can fetch from NASA's API (via the background endpoint)
4. **Redirection**: Users are redirected to the actual NASA image URL to view the high-quality image
5. **Caching**: Picture metadata is stored locally for faster subsequent access

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## Environment Variables

| Variable       | Description                  | Required |
| -------------- | ---------------------------- | -------- |
| `DATABASE_URL` | PostgreSQL connection string | true     |
| `NASA_API_KEY` | NASA API key for APOD access | true     |

## 🏗️ Architecture

The application follows clean architecture principles:

- **Presentation Layer**: React components and hooks
- **API Layer**: Next.js API routes acting as controllers
- **Business Logic**: Server-side commands and queries
- **Data Layer**: Prisma repository pattern with PostgreSQL

This separation ensures maintainability, testability, and scalability.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and for personal use.

## 🔗 NASA APOD API

This application uses NASA's Astronomy Picture of the Day API. Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.

- **API Documentation**: [https://api.nasa.gov/](https://api.nasa.gov/)
- **APOD Website**: [https://apod.nasa.gov/apod/](https://apod.nasa.gov/apod/)

---

**Note**: This application requires an active internet connection to fetch images from NASA's servers and a properly configured PostgreSQL database for metadata storage.
