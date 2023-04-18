import React from "react";
import getCustumers from "../hooks/useGetCustomers";

const InformationList = () => {
  const data = getCustumers();

  const creationDate = new Date(data.CREATION_DATE)
    .toString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
  const lastPayment = new Date(data.LAST_PAYMENT_DATE)
    .toString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
  return (
    <section>
      <div>
        <section class="mt-5 statis text-center">
          <div class="row">
            <div class="col-md-12 col-lg-4 mb-6 mb-lg-0">
              <div class="box bg-danger p-3">
                <i class="uil-eye"></i>
                <h3>{data.SUBSCRIPTION}</h3>
                <p class="lead">Subscription type</p>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 mb-6 mb-md-0">
              <div class="box bg-warning p-3">
                <i class="uil-eye"></i>
                <h3>{lastPayment}</h3>
                <p class="lead">Last payment date</p>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <div class="box bg-primary p-3">
                <i class="uil-eye"></i>
                <h3>{creationDate}</h3>
                <p class="lead">Creation date</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InformationList;
