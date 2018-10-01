import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

class IndiaPage extends React.Component {
  render() {
    return (
      <Layout>
        <Img
          fluid={this.props.data.bridges.childImageSharp.fluid}
        />
      </Layout>
    );
  }
}

export default IndiaPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    bridges: file(relativePath: { eq: "bridges.jpg" }) {
      ...fluidImage
    }
  }
`

