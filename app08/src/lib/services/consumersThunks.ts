import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Consumer } from "../models/Consumer";

const consmersEndPoint = "http://localhost:9999/consumers";

export const getAllConsumers = createAsyncThunk<Consumer[],void,{}>(
    "consumers/getAll",
    async () => {
        const resp = await axios.get(consmersEndPoint);
        return resp.data;
    }
);

export const getConsumerById = createAsyncThunk<Consumer,number,{}>(
    "consumers/getById",
    async (cid:number) => {
        const resp = await axios.get(consmersEndPoint+"/"+cid);
        return resp.data;
    }
);

export const addConsumer = createAsyncThunk<Consumer,Consumer,{}>(
    "consumers/add",
    async (c:Consumer) => {
        const resp = await axios.post(consmersEndPoint,c);
        return resp.data;
    }
);

export const updateConsumer = createAsyncThunk<Consumer,Consumer,{}>(
    "consumers/update",
    async (c:Consumer) => {
        const resp = await axios.put(consmersEndPoint+"/"+c.cid,c);
        return resp.data;
    }
);

export const deleteConsumer = createAsyncThunk<number,number,{}>(
    "consumers/delete",
    async (cid:number) => {
        await axios.delete(consmersEndPoint+"/"+cid);
        return cid;
    }
);