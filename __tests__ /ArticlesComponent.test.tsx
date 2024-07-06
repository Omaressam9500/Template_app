import 'react-native';
import React from 'react';

import { it, expect, describe, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { ArticelComponent } from '../src/components/ArticlesComponent/ArticelComponent';
import { Screens } from '../src/constants/Screens';

const mockPost = {
    author: 'Omar essam',
    urlToImage: 'https://example.com/image.jpg',
    title: 'Example Article',
    describe
  };
  const mockedNavigation = jest.fn();
  
  jest.mock('@react-navigation/native', () => {
    return {
      useNavigation: () => ({
        navigate: mockedNavigation,
      }),
    };
  });
describe('ArticelComponent', () => {

    it('Render ComponentCorrect', () => {
      const tree = renderer.create(
          <ArticelComponent post={mockPost} />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders author and title correctly', () => {
  
      const { getByTestId, getByText } = render(<ArticelComponent post={mockPost} />);
  
      const authorElement = getByTestId('AuthorTestId');
      const titleElement = getByTestId('TitleTestId');
  
      expect(authorElement.props.children).toEqual('Omar essam');
      expect(titleElement.props.children).toEqual('Example Article');
    });
    it('calls navigation function when pressed', () => {
  
  
      const { getByTestId } = render(<ArticelComponent post={mockPost} />);
      const cardElement = getByTestId('CardTestId');
  
      fireEvent.press(cardElement);
  
      expect(mockedNavigation).toHaveBeenCalledWith(Screens.ARTICLES_DETAILS, { post: mockPost });
    });
  
  });