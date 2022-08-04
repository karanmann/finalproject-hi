export const PRODUCT_QUERY = `
  query {
    products {
      data {
        attributes {
          Title
          Description
          Price
          Slug
          Image {
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
