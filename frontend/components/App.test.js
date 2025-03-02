import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import translations from '../i18n/index.json';

describe('Module 4 Project Tests', () => {
	describe('English Language', () => {
		beforeEach(() => {
			render(<App lang="en" />);
		});
		/*
      👉 TASK 1

      One test is done for you as an example.
    */
		test(`${translations[0]} is visible`, () => {
			expect(screen.getByText('Create an Account')).toBeVisible();
		});
		test(`${translations[1]} is visible`, () => {
			expect(screen.getByText('JavaScript')).toBeVisible();
		});
		test(`${translations[2]} is visible`, () => {
			expect(screen.getByText('Rust')).toBeVisible();
		});
		test(`${translations[3]} is visible`, () => {
			expect(screen.getByText('-- Select favorite food --')).toBeVisible();
		});
		test(`${translations[4]} is visible`, () => {
			expect(screen.getByText('Pizza')).toBeVisible();
		});
		test(`${translations[5]} is visible`, () => {
			expect(screen.getByText('Spaghetti')).toBeVisible();
		});
		test(`${translations[6]} is visible`, () => {
			expect(screen.getByText('Broccoli')).toBeVisible();
		});
		test(`${translations[7]} is visible`, () => {
			expect(screen.getByText('Send')).toBeVisible();
		});
		test(`${translations[8]} is visible`, () => {
			expect(screen.getByText('Favorite language:')).toBeVisible();
		});
		test(`${translations[9]} is visible`, () => {
			expect(screen.getByText('Username:')).toBeVisible();
		});
		test(`${translations[10]} is visible`, () => {
			expect(screen.getByText('Favorite food:')).toBeVisible();
		});
		test(`${translations[11]} is visible`, () => {
			expect(screen.getByText('Agree to our terms')).toBeVisible();
		});
		test(`${translations[12]} is visible`, () => {
			expect(screen.getByText('Type username')).toBeVisible();
		});
	});
	describe('Spanish Language', () => {
		beforeEach(() => {
			render(<App lang="esp" />);
		});
		/*
      👉 TASK 3
    
      This is done after making the UI multilingual.
    */
		test('${translations[0]} is visible', () => {
			expect(screen.getByText('Crear Cuenta')).toBeVisible();
		});
		test(`${translations[1]} is visible`, () => {
			expect(screen.getByText('JavaScript')).toBeVisible();
		});
		test(`${translations[2]} is visible`, () => {
			expect(screen.getByText('Rust')).toBeVisible();
		});
		test(`${translations[3]} is visible`, () => {
			expect(screen.getByText('-- Elija su plato favorito --')).toBeVisible();
		});
		test(`${translations[4]} is visible`, () => {
			expect(screen.getByText('Pizza')).toBeVisible();
		});
		test(`${translations[5]} is visible`, () => {
			expect(screen.getByText('Espaguetis')).toBeVisible();
		});
		test(`${translations[6]} is visible`, () => {
			expect(screen.getByText('Brócolis')).toBeVisible();
		});
		test(`${translations[7]} is visible`, () => {
			expect(screen.getByText('Enviar')).toBeVisible();
		});
		test(`${translations[8]} is visible`, () => {
			expect(screen.getByText('Lenguaje favorito:')).toBeVisible();
		});
		test(`${translations[9]} is visible`, () => {
			expect(screen.getByText('Usuario:')).toBeVisible();
		});
		test(`${translations[10]} is visible`, () => {
			expect(screen.getByText('Plato favorito:')).toBeVisible();
		});
		test(`${translations[11]} is visible`, () => {
			expect(screen.getByText('Acepto condiciones')).toBeVisible();
		});
		test(`${translations[12]} is visible`, () => {
			expect(screen.getByText('Escriba usuario')).toBeVisible();
		});
	});
	describe('getEntriesByKeyPrefix', () => {
		test('can extract the correct data', () => {
			/*
      👉 TASK 4 part 2

      Implement the function `getEntriesByKeyPrefix` below
      and then come back here and write a few tests
      to ensure it works as expected.

      Although it should be noted that commonly,
      the tests are written _before_ implementing
      the function being tested.
    */
		});
	});
});
function getEntriesByKeyPrefix(obj, keyPrefix) {
	/*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
}
