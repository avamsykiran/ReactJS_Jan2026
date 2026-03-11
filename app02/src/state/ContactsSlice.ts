import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../models/Contact";

interface ContactState {
    contacts: Contact[];
    selectedContact?:Contact;
}

const initialState: ContactState = {
    contacts: [
        { id: 1, fullName: "Vamsy", mobile: "9999999991", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "Suseela", mobile: "9999999992", mailId: "suseela@gmail.com" },
        { id: 3, fullName: "Indhikaa", mobile: "9999999993", mailId: "indu@gmail.com" },
    ]
};

const ContactsSlice = createSlice({
    name: "ContactsSlice",
    initialState,
    reducers : {
        addContact: (state, action:PayloadAction<Contact>) => {
            state.contacts.push(action.payload)
        },
        updateContact: (state, action:PayloadAction<Contact>) => {
            let index = state.contacts.findIndex(cx => cx.id===action.payload.id);
            if(index>-1){
                state.contacts[index] = action.payload;
            }            
        },
        deleteContact : (state, action:PayloadAction<Number>) => {
            let index = state.contacts.findIndex(cx => cx.id===action.payload);
            if(index>-1){
                state.contacts.splice(index,1);
            }            
        },
        selectContact : (state, action:PayloadAction<Number>) => {
            state.selectedContact = state.contacts.find(cx => cx.id===action.payload);                        
        }
    }
});

const ContactsReducer = ContactsSlice.reducer;

export const { addContact,updateContact,deleteContact,selectContact} = ContactsSlice.actions;
export default ContactsReducer;