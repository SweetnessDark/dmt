// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

// When DOM is ready
$(() => {
  	const $body = $('body');
	const $btnHamburger = $('.btn-hamburger');
	const $nav = $('.nav');
	const $btnSearch = $('.btn-search');
	const $input = $('.search-input');
	// const BTN_SEARCH_CLASS_NAME = 'is-search-opened';
	const SEARCH_INPUT_ACTIVE_CLASS_NAME = 'is-active-search';
	const MODAL_OPENED_CLASS_NAME = 'is-modal-opened';
	const BTN_HAMBURGER_ACTIVE_CLASS_NAME = 'is-opened';
	const NAVIGATION_ACTIVE_CLASS_NAME = 'is-opened';

	$btnHamburger.on('click', () => {
		$body.toggleClass(MODAL_OPENED_CLASS_NAME);
		$btnHamburger.toggleClass(BTN_HAMBURGER_ACTIVE_CLASS_NAME);
		$nav.toggleClass(NAVIGATION_ACTIVE_CLASS_NAME);
	});

	$btnSearch.on('click', () => {
		$input.toggleClass(SEARCH_INPUT_ACTIVE_CLASS_NAME).focus;
	});

	// initialize with selector string
	const pckry = new Packery('.boxes', {
		itemSelector: '.box',
		gutter: 10,
		columnWidth: 20,
		rowHeight: 10,
		percentPosition: true
});
  
});
