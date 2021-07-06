import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

interface IProps {
  phrase: string;
  setter: (phrase: string) => void;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
  padding: 0.25rem;
  flex-basis: 1;
  input {
    flex-grow: 1;
    padding: 0.25rem;
    font-size: 22px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
  }
`;

const IconContainer = styled.span`
  display: flex;
  height: 100%;
  color: white;
  font-size: 32px;
  padding-right: 0.5rem;
`;

export const PlayerSearch = ({ phrase, setter }: IProps) => {
  return (
    <SearchContainer>
      <input
        value={phrase}
        onChange={(e) => setter(e.target.value)}
        placeholder={"enter player name here"}
      />
      <IconContainer>
        <MdSearch />
      </IconContainer>
    </SearchContainer>
  );
};
