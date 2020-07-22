import Vuex from "vuex";

import config from "./config.js";

// Generates a 2d array containing a single value
const new2DArray = (rows, cols, value) => {
    let result = [];

    for (let i = 0; i < rows; i++) {
        result.push(Array(cols).fill(value));
    }

    return result;
}

// Returns a new array with the value at the given index replaced by a new value
const replaceAtIndex = (array, index, value) => {
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index + 1, array.length)
    ];
}

export default new Vuex.Store({
    state: {
        // Represents the dimensions of the board
        rows: config.rows,
        columns: config.columns,

        // Represents the cells used in the game
        cells: new2DArray(config.rows, config.columns, false)
    },

    mutations: {
        // Sets the value of a cell
        setCell(state, { row, column, value }) {
            state.cells = state.cells.map(r => r.map(e => true));
            console.log(state.cells);
        }
    }
});