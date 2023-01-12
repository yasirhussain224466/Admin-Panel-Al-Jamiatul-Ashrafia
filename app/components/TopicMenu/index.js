import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

import constant from "./constant";
import * as S from "./styled";

const Menues = () => {
  const history = useHistory();
  // console.log(history.push("/hello"));
  const url = history.location.pathname;
  let selectTab = "1";
  console.log(url.indexOf("online-fatwa"));
  if (url.indexOf("contact-us") !== -1) {
    selectTab = "1";
  } else if (url.indexOf("online-fatwa") !== -1) {
    selectTab = "2";
  } else if (url.indexOf("become-mureed") !== -1) {
    selectTab = "3";
  }
  // if (url.indexOf("company") !== -1) {
  //   selectTab = "1";
  // } else if (url.indexOf("report") !== -1) {
  //   selectTab = "2";
  // } else if (url.indexOf("log") !== -1) {
  //   selectTab = "3";
  // } else if (url.indexOf("wss-users") !== -1) {
  //   selectTab = "4";
  // } else if (url.indexOf("user-permissions") !== -1) {
  //   selectTab = "5";
  // } else {
  //   selectTab = "1";
  // }
  return (
    <>
      <S.Wrapper>
        <Menu defaultSelectedKeys={[selectTab]} mode="inline" theme="light">
          {constant.map((currElem) => (
            <Menu.Item
              key={currElem?.key}
              icon={currElem?.icon}
              onClick={() => {
                console.log("hello", currElem?.path);
                return history.push(currElem?.path);
              }}
            >
              {currElem.name}
            </Menu.Item>
          ))}
        </Menu>
      </S.Wrapper>
    </>
  );
};

export default Menues;
