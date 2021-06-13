import supertest from "supertest";
import app from "../src/app";

test("should ", () => {
  expect(0).toBe(0);
});

test("Get /calculus?query=[input] ", async () => {
  let inputString = "MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk";
  await supertest(app)
    .get(`/calculus?query=${inputString}`)
    .expect(200)
    .then((response) => {
      let body = response.body;

      // check data
      expect(!body.error).toBeTruthy();
      expect(body.result).toBe(-132.88888889);
    });
});

test("Get /calculus?input= ", async () => {
  let inputString = "MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk";
  await supertest(app)
    .get(`/calculus?query=${inputString}`)
    .expect(200)
    .then((response) => {
      let body = response.body;

      // check data
      expect(!body.error).toBeTruthy();
      expect(body.result).toBe(-132.88888889);
    });
});
