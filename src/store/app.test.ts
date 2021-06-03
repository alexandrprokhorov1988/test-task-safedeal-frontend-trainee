import app from '../store/app';

describe("app store", () => {
  it("setIsOpenPopup action", () => {
    app.setIsOpenPopup(true);
    expect(app.isOpenPopup).toEqual(true);
  });
});
