import { describe, expect, test } from 'vitest';
import omit from '../src';

describe('omit', () => {
  test('should drop fields which are passed in', () => {
    const benjy = { name: 'Benjy', age: 18 };
    expect(omit(benjy, 'age')).toEqual({ name: 'Benjy' });
    expect(omit(benjy, ['age', 'name'])).toEqual({});
  });

  test('should shadow copy', () => {
    const benjy = { name: 'Benjy', age: 18, hobby: ['reading', 'coding'] };
    const shadowFilteredValue = omit(benjy, 'age');
    expect(shadowFilteredValue).not.toBe(benjy);
    const newName = 'xiaoyao';
    shadowFilteredValue.name = newName;
    expect(shadowFilteredValue.name).toBe(newName);
    expect(benjy).not.toBe(newName);
    shadowFilteredValue.hobby.push('cooking');
    expect(shadowFilteredValue.hobby).toEqual(['reading', 'coding', 'cooking']);
    expect(benjy.hobby).toEqual(['reading', 'coding', 'cooking']);
  });
});
