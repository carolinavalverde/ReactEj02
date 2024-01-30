const HelloWorld = ({ name }) => {
  return (
    <section className="container">
      <div className="card bg-success shadow text-bg-dark text-center p-5 m-3">
        <h1 className="fw-bold display-2">Hello {name}!</h1>
      </div>
    </section>
  );
};

export default HelloWorld;
