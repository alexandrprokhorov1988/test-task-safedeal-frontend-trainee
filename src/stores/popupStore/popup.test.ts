import popup from './/popup';

describe("popup store", () => {
  it("setIsLoadingComment action", () => {
    popup.setIsLoadingComment(true);
    expect(popup.isLoadingComment).toEqual(true);
  });

  it("setComments action", () => {
    popup.setComments([{id: 1, text: "text1", date: "date1"}]);
    expect(popup.comments).toEqual([{id: 1, text: "text1", date: "date1"}]);
  });
});
