export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;

export const productDefaultValues = {
  name: "",
  slug: "",
  headline: "",
  description: "",
  price: "0",
  rating: "5",
  numReviews: 0,
};

export const reviewFormDefaultValues = {
  title: "",
  comment: "",
  rating: 5,
};

export const MAX_FREE_FROMS = 3;
