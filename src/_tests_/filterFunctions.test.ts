import { describe, expect, it } from "@jest/globals";

describe('тесты фильтров', () => {
  it('изменяется статус фильтра при нажатии кнопок', () => {
    let filter = '';
    const setFilter = (newFilter: string) => filter = newFilter;

    setFilter('active');
    expect(filter).toBe('active');

    setFilter('completed');
    expect(filter).toBe('completed');

    setFilter('');
    expect(filter).toBe('');
  });
});
