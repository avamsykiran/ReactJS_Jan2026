"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_js_1 = __importDefault(require("../db.js"));
const router = (0, express_1.Router)();
// GET /items - Fetch all items
router.get('/', async (_req, res) => {
    try {
        const items = await db_js_1.default.item.findMany();
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});
// GET /items/:itemCode - Fetch a single item by code
router.get('/:itemCode', async (req, res) => {
    const itemCode = Number(req.params.itemCode);
    try {
        const item = await db_js_1.default.item.findUnique({
            where: { itemCode },
        });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch item' });
    }
});
// POST /items - Create a new item
router.post('/', async (req, res) => {
    const { itemName, rate, units, stock } = req.body;
    if (!itemName || rate === undefined || !units || stock === undefined) {
        return res.status(400).json({ error: 'itemName, rate, units, and stock are required' });
    }
    try {
        const newItem = await db_js_1.default.item.create({
            data: {
                itemName,
                rate: Number(rate),
                units,
                stock: Number(stock),
            },
        });
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create item' });
    }
});
// PUT /items/:itemCode - Update an item
router.put('/:itemCode', async (req, res) => {
    const itemCode = Number(req.params.itemCode);
    const { itemName, rate, units, stock } = req.body;
    try {
        const updatedItem = await db_js_1.default.item.update({
            where: { itemCode },
            data: {
                ...(itemName && { itemName }),
                ...(rate !== undefined && { rate: Number(rate) }),
                ...(units && { units }),
                ...(stock !== undefined && { stock: Number(stock) }),
            },
        });
        res.json(updatedItem);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update item or item not found' });
    }
});
// DELETE /items/:itemCode - Delete an item
router.delete('/:itemCode', async (req, res) => {
    const itemCode = Number(req.params.itemCode);
    try {
        await db_js_1.default.item.delete({
            where: { itemCode },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to delete item or item not found' });
    }
});
exports.default = router;
