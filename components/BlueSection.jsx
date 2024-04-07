const BlueSection = ({ imageSrc, title, text, imageRight }) => {
  return (
    <div
      className="b-section"
      style={{ flexDirection: imageRight ? "row-reverse" : "" }}
    >
      <div className="img-container">
        <img src={imageSrc} width={500} />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlueSection;
