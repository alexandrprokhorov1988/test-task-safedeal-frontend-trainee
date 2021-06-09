import photoGrid from './photoGridStore';

describe('photoGridStore', () => {
  it('setCards action', () => {
    photoGrid.setCards([{ id: 1, url: 'test_1' }]);
    expect(photoGrid.cards).toEqual([{ id: 1, url: 'test_1' }]);
  });

  it('setIsLoading action', () => {
    photoGrid.setIsLoading(true);
    expect(photoGrid.isLoading).toEqual(true);
  });
});
