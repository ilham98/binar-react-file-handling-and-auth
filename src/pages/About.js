import BasicContainer from "../components/BasicContainer";
import { useRef, useState } from "react";

function About() {
  const file = useRef(null);
  const [image, setImage] = useState(null);

  const onFileChanged = () => {
    const currentFile = file.current.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImage(reader.result);
      },
      false
    );
    if (currentFile.type.includes("image/")) reader.readAsDataURL(currentFile);
  };

  return (
    <BasicContainer>
      {image && <img src={image} alt="Preview" />}
      <input type="file" ref={file} onChange={onFileChanged} />
    </BasicContainer>
  );
}

export default About;
