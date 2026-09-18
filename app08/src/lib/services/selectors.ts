import type { RootState } from "./appStore";
import { consumerEntityAdapter } from "./consumersSlice";
import { itemsEntityAdapter } from "./itemsSlice";

export const { selectAll: selectAllConsumers, selectById: selectConsumerById} =
    consumerEntityAdapter.getSelectors((state: RootState) => state.consumers);

export const selectConsumerSliceStatus = (state:RootState) => state.consumers.status;
export const selectConsumerSliceErrMsg = (state:RootState) => state.consumers.errMsg;

export const { selectAll: selectAllItems, selectById: selectItemById } =
    itemsEntityAdapter.getSelectors((state: RootState) => state.items);