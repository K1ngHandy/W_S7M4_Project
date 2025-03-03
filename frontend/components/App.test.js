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
		test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
			expect(screen.getByText('Create an Account')).toBeVisible();
		});
		test(`TEXT_FAV_LANG_JS is visible`, () => {
			expect(screen.getByText('JavaScript')).toBeVisible();
		});
		test(`TEXT_FAV_LANG_RUST is visible`, () => {
			expect(screen.getByText('Rust')).toBeVisible();
		});
		test(`TEXT_OPT_FAV_FOOD_1 is visible`, () => {
			expect(screen.getByText('-- Select favorite food --')).toBeVisible();
		});
		test(`TEXT_OPT_FAV_FOOD_2 is visible`, () => {
			expect(screen.getByText('Pizza')).toBeInTheDocument();
		});
		test(`TEXT_OPT_FAV_FOOD_3 is visible`, () => {
			expect(screen.getByText('Spaghetti')).toBeInTheDocument();
		});
		test(`TEXT_OPT_FAV_FOOD_4 is visible`, () => {
			expect(screen.getByText('Broccoli')).toBeInTheDocument();
		});
		test(`TEXT_SUBMIT is visible`, () => {
			expect(screen.getByText('Send')).toBeVisible();
		});
		test(`TEXT_FAV_LANG is visible`, () => {
			expect(screen.getByText('Favorite language:')).toBeVisible();
		});
		test(`LABEL_USERNAME is visible`, () => {
			expect(screen.getByLabelText('Username:'));
		});
		test(`LABEL_FAV_FOOD is visible`, () => {
			expect(screen.getByLabelText('Favorite food:'));
		});
		test(`LABEL_ACCEPT_TERMS is visible`, () => {
			expect(screen.getByLabelText('Agree to our terms')).toBeVisible();
		});
		test(`PLACEHOLDER_USERNAME is visible`, () => {
			expect(screen.getByPlaceholderText('Type username'));
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
		test('TEXT_HEADING_CREATE_ACCOUNT is visible', () => {
			expect(screen.getByText('Crear Cuenta')).toBeVisible();
		});
		test(`TEXT_FAV_LANG_JS is visible`, () => {
			expect(screen.getByText('JavaScript')).toBeVisible();
		});
		test(`TEXT_FAV_LANG_RUST is visible`, () => {
			expect(screen.getByText('Rust')).toBeVisible();
		});
		test(`TEXT_OPT_FAV_FOOD_1 is visible`, () => {
			expect(screen.getByText('-- Elija su plato favorito --')).toBeVisible();
		});
		test(`TEXT_OPT_FAV_FOOD_2 is visible`, () => {
			expect(screen.getByText('Pizza')).toBeInTheDocument();
		});
		test(`TEXT_OPT_FAV_FOOD_3 is visible`, () => {
			expect(screen.getByText('Espaguetis')).toBeInTheDocument();
		});
		test(`TEXT_OPT_FAV_FOOD_4 is visible`, () => {
			expect(screen.getByText('Brócolis')).toBeInTheDocument();
		});
		test(`TEXT_SUBMIT is visible`, () => {
			expect(screen.getByText('Enviar')).toBeVisible();
		});
		test(`TEXT_FAV_LANG is visible`, () => {
			expect(screen.getByText('Lenguaje favorito:')).toBeVisible();
		});
		test(`LABEL_USERNAME is visible`, () => {
			expect(screen.getByLabelText('Usuario:')).toBeVisible();
		});
		test(`LABEL_FAV_FOOD is visible`, () => {
			expect(screen.getByLabelText('Plato favorito:')).toBeVisible();
		});
		test(`LABEL_ACCEPT_TERMS is visible`, () => {
			expect(screen.getByLabelText('Acepto condiciones')).toBeVisible();
		});
		test(`PLACEHOLDER_USERNAME is visible`, () => {
			expect(screen.getByPlaceholderText('Escriba usuario')).toBeVisible();
		});
	});
	describe('getEntriesByKeyPrefix', () => {
		test('can extract the correct data', () => {
			const obj = {
				abc_1: 'data_abc_1',
				abc_2: 'data_abc_2',
				xyz_1: 'data_xyz_1',
				abc_3: 'data_abc_3',
			};
			const expected = [
				['abc_1', 'data_abc_1'],
				['abc_2', 'data_abc_2'],
				['abc_3', 'data_abc_3'],
			];
			const expected2 = [['xyz_1', 'data_xyz_1']];
			expect(getEntriesByKeyPrefix(obj, 'abc')).toEqual(expected);
			expect(getEntriesByKeyPrefix(obj, 'xyz')).toEqual(expected2);
			expect(getEntriesByKeyPrefix(obj, 'foo')).toEqual([]);
		});
	});
});
function getEntriesByKeyPrefix(obj, keyPrefix) {
	return Object.entries(obj).filter(([key]) => key.split('_')[0] === keyPrefix);
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
getEntriesByKeyPrefix(translations, 'en');
