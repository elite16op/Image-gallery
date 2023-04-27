'use client'

import { createSlice, configureStore } from "@reduxjs/toolkit";

const state = {
    number : 1,
    range : [0,3],
}

const search = {
    text : null,
}

const light = {
    url : null,
    tag : null,
}

const pages = createSlice({
    name : "page",
    initialState : state,
    reducers : {
        set : (initialState, e) => {
            return {...initialState, number:e.payload.n, range : e.payload.range}
        }
    }
})

const searchKey = createSlice({
    name : "keyword",
    initialState : search,
    reducers : {
        find : (initialState, e)=>{
            return {...initialState, text:e.payload}
        }
    }
})

const popup = createSlice({
    name : "popup",
    initialState : light,
    reducers : {
        saveImage : (initialState, e) => {
            return {...initialState, url:e.payload.url, tag:e.payload.tag}
        }
    }
})

export const {set} = pages.actions;
export const {find} = searchKey.actions;
export const {saveImage} = popup.actions;

export const store = configureStore({
    reducer: {
        pages : pages.reducer,
        searchKey : searchKey.reducer,
        popup : popup.reducer,
    }
})
