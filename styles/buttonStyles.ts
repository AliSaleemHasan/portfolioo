export const homeButtonStyle = {
  display: "block",
  backgroundColor: "#ef6c62",
  width: "clamp(150px,30vw,300px)",
  padding: "15px",
  color: "var(--text-white)",
  fontFamily: "var(--font-family)",
  fontSize: "clamp(15px,2vw,30px)",
  margin: "20px 0",
  borderRadius: "10px",
  outline: "none",
  textAlign: "center",
  border: "none",
  cursor: "pointer",
};

export const resumeButtonStyle = {
  backgroundColor: "var(--blue-sky)",
  width: "clamp(100px,15vw,200px)",
  color: "var(--text-white)",
  fontFamily: "var(--font-family)",
  fontSize: "clamp(13px,2vw,25px)",
  margin: "15px auto",
  borderRadius: "15px",
  padding: "10px",
  outline: "none",
  border: "none",
  cursor: "pointer",
};

export const formButtonStyle = (
  backgroundColor: string,
  color: string
): Object => {
  return {
    display: "block",
    backgroundColor,
    color,
    width: "clamp(150px,30vw,300px)",
    padding: "15px",
    fontFamily: "var(--font-family)",
    fontSize: "clamp(15px,2vw,30px)",
    margin: "20px 0px",
    borderRadius: "10px",
    outline: "none",
    textAlign: "center",

    border: "none",
    cursor: "pointer",
  };
};

export const projectButtonsStyle = {
  display: "block",
  textAlign: "center",
  width: "clamp(150px,30vw,300px)",
  padding: "15px",
  fontFamily: "var(--font-family)",
  fontSize: "clamp(15px,2vw,30px)",
  margin: "10px auto",
  backgroundColor: " var(--of-white)",
  borderRadius: "15px",
  cursor: "pointer",
  boxShadow: " 40px 43px 4px rgba(0, 0, 0, 0.25)",
};
