const request = require('supertest');
const app = require('../src/app');

// Testing get all user edpoint

describe("GET /users", () => {
    it("respond with json containing a list of all users", (done) => {
        request(app)
        .get("/users")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
});

// Testing user endpoint by giving an existing user

describe("GET /users/:id", () => {
    it("respond with json containing a single user", (done) => {
        request(app)
        .get("/users/U0001")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });

    it("responde with json user not found when the user does not exist", (done) => {
        request(app)
        .get("/users/nonexistinguser")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
        .expect(`"User not found"`)
        .end((err) => {
            if (err) return done(err);
            done();
        });
    });
});

// Testing POST users endpoint

describe("POST /users", () => {
    it("respond with 201 created", (done) => {
        const data = {
            username: "shaune",
            password: "password123",
        };
        request(app)
        .post("/users")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .end((err) => {
            if (err) return done(err);
            done();
        });
    });
});