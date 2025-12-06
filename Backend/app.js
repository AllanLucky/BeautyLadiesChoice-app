import express from "express";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import authRoutes from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import bannerRoute from "./routes/banner.route.js";
import usersRoute from "./routes/user.route.js";
import orderRoute from "./routes/order.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();


// MIDDLEWARE


// Parse JSON body
app.use(express.json());

// Enable CORS
app.use(cors());

// Parse cookies
app.use(cookieParser());

// ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/banners", bannerRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/orders", orderRoute);


// ERROR HANDLING MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

export default app;