import React from "react"
import Layout from "../components/layout"
import NavigationLayout from "../components/navigationComponent"
import styles from "../components/customeStyles.module.css"

import SEO from "../components/seo"

import MaxOMaticFirstWork from "../components/MaxComponents/maxImg2"
import MaxOMaticSecondWork from "../components/MaxComponents/maxImg3"
import MaxOMaticThirdWork from "../components/MaxComponents/maxImg4"

const MaxOMaticContent = () => (
  <Layout>
    <SEO title="Max-O-Matic work" />
    <h1 style={{color: `white`}}>Max-O-Matic</h1>
    <p style={{color: `white`}}>Su trabajo se caracteriza por recortes que componen una obra.</p>
    <div style = {{maxWidth: `500px`, padding: `10px`, margin: `0 auto`}}>
      <div className={styles.polygonClipRhomboid} style={{margin: `5% 0`}}>
        <MaxOMaticFirstWork />
      </div>
      <div style={{margin: `5% 0`}}>
      <MaxOMaticSecondWork />
      </div>
      <div style={{margin: `5% 0`}}>
      <MaxOMaticThirdWork />
      </div>
    </div>
    <NavigationLayout previousPath="/palomaWork" previousTo="Paloma Rincón" homePath="/" homeTo="Volver al inicio" nextPath="/alexWork" nextTo="Alex Trochut"/>
  </Layout>
)

export default MaxOMaticContent
