import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const NewsletterStyles = styled("section")`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  p {
    margin-bottom: 3rem;
  }

  input {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 0.5rem;
    font-family: "Raleway", sans-serif;
  }

  @media screen and (min-width: 768px) {
    input {
      display: inline-block;
      width: 50%;
    }
  }

  @media screen and (min-width: 1000px) {
    form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.25rem;
    }

    input {
      width: 100%;
      margin: 0;
    }
  }
`

const Newsletter = () => (
  <Layout>
    <NewsletterStyles>
      <div className="section-container">
        <h4>Get new dope recipes to your inbox</h4>
        <p>New content weekly</p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="name" placeholder="Your name" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <button type="submit" className="btn btn-center">
            Subscribe
          </button>
        </form>
      </div>
    </NewsletterStyles>
  </Layout>
)

export default Newsletter
