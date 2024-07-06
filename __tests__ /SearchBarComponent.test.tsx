import React from 'react';
import { it, expect, describe, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import SearchBar from '../src/components/SearchBarComponent/SearchBar';


describe('SearchBarComponent', () => {
    it('Render ComponentCorrect', () => {
        const handleSearchValue = jest.fn()

        const tree = renderer.create(
            <SearchBar handleSearchValue={handleSearchValue} />,
        )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Should apply the value when changing text', () => {
        const handleSearchValue = jest.fn()
        const { getByTestId } = render(<SearchBar handleSearchValue={handleSearchValue} />);
        const input = getByTestId('input');
        fireEvent.changeText(input, "test");
        expect(input.props.value).toBe('test');
        expect(handleSearchValue).toHaveBeenCalledWith('test');
      });
})
