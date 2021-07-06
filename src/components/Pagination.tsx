import React from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowLeft as ArrowLeft,
  MdKeyboardArrowRight as ArrowRight,
} from "react-icons/md";

interface IProps {
  page: number;
  pageSetter: (page: number) => void;
  length: number;
}

const PaginationContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 28px;
  font-weight: 500;
  color: white;
`;

const IconContainer = styled.span`
  display: flex;
  font-size: 38px;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

const pageLogics = (page: number, action: string) => {
  if (page === 1 && action === "-") return page;
  else {
    if (action === "+") return page + 1;
  }
  return page - 1;
};

export const Pagination = ({ page, pageSetter, length }: IProps) => {
  return (
    <PaginationContainer>
      <IconContainer onClick={() => pageSetter(pageLogics(page, "-"))}>
        <ArrowLeft />
      </IconContainer>
      {page}
      {length === 10 && (
        <IconContainer onClick={() => pageSetter(pageLogics(page, "+"))}>
          <ArrowRight />
        </IconContainer>
      )}
    </PaginationContainer>
  );
};
