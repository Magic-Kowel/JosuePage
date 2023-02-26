import React from "react";
import { Helmet } from "react-helmet";
const Seo = () =>{
    return(
    <Helmet>
        <title>Josue Fierro Morfin</title>
        <meta 
          name="author" 
          content="Josue Rodrigo Fierro Morfin"></meta>
        <meta 
          name='description' 
          content='Briefcase of software ' />
        <meta name="keywords" 
          content="developer, programador, web developer, inngenierro, sofware" />
        <meta 
          property="og:title" 
          content="Josue Fierro Morfin Software Engineer" />
        <meta 
          property="og:description"
          content="Create your website and fulfill your dreams" />
        <meta 
          name="apple-mobile-web-app-capable"
          content="yes"></meta>
        <meta 
          name="theme-color"
          content="#17a2b8"></meta>
          <meta 
            name="viewport" 
            content="width=device-width, initial-scale=1.0"></meta>
          <meta 
            name="apple-mobile-web-app-title" 
            content="Josue Fierro Morfin Web Developer"></meta>
          <meta name="application-name" content="Josue Fierro Morfin"></meta>
          <meta name="msapplication-TileColor" content="#17a2b8"></meta>
      </Helmet>
    )
}
export default Seo;