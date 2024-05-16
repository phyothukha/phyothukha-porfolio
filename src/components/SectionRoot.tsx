import React, { FC, ReactNode } from "react";

interface SectionRootProps {
  children: ReactNode;
}

const SectionRoot: FC<SectionRootProps> = ({ children }) => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      {children}
    </div>
  );
};

export default SectionRoot;
