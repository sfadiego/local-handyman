# Database

Description of the database schema and tables

### `users`

Tabla central de la plataforma. Almacena clientes y maestros en un solo lugar usando el campo `role` (`client`, `provider`, `both`). Un usuario puede ser ambos sin duplicar registros. Los campos `lat`, `lng` y `city` habilitan la búsqueda por proximidad.

### `provider_profiles`

Extensión 1-a-1 de `users`, solo existe para maestros. Se mantiene separada para no contaminar la tabla de usuarios con campos irrelevantes para clientes (tarifa, categoría, años de experiencia). Aquí vive el modelo de precio del maestro: `hourly`, `fixed` o `quote`.

### `service_requests`

El núcleo del negocio. Representa cada trabajo solicitado y lleva su ciclo de vida completo: `pending → accepted → in_progress → completed → paid`. El campo `pricingSnapshot` congela el modelo de precio al momento de crear la solicitud, por si el maestro cambia su tarifa después.

### `quotes`

Solo aplica para el modelo `quote`. Cuando el maestro necesita ver el trabajo antes de dar precio, esta tabla guarda la oferta formal: monto, alcance y fecha de expiración. El cliente la acepta o rechaza. Si acepta, `service_requests.agreedPrice` se actualiza y el trabajo avanza.

### `reviews`

Calificaciones al terminar un trabajo. Usa `reviewer_id` y `reviewee_id` para soportar reseñas en ambas direcciones (cliente → maestro y maestro → cliente). Relación 1-a-1 con `service_requests` para evitar calificar el mismo trabajo dos veces.

### `messages`

Chat entre cliente y maestro, ligado a una `service_request` específica. Al estar atado a la solicitud (no a los usuarios directamente), los permisos de acceso son simples: solo las dos partes del trabajo pueden leer esos mensajes.

### `payments`

Registra la transacción al cerrar un trabajo. Guarda tres montos: `amount` (lo que paga el cliente), `platform_fee` (comisión de Oficio) y `provider_payout` (lo que recibe el maestro). El campo `hours_worked` permite recalcular el total en modelo `hourly` si las horas reales difieren de las estimadas.

### `notifications`

Bandeja de avisos en tiempo real del dashboard. Tabla ligera que registra eventos del sistema ("maestro en camino", "cotización recibida", "nueva reseña") con un flag `is_read`. No es un sistema de mensajería — para eso existe `messages`.
