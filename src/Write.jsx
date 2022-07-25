import React, { useCallback, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
  width: 1600px;
  height: 250px;
  left: 90px;
  top: 784px;
  padding: 40px;
  background-color: white;
  border-radius: 13px;
`;

export const InputText = styled.textarea`
  all: unset;
  position: relative;
  width: 1610px;
  height: 232px;
  left: 140px;
  top: 784px;
  padding: 10px 10px;
  background: rgba(179, 179, 179, 0.2);
  padding-left: 40px;
  padding-top: 28px;
  border-radius: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
`;

export const TextWrote = styled.div`
  width: 1209px;
  height: 150px;
  overflow: auto;
`;

export const EnterImg = styled.div``;

export const TextSubmit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 26px;
  gap: 10px;

  position: absolute;
  width: 94px;
  height: 35px;
  left: 1631px;
  top: 970px;
  border: 0;
  outline: 0;
  border-radius: 100px;
  cursor: pointer;
`;

export const InputNames = styled.div`
  border: 1px solid #9b8962;
  color: white;
  background-color: #9b8962;
  width: 73px;
  height: 24px;
  border-radius: 100px;
  position: fixed;
  top: 474px;
  left: 95px;
  text-align: center;
`;

export const TextWriter = styled.div`
  border: 1px solid #9b8962;
  color: white;
  background-color: #9b8962;
  width: 73px;
  height: 24px;
  border-radius: 9px;
  text-align: center;
  position: relative;
  margin-left: 24px;
  margin-top: 20px;
`;

export const TextWriter1 = styled.div`
  border: 1px solid #9b8962;
  color: #9b8962;
  background-color: white;
  width: 73px;
  height: 24px;
  border-radius: 9px;
  text-align: center;
  position: relative;
  margin-left: 24px;
  margin-top: 20px;
`;

export const TextTextWriter = styled.div`
  border-radius: 10px;
  position: relative;
  margin-left: 24px;
  width: 1140px;
  padding-left: 3px;
  padding-right: 3px;
  min-height: 24px;
`;

export const CheckDiv = styled.div`
  position: absolute;
  width: 350px;
  height: 30px;
  left: 1300px;
  top: 975px;
  display: flex;
`;

export const CheckLabel = styled.label`
  position: relative;
  width: 39px;
  height: 26px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #181818;
`;

export const CheckBox = styled.input`
  position: absolute;

  left: 44px;
  border: 1.2px solid #3435ce;
  border-radius: 2px;
`;

const Write = ({ onInsert }) => {
  const navigate = useNavigate();

  const [checkItems, setCheckItems] = useState();
  const [value, setValue] = useState({
    content: "",
  });

  const onSubmit = useCallback(
    (e) => {
      onInsert(value.content);
      setValue({
        content: "",
      });

      e.preventDefault();
    },
    [onInsert, value]
  );

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("check");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <>
      <div>
        <form className="TextInsert" onSubmit={onSubmit}>
          <InputText placeholder="지금 떠오르는 생각들을 공유해보세요!" />

          <CheckDiv>
            <CheckLabel htmlFor="free">
              자유
              <CheckBox
                id="free"
                name="check"
                value="1"
                type="checkbox"
                onChange={(e) => checkOnlyOne(e.target)}
              />
            </CheckLabel>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <CheckLabel htmlFor="question">
              질문
              <CheckBox
                id="question"
                name="check"
                value="2"
                type="checkbox"
                onChange={(e) => checkOnlyOne(e.target)}
              />
            </CheckLabel>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <CheckLabel htmlFor="tip">
              꿀팁
              <CheckBox
                id="tip"
                name="check"
                value="3"
                type="checkbox"
                onChange={(e) => checkOnlyOne(e.target)}
              />
            </CheckLabel>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <CheckLabel htmlFor="error">
              오류
              <CheckBox
                id="error"
                name="check"
                value="4"
                type="checkbox"
                onChange={(e) => checkOnlyOne(e.target)}
              />
            </CheckLabel>
            &nbsp; &nbsp; &nbsp; &nbsp;
          </CheckDiv>

          <TextSubmit type="submit">
            <img src={"img/올리기.png"} width="94px" height="35px" />
          </TextSubmit>
        </form>
      </div>
    </>
  );
};

export default Write;
