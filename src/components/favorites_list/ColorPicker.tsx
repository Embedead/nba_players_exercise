import React from "react";
import styled from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { MdColorLens } from "react-icons/md";

interface IProps {
  color: string;
  setColor: (color: string) => void;
}

interface IColorProps {
  color: string;
}

const PickerContainer = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  padding: 0.35rem;
  label {
    font-size: 18px;
    font-weight: 600;
  }
`;

const PickerColor = styled.span<IColorProps>`
  display: flex;
  padding: 0.5rem;
  margin-right: 0.25rem;
  background-color: ${(props) => props.color};
  border-radius: 6px;
`;

const IconContainer = styled.span`
  display: flex;
  height: 100%;
  font-size: 24px;
`;

const ColorMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  display: flex;
  padding: 0.25rem;
  background-color: white;
  border-radius: 6px;
  label {
    margin: 0 0.25rem;
    cursor: pointer;
    &:hover {
      color: skyblue;
    }
  }
`;

const PickerBase = styled.span`
  background-color: white;
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 0.25rem;
  border-radius: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const colorOptions = ["black", "blue", "green", "red"];

export const ColorPicker = ({ color, setColor }: IProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const colorRef = React.useRef(null);
  useOnClickOutside(colorRef, () => setIsOpen(false));

  const handlePick = (color: string) => {
    setIsOpen(false);
    setColor(color);
  };

  return (
    <PickerContainer>
      <PickerBase onClick={() => setIsOpen(!isOpen)}>
        <IconContainer>
          <MdColorLens />
        </IconContainer>
        <PickerColor color={color} />
      </PickerBase>
      {isOpen === true && (
        <ColorMenu ref={colorRef}>
          {colorOptions.map((item, index) => {
            return (
              <PickerColor
                key={index}
                color={item}
                onClick={() => handlePick(item)}
              />
            );
          })}
        </ColorMenu>
      )}
    </PickerContainer>
  );
};
