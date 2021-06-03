import photoGrid from '../store/photoGrid';

describe("photoGrid store", () => {
  it("setCards action", () => {
    photoGrid.setCards([{id: 1, url: 'test_1'}]);
    expect(photoGrid.cards).toEqual([{id: 1, url: 'test_1'}]);
  });

  it("setCards action", () => {
    photoGrid.setIsLoading(true);
    expect(photoGrid.isLoading).toEqual(true);
  });

  it("setCards action", () => {
    photoGrid.setOriginSizeImage({id: 1, url: "origin_url"});
    expect(photoGrid.originSizeImage).toEqual({id: 1, url: "origin_url"});
  });

  it("setCards action", () => {
    photoGrid.setComments([{text: "text1", date: "date1", id: 1}]);
    expect(photoGrid.comments).toEqual([{text: "text1", date: "date1", id: 1}]);
  });
});
