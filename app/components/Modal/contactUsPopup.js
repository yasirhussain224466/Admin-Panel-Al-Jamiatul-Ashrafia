/* eslint-disable react/jsx-curly-newline */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import * as S from "./styled";

const ContactUs = ({ data, title }) => {
  console.log(data);
  return (
    <S.ContactUs>
      <div
        className="title"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "15px" }}>{title}</div>
        <div
          style={{ marginRight: "25px", fontSize: "10px", color: "#B0B0B0" }}
        >
          {moment(data?.createdAt).startOf("second").fromNow()}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="heading">Name:</div>
        <div>{data?.name}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="heading">Email:</div>
        <div>{data?.email}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="heading">Country:</div>
        <div>{data?.country}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="heading">Phone No:</div>
        <div>{data?.contact}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="heading">Message:</div>
        <div>{data?.message}</div>
      </div>
    </S.ContactUs>
  );
};

export default ContactUs;

ContactUs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  title: PropTypes.string,
};
