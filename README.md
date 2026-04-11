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
