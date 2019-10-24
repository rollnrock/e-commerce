import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';

// Category Section Images
import productCatImg from '../assets/images/product_cat_img_01.jpg';
import productCatImg2 from '../assets/images/product_cat_img_02.jpg';
import productCatImg3 from '../assets/images/product_cat_img_03.jpg';

// Feature Icon Images
import freatureIcon1 from '../assets/images/feature_icon_img_01.png';
import freatureIcon2 from '../assets/images/feature_icon_img_02.png';
import freatureIcon3 from '../assets/images/feature_icon_img_03.png';
import freatureIcon4 from '../assets/images/feature_icon_img_04.png';

//Payment Icon Images
import paypalIcon from '../assets/images/paypal_icon_img.png';
import masterCardIcon from '../assets/images/master_card_icon_img.png';
import visaIcon from '../assets/images/visa_icon_img.png';

//Carousel Images
import carouselItem1 from '../assets/images/partners_logo_img_01.png';
import carouselItem2 from '../assets/images/partners_logo_img_02.png';
import carouselItem3 from '../assets/images/partners_logo_img_03.png';
import carouselItem4 from '../assets/images/partners_logo_img_04.png';
import carouselItem5 from '../assets/images/partners_logo_img_05.png';
import carouselItem6 from '../assets/images/partners_logo_img_06.png';


const Home = () => {
  return (<>

    <div className="allWrapper">
      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container>
          <Row className="justify-content-between">
            <Col>
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header userHeader clearfix" id="header">
        <Container>
          <Row className="align-items-center">
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}

            <Col>
              <nav className="mainMenu mainNav" id="mainNav">
                <ul className="navTabs">
                  <li>
                    <Link to="#" className="active">Home</Link>
                  </li>{/* end of li */}
                </ul>{/* end of navTabs */}

              </nav>{/* end of Nav */}
              <Link to="#" className="generalLink" id="responsiveMainNavToggler"><i className="fa fa-bars"></i></Link>
              <div className="clearfix"></div>
              <div className="responsiveMainNav"></div>{/* end of Nav */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between align-items-center">
                  <li><Link to="/"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="/"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li><Link to="/"><i className="far fa-user"></i> Login</Link></li>
                </ul>{/* end of headPopBarList */}
              </div>{/* end of headPopBar */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}

      <main className="mainContent clearfix" id="mainContent">
        <section className="productCat secGap clearfix" id="productCat">
          <Container>
            <Row>

              <Col sm="4">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <Link to="#"><img src={productCatImg} alt="" /></Link>
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <Link to="#"><h3 className="productCatTitle">Kindergarten</h3></Link>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Col>{/* end of Col */}

              <Col sm="4">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <Link to="#"><img src={productCatImg2} alt="" /></Link>
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <Link to="#"><h3 className="productCatTitle">Primary school</h3></Link>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Col>{/* end of Col */}
              
              <Col sm="4">
                <Card className="productCatCard">
                  <div className="productCatMedia">
                    <Link to="#"><img src={productCatImg3} alt="" /></Link>
                  </div>{/* end of productCatMedia*/}
                  <Card.Body className="text-center">
                    <Link to="#"><h3 className="productCatTitle">Secondary school</h3></Link>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of productCatCard */}
              </Col>{/* end of Col */}
              
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of productCat */}

        <section className="ourBenefits clearfix secGap bgGray" id="ourBenefits">
          <Container>
            <Row>
              <Col>
                <h2 className="sectionTitle mb-5 text-center">Our <span>benefits</span></h2>
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}

            <Row>

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon1} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>Fast delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon2} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>LOREM IPSUM</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon3} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>Dolor set amet</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

              <Col sm="3">
                <Card className="singleFeature pt-3 pb-3 border-0">
                  <div className="featureMedia text-center">
                    <img src={freatureIcon4} alt="" />
                  </div>{/* end of featureMedia */}
                  
                  <Card.Body className="text-center">
                    <h4>Adipiscing vero</h4>
                    <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}

            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourBenefits */}

        <section className="ourPartners clearfix secGap" id="ourPartners">
          <Container>
            <Row>
              <Col>
                <div className="partnersCarousel">
                  <ul className="d-flex partnerCarouselItem align-items-center justify-content-between">
                    <li className="item"><img src={carouselItem1} alt="" /></li>
                    <li className="item"><img src={carouselItem2} alt="" /></li>
                    <li className="item"><img src={carouselItem3} alt="" /></li>
                    <li className="item"><img src={carouselItem4} alt="" /></li>
                    <li className="item"><img src={carouselItem5} alt="" /></li>
                    <li className="item"><img src={carouselItem6} alt="" /></li>
                  </ul>{/* end of partnerCarousel */}
                </div>{/* end of partnersCarousel */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of ourPartners */}

        <section className="mailSubscribe clearfix sectionGgImage sectionBgImg01 secGap" id="mailSubscribe">
          <Container className="container">
            <Row className="justify-content-center">
              <Col sm="10">
                <Card className="subscribeCard border-0 rounded-0">
                  <Card.Body className="text-center pt-5 pb-5">
                    <h1>Subscribe to our newsletter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> enim ipsam voluptatem quia voluptas quia non numquam eius</p>
                    
                    <Form className="d-flex subscribeForm justify-content-center mt-3">

                      <Form.Group controlId="mailSubscribe" className="mb-2">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>{/* end of Form.Group */}

                      <Button type="submit" className="mb-2">Subscribe</Button>

                    </Form>{/* end of Form */}
                  </Card.Body>{/* end of Card.Body */}
                </Card>{/* end of Card */}
              </Col>{/* end of Col */}
            </Row>{/* end of Row */}
          </Container>{/* end of Container */}
        </section>{/* end of mailSubscribe */}

      </main>{/* end of mainContent */}

      <footer className="footer clearfix bg-white pt-5 pb-5" id="footer">
        <Container>
          <Row>
            <Col>
              <div className="footerWidget">
                <div className="footerLogo">
                  <div className="logoWrapper">
                    <h1 className="logoText"><Link to="#">LOGO</Link></h1>
                  </div>{/*  end of logoWrapper */}
                </div>{/*  end of footerLogo */}
              </div>{/*  end of footerWidget */}
            </Col> {/*  end of col */}

            <Col sm="5">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Information</h4>
                <ul className="footerLinksList">
                  <li><Link to="#">Order status</Link></li>
                  <li><Link to="#">How to place an order</Link></li>
                  <li><Link to="#">Return</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Delivery details</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Our support center</Link></li>
                </ul>{/*  end of footerLinksList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col sm="2">
              <div className="footerWidget">
                <h4 className="footerWidgetHeader">Contact us</h4>
                <ul className="getInTouchList">
                  <li>
                    <Link to="mailto:you@example.com" title="click to mail us">you@example.com</Link>
                  </li>{/*  end of li */}
                  <li>
                    <Link to="tele:1234567890" title="click to call us">+(123) 456 7890</Link>
                  </li>{/*  end of li */}
                  <li>
                    <p>Your long address, city, region, zip code</p>
                  </li>{/*  end of li */}
                </ul>{/*  end of getInTouchList */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

            <Col className="align-self-center">
              <div className="footerWidget">
                <ul className="footerSocial">
                  <li className="facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li className="facebook"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li className="facebook"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                </ul>{/*  end of footerSocial */}
              </div>{/*  end of footerWidget */}
            </Col>{/*  end of col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </footer>{/* end of footer */}

      <div class="footerBottom clearfix pb-3" id="footerBottom">
        <Container>
          <hr class="hrBorder" />
          <Row class="align-items-center justify-content-between">
            <Col>
              <p class="copyrights">© 2019 All Rights Reserved</p>
            </Col>{/* end of Col */}

            <Col sm="3">
              <ul class="paymentsNav d-flex justify-content-between align-items-center">
                <li class="paypal">
                  <Link to="#" title="paypal"><img alt="paypal" src={paypalIcon} title="paypal" /></Link>
                </li>{/* end of li */}
                <li class="visa">
                  <Link href="#" title="visa"><img alt="visa card" src={visaIcon} title="visa card" /></Link>
                </li>{/* end of li */}
                <li class="master">
                  <Link to="#" title="master card"><img alt="master card" src={masterCardIcon} title="master card" /></Link>
                </li>{/* end of li */}
              </ul>{/* end of paymentsNav */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of footerBottom */}

    </div>{/* end of allWrapper */}
    
  </>);
}

export default Home;

