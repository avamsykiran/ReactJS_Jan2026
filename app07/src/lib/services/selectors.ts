import type { RootState } from "./appStore";
import { consumerEntityAdapter } from "./consumersSlice";
import { itemsEntityAdapter } from "./itemsSlice";

export const { selectAll: selectAllConsumers, selectById: selectConsumerById} =
    consumerEntityAdapter.getSelectors((state: RootState) => state.consumers);

export const { selectAll: selectAllItems, selectById: selectItemById } =
    itemsEntityAdapter.getSelectors((state: RootState) => state.items);