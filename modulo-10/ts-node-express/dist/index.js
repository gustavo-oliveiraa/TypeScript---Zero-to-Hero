"use strict";
/**
 * arquivo: index.ts
 * descrição: arquivo responsável por fazer a chamada da api do Express.js
 * data: 06/11/2024
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('<h1>Hello, Developers! Sejam bem-vindos(as) ao TypeScript com Express.Js!</h1>');
});
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT} `);
});
