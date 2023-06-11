const Blogs = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-secondary">our blogs</h2>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-medium">What is an access token and refresh token? How does it work and should store them on the client?</h3>
            <p>
              <strong>Ans : </strong> Access and refresh token are used for identity.Access token for short duration like passport.Access token need
              to be update when duration expires.On the other hand refresh token for long duration it is just like a national id card, when access
              token expires, it is renewed by refresh token.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium">Compare SQL and NoSQL database?</h3>
            <p>
              <strong>Ans : </strong> SQL database is relational database.It is structured by row, column and table base.It may have multiple tables,
              but each table link to others.On the other hand NoSQL is opposite to SQL database.It is just like javaScript object each data related to
              each other but not link to other.We can compare NoSQL database a book, a book may have lot of pages, one page like one data in NoSQL
              database.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium">What is express js? what is next js?</h3>
            <p>
              <strong>Ans : </strong> Express is node js framework.Node js is javaScript environment.Environment means where javaScript code can be
              run.Node js handle server code.It is very hard to manage server code by node js for this reason express js come to the table, we can
              easily manage server code using express js.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium">What is mongodb aggregate and how does it work?</h3>
            <p>
              <strong>Ans : </strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corporis quaerat quae qui voluptas ad
              quidem, facere, illum eos doloribus temporibus nam dolores id praesentium reprehenderit maiores! Mollitia, delectus quae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
