import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/banner'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Landian`, `Cloud`, `API`,'Consultancy']} />
    <Banner bannerText='Breaking the monolith'/>
    <section id="welcome">
    <div className="container">
    <div className="row">
        <div className="col-lg-12 text-center">
          <h3 className="service-heading">Welcome to Landian Consultancy</h3>
          <p className="text-muted">Landian helps companies transform and modernise their IT landscape, empowering teams 
            to increase productivity,  reduce costs, an accelerate
        their transition to the Cloud.</p>
        </div>
      </div>
    </div>
    </section>
    <section id="services">
    <div className="container text-center">
      <div className="row ">
          <div className="col-md-6">
          <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-sitemap fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Mono to Micro</h4>
          <p className="text-muted">Our mission is to guide enterprises through the transition from a Monolithic Architecture to a Microservices based architecture, enabling companies to increase scalability, accelerating the pace and reducing the cost of change.</p>
          </div>
          <div className="col-md-6">
          <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-cloud fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Cloud Migration</h4>
          <p className="text-muted">Your cloud migration has a destination, but it isn’t the cloud. It is a state of continuous reinvention. That’s why you should have migration advisors who understand the dynamics of your business and can help you capitalize on new opportunities across your entire cloud journey.</p>
          </div>
      </div>
      <div className="row ">
          <div className="col-md-6">
          <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-code fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">API Driven</h4>
          <p className="text-muted">Take a holistic approach to managing APIs across your enterprise. Our full lifecycle API management platform optimized for API development, analytics processing, and developer management  increases agility and operational efficiency for your business .</p>
          </div>
          <div className="col-md-6">
          <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-bolt fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Accelerate Output</h4>
          <p className="text-muted">DevOps has been proven to increase the speed, efficiency and quality of software delivery as well as improving staff morale and motivation.  Landian can provide your business with the tools, frameworks and guidance to successfully adapt and release the full potential of your teams.</p>
          </div>
      </div>
    </div>
    <hr/>
    </section>
    <section id="quote">
        <div className="container">
          <blockquote className="text-center"><span></span><strong><em>Cloud computing is empowering; companies leveraging cloud will be able to innovate cheaper and faster.</em></strong><span></span></blockquote>
        </div>
    </section>
    <section id="pitch">
    <div className="container text-center">
      <div className="row">
          <div className="col-lg-12 text-center">
              <h3 className="service-heading">Why Landian</h3>
          </div>
      </div>
      <div className="row">
          <div className="col-md-6">
          <p className="text-muted">Our team of consultants are passionate about technology and people.  Our mission is to help enterprises reduce the complexity and increase the flexibility of their IT infrastructure while empowering developers by giving them the tools, platforms and guidance to rapidly increase their productive.</p>
          </div>
          <div className="col-md-6">
          <p className="text-muted">Our team comprises of AWS, Google and Microsoft certified solution architects, who are experienced and certified in the latest software management practices and have a wealth of experience advising enterprises in the financial, medical, e-commerce and telecoms industries.</p>
          </div>
      </div>
    </div>   
    </section>

  </Layout>
)

export default IndexPage
