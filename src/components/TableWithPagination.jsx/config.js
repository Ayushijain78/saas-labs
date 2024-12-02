export const formatApiResponse = (data) => {
  return data.map((item) => ({
    sno: item["s.no"],
    amountpledged: item["amt.pledged"],
    percentagefunded: item["percentage.funded"],
  }));
};

export const TABLE_HEADS = ["S.No.", "Percentage funded", "Amount pledged"];

export const TABLE_DETAILS = ["sno", "percentagefunded", "amountpledged"];
