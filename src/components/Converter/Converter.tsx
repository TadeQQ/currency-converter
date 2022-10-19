import React from "react";
import {
  StyledConverter,
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledSwap,
  StyledConvert,
} from "../styles/Converter.styled";
export const Converter = () => {
  return (
    <StyledConverter>
      <StyledForm action="">
        <StyledDiv className="amount">
          {" "}
          Amount <StyledInput type="number" placeholder="1.00" />
        </StyledDiv>
        <StyledDiv className="from">
          From <select placeholder="PLN" />
        </StyledDiv>
        <StyledSwap className="switchcurriencies"> {"swap"} </StyledSwap>
        <StyledDiv className="to">
          {" "}
          To <select placeholder="USD" />
        </StyledDiv>
        <StyledConvert className="convert Button"> Convert</StyledConvert>
      </StyledForm>
    </StyledConverter>
  );
};
