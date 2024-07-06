import React from 'react';
import { it, expect, describe, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { FlatList } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ArticelComponent } from '../src/components/ArticlesComponent/ArticelComponent';
import { NewsScreen } from '../src/screens/News/NewsScreen';
jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
describe('NewsScreen', () => {

    const queryClient = new QueryClient()
    const TestWrapper = ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
    it('Render ComponentCorrect', () => {

        const tree = render(<NewsScreen />, { wrapper: TestWrapper })
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
   
});
