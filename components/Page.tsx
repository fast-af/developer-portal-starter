import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Page = ({ data, serverData }) => {
  const { site } = data;
  const { dogImage } = serverData;
  // Use dogImage and site info in your page...
};
export const pageQuery = graphql`
  query PageData {
    site {
      pathPrefix
      host
      siteMetadata {
        siteUrl
      }
    }
  }
`;
export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();
  return {
    props: {
      dogImage: data,
    },
  };
}
export default Page;
