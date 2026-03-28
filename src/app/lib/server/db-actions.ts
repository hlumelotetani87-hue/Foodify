// queries allow us to fetch data from the database
import { desc, eq } from "drizzle-orm";
import { db } from "./db/client";
import { groceries } from "./db/schema";

export const listGroceryItems = async () => {
    const rows = await db.select().from(groceries).orderBy(desc(groceries.updated_at));

    return rows;
}

export const createGroceryItem = async (input:{
    name: string;
    category: string;
    quantity: number;
    priority: string;
}) => {
    const rows = await db.insert(groceries).values({
        id: crypto.randomUUID(),
        name: input.name,
        category: input.category,
        quantity: Math.max(1, input.quantity),
        purchased: false,
        priority: input.priority,
        updated_at: Date.now()
        }).returning();

        return rows[0];
};

export const setGroceryItemPurchased = async (id:string, purchased:boolean) => {
    const rows = await 
    db.update(groceries)
    .set({ purchased, updated_at: Date.now() })
    .where(eq(groceries.id, id)).returning();

    if (!rows.length) return null;

    return rows[0];
};

export const updateGroceryItemQuantity = async (id: string, quantity: number) => {
    const rows = await db
    .update(groceries)
    .set({ quantity: Math.max(1, Math.floor(quantity)), updated_at: Date.now() })
    .where(eq(groceries.id, id))
    .returning();
    
    if (!rows.length) return null;
    return rows[0];
};

export const deleteGroceryItem = async (id:string) => {
    await db.delete(groceries).where(eq(groceries.id, id))
}

export const clearPurchasedItems = async () => {
    await db.delete(groceries).where(eq(groceries.purchased, true))
}