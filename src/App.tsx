import { useState } from "react";
import BreakingBadText from "./components/BreakingBadTex";

function App() {
  const [name, setName] = useState<{ firstName: string; lastName: string }>({
    firstName: "",
    lastName: "",
  });

  const handeChangeName = (field: "firstName" | "lastName", text: string) => {
    setName({ ...name, [field]: text });
  };

  return (
    <div className="wrapper">
      <div className="content">
        <BreakingBadText text={name.firstName} />
        <BreakingBadText text={name.lastName} />
      </div>
      <div className="row">
        <div className="col">
          <label>First Name</label>
          <input
            onChange={(e) => handeChangeName("firstName", e.target.value)}
            value={name.firstName}
          />
        </div>
        <div className="col">
          <label>Last Name</label>
          <input
            onChange={(e) => handeChangeName("lastName", e.target.value)}
            value={name.lastName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
