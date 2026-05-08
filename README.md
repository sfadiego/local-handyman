# local-handyman

market place de servicios locales

## Database

To create the database, run:

```bash
pnpm dlx prisma migrate dev --name {nombre_migracion}
```

To generate the client, run:

```bash
pnpx prisma generate
```

To validate the schema, run:

```bash
pnpx prisma validate
```

To format the schema, run:

```bash
pnpx prisma format
```

To reset the database, run:

```bash
pnpx prisma migrate reset
```

to seed database, run:

```bash
pnpx prisma db seed
```

To push the database, run:

```bash
pnpx prisma db push
```

# Docker

configura el archivo .env con las variables de entorno necesarias para docker

```
docker compose up -d
```

# project scafolding

```
local-handyman/
├── prisma/               # Esquema y migraciones de base de datos
├── public/               # Archivos estáticos (imágenes, fuentes)
├── src/
│   ├── actions/          # Server Actions (separados por entidad: user.ts, job.ts)
│   ├── app/              # App Router (Rutas, layouts, loading, error)
│   ├── components/
│   │   ├── ui/           # Componentes base (Botones, inputs - estilo shadcn/ui)
│   │   ├── forms/        # Componentes de formularios específicos
│   │   └── shared/       # Componentes reutilizables en todo el sitio
│   ├── contexts/         # React Contexts (Auth, UI State)
│   ├── hooks/            # Custom hooks (useMediaQuery, useLocalStorage)
│   ├── lib/              # Configuraciones de terceros (prisma.ts, stripe.ts, utils.ts)
│   ├── models/           # (Opcional) Clases o lógica de negocio pura
│   ├── services/         # Capa de datos extra (Consultas complejas de Prisma)
│   ├── types/            # Interfaces y tipos de TypeScript (.d.ts o .ts)
│   └── utils/            # Funciones puras de ayuda (formateo de fechas, moneda)
├── .env
├── middleware.ts         # Lógica de protección de rutas
└── next.config.mjs
```
