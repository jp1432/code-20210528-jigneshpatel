const request = new require("request");
const expect = require("chai").expect;
const endPoint =
  (process.env.HOST_NAME || "http://127.0.0.1") +
  ":" +
  (process.env.PORT || 5000);

describe("BMI POST CALL..", function () {
  const options = {
    url: endPoint + "/bmis",
    json: true,
    body: [{ Gender: "Male", HeightCm: 161, WeightKg: 85 }],
  };

  it("shows bmi request status", function (done) {
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("shows bmi reqest result", function (done) {
    request.post(options, (err, res, body) => {
      expect(res.body).to.deep.equal([
        {
          Gender: "Male",
          HeightCm: 161,
          WeightKg: 85,
          BMICategory: "Medium risk",
        },
      ]);
      done();
    });
  });
});
