import popup from '../store/popup';

describe("popup store", () => {
  it("setIsLoadingComment action", () => {
    popup.setIsLoadingComment(true);
    expect(popup.isLoadingComment).toEqual(true);
  });
});
