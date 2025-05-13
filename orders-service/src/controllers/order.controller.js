import prisma from "../prisma/client.js";
import axios from "axios";  

const USERS_SERVICE_URL = "http://localhost:3001/users"; // URL del conexion a users-service

export const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

export const createOrder = async (req, res) => {
  const { userId, product, quantity } = req.body;

  try {
    // Verificar que el usuario exista consultando users-service
    const userResponse = await axios.get(`${USERS_SERVICE_URL}`);
    const users = userResponse.data;

    const userExists = users.some(user => user.id === userId);

    if (!userExists) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Crear la orden si el usuario existe
    const newOrder = await prisma.order.create({
      data: { userId, product, quantity },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la orden" });
  }
};
