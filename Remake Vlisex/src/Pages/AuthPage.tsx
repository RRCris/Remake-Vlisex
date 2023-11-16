import Image from "@/components/Image";
import React from "react";
import styled from "styled-components";

export default function AuthPage() {
  return (
    <StyleAuthPage>
      AuthPage
      <img
        src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1700006400&semt=ais"
        alt="wallpaper"
        height={300}
        width={300}
        style={{ viewTransitionName: "prueba10" }}
      />
    </StyleAuthPage>
  );
}

const StyleAuthPage = styled.div`
  background-color: coral;
`;
