import "../styles/container.css";

function PersonInfo({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <>
      <div className="container">
        <div>
          <h2>Name: </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Email: </h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h2>Phone Number: </h2>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}

export { PersonInfo };
