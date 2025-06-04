import Eye from "./Eye";
import Nose from "./Nose";

const Face = ({ children }) => {
  return <>{children}</>;
};

Face.Eye = Eye;
Face.Nose = Nose;

export default Face;
