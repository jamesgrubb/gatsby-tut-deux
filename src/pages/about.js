import React from "react"
import { Container } from "../components/container"
import styles from "./about.module.css"

const User = props => (
  <>
    <div className={styles.user}>
      <div className={styles.avatar}>
        <div className={styles.imageWrapper}>
          <img src={props.src} alt={props.alt} />
        </div>
      </div>
      <div className={styles.description}>
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
          perferendis.
        </p>
      </div>
    </div>
  </>
)

const AboutPage = props => (
  <Container>
    <h1>About</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      iusto?
    </p>
    <User
      src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      alt="adellecharles"
      title="adellecharles"
    />
    <User
      src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      alt="adellecharles"
      title="adellecharles"
    />
    <User
      src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      alt="adellecharles"
      title="adellecharles"
    />
  </Container>
)

export default AboutPage
