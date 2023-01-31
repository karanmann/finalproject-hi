export const PRODUCT_QUERY = `
  query {
    products (sort: "createdAt:desc", pagination: { limit: 60 }){
      data {
        attributes {
          title
          description
          availibility
          price
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
          
        }
      }
    }
  }
`;

export const GET_PRODUCT_QUERY = `
query getProduct($slug: String!) {
  products(filters: {slug: {eq: $slug}}){
    data{
      attributes {
        title,
        slug,
        description,
        availibility,
        price,
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const TICKER_COL_ONE = `
query {
  products (sort: "createdAt:desc", pagination: { limit: 10, start:0 }){
    data {
      attributes {
        title
        description
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
        
      }
    }
  }
}
`;

export const TICKER_COL_TWO = `
query {
  products (sort: "createdAt:asc", pagination: { limit: 10, start:10 }){
    data {
      attributes {
        title
        description
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const TICKER_COL_THREE = `
query {
  products (sort: "createdAt:asc", pagination: { limit: 10, start:0 }){
    data {
      attributes {
        title
        description
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
        
      }
    }
  }
}
`;

export const TICKER_COL_FOUR = `
query {
  products (sort: "createdAt:desc", pagination: { limit: 10, start:20 }){
    data {
      attributes {
        title
        description
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
        
      }
    }
  }
}
`;

export const TICKER_COL_FIVE = `
query {
  products (sort: "createdAt:desc", pagination: { limit: 10, start:10 }){
    data {
      attributes {
        title
        description
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
        
      }
    }
  }
}
`;
