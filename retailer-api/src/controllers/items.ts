import { Router, Request, Response } from 'express';
import prisma from '../db.js';

const router = Router();

// GET /items - Fetch all items
router.get('/', async (_req: Request, res: Response) => {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET /items/:itemCode - Fetch a single item by code
router.get('/:itemCode', async (req: Request, res: Response) => {
  const itemCode = Number(req.params.itemCode);
  try {
    const item = await prisma.item.findUnique({
      where: { itemCode },
    });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// POST /items - Create a new item
router.post('/', async (req: Request, res: Response) => {
  const { itemName, rate, units, stock } = req.body;

  if (!itemName || rate === undefined || !units || stock === undefined) {
    return res.status(400).json({ error: 'itemName, rate, units, and stock are required' });
  }

  try {
    const newItem = await prisma.item.create({
      data: {
        itemName,
        rate: Number(rate),
        units,
        stock: Number(stock),
      },
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create item' });
  }
});

// PUT /items/:itemCode - Update an item
router.put('/:itemCode', async (req: Request, res: Response) => {
  const itemCode = Number(req.params.itemCode);
  const { itemName, rate, units, stock } = req.body;

  try {
    const updatedItem = await prisma.item.update({
      where: { itemCode },
      data: {
        ...(itemName && { itemName }),
        ...(rate !== undefined && { rate: Number(rate) }),
        ...(units && { units }),
        ...(stock !== undefined && { stock: Number(stock) }),
      },
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update item or item not found' });
  }
});

// DELETE /items/:itemCode - Delete an item
router.delete('/:itemCode', async (req: Request, res: Response) => {
  const itemCode = Number(req.params.itemCode);
  try {
    await prisma.item.delete({
      where: { itemCode },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete item or item not found' });
  }
});

export default router;