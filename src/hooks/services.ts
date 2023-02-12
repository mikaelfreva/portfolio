import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9fdxv1h0yzq01t40y96ebje/master'
);

export const QUERY = gql`
{
  stacks {
    id
    color {
      hex
    }
    name
    url
    image {
      url
    }
  }
  services {
    
    id
    name
    subtitle
    description
    image {
      url
    }
    urlBrut
  }

  skills {
    skill
    id
    type
    url
    image {
      url
    }
  }

  projects {
    id
    description
    demo
    slug
    sourceCode
    title
  
    projectTypes {
      name
    }
    image {
      url
    }
  }

  projectTypes {
    name
  }

  

  realisations {
    name
    demoLink
    description
    githubLink
    id
    image {
      url
    }
    realisationTypes {
      name
    }
  }
  
  
}
`;
