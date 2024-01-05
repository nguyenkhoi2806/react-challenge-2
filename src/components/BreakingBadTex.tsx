import { useMemo } from "react";
import { findTextWithData } from "../utils/string";

type BreakingBadText = {
  text: string;
};

const BreakingBadText = (props: BreakingBadText) => {
  const { text } = props;
  const textDisplay = useMemo(() => {
    return findTextWithData(text);
  }, [text]);

  return (
    <div className="text">
      <div>
        {textDisplay[0]}
        {textDisplay[1] && (
          <span
            style={{
              backgroundColor: "green",
              color: "yellow",
              padding: "0 0.5rem",
            }}
          >
            {textDisplay[1]}
          </span>
        )}
        {textDisplay[2]}
      </div>
    </div>
  );
};

export default BreakingBadText;
