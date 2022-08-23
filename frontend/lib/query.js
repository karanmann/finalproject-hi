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
