import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <div className="container-flex">
        <footer className="text-white text-center text-lg-start bg-info">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                  molestias.
                </p>

                <div className="mt-4 mr-2">
                  <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-facebook-f"></i></a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-dribbble"></i></a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-twitter"></i></a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-google-plus-g"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="formControlLg">Search</label>
                </div>

                <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">New York, NY 10012, US</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>
                <table className="table text-center text-white">
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Mon - Fri:</td>
                      <td>11am - 8pm</td>
                    </tr>
                    <tr>
                      <td>Sat - Sun:</td>
                      <td>Close</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright:
            <a className="text-white" href="#">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default Footer
