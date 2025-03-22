import React from 'react'

export default function OrderHis() {
  return (
    <div>
        
        <section className="vh-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-10 col-lg-8 col-xl-6">
        <div className="card card-stepper" style-ref-ref="border-radius: 16px;">
          <div className="card-header p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">1222528743</span></p>
                <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">12,March 2019</span> </p>
              </div>
              <div>
                <h6 className="mb-0"> <a href="#">View Details</a> </h6>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <div className="d-flex flex-row mb-4 pb-2">
              <div className="flex-fill">
                <h5 className="bold">Monstera</h5>
                <p className="text-muted"> indoor plant</p>
                <h4 className="mb-3"> $ 150 <span className="small text-muted">  </span></h4>
                <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p>
              </div>
              <div>
                <img className="align-self-center img-fluid"
                  src="https://www.gardenhealth.com/wp-content/uploads/2023/03/Swiss-Cheese-Plant-300x300.jpg.webp" width="250"/>
                  <a href="/home" className="link-info"></a>
              </div>
            </div>
            <p className="lead fw-bold mb-4 pb-2" style-ref="color: #f37a27;">Tracking Order</p>

<div className="row">
  <div className="col-lg-12">

    <div className="horizontal-timeline">

      <ul className="list-inline items d-flex justify-content-between">
        <li className="list-inline-item items-list">
          <p className="py-1 px-2 rounded text-white" style-ref="background-color: #f37a27;">Ordered
            class="py-1 px-2 rounded text-white" style-ref="background-color: #f37a27;"</p>
        </li>
        <li className="list-inline-item items-list">
          <p className="py-1 px-2 rounded text-white" style-ref="background-color: #f37a27;">Shipped
            class="py-1 px-2 rounded text-white" style-ref="background-color: #f37a27;"</p>
                    </li>
        <li className="list-inline-item items-list">
          <p className="py-1 px-2 rounded text-white" style-ref="background-color: #f37a27;">On the way
          </p>
        </li>
        <li className="list-inline-item items-list text-end" style-ref="margin-right: 8px;">
          <p style-ref="margin-right: -8px;">Delivered</p>
        </li>
      </ul>

    </div>

  </div>
</div>
          </div>
          <div className="card-footer p-4">
            <div className="d-flex justify-content-between">
              <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5>
              <div className="border-start h-100"></div>
              <h5 className="fw-normal mb-0"><a href="#!">Cancel</a></h5>
              <div className="border-start h-100"></div>
              <h5 className="fw-normal mb-0"><a href="#!">Pre-pay</a></h5>
              <div className="border-start h-100"></div>
              <h5 className="fw-normal mb-0"><a href="#!" className="text-muted"><i className="fas fa-ellipsis-v"></i></a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}


