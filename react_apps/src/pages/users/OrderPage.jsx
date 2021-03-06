import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Table} from 'react-bootstrap';
import './assets/css/user.css';
import {LiAi, Lia} from '../../components/LiComponent/CommonLiComponent';
import { asideData, categoryClass } from '../../inc/users/users';
import {HeaderComponent, MobileHeader} from '../../components/header/Header';

const OrderPage = () => {
  return (<>
    <div className="allWrapper">
      <HeaderComponent/>
      <MobileHeader />
      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <Col sm="2">
              <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                <nav className="userNav">
                  <ul className="userNavBar">
                    {asideData.map((aside)=><LiAi
                      key={Math.floor(Math.random() * 10)}
                      ListClass={aside.LIST_CLASS}
                      Title={aside.TITLE}
                      Url={aside.URL}
                      IconName={aside.ICON_NAME}
                      AnchorClass={aside.ANCHOR_CLASS}
                    />)}

                  </ul>{/* end of userNavBar */}
                </nav>{/* end of userNav */}
              </aside>{/* end of aside */}
            </Col>{/* end of Col */}

             <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">
                <section className="myOrderArea secGap clearfix" id="myOrderArea">
                  <Container fluid={true}>
                    <Row>
                      <Col sm="12">
                        <Card>
                        <Card.Body>
                            <div className="cardHeadDetails clearfix pt-5 text-center">
                              <div className="orderMedia">
                                <img src="assets/images/order_page_icon_img.png" alt="" />
                              </div>{/* end of orderMedia */}

                              <div className="orderSortDes">
                                <h2 className="headTitle mb-3">You don’t have any <span>Orders</span></h2>
                                <p>It’s not a problem. Just choose a category you’re interested in and<br/> add goods to your cart
                                </p>
                              </div>{/* end of orderSortDes */}
                             <hr className="hrBorder mt-4 mb-4" />

                              <div className="cardContentDetails">
                                <Row>
                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Kindergarten</h3>
                                    <ul className="cardWidgetList text-center">
                                    {categoryClass.kindergartenSchool.map(priClass=><Lia
                                       key={Math.floor(Math.random() * 10)}
                                       Title={priClass}
                                       Url={'/'}
                                     />)}
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}

                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Primary school</h3>
                                    <ul className="cardWidgetList cardWidgetList2 text-center">
                                     {categoryClass.primarySchool.map(priClass=><Lia
                                       key={Math.floor(Math.random() * 10)}
                                       Title={priClass}
                                       Url={'/'}
                                     />)}
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}

                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Secondary school</h3>
                                    <ul className="cardWidgetList text-center">
                                    {categoryClass.secondarySchool.map(priClass=><Lia
                                       key={Math.floor(Math.random() * 10)}
                                       Title={priClass}
                                       Url={'/'}
                                     />)}
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}

                                  <Col sm="3">
                                    <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                                    <ul className="cardWidgetList text-center">
                                     {categoryClass.stationery.map(priClass=><Lia
                                       key={Math.floor(Math.random() * 10)}
                                       Title={priClass}
                                       Url={'/'}
                                     />)}
                                    </ul>{/* end of cardWidgetList */}
                                  </Col>{/* end of Col */}
                                </Row>{/* end of Row */}
                              </div>{/* end of cardContentDetails */}

                            </div>{/* end of orderHeadDetails */}
                          </Card.Body>{/* end of Card.Body */}

                          <Card.Body className="pt-5">

                            <Table responsive className="cardTable">
                              <thead>
                                <tr>
                                  <th>Product name</th>
                                  <th>Price</th>
                                  <th>Amount</th>
                                  <th>Total</th>
                                  <th>Order date</th>
                                  <th>Order status</th>
                                </tr>
                              </thead>{/* end of thead */}

                              <tbody>
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit ament inure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="tableDate">11.05.2019</span> <span className="tableTime">14:53</span> </td>
                                  <td><span className="stockInfo">In stock</span></td>
                                </tr>{/* end of tr */}
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit ament inure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="tableDate">11.05.2019</span> <span className="tableTime">14:53</span> </td>
                                  <td><span className="stockInfo">DELIVERED</span></td>
                                </tr>{/* end of tr */}
                              </tbody>{/* end of tbody */}
                            </Table>{/* end of Table */}
                          </Card.Body>{/* end of Card.Body */}
                        </Card>{/* end of Card */}
                      </Col>{/* end of Col */}
                    </Row>{/* end of Row */}
                  </Container>{/* end of Container */}
                </section>{/* end of myOrderArea */}
              </main>{/* end of mainContent */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of userBodyArea */}
    </div> {/* end of allWrapper */}
  </>);
}

export default OrderPage;
