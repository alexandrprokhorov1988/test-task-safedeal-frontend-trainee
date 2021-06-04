import app from './/app';

describe("app store", () => {
  it("setIsOpenPopup action", () => {
    app.setIsOpenPopup(true);
    expect(app.isOpenPopup).toEqual(true);
  });
});
