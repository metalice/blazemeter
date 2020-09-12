export const sorting = (sortingDirection) => (a, b) => (sortingDirection === "desc" ? (a.updated < b.updated ? 1 : -1) : a.updated > b.updated ? 1 : -1);
