 import React, { useState ,useEffect } from "react";
import { connect } from 'react-redux'
import { Container, Modal, Button, Row, Col } from "react-bootstrap";
import { Link , useParams } from "react-router-dom";

import { showSingleBook } from '../redux/actions/bookActions'
import { addToCart } from '../redux/actions/shopActions'


import FooterComponent from "../components/FooterComponent/FooterComponent";
import { NewsLetterComponent } from "../components/offerPageComponents/NewsLetterComponent";
import { ImgSlick } from "../components/offerPageComponents/NewBookComponent";
import { ImageCarousel } from "../components/ProductImgCarosellComponents/ProductImgCarosell";
import {HeaderComponent, MobileHeader} from "../components/header/Header";
import TabComponent from "../components/TabComponent/TabComponent";
import RatingComponent from "../components/ratingComponent/Rating";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { URL } from '../constants/config';

import "../pages/assets/product.css";

function ProductPage(props) {

  const { id } = useParams();

  const [show, setShow] = useState(false);

  const book = (props.book !== undefined ) ? props.book : false;


  useEffect(() => {
    return props.showSingleBook(id);
  }, []);

  const handleClose = () => setShow(false);

  const updateItemQty = (e) => {
    book.quantity = Number(e.target.value)
  }

  const addToCart = (e) => {
    e.preventDefault();
    props.addToCart(book);
    setShow(true);
  };


  return (
    <>
      <div className="allWrapper">
        <HeaderComponent cartItem = { props.totalItems } />
        <MobileHeader />
        <main className="mainContent clearfix" id="mainContent">
          <section
            className="breadcrumbArea secGap pb-0 clearfix"
            id="breadcrumb"
          >
            <Container>
              <Row>
                <Col>
                  <BreadCrumb />
                </Col>
              </Row>
            </Container>
          </section>

          <section
            className="mainBodyContent productDetails secGap clearfix"
            id="mainBodyContent"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <ImageCarousel
                    image = {(book ? book.cover_images : false )}
                   />
                </div>

                <div className="col-sm-6">
                  <div className="card productCardDetails border-0">
                    <div className="card-header border-0 bg-white">

                      <div className="productCardHead">
                        <div className="Product-title-product-page">
                          <p className="productSingleTitle">
                            { book ? book.name : ``}
                          </p>
                        </div>
                        <div className="d-flex">
                          <RatingComponent  value= { book ? book.rating : 0 }/>
                          <div style={{marginTop:"-3px"}}><p>{'\u00A0'} {'\u00A0'} (7 reviews) </p></div>
                        </div>
                      </div>

                      <h6 className="authName">
                        by <Link to = {`${URL.BASE}/api/author/${book ? book.book_author.id : '/'}`} > {book ? book.book_author.name : `` } </Link>
                      </h6>

                    </div>

                    <div className="card-body productCardBody">
                      <h5 className="product-single-Price mb-4">
                        $ {book ? book.price : 0 }
                        <span className="productAvaility">{book ? ((book.status === 1) ? `Available` : `Unavailable`) : ``}</span>
                      </h5>
                      <div className="productSortDes">
                        <p>
                          {book ? book.short_description : ``}
                        </p>
                      </div>

                      <div className="productBtnGroup mt-4 clearfix">
                        <div className="row no-gutters">
                          <div className="col-sm-2">
                            <input
                              className="form-control inputValue"
                              type="number"
                              placeholder="0"
                              defaultValue = { props.cart.map( item => (item.id === Number(id)) ? item.quantity : 0 )}
                              onChange = { updateItemQty }
                            />
                          </div>

                          <div className="col text-center">
                            <Button
                              className="btn linkBtn"
                              onClick = { addToCart }
                            >
                              <i className="fas fa-shopping-cart"></i> Add to
                              cart
                            </Button>

                          </div>

                          <div className="col text-center">
                            <Link to="/add-to-fev" className="btn linkBtnBorder">
                              <i className="far fa-star"></i>Add to favorites
                            </Link>
                          </div>
                        </div>
                        <hr className="hrBorder mt-4" />
                      </div>
                      <TabComponent
                        description = {book ? book.long_description : `` }
                        specification = {book ? [{
                            author          : book.book_author.name,
                            discipline      : book.book_discipline.name,
                            stage           : book.book_stage.name,
                            publisher       : book.book_publisher.name,
                            publishing_year : book.book_publishing_year.name,
                            book_cover      : book.book_cover,
                            language        : book.book_language.name,
                            page_number     : book.page_number

                        }] : {}}

                        reviews = {book.book_review ? book.book_review : []}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section
            className="similarBooks productView secGap clearfix secBorder"
            id="similarBooks"
          >
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h2 className="sectionTitle mb-5">
                    <span>Similar</span> Book
                  </h2>
                </div>
              </div>
              <ImgSlick />
            </div>
          </section>
        </main>

        <section
          className="mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap"
          id="mailSubscribe"
        >
          <Container className="container">
            <NewsLetterComponent />
          </Container>
        </section>
        <FooterComponent />
      </div>

      <Modal show = {show} onHide = {handleClose}>
        <Modal.Header className={"border-0"} closeButton>
        </Modal.Header>
        <Modal.Body>
          <h2 className={"text-center"}>
            Product added to cart successfully!
          </h2>
        </Modal.Body>
        <Modal.Footer className={"border-0"}>
          <Link to="/checkout" className="btn btn-primary" style={{color:'white'}}> Go to checkout </Link>
          <Link to="/shop" className="btn btn-outline linkBtnBorder" style={{color:'white !important'}}> Continue shopping</Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}


const mapStateToProps = (state)=> {
  return {
    book: state.book[0],
    cart: state.shop.cart,
    totalItems: state.shop.cart.length
  }
}


const mapDispatchToProps = (dispatch) => {
    return{
      showSingleBook : (id) => dispatch(showSingleBook(id)),
      addToCart:       (book) => dispatch(addToCart(book))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductPage);
