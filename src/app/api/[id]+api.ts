import {
  deleteGroceryItem,
  setGroceryItemPurchased,
  updateGroceryItemQuantity,
} from "../app/lib/server/db-actions";

type PatchBody = {
    quantity ?: number;
    purchased ?: boolean;
}

export async function PATCH(request: Request, { id }: { id : string}){
    try{
        const body = (await request.json()) as PatchBody;

        const item = body.quantity
        ? await updateGroceryItemQuantity(id, body.quantity) 
        : await setGroceryItemPurchased (id, body.purchased ?? true)

        return Response.json({ item });     

        return Response.json({ item })
    } catch (error) {
        const message = error instanceof Error ? error.message : "unable to update item";

        return Response.json({ error: message }, { status: 500 });
    }
}

export async function DELETE(_request: Request, {id}: {id : string }){
    try{
        await deleteGroceryItem(id);
        return Response.json({ success: true });
    } catch(error) {
        const message = error instanceof Error ? error.message : "Unable to delete item";

        return Response.json({ error: message }, { status: 500 });
    }
}