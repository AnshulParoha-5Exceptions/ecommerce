import React from 'react'
const Footer = () => {
    return (
        <>

            <footer className="text-center text-lg-start bg-light text-muted">



                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Shop Cart
                                </h6>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eaque qui eius accusantium saepe! Facere consequatur at voluptatibus repellendus officia molestiae, quia quos corrupti cupiditate commodi. Fuga facilis voluptatibus culpa..
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>

                                <h6 className="text-reset"> Mobiles </h6>

                                <h6 className="text-reset"> Laptops </h6>

                                <h6 className="text-reset"> Accessories </h6>

                                <h6 className="text-reset"> Watches </h6>

                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4"> Useful links </h6>

                                <h6 className="text-reset">Stores</h6>


                                <h6 className="text-reset">Track Order</h6>


                                <h6 className="text-reset">Orders</h6>


                                <h6 className="text-reset">Help</h6>

                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Janjeerwala Square, Indore, M.P</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    anshul.paroha@5exceptions.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 91 8959429126</p>
                                <p><i className="fas fa-print me-3"></i> + 91 8770073435</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <h6 className="text-reset fw-bold">  5 Exceptions Software Solutions </h6>
                </div>

            </footer>

        </>
    )
}

export default Footer