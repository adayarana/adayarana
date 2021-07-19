const {
  getProfile
} = require('./user.controller');

jest.mock('../models/user.model');

describe('Given a getProfile function', () => {
  describe('When is invoked', () => {
    let req;
    let res;

    describe('And there is no error', () => {
      beforeEach(async () => {
        req = {
          user: null,
          headers: {
            authorization: null
          }
        };

        res = {
          json: jest.fn()
        };

        await getProfile(req, res);
      });
      test('Then call res.json', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});
