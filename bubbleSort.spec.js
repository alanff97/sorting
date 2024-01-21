describe('swap', () => {
  it('takes an array and an index and switch the index with the follow one', () => {
    let arr = [1, 2, 3, 4];
    swap(arr, 2);
    expect(arr).toEqual([1, 2, 4, 3]);
  });
});

describe('inOrder', () => {
  it('takes an array and an index and if the numbers are in orders, return true', () => {
    expect(inOrder([1, 2, 3, 5], 2)).toEqual(true);
  });

  it('takes an array and an index and if the numbers are out of order, return false', () => {
    expect(inOrder([1, 2, 5, 4], 2)).toEqual(false);
  });

  it('takes an array and an index and if the numbers are equals, return true', () => {
    expect(inOrder([1, 2, 3, 3], 2)).toEqual(true);
  });
});

describe('bubbleSort', () => {
  it('handles an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Calls swap until is sorted', () => {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([1, 2, 3, 5, 4]);
    expect(window.swap.calls.count()).toEqual(1);
  });

  it('calls inOrder until is sorted', () => {
    spyOn(window, 'inOrder').and.callThrough();
    bubbleSort([1, 2, 3, 5, 4]);
    expect(window.inOrder.calls.count()).toEqual(7);
  });
});
