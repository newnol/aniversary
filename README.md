# Love Memories

This project uses a Mapbox map in the Journey page. To configure the map, create a `.env` file in the project root with your Mapbox token:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token
```

The `.env` file is ignored by git and allows `src/pages/Journey.tsx` to read the token using `import.meta.env.VITE_MAPBOX_TOKEN`.
