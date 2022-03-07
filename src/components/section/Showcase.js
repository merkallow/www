function Showcase() {
  return (
    <div>
      <section
        className="bg-dark text-light p-5 text-center text-lg-start"
        id="showcase"
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col">
              <h1 className="mb-4">
                YOUR NFT COLLECTION
                <br />
                NEEDS AN ALLOW-LIST
              </h1>
              <p className="lead mb-4">
                Popular NFT Collections have an allow-list that lets their
                engaged users mint their NFTs before the general public.
                However, those lists are very expensive to maintain on-chain.
                Some NFT Collection owners pay 10's of thousands of dollars to
                keep their allow-list up to date.
              </p>
              <p className="lead">
                Merkle Trees are a great solution to the problem! A merkle tree
                NEEDS just 32 bytes on-chain to validate an arbitrarily large
                list of allow-listed addresses. Updating the entire list costs
                hardly any gas!
              </p>
              <p className="lead">
                However, keepting track of all of those addresses takes time
                away from your developers. Validating an address as a
                white-listed address mints also requires a backend to supply the
                proof of the entire tree.
              </p>
              <p className="lead">
                Merkallow is designed to take this entire problem off of your
                hands so you can concentrate on making a great NFT Contract and
                art!
              </p>
            </div>
            <div className="col">
              <h1 >What we do:</h1>
              <p className="lead">📋 We securely register your project</p>
              <p className="lead">
                📋 We securely store all of your allow-listed addresses
              </p>
              <p className="lead">
                📋 We provide you with a web 2.0 API that your minting site will
                use to retrieve the "proof" required for minting.
              </p>
              <p className="lead">
                📋 We provide you with our on-chain library that your contract
                will call to validate that an address is on the allow-list before you mint.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="col-xs-12 bg-dark" style={{ height: 35 }} />
    </div>
  );
}

export default Showcase;
