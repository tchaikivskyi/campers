# TravelTrucks

Frontend for a camper rental service. You can browse the catalog, filter campers, save the ones you like and book a camper on its page.

## Pages

- `/` — home page with a banner and a link to the catalog
- `/catalog` — list of campers with filters and "Load more"
- `/catalog/:id` — camper page: gallery, details, reviews and a booking form

## Features

- filtering on the backend side by location, camper form, engine, transmission and equipment
- previous results are cleared before every new search
- pagination with the "Load more" button (4 cards per page)
- favorites are saved in localStorage
- booking form with validation and a success notification
- loader and "No campers found" state

## Tech stack

React, Vite, Redux Toolkit, React Router, Axios, CSS Modules, react-hot-toast

API: https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Author

Taras Chaikivskyi
