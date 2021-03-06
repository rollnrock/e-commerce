import React ,{useState,useEffect} from 'react';
import {Container, Row, Col, Form, Badge, Collapse, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../assets/css/heder.css';
import { useMediaQuery } from 'react-responsive';


const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 992 })
  return isNotMobile ? children : null
}




function HeaderComponent() {

  const [open, setOpen] = useState(false);

  const [cart, setCart] = useState(localStorage.getItem('session'))
  useEffect(()=>cart==!null ? setCart(cart.length) : setCart(0))

    return(
    <>
      <Default>
      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container>
          <Row className="justify-content-between">
            <Col className="col-auto">
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>
            </Col>

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li className="customer-support"><Link to="#"> <i className="fas fa-headset"></i> <span>Customer support</span></Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <header className="header clearfix" id="header">
        <Container>
          <Row className="align-items-center">
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="/">LOGO</Link></h1>
              </div>
            </Col>

            <Col sm="6">
              <div className="headerNav clearfix" id="headerNav">
                <nav className="navbar navbar-expand-lg  bg-white">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/kindergarten">Kindergarten <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/primary-school">Primary school</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/secondary-school">Secondary school</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/stationery">Stationery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/bibles">Bibles</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </Col>

            <Col sm="4">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between">
                  <li>
                    <div className="input-group">
                      <Link to="#" onClick={() => setOpen(!open)} aria-controls="SearchBarMenu" aria-expanded={open} ><i className="fa fa-search"></i> Search</Link>
                    </div>
                  </li>
                  <li><Link to="/favorites"><span className="cartBadge"><i className="far fa-star"></i><Badge variant="danger">10</Badge></span> Favorites</Link></li>
    <li><Link to="/cart"><span className="cartBadge"><i className="fas fa-shopping-cart"></i> <Badge variant="primary">{cart}</Badge></span> Cart</Link></li>
                  <li><Link to="/login"><i className="far fa-user"></i> Login</Link></li>
                  {/* <li><Link to="#"><span className="loginUserAvater">SS</span> Sam Smith</Link></li> */}
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Collapse in={open} >
                <div  className="searchBarNew">
                  <div id="SearchBarMenu">
                    <Form.Control type="text" className="shadow-none" placeholder="Search" />
                    <span onClick={() => setOpen(false)}><i className="fas fa-times"></i></span>
                  </div>
                </div>
              </Collapse>

            </Col>
          </Row>
        </Container>
      </header>
      </Default>
        </>
    )
}





  function MobileHeader () {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     return(<>
       <Mobile>
        <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
          <Container>
            <Row className="justify-content-between">
              <Col className="col-auto">
                <div className="headFeature">
                  <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
                </div>
              </Col>

              <Col className="col-auto">
                <div className="headFeature">
                  <ul className="headFeatureList d-flex justify-content-between">
                    <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                    <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                    <li><Link to="#"> <i className="fas fa-headset"></i> <span>Customer support</span></Link></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
         <header className="header clearfix" id="header">
           <Container>
             <Row className="align-items-center justify-content-between">
               <Col className="col-auto">
                 <div className="logoWrapper">
                   <h1 className="logoText"><Link to="/">LOGO</Link></h1>
                 </div>
               </Col>

               <Col className="col-auto">
                 <div className="headPopBar clearfix" id="headPopBar">
                   <ul className="headPopBarList d-flex align-items-center">
                     <li>
                       <div className="input-group searchbar">
                         <Link to="#" onClick={() => setOpen(!open)} aria-controls="SearchBarMenu" aria-expanded={open}><i
                             className="fa fa-search"></i> Search</Link>
                       </div>
                     </li>
                     <li><Link to="#"><span className="cartBadge"><i className="fas fa-shopping-cart"></i> <Badge
                         variant="primary">10</Badge></span> Cart</Link></li>
                      {/* <li><Link to="#" className="loginUser"><span className="loginUserAvater">SS</span> <span className="loginuserName">Sam Smith</span> </Link></li> */}
                     <li>
                       <div className="mobileNavModal">
                         <span onClick={handleShow}><i className="fas fa-bars"></i></span>
                       </div>
                     </li>
                   </ul>
                 </div>

               </Col>
             </Row>

             <Row>
               <Col>
                 <Collapse in={open}>
                   <div className="searchBarNew">
                     <div id="SearchBarMenu">
                       <Form.Control type="text" className="shadow-none" placeholder="Search"/>
                       <span onClick={() => setOpen(false)}><i className="fas fa-times"></i></span>
                     </div>
                   </div>
                 </Collapse>
               </Col>
             </Row>
           </Container>
         </header>

         <Modal show={show} onHide={handleClose}>
           <Modal.Header className="ModaCloseBtn" closeButton></Modal.Header>
           <Modal.Body>
             <ul className="mobileNav">
               <li><Link to="/kindergarten">Kindergarten </Link></li>
               <li><Link to="/primary-school">Primary school </Link></li>
               <li><Link to="/secondary-school">Secondary school </Link></li>
               <li><Link to="/stationary">Stationery </Link></li>
               <li><Link to="/bibles">Bibles </Link></li>
             </ul>

             <hr className="borderHr" />

             <ul className="mobileNav userMbNav">
               <li className="active"><Link to="/order"><i class="fas fa-clipboard-list"></i> My orders </Link></li>
               <li><Link to="/payment-method"><i class="fas fa-wallet"></i> Payment methods </Link></li>
               <li><Link to="/profile-settings"><i class="fas fa-cog"></i> Profile settings </Link></li>
               <li><Link to="/email-subscription"><i class="far fa-envelope"></i> Email subscription </Link></li>
             </ul>
           </Modal.Body>
           <Modal.Footer className="modal-footer-btn-group pt-4 pb-4 pl-1 pr-1">
             <Col>
               <Link to="/login" className="btn btn-border">Login</Link>
             </Col>
             <Col>
               <Link to="/favorites">
                 <span className="cartBadge">
                 <i className="far fa-star"></i><span className="badge badge-danger">10</span></span> Favorites
               </Link>
             </Col>
           </Modal.Footer>
         </Modal>
        </Mobile>
     </>)
  }

export {
    HeaderComponent,
    MobileHeader
}
