import React, { useState } from "react";
import getCustumers from "../hooks/useGetCustomers";

const ImgProfile = () => {
  const data = getCustumers();
  return (
    <div>
      <div>
        <img
          className="rounded-pill img-fluid"
          width={120}
          src={data.user_profile_image}
          alt
        />
      </div>
    </div>
  );
};

export default ImgProfile;

{
  /* <h2>React Fetch Data with REST API Example</h2>
<ul>
  {post.map((item, i) => {
  return <li key={i}>{item.title}</li>
  })}
</ul> */
}
