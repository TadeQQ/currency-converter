import React from "react";
import {
  StyledConverter,
  Form,
  Div,
  Input,
  Swap,
  Convert,
} from "../styles/Converter.styled";
export const Converter = () => {
  return (
    <StyledConverter>
      <Form action="">
        <Div className="amount">
          {" "}
          Amount <Input type="number" placeholder="1.00" />
        </Div>
        <Div className="from">
          From <select placeholder="PLN" />
        </Div>
        <Swap className="switchcurriencies"> {"swap"} </Swap>
        <Div className="to">
          {" "}
          To <select placeholder="USD" />
        </Div>
        <Convert className="convert Button"> Convert</Convert>
      </Form>
    </StyledConverter>
  );
};
