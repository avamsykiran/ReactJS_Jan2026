"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const router = (0, express_1.Router)();
// GET /consumers - Fetch all consumers
router.get('/', async (_req, res) => {
    try {
        const consumers = await db_1.default.consumer.findMany();
        res.json(consumers);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch consumers' });
    }
});
// GET /consumers/:cid - Fetch a single consumer by ID
router.get('/:cid', async (req, res) => {
    const cid = Number(req.params.cid);
    try {
        const consumer = await db_1.default.consumer.findUnique({
            where: { cid },
        });
        if (!consumer) {
            return res.status(404).json({ error: 'Consumer not found' });
        }
        res.json(consumer);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch consumer' });
    }
});
// POST /consumers - Create a new consumer
router.post('/', async (req, res) => {
    const { fullName, mobile, mailId } = req.body;
    if (!fullName || !mobile || !mailId) {
        return res.status(400).json({ error: 'fullName, mobile, and mailId are required' });
    }
    try {
        const newConsumer = await db_1.default.consumer.create({
            data: { fullName, mobile, mailId },
        });
        res.status(201).json(newConsumer);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create consumer. Email or Mobile may already exist.' });
    }
});
// PUT /consumers/:cid - Update a consumer
router.put('/:cid', async (req, res) => {
    const cid = Number(req.params.cid);
    const { fullName, mobile, mailId } = req.body;
    try {
        const updatedConsumer = await db_1.default.consumer.update({
            where: { cid },
            data: { fullName, mobile, mailId },
        });
        res.json(updatedConsumer);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update consumer or consumer not found' });
    }
});
// DELETE /consumers/:cid - Delete a consumer
router.delete('/:cid', async (req, res) => {
    const cid = Number(req.params.cid);
    try {
        await db_1.default.consumer.delete({
            where: { cid },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to delete consumer or consumer not found' });
    }
});
exports.default = router;
