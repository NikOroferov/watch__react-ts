import { useState } from "react";
import "./Colorpicker.css";

type Options = {
  label: string;
  color: string;
};

interface Props {
  options: Options[];
  initialOptionPos?: number;
}

export const Colorpicker = ({ options, initialOptionPos = 1 }: Props) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(initialOptionPos);

  const setActiveIndex = (index: number) => {
    setActiveOptionIndex(index);
  }

  const makeOptionClassName = (index: number) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === activeOptionIndex) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  }

  const { label } = options[activeOptionIndex];

  return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color piker</h2>

        <p>Выбран цвет: {label}</p>

        <div>
          {options.map(({ label, color }, index) => {
            const optionClassName = makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
}

export default Colorpicker;
