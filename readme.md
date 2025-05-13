# 🧩 Microservicios Node.js – Users & Orders

Este proyecto contiene dos microservicios independientes desarrollados en **Node.js** con **Express**:  
- `users-service` – Gestión de usuarios.  
- `order-service` – Gestión de órdenes.  

Ambos servicios pueden ejecutarse de forma local y usan **Prisma** con **MySQL** como base de datos.

---


## ⚙️ Requisitos Previos

- Node.js ≥ 18
- MySQL corriendo localmente o en un servidor
- npm ≥ 9

---

## 🚀 Instrucciones para Levantar los Servicios

### Clonar el Repositorio

```bash
git clone git@github.com:Cpietro87/Node-Microservicio.git
cd Node-Microservicio

## Levantar el users-service
cd users-service

# Instalar dependencias
npm install

# Inicializar Prisma (solo la primera vez)
npx prisma generate
npx prisma migrate dev --name init

# Levantar el servidor
npm run dev

#.env ejemplo
DATABASE_URL="mysql://usuario:password@localhost:3306/users_db"

# Levantar el order-service

cd ../order-service

# Instalar dependencias
npm install

# Inicializar Prisma (solo la primera vez)
npx prisma generate
npx prisma migrate dev --name init

# Levantar el servidor
npm run dev
# .env ejemplo order-service
DATABASE_URL="mysql://usuario:password@localhost:3306/orders_db"

