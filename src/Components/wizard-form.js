import { Button, message, Select, Steps, theme } from "antd";
import { useState } from "react";
const WizardForm = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const [Name, setName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Email, setEmail] = useState("");
  const [Area, setArea] = useState("");
  const [Province, setProvince] = useState("");
  const [Country, setCountry] = useState("");
  const [nameErr, setNameErr] = useState();
  const [EmailErr, setEmailErr] = useState();
  const [PhoneNoErr, setPhoneNoErr] = useState();
  const next = () => {
    if (current === 0) {
      if (Name === "" || Name === null) {
        setNameErr("نوم لیکل اړین دی!");
      }
      if (Email === "" || Email === null) {
        setEmailErr("ایمیل لیکل اړین دی!");
      }
      if (PhoneNo === "" || PhoneNo === null) {
        setPhoneNoErr("فون نمبر لیکل اړین دی!");
      }
      if (Name.length > 0 && Email.length > 0 && PhoneNo.length > 0) {
        setCurrent(current + 1);
      }
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    <form style={{ margin: 10 }}>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
            setNameErr("");
          }}
        />
        <span>{nameErr}</span>
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span>{EmailErr}</span>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Phone"
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
        />
        <span>{PhoneNoErr}</span>
      </div>
    </form>,
    <>
      <form style={{ margin: 10 }}>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Area"
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Province"
            onChange={(e) => {
              setProvince(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      ></div>
    </>,
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <h3>Name:</h3> <span className="pt-2 px-3"> {Name}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <h3>Email:</h3> <span className="pt-2 px-3"> {Email}</span>
      </div>{" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <h3>PhoneNo:</h3> <span className="pt-2 px-3"> {PhoneNo}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <h3>Area:</h3> <span className="pt-2 px-3"> {Area}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <h3>Province:</h3> <span className="pt-2 px-3"> {Province}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <h3>Country:</h3> <span className="pt-2 px-3"> {Country}</span>
      </div>
    </div>,
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div>
      <Steps className="btn-success" current={current} items={items} />
      <div style={contentStyle}>{steps[current]}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => alert("form Succesffuly submitted")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default WizardForm;
