export const PAGE_SIZE = 5;

export const getPaginatedData = (data, pageNumber) => {
  const startIdx = (pageNumber - 1) * PAGE_SIZE;
  const endIdx = pageNumber * PAGE_SIZE;
  return data.slice(startIdx, endIdx);
};

export const getTotalPagesCount = (data) => {
  return Math.ceil(data.length / PAGE_SIZE);
};

export const PAGINATION_ENUM = {
  PREV: "PREV",
  NEXT: "NEXT",
};
