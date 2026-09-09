import type { RootState } from "./appStore";

export const selectAllConsumers = (state:RootState) => state.consumers.consumers
//export const selectConsumerById = (state:RootState,id:number) => state.consumers.consumers.find(cx => cx.cid===id);
export const selectConsumerById = (id:number) => (state:RootState) => state.consumers.consumers.find(cx => cx.cid===id);

export const selectAllItems = (state:RootState) => state.items.items
//export const selectItemById = (state:RootState,id:number) => state.items.items.find(ix => ix.itemCode===id);
export const selectItemById = (id:number) => (state:RootState) => state.items.items.find(ix => ix.itemCode===id);