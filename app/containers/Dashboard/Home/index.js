import React from "react";
import { Table, Tag, Button } from "antd";
import { useQuery, useMutation } from "react-query";
import moment from "moment";

import appService from "@/services/api/app-service";
import PageLayout from "@/containers/PageLayout";
import Modal from "@/components/Modal";
import ContactUs from "@/components/Modal/contactUsPopup";
import Dropdown from "@/components/Dropdown";

import * as S from "./styled";

const columns = [
  {
    title: "Arrival",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (data) => (
      <>
        <div>{moment(data).startOf("second").fromNow()}</div>
      </>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Status",
    key: "seen",
    dataIndex: "seen",
    render: (data) => {
      if (data === true)
        return (
          <>
            <Tag color="green">Seen</Tag>
          </>
        );
      return <Tag color="red">Unseen</Tag>;
    },
  },
];
const optionState = ["Mark all as seen", "Mark all as unseen"];
const Index = () => {
  const [visible, setVisible] = React.useState("");
  const [rowData, setRowData] = React.useState("");

  const handleVisible = () => {
    setVisible(true);
  };
  const handleRow = (record) => {
    setRowData(record);
    setVisible(!visible);
    mutate({
      ...record,
      seen: true,
    });
  };

  const MarkSeen = (bool) => {
    mutateReadOrUnread({
      seen: bool,
    });
  };
  const {
    data: contactUsForms,
    isFetching,
    isLoading,
    refetch,
  } = useQuery("contact-us", () => appService.getContactUsForms());

  const { mutate } = useMutation(
    (data) => appService.updateContactUsForm(data),
    {
      onSuccess: () => {
        refetch();
      },
    },
  );

  const { mutate: mutateReadOrUnread } = useMutation(
    (data) => appService.markReadOrUnread(data),
    {
      onSuccess: () => {
        refetch();
      },
    },
  );
  // console.log(contactUsForms);
  return (
    <>
      <PageLayout>
        <S.Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 0px 40px 8px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "30px" }}>Contact Us</h1>
            </div>
            <div>
              <Dropdown
                handleDropDownChange={(e) =>
                  e === "Mark all as seen" ? MarkSeen(true) : MarkSeen(false)
                }
                options={optionState}
                placeholder="Status"
                style={{ width: "150px" }}
              />
              <Button
                danger
                ghost
                style={{ width: "150px", marginTop: "10px" }}
                type="ghost"
              >
                Delete All
              </Button>
            </div>
          </div>
          <Modal
            cancelTitle="Exit"
            handleVisible={handleVisible}
            modalContent={
              <ContactUs data={rowData} title="Contact Us Information" />
            }
            name="Room Photos"
            setVisible={setVisible}
            visible={visible}
            width={500}
          />
          <Table
            bordered
            columns={columns}
            dataSource={contactUsForms?.data}
            loading={isLoading || isFetching}
            onRow={(data) => ({
              onClick: () => handleRow(data),
            })}
            pagination={false}
            style={{ overflowX: "scroll" }}
          />
        </S.Wrapper>
      </PageLayout>
    </>
  );
};

export default Index;
