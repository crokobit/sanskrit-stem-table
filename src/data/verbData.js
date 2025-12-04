import verbDataRaw from '../../verb.json';

export const PERSON_NAMES = ["1st", "2nd", "3rd"];

// Process verb data into a map keyed by ID, similar to DATA in sanskritData.js
export const VERB_DATA = verbDataRaw.reduce((acc, verb) => {
    acc[verb.id] = {
        ...verb,
        // Ensure data structure matches what Table expects (array of rows)
        // verb.json rows have { person: "1st", cells: [...] }
        // We need to map this to just an array of arrays of cell data/strings
        // AND map 'text' to 't' because the app expects 't' for objects
        data: verb.rows.map(row =>
            row.cells.map(cell => {
                if (typeof cell === 'object' && cell !== null) {
                    return {
                        ...cell,
                        t: cell.text, // Map text to t
                        // We can keep 'text' or remove it, keeping it is harmless
                    };
                }
                return cell;
            })
        )
    };
    return acc;
}, {});
