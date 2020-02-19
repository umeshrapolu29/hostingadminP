(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/datatables.net/js/jquery.dataTables.js":
/*!*************************************************************!*\
  !*** ./node_modules/datatables.net/js/jquery.dataTables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! DataTables 1.10.19
 * ©2008-2018 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.19
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2018 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
	"use strict";

	if ( true ) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ( $ ) {
			return factory( $, window, document );
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {}
}
(function( $, window, document, undefined ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable = function ( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can hold position.
			this.api( true ).draw( complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			var $this = $(this);
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );
			
			
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				var s = allSettings[i];
			
				/* Base check on table node */
				if (
					s.nTable == this ||
					(s.nTHead && s.nTHead.parentNode == this) ||
					(s.nTFoot && s.nTFoot.parentNode == this)
				) {
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return s.oInstance;
					}
					else if ( bDestroy )
					{
						s.oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( s.sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"sDestroyWidth": $this[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			oSettings.nTable = this;
			oSettings.oApi   = _that.internal;
			oSettings.oInit  = oInit;
			
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			_fnLanguageCompat( oInit.oLanguage );
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				"rowId",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			var oClasses = oSettings.oClasses;
			
			$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			$this.addClass( oClasses.sTable );
			
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnLanguageCompat( json );
						_fnCamelToHungarian( defaults.oLanguage, json );
						$.extend( true, oLanguage, json );
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $this.children('tbody').find('tr').eq(0);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) !== null ? name : null;
				};
			
				$( rowOne[0] ).children('th, td').each( function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			var loadedInit = function () {
				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */
			
				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined ) {
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}
			
				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );
			
				if ( features.bSort ) {
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};
			
							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );
			
							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}
			
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );
			
			
				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */
			
				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $(this).css('caption-side');
				} );
			
				var thead = $this.children('thead');
				if ( thead.length === 0 ) {
					thead = $('<thead/>').appendTo($this);
				}
				oSettings.nTHead = thead[0];
			
				var tbody = $this.children('tbody');
				if ( tbody.length === 0 ) {
					tbody = $('<tbody/>').appendTo($this);
				}
				oSettings.nTBody = tbody[0];
			
				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo($this);
				}
			
				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}
			
				/* Check if there is data passing into the constructor */
				if ( oInit.aaData ) {
					for ( i=0 ; i<oInit.aaData.length ; i++ ) {
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}
			
				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;
			
				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false ) {
					_fnInitialise( oSettings );
				}
			};
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
				_fnLoadState( oSettings, oInit, loadedInit );
			}
			else {
				loadedInit();
			}
			
		} );
		_that = null;
		return this;
	};

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n]/g;
	var _re_html = /<.*?>/g;
	
	// This is not strict ISO8601 - Date.parse() is quite lax, although
	// implementations differ between browsers.
	var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// http://en.wikipedia.org/wiki/Foreign_exchange_market
	// - \u20BD - Russian ruble.
	// - \u20a9 - South Korean Won
	// - \u20BA - Turkish Lira
	// - \u20B9 - Indian Rupee
	// - R - Brazil (R$) and South Africa
	// - fr - Swiss Franc
	// - kr - Swedish krona, Norwegian krone and Danish krone
	// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
	// - Ƀ - Bitcoin
	// - Ξ - Ethereum
	//   standards as thousands separators.
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		// If empty return immediately so there must be a number if it is a
		// formatted string (this stops the string "k", or "kr", etc being detected
		// as a formatted number for currency
		if ( _empty( d ) ) {
			return true;
		}
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !isNaN( parseFloat(d) ) && isFinite( d );
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */
	var _areAllUnique = function ( src ) {
		if ( src.length < 2 ) {
			return true;
		}
	
		var sorted = src.slice().sort();
		var last = sorted[0];
	
		for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
			if ( sorted[i] === last ) {
				return false;
			}
	
			last = sorted[i];
		}
	
		return true;
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		if ( _areAllUnique( src ) ) {
			return src.slice();
		}
	
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: function ( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;
	
			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;
	
				if ( last && now < last + frequency ) {
					clearTimeout( timer );
	
					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		},
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: function ( val ) {
			return val.replace( _re_escape_regex, '\\$1' );
		}
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		// Note the use of the Hungarian notation for the parameters in this method as
		// this is called after the mapping of camelCase to Hungarian
		var defaults = DataTable.defaults.oLanguage;
	
		// Default mapping
		var defaultDecimal = defaults.sDecimal;
		if ( defaultDecimal ) {
			_addNumericSort( defaultDecimal );
		}
	
		if ( lang ) {
			var zeroRecords = lang.sZeroRecords;
	
			// Backwards compatibility - if there is no sEmptyTable given, then use the same as
			// sZeroRecords - assuming that is given.
			if ( ! lang.sEmptyTable && zeroRecords &&
				defaults.sEmptyTable === "No data available in table" )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
			}
	
			// Likewise with loading records
			if ( ! lang.sLoadingRecords && zeroRecords &&
				defaults.sLoadingRecords === "Loading..." )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
			}
	
			// Old parameter name of the thousands separator mapped onto the new
			if ( lang.sInfoThousands ) {
				lang.sThousands = lang.sInfoThousands;
			}
	
			var decimal = lang.sDecimal;
			if ( decimal && defaultDecimal !== decimal ) {
				_addNumericSort( decimal );
			}
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Boolean initialisation of x-scrolling
		if ( typeof init.sScrollX === 'boolean' ) {
			init.sScrollX = init.sScrollX ? '100%' : '';
		}
		if ( typeof init.scrollX === 'boolean' ) {
			init.scrollX = init.scrollX ? '100%' : '';
		}
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	
		// orderData can be given as an integer
		var dataSort = init.aDataSort;
		if ( typeof dataSort === 'number' && ! $.isArray( dataSort ) ) {
			init.aDataSort = [ dataSort ];
		}
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		// We don't need to do this every time DataTables is constructed, the values
		// calculated are specific to the browser and OS configuration which we
		// don't expect to change between initialisations
		if ( ! DataTable.__browser ) {
			var browser = {};
			DataTable.__browser = browser;
	
			// Scrolling feature / quirks detection
			var n = $('<div/>')
				.css( {
					position: 'fixed',
					top: 0,
					left: $(window).scrollLeft()*-1, // allow for scrolling
					height: 1,
					width: 1,
					overflow: 'hidden'
				} )
				.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
							$('<div/>')
								.css( {
									width: '100%',
									height: 10
								} )
						)
				)
				.appendTo( 'body' );
	
			var outer = n.children();
			var inner = outer.children();
	
			// Numbers below, in order, are:
			// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
			//
			// IE6 XP:                           100 100 100  83
			// IE7 Vista:                        100 100 100  83
			// IE 8+ Windows:                     83  83 100  83
			// Evergreen Windows:                 83  83 100  83
			// Evergreen Mac with scrollbars:     85  85 100  85
			// Evergreen Mac without scrollbars: 100 100 100 100
	
			// Get scrollbar width
			browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
	
			// IE6/7 will oversize a width 100% element inside a scrolling element, to
			// include the width of the scrollbar, while other browsers ensure the inner
			// element is contained without forcing scrolling
			browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
	
			// In rtl text layout, some browsers (most, but not all) will place the
			// scrollbar on the left, rather than the right.
			browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;
	
			// IE8- don't provide height and width for getBoundingClientRect
			browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
	
			n.remove();
		}
	
		$.extend( settings.oBrowser, DataTable.__browser );
		settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, $(nTh).data() );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
			if ( oOptions.sClass ) {
				th.addClass( oOptions.sClass );
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( oOptions.iDataSort !== undefined )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
		oCol._setter = null;
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		var vis = 0;
	
		// No reduce in IE8, use a loop for now
		$.each( oSettings.aoColumns, function ( i, col ) {
			if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
				vis++;
			}
		} );
	
		return vis;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string
						if ( detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data',
			idx: iRow
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
	
		// Invalidate the column types as the new data needs to be revalidated
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		var id = oSettings.rowIdFn( aDataIn );
		if ( id !== undefined ) {
			oSettings.aIds[ id ] = oData;
		}
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx+", column "+colIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		// When the data source is null and a specific data type is requested (i.e.
		// not the original data), we can use default column data
		if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type == 'display' ) {
			return '';
		}
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
			return s.replace(/\\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, row, meta) {
				return mSource( data, type, row, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							if ( $.isArray( data ) ) {
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) { // row and meta also passed, but not used
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function () {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val, meta) {
				mSource( data, 'set', val, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						if ( $.isArray( val ) )
						{
							for ( var j=0, jLen=val.length ; j<jLen ; j++ )
							{
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
						}
						else
						{
							// We've been asked to save data to an array, but it
							// isn't array data to be saved. Best that can be done
							// is to just save the value.
							data[ a[i] ] = val;
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) { // meta is also passed in, but not used
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
		settings.aIds = {};
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( settings, row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d !== undefined ?
			d :
			objectRead ?
				{} :
				[];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = $.trim(cell.innerHTML);
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
	
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		// Read the ID from the DOM if present
		var rowNode = row.firstChild ? row : row.nTr;
	
		if ( rowNode ) {
			var id = rowNode.getAttribute( 'id' );
	
			if ( id ) {
				_fnSetObjectDataFn( settings.rowId )( d, id );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( oSettings, row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
	
				nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
				nTd._DT_CellIndex = {
					row: iRow,
					column: i
				};
				
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( (!nTrIn || oCol.mRender || oCol.mData !== i) &&
					 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
				) {
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow, cells] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( settings, row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			var id = settings.rowIdFn( data );
	
			if ( id ) {
				tr.id = id;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowAttr ) {
				$(tr).attr( data.DT_RowAttr );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell[0].innerHTML ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j, iDataIndex] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
		oSettings.nHolding = null;
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
		var callback = function ( json ) {
			_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
			fn( json );
		};
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = typeof ajaxData === 'function' ?
				ajaxData( data, oSettings ) :  // fn can manipulate data or return
				ajaxData;                      // an object object or array to merge
	
			// If the function returned something, use that alone
			data = typeof ajaxData === 'function' && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					_fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				callback( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );
	
				if ( $.inArray( true, ret ) === -1 ) {
					if ( error == "parsererror" ) {
						_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
					}
					else if ( xhr.readyState === 4 ) {
						_fnLog( oSettings, 0, 'Ajax error', 7 );
					}
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				callback,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( typeof ajax === 'function' )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		if ( settings.bAjaxDataGet ) {
			settings.iDraw++;
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax(
				settings,
				_fnAjaxParameters( settings ),
				function(json) {
					_fnAjaxUpdateDraw( settings, json );
				}
			);
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var data = _fnAjaxDataSrc( settings, json );
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.on(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.on( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			$.merge( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var out = [];
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=0 ; i<display.length ; i++ ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( rpSearch.test( data ) ) {
				out.push( display[i] );
			}
		}
	
		settings.aiDisplay = out;
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
		var filtered = [];
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=0 ; i<display.length ; i++ ) {
				if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					filtered.push( display[i] );
				}
			}
	
			settings.aiDisplay = filtered;
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	var _fnEscapeRegex = DataTable.util.escapeRegex;
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						if ( fomatters[ column.sType ] ) {
							cellData = fomatters[ column.sType ]( cellData );
						}
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
		var deferLoading = settings.bDeferLoading; // value modified by the draw
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		_fnCallbackFire( settings, null, 'preInit', [settings] );
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' || deferLoading ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// When data was added after the initialisation (data or Ajax) we need to
		// calculate the column sizing
		if ( json || settings.oInit.aaData ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option(
				typeof language[i] === 'number' ?
					settings.fnFormatNumber( language[i] ) :
					language[i],
				lengths[i]
			);
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.on( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).on( 'scroll.DT', function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		$(scrollBody).css(
			scrollY && scroll.bCollapse ? 'max-height' : 'height', 
			scrollY
		);
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[], footerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		// If the scrollbar visibility has changed from the last draw, we need to
		// adjust the column sizes as the table width will have changed to account
		// for the scrollbar
		var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
		
		if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
			settings.scrollBarVis = scrollBarVis;
			_fnAdjustColumnSizing( settings );
			return; // adjust column sizing will call this function again
		}
		else {
			settings.scrollBarVis = scrollBarVis;
		}
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
		else if ( scrollXInner !== "" ) {
			// legacy x scroll inner has been given - use it
			tableStyle.width = _fnStringToCss(scrollXInner);
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			// Only apply widths to the DataTables detected header cells - this
			// prevents complex headers from having contradictory sizes applied
			if ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {
				nToSize.style.width = headerWidths[i];
			}
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerContent.push( nSizer.innerHTML );
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing">'+headerContent[i]+'</div>';
			nSizer.childNodes[0].style.height = "0";
			nSizer.childNodes[0].style.overflow = "hidden";
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing">'+footerContent[i]+'</div>';
				nSizer.childNodes[0].style.height = "0";
				nSizer.childNodes[0].style.overflow = "hidden";
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		// Correct DOM ordering for colgroup - comes before the thead
		table.children('colgroup').insertBefore( table.children('thead') );
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.scroll();
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'), // from DOM element
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth,
			browser = oSettings.oBrowser,
			ie67 = browser.bScrollOversize;
	
		var styleWidth = table.style.width;
		if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
			tableWidthAttr = styleWidth;
		}
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
		     columnCount == _fnVisbleColumns( oSettings ) &&
		     columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				var colIdx = _fnVisibleToColumnIndex( oSettings, i );
	
				if ( colIdx !== null ) {
					columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
				}
			}
		}
		else
		{
			// Otherwise construct a single row, worst case, table with the widest
			// node in the data, assign any user defined widths, then insert it into
			// the DOM and allow the browser to do all the hard work of calculating
			// table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' );
	
			// Clean up the table body
			tmpTable.find('tbody tr').remove();
			var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );
	
			// Clone the table header and footer - we can't use the header / footer
			// from the cloned table, since if scrolling is active, the table's
			// real header and footer are contained in different table tags
			tmpTable.find('thead, tfoot').remove();
			tmpTable
				.append( $(oSettings.nTHead).clone() )
				.append( $(oSettings.nTFoot).clone() );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
	
				// For scrollX we need to force the column width otherwise the
				// browser will collapse it. If this width is smaller than the
				// width the column requires, then it will have no effect
				if ( column.sWidthOrig && scrollX ) {
					$( headerCells[i] ).append( $('<div/>').css( {
						width: column.sWidthOrig,
						margin: 0,
						padding: 0,
						border: 0,
						height: 1
					} ) );
				}
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Tidy the temporary table - remove name attributes so there aren't
			// duplicated in the dom (radio elements for example)
			$('[name]', tmpTable).removeAttr('name');
	
			// Table has been built, attach to the document so we can work with it.
			// A holding element is used, positioned at the top of the container
			// with minimal height, so it has no effect on if the container scrolls
			// or not. Otherwise it might trigger scrolling when it actually isn't
			// needed
			var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
				.append( tmpTable )
				.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
				tmpTable.removeAttr('width');
	
				// If there is no width attribute or style, then allow the table to
				// collapse
				if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
					tmpTable.width( tableContainer.clientWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.clientWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Get the width of each column in the constructed table - we need to
			// know the inner width (so it can be assigned to the other table's
			// cells) and the outer width so we can calculate the full width of the
			// table. This is safe since DataTables requires a unique cell for each
			// column, but if ever a header can span multiple columns, this will
			// need to be modified.
			var total = 0;
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				var cell = $(headerCells[i]);
				var border = cell.outerWidth() - cell.width();
	
				// Use getBounding... where possible (not IE8-) because it can give
				// sub-pixel accuracy, which we then want to round up!
				var bounding = browser.bBounding ?
					Math.ceil( headerCells[i].getBoundingClientRect().width ) :
					cell.outerWidth();
	
				// Total is tracked to remove any sub-pixel errors as the outerWidth
				// of the table might not equal the total given here (IE!).
				total += bounding;
	
				// Width for each column to use
				columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
			}
	
			table.style.width = _fnStringToCss( total );
	
			// Finished with the table - ditch it
			holder.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			var bindResize = function () {
				$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
					_fnAdjustColumnSizing( oSettings );
				} ) );
			};
	
			// IE6/7 will crash if we bind a resize event handler on page load.
			// To be removed in 1.11 which drops IE6/7 support
			if ( ie67 ) {
				setTimeout( bindResize, 1000 );
			}
			else {
				bindResize();
			}
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	var _fnThrottle = DataTable.util.throttle;
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
			s = s.replace( /&nbsp;/g, ' ' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					$.merge( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null && sorting.length === 1 ) {
					nextSortIdx = 0; // can't remove sorting completely
				}
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if ( !settings.oFeatures.bStateSave || settings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
		settings.oSavedState = state;
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit, callback )
	{
		var i, ien;
		var columns = settings.aoColumns;
		var loaded = function ( s ) {
			if ( ! s || ! s.time ) {
				callback();
				return;
			}
	
			// Allow custom and plug-in manipulation functions to alter the saved data set and
			// cancelling of loading by returning false
			var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
			if ( $.inArray( false, abStateLoad ) !== -1 ) {
				callback();
				return;
			}
	
			// Reject old data
			var duration = settings.iStateDuration;
			if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
				callback();
				return;
			}
	
			// Number of columns have changed - all bets are off, no restore of settings
			if ( s.columns && columns.length !== s.columns.length ) {
				callback();
				return;
			}
	
			// Store the saved state so it might be accessed at any time
			settings.oLoadedState = $.extend( true, {}, s );
	
			// Restore key features - todo - for 1.11 this needs to be done by
			// subscribed events
			if ( s.start !== undefined ) {
				settings._iDisplayStart    = s.start;
				settings.iInitDisplayStart = s.start;
			}
			if ( s.length !== undefined ) {
				settings._iDisplayLength   = s.length;
			}
	
			// Order
			if ( s.order !== undefined ) {
				settings.aaSorting = [];
				$.each( s.order, function ( i, col ) {
					settings.aaSorting.push( col[0] >= columns.length ?
						[ 0, col[1] ] :
						col
					);
				} );
			}
	
			// Search
			if ( s.search !== undefined ) {
				$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
			}
	
			// Columns
			//
			if ( s.columns ) {
				for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
					var col = s.columns[i];
	
					// Visibility
					if ( col.visible !== undefined ) {
						columns[i].bVisible = col.visible;
					}
	
					// Search
					if ( col.search !== undefined ) {
						$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
					}
				}
			}
	
			_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
			callback();
		}
	
		if ( ! settings.oFeatures.bStateSave ) {
			callback();
			return;
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );
	
		if ( state !== undefined ) {
			loaded( state );
		}
		// otherwise, wait for the loaded callback to be executed
	}
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( settings ) {
				_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
			}
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else if ( type == 'throw' ) {
				throw new Error(msg);
			}
			else if ( typeof type == 'function' ) {
				type( settings, tn, msg );
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.on( 'click.DT', oData, function (e) {
					$(n).blur(); // Remove focus outline for mouse users
					fn(e);
				} )
			.on( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.on( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, eventName, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( eventName !== null ) {
			var e = $.Event( eventName+'.dt' );
	
			$(settings.nTable).trigger( e, args );
	
			ret.push( e.result );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! (this instanceof _Api) ) {
			return new _Api( context, data );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings = settings.concat( a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			$.merge( this, data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
	// isPlainObject.
	$.extend( _Api.prototype, {
		any: function ()
		{
			return this.count() !== 0;
		},
	
	
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		count: function ()
		{
			return this.flatten().length;
		},
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		slice: function () {
			return new _Api( this.context, this );
		},
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	} );
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			j, jen,
			struct, inner,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = typeof struct.val === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				$.isPlainObject( struct.val ) ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   []
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 */
	_api_register( 'draw()', function ( paging ) {
		return this.iterator( 'table', function ( settings ) {
			if ( paging === 'page' ) {
				_fnDraw( settings );
			}
			else {
				if ( typeof paging === 'string' ) {
					paging = paging === 'full-hold' ?
						false :
						true;
				}
	
				_fnReDraw( settings, paging===false );
			}
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords,
			"serverSide":     _fnDataSource( settings ) === 'ssp'
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		// Use the draw event to trigger a callback
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			_fnProcessingDisplay( settings, true );
	
			// Cancel an existing request
			var xhr = settings.jqXHR;
			if ( xhr && xhr.readyState !== 4 ) {
				xhr.abort();
			}
	
			// Trigger xhr
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( type, selector, selectFn, settings, opts )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			// Only split on simple strings - complex expressions will be jQuery selectors
			a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out = out.concat( res );
				}
			}
		}
	
		// selector extensions
		var ext = _ext.selector[ type ];
		if ( ext.length ) {
			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				out = ext[i]( settings, opts, out );
			}
		}
	
		return _unique( out );
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && opts.search === undefined ) {
			opts.search = opts.filter;
		}
	
		return $.extend( {
			search: 'none',
			order: 'current',
			page: 'all'
		}, opts );
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst[0].length = 1;
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			if ( search == 'none') {
				a = displayMaster.slice();
			}
			else if ( search == 'applied' ) {
				a = displayFiltered.slice();
			}
			else if ( search == 'removed' ) {
				// O(n+m) solution by creating a hash map
				var displayFilteredMap = {};
	
				for ( var i=0, ien=displayFiltered.length ; i<ien ; i++ ) {
					displayFilteredMap[displayFiltered[i]] = null;
				}
	
				a = $.map( displayMaster, function (el) {
					return ! displayFilteredMap.hasOwnProperty(el) ?
						el :
						null;
				} );
			}
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	var __row_selector = function ( settings, selector, opts )
	{
		var rows;
		var run = function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
			var aoData = settings.aoData;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			if ( ! rows ) {
				rows = _selector_row_indexes( settings, opts );
			}
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( sel === null || sel === undefined || sel === '' ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Selector - node
			if ( sel.nodeName ) {
				var rowIdx = sel._DT_RowIndex;  // Property added by DT for fast lookup
				var cellIdx = sel._DT_CellIndex;
	
				if ( rowIdx !== undefined ) {
					// Make sure that the row is actually still present in the table
					return aoData[ rowIdx ] && aoData[ rowIdx ].nTr === sel ?
						[ rowIdx ] :
						[];
				}
				else if ( cellIdx ) {
					return aoData[ cellIdx.row ] && aoData[ cellIdx.row ].nTr === sel ?
						[ cellIdx.row ] :
						[];
				}
				else {
					var host = $(sel).closest('*[data-dt-row]');
					return host.length ?
						[ host.data('dt-row') ] :
						[];
				}
			}
	
			// ID selector. Want to always be able to select rows by id, regardless
			// of if the tr element has been created or not, so can't rely upon
			// jQuery here - hence a custom implementation. This does not match
			// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
			// but to select it using a CSS selector engine (like Sizzle or
			// querySelect) it would need to need to be escaped for some characters.
			// DataTables simplifies this for row selectors since you can select
			// only a row. A # indicates an id any anything that follows is the id -
			// unescaped.
			if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
				// get row index from id
				var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
				if ( rowObj !== undefined ) {
					return [ rowObj.idx ];
				}
	
				// need to fall through to jQuery in case there is DOM id that
				// matches
			}
			
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		};
	
		return _selector_run( 'row', selector, run, settings, opts );
	};
	
	
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
		var a = [];
		var context = this.context;
	
		// `iterator` will drop undefined values, but in this case we want them
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
				var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
				a.push( (hash === true ? '#' : '' )+ id );
			}
		}
	
		return new _Api( context, a );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
			var rowData = data[ row ];
			var i, ien, j, jen;
			var loopRow, loopCells;
	
			data.splice( row, 1 );
	
			// Update the cached indexes
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				loopRow = data[i];
				loopCells = loopRow.anCells;
	
				// Rows
				if ( loopRow.nTr !== null ) {
					loopRow.nTr._DT_RowIndex = i;
				}
	
				// Cells
				if ( loopCells !== null ) {
					for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
						loopCells[j]._DT_CellIndex.row = i;
					}
				}
			}
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// For server-side processing tables - subtract the deleted row from the count
			if ( settings._iRecordsDisplay > 0 ) {
				settings._iRecordsDisplay--;
			}
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
	
			// Remove the row's ID reference if there is one
			var id = settings.rowIdFn( rowData._aData );
			if ( id !== undefined ) {
				delete settings.aIds[ id ];
			}
		} );
	
		this.iterator( 'table', function ( settings ) {
			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				settings.aoData[i].idx = i;
			}
		} );
	
		return this;
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		$.merge( modRows, newRows );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		var row = ctx[0].aoData[ this[0] ];
		row._aData = data;
	
		// If the DOM has an id, and the data source is an array
		if ( $.isArray( data ) && row.nTr.id ) {
			_fnSetObjectDataFn( ctx[0].rowId )( data, row.nTr.id );
		}
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// Recursion to allow for arrays of jQuery objects
			if ( $.isArray( r ) || r instanceof $ ) {
				for ( var i=0, ien=r.length ; i<ien ; i++ ) {
					addRow( r[i], k );
				}
				return;
			}
	
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		addRow( data, klass );
	
		if ( row._details ) {
			row._details.detach();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row && row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.detach();
				}
	
				__details_events( ctx[0] );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		var run = function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
	
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
	
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
	
					default:
						return [];
				}
			}
	
			// Cell in the table body
			if ( s.nodeName && s._DT_CellIndex ) {
				return [ s._DT_CellIndex.column ];
			}
	
			// jQuery selector on the TH elements for the columns
			var jqResult = $( nodes )
				.filter( s )
				.map( function () {
					return $.inArray( this, nodes ); // `nodes` is column index complete and in order
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise a node which might have a `dt-column` data attribute, or be
			// a child or such an element
			var host = $(s).closest('*[data-dt-column]');
			return host.length ?
				[ host.data('dt-column') ] :
				[];
		};
	
		return _selector_run( 'column', selector, run, settings, opts );
	};
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		// Update colspan for no records display. Child rows and extensions will use their own
		// listeners to do this - only need to update the empty table item here
		if ( ! settings.aiDisplay.length ) {
			$(settings.nTBody).find('td[colspan]').attr('colspan', _fnVisbleColumns(settings));
		}
	
		_fnSaveState( settings );
	};
	
	
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		var ret = this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis );
		} );
	
		// Group the column visibility changes
		if ( vis !== undefined ) {
			// Second loop once the first is done for events
			this.iterator( 'column', function ( settings, column ) {
				_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
			} );
	
			if ( calc === undefined || calc ) {
				this.columns.adjust();
			}
		}
	
		return ret;
	} );
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		var run = function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = data[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				// Valid cell index and its in the array of selectable rows
				return s.column !== undefined && s.row !== undefined && $.inArray( s.row, rows ) !== -1 ?
					[s] :
					[];
			}
	
			// Selector - jQuery filtered cells
			var jqResult = allCells
				.filter( s )
				.map( function (i, el) {
					return { // use a new object, in case someone changes the values
						row:    el._DT_CellIndex.row,
						column: el._DT_CellIndex.column
	 				};
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise the selector is a node, and there is one last option - the
			// element might be a child of an element which has dt-row and dt-column
			// data attributes
			host = $(s).closest('*[data-dt-row]');
			return host.length ?
				[ {
					row: host.data('dt-row'),
					column: host.data('dt-column')
				} ] :
				[];
		};
	
		return _selector_run( 'cell', selector, run, settings, opts );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( rowSelector.row === undefined ) {
				// Selector options in first parameter
				opts = rowSelector;
				rowSelector = null;
			}
			else {
				// Cell index objects in first parameter
				opts = columnSelector;
				columnSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// Row + column selector
		var columns = this.columns( columnSelector );
		var rows = this.rows( rowSelector );
		var a, i, ien, j, jen;
	
		this.iterator( 'table', function ( settings, idx ) {
			a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
		}, 1 );
	
	    // Now pass through the cell selector for options
	    var cells = this.cells( a, opts );
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var data = settings.aoData[ row ];
	
			return data && data.anCells ?
				data.anCells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( order.length && ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	_api_register( 'order.fixed()', function ( set ) {
		if ( ! set ) {
			var ctx = this.context;
			var fixed = ctx.length ?
				ctx[0].aaSortingFixed :
				undefined;
	
			return $.isArray( fixed ) ?
				{ pre: fixed } :
				fixed;
		}
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSortingFixed = $.extend( true, {}, set );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		if ( table instanceof DataTable.Api ) {
			return true;
		}
	
		$.each( DataTable.settings, function (i, o) {
			var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
			var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;
	
			if ( o.nTable === t || head === t || foot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		var api = false;
	
		if ( $.isPlainObject( visible ) ) {
			api = visible.api;
			visible = visible.visible;
		}
	
		var a = $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	
		return api ?
			new _Api( a ) :
			a;
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
				return ! e.match(/\.dt\b/) ?
					e+'.dt' :
					e;
				} ).join( ' ' );
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'init()', function () {
		var ctx = this.context;
		return ctx.length ? ctx[0].oInit : null;
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
			$(window).off('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Remove the DataTables generated nodes, events and classes
			var removedMethod = remove ? 'remove' : 'detach';
			jqTable[ removedMethod ]();
			jqWrapper[ removedMethod ]();
	
			// If we need to reattach the table to the document
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
	
				// Restore the width of the original table - was read from the style property,
				// so we can restore directly to that
				jqTable
					.css( 'width', settings.sDestroyWidth )
					.removeClass( classes.sTable );
	
				// If the were originally stripe classes - then we add them back here.
				// Note this is not fool proof (for example if not all rows had stripe
				// classes - but it's a good effort without getting carried away
				ien = settings.asDestroyStripes.length;
	
				if ( ien ) {
					jqTbody.children().each( function (i) {
						$(this).addClass( settings.asDestroyStripes[i % ien] );
					} );
				}
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	
	
	// Add the `every()` method for rows, columns and cells in a compact form
	$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
		_api_register( type+'s().every()', function ( fn ) {
			var opts = this.selector.opts;
			var api = this;
	
			return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
				// Rows and columns:
				//  arg1 - index
				//  arg2 - table counter
				//  arg3 - loop counter
				//  arg4 - undefined
				// Cells:
				//  arg1 - row index
				//  arg2 - column index
				//  arg3 - table counter
				//  arg4 - loop counter
				fn.call(
					api[ type ](
						arg1,
						type==='cell' ? arg2 : opts,
						type==='cell' ? opts : undefined
					),
					arg1, arg2, arg3, arg4
				);
			} );
		} );
	} );
	
	
	// i18n method for extensions to be able to use the language object from the
	// DataTable
	_api_register( 'i18n()', function ( token, def, plural ) {
		var ctx = this.context[0];
		var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );
	
		if ( resolved === undefined ) {
			resolved = def;
		}
	
		if ( plural !== undefined && $.isPlainObject( resolved ) ) {
			resolved = resolved[ plural ] !== undefined ?
				resolved[ plural ] :
				resolved._;
		}
	
		return resolved.replace( '%d', plural ); // nb: plural might be undefined,
	} );
	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.19";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null,
	
		/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */
		"idx": -1
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null,
	
	
		/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */
		"rowId": "DT_RowId"
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "details.0" },
		 *          { "data": "details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false,
	
			/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */
			"bBounding": false,
	
			/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */
			"barWidth": 0
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */
		"aIds": {},
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {},
	
		/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */
		"rowIdFn": null,
	
		/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */
		"rowId": null
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */
		buttons: {},
	
	
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */
		builder: "-source-",
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */
		selector: {
			cell: [],
			column: [],
			row: []
		},
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! data.substring(1).match(/[0-9]/) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-half+2, page+half-1 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		numbers: function ( page, pages ) {
			return [ _numbers(page, pages) ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
		
		first_last_numbers: function (page, pages) {
	 		return ['first', _numbers(page, pages), 'last'];
	 	},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
	
		// Number of number buttons (including ellipsis) to show. _Must be odd!_
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var aria = settings.oLanguage.oAria.paginate || {};
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = null;
							btnClass = '';
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span class="ellipsis">&#x2026;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay !== null ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'aria-label': aria[ button ],
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				var activeEl;
	
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					activeEl = $(host).find(document.activeElement).data('dt-idx');
				}
				catch (e) {}
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== undefined ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
				}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 tries _very_ hard to make a string passed into `Date.parse()`
			// valid, so we need to use a regex to restrict date formats. Use a
			// plug-in for anything other than ISO8601 style strings
			if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			var ts = Date.parse( d );
			return isNaN(ts) ? -Infinity : ts;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	var __htmlEscapeEntities = function ( d ) {
		return typeof d === 'string' ?
			d.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') :
			d;
	};
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix, postfix ) {
			return {
				display: function ( d ) {
					if ( typeof d !== 'number' && typeof d !== 'string' ) {
						return d;
					}
	
					var negative = d < 0 ? '-' : '';
					var flo = parseFloat( d );
	
					// If NaN then there isn't much formatting that we can do - just
					// return immediately, escaping any HTML (this was supposed to
					// be a number after all)
					if ( isNaN( flo ) ) {
						return __htmlEscapeEntities( d );
					}
	
					flo = flo.toFixed( precision );
					d = Math.abs( flo );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart +
						(postfix||'');
				}
			};
		},
	
		text: function () {
			return {
				display: __htmlEscapeEntities,
				filter: __htmlEscapeEntities
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnExtend: _fnExtend,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Provide access to the host jQuery object (circular reference)
	DataTable.$ = $;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-employee/add-employee.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-employee/add-employee.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container empData bgLogo\">\n\t<div class=\"row\">\n\t\t<div class=\"col-1\"></div>\n\n\t\t<div class=\"col-10\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-title\">\n\t\t\t\t\t<div class=\"row header bg-dark\">\n\t\t\t\t\t\t<img src=\"http://zyclyx.com/wp-content/uploads/2018/10/ZYCLYX-EXPERIENCED-IN-FUTURE-WORLD-White.png\" class=\"ml-3\" width=\"200px\" height=\"50px\">\t\t\t\t\t\n\t\t\t\t\t\t\t<p class=\"float-right headtext display-4 mt-2 font-weight-bold\">New Employee Details</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<form name=\"form\" #f=\"ngForm\" validate>\t\t\t\t\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-1\"></div>\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tFirst Name\n\t\t\t\t\t\t\t\t\t\t\t<span>*</span>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"first_name\" \n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.first_name\" \n\t\t\t\t\t\t\t\t\t\t\t#first_name= \"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tpattern=\"^[a-zA-Z\\s]+([a-zA-Z]+\\s)?$\" \n\t\t\t\t\t\t\t\t\t\t\tminlength=\"3\"\n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"first_name.touched && first_name.invalid\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"first_name.errors?.required\"><span style=\"color:red\">First name is required!..</span></div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"first_name.errors?.minlength\"><span style=\"color:red\">Please enter more than 3 characters!..</span></div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"first_name.errors?.pattern\"><span style=\"color:red\">Please enter characters only!..</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tLast Name\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t name=\"last_name\"\n\t\t\t\t\t\t\t\t\t\t\t  Autocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\" empData.last_name\" \n\t\t\t\t\t\t\t\t\t\t\t  #last_name= \"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tpattern=\"^[a-zA-Z\\s]+([a-zA-Z]+\\s)?$\" \n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"last_name.touched && last_name.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"last_name.errors?.required\"><span style=\"color:red\">last name is required!..</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"last_name.errors?.pattern\"><span style=\"color:red\">Please enter characters only!..</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"email\" \n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.email\"\n\t\t\t\t\t\t\t\t\t\t\t#email=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tpattern=\"^[\\w-]+(\\.[\\w-]+)*@([a-z0-9-]+(\\.[a-z0-9-]+)*?\\.[a-z]{2,6}|(\\d{1,3}\\.){3}\\d{1,3})(:\\d{4})?$\"\n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.touched && email.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\"><span style=\"color:red\">Email is required</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.pattern\"><span style=\"color:red\">Invalid Email address</span></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tDate of Joining\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t name=\"DOJ\"\n\t\t\t\t\t\t\t\t\t\t\t  Autocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\" empData.DOJ\"\n\t\t\t\t\t\t\t\t\t\t\t  #DOJ=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t  Autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"DOJ.touched && DOJ.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"DOJ.errors.required\"><span style=\"color:red\">Date of Joining is required</span></div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tPhone Number\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"phonenumber\" \n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.phonenumber\" \n\t\t\t\t\t\t\t\t\t\t\t#PhoneNumber=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tpattern=\"^[6-9]\\d{9}$\"\n\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\tminlength=\"10\"\n\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"PhoneNumber.touched && PhoneNumber.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"PhoneNumber.errors.required\"><span style=\"color:red\">Phone number is required!..</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"PhoneNumber.errors.pattern\"><span style=\"color:red\">Invalid mobile number!..</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tGender\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"left-align\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"gender\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"male\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.gender\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span> Male</span>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"gender\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"female\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.gender\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span> Female</span>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tDate of Birth\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"DOB\" \n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.DOB\" \n\t\t\t\t\t\t\t\t\t\t\t#DOB=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"DOB.touched && DOB.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"DOB.errors.required\"><span style=\"color:red\">Date of Birth is required</span></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tpassword\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\ttype=\"password\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"password\" \n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.password\"\n\t\t\t\t\t\t\t\t\t\t\t#password=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tminlength=\"8\"\n\t\t\t\t\t\t\t\t\t\t\tpattern=\"(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$\" \n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password.touched && password.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password.errors.required\"><span style=\"color:red\" >Password is required!..</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password.errors.minlength\"><span style=\"color:red\">Password minimum 8 letters required </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password.errors.pattern\"><span style=\"color: red\">Atleast one uppercase,one lowercase,one digit and  one special character</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\tCnfm Password\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\ttype=\"password\" \t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\tname=\"cnf-pswd\" \n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\" empData.cnf_pswd\"\n\t\t\t\t\t\t\t\t\t\t\t#cnfmPass=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\tAutocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cnfmPass.touched && cnfmPass.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cnfmPass.errors.required\"><span style=\"color:red\">Confirm Password is required</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cnfmPass.errors.notEqual\"><span style=\"color: red\">Password and Confirm Password is mismatch</span></div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Upload image</td>\n\t\t\t\t\t\t\t\t\t\t<td>:</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\ttype=\"file\" \n\t\t\t\t\t\t\t\t\t\t\tid=\"avatar\"\n\t\t\t\t\t\t\t\t\t\t\t name=\"imageproduct\" \n\t\t\t\t\t\t\t\t\t\t\t [(ngModel)]=\"imageproduct\"\n\t\t\t\t\t\t\t\t\t\t\t #uploadImage=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t (change)=\"fileChangeEvent($event)\" \n\t\t\t\t\t\t\t\t\t\t\t #fileInput>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"fileupload\"> Select a file to upload</label>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<button class=\"btn-block btn-success w-50 btnsubmit\" type=\"button\" (click)=\"addemployee()\">Submit</button>\n\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-1\">\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/addholiday/addholiday.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addholiday/addholiday.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content-wrapper \" style=\"margin-left: -237px;\">\n    <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">\n\n      <h3>\n    Add Holiday\n    </h3>\n<div class=\"float-right\">\n  <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n</div>\n  <div class=\"page-bar\">\n    <ul class=\"page-breadcrumb\">\n        <li>\n            <i class=\"fa fa-home\"></i>\n            <a >Home</a>\n            <i class=\"fa fa-angle-right\"></i>\n        </li>\n         <li>\n            <a href=\"#\">Holidays</a>\n            <i class=\"fa fa-angle-right\"></i>\n        </li>\n        <li>\n            <a href=\"#\">Add Holiday </a>\n        </li>\n    </ul>\n\n</div>\n\n<div class=\"row\">\n <div class=\"col-md-12\">\n        <div class=\"portlet box blue\">\n          <div class=\"tittle\">\n            <div class=\"caption text-white p-2\">\n                    <i class=\"fas fa-edit mr-2\"></i>Add Holiday\n            </div>\n          </div>\n\n          <div class=\"portlet-body\">\n        \n       \n                <form method=\"POST\" action=\"#\" accept-charset=\"UTF-8\" id=\"add_holiday_form\" class=\"form-horizontal \"><input name=\"_token\" type=\"hidden\" value=\"dQTuwZQEpxNYil6cEmFDzChuT8u0eI1LnFG26GCZ\">\n    \n    \n                  <div class=\"form-body\">\n            \n                   <table>\n                       <tbody>\n                           <tr>\n                        <div class=\"row inputfields\">\n                          <div class=\"col-md-4 \">\n                              <td> <label>Date:</label>\n                             <input type=\"date\" value=\"\" class=\"border p-3\" name=\"date\" placeholder=\"Date\" [(ngModel)]=\"addholidaydata.date\"></td>\n            \n                          </div>\n                          <div class=\"col-md-4\">\n                              <td> <label>Reason:</label><br>\n    \n                              <textarea class=\"form-control form-control-inline\"  class=\"\" type=\"text\" name=\"reason\" placeholder=\"Occasion\" [(ngModel)]=\"addholidaydata.reason\"></textarea></td>\n                          </div>\n                          <div class=\"col-md-4 \">\n                                <div class=\"input-group-prepend\">\n                                  <label>Holiday Type</label>\n                                </div>\n                                <select class=\"custom-select\" id=\"inputGroupSelect01\" name=\"holidaytype\" [(ngModel)]=\"addholidaydata.holidaytype\">\n                                  <option selected>Choose...</option>\n                                  <option value=\"Holiday\">Holiday</option>\n                                  <option value=\"OptionalHoliday\">Optional Holiday</option>\n                                \n                                </select>\n                                \n                              </div>\n                          </div>\n                          </tr>\n                      </tbody>\n                     </table>\n                      <div id=\"insertBefore\"></div>\n                     \n            \n                  </div>\n            \n                  <div class=\"form-actions\">\n                      <div class=\"row\">\n                          <div class=\"col-md-offset-3 col-md-9\">\n                              <button type=\"submit\"  (click)=\"addholiday()\"  routerLink=\"/holiday\" class=\"btn green p-2 mr-2\"><i class=\"fa fa-check\" ></i> Submit</button>\n            \n                          </div>\n                      </div>\n                  </div>\n                  </form>\n\n\n         </div>\n\n        </div>\n    </div>\n</div>\n</div>\n\n\n\n<!-- \n\n<div class=\"container bg-light mt-2\">\n  <div class=\"page-content-wrapper\" style=\"margin-left:0px;\">\n    <div class=\"page-content\"style=\"margin-right:0px;\">\n<h3>\n    Add Holiday\n</h3>\n<div class=\"float-right\">\n    <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n  </div>\n</div>\n<div class=\"page-bar\">\n    <ul class=\"page-breadcrumb\">\n        <li>\n            <i class=\"fa fa-home\"></i>\n            <a href=\"#\">Home</a>\n            <i class=\"fa fa-angle-right\"></i>\n        </li>\n        <li>\n    <a href=\"#\"  routerLink=\"/holiday\">Holiday</a>\n            <i class=\"fa fa-angle-right\"></i>\n        </li>\n        \n    </ul>\n\n</div>\n\n  \n    <div class=\"portlet box blue\">\n      <div class=\"portlet-title\">\n        <div class=\"caption\">\n            \n        </div>\n        <div class=\"tools\">\n        </div>\n      </div>\n\n      <div class=\"portlet-body form\">\n        \n       \n            <form method=\"POST\" action=\"#\" accept-charset=\"UTF-8\" id=\"add_holiday_form\" class=\"form-horizontal \"><input name=\"_token\" type=\"hidden\" value=\"dQTuwZQEpxNYil6cEmFDzChuT8u0eI1LnFG26GCZ\">\n\n\n              <div class=\"form-body\">\n        \n               <table>\n                   <tbody>\n                       <tr>\n                    <div class=\"row inputfields\">\n                      <div class=\"col-md-4 \">\n                          <td> <label>Date:</label>\n                         <input type=\"date\" value=\"\" class=\"border p-3\" name=\"date\" placeholder=\"Date\" [(ngModel)]=\"addholidaydata.date\"></td>\n        \n                      </div>\n                      <div class=\"col-md-4\">\n                          <td> <label>Reason:</label><br>\n\n                          <textarea class=\"form-control form-control-inline\"  class=\"\" type=\"text\" name=\"reason\" placeholder=\"Occasion\" [(ngModel)]=\"addholidaydata.reason\"></textarea></td>\n                      </div>\n                      <div class=\"col-md-4 \">\n                            <div class=\"input-group-prepend\">\n                              <label class=\"input-group-text\" for=\"inputGroupSelect01\">Holiday Type</label>\n                            </div>\n                            <select class=\"custom-select\" id=\"inputGroupSelect01\" name=\"holidaytype\" [(ngModel)]=\"addholidaydata.holidaytype\">\n                              <option selected>Choose...</option>\n                              <option value=\"Holiday\">Holiday</option>\n                              <option value=\"OptionalHoliday\">Optional Holiday</option>\n                            \n                            </select>\n                            \n                          </div>\n                      </div>\n                      </tr>\n                  </tbody>\n                 </table>\n                  <div id=\"insertBefore\"></div>\n                 \n        \n              </div>\n        \n              <div class=\"form-actions\">\n                  <div class=\"row\">\n                      <div class=\"col-md-offset-3 col-md-9\">\n                          <button type=\"submit\"  (click)=\"addholiday()\"  routerLink=\"/holiday\" class=\"btn green\"><i class=\"fa fa-check\" ></i> Submit</button>\n        \n                      </div>\n                  </div>\n              </div>\n              </form>\n      </div>\n    </div>\n</div> -->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/addiprocurement/addiprocurement.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addiprocurement/addiprocurement.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"page-content-wrapper\" style=\"margin-left:0px;\">\n    <div class=\"page-content bgLogo\" style=\"margin-left:0px;\">\n<h3 class=\"page-title\">\n    Item Add page\n</h3>\n</div>\n<div class=\"page-bar\">\n    <ul class=\"page-breadcrumb\">\n        <li>\n            <i class=\"fa fa-home\"></i>\n            <a href=\"#\">Home</a>\n            <i class=\"fa fa-angle-right\"></i>\n        </li>\n        <li>\n    <a href=\"#\"  routerLink=\"/iprocurement\">Iprocurement</a>\n            <i class=\"fa fa-angle-right\"></i>\n        </li>\n        <li>\n            <a href=\"\">Add Item</a>\n        </li>\n    </ul>\n\n</div>\n\n  \n    <div class=\"portlet box blue\">\n      <div class=\"portlet-title\">\n        <div class=\"caption\">\n          <i class=\"fa fa-plus\"></i>Add New item\n        </div>\n        <div class=\"tools\">\n        </div>\n      </div>\n\n      <div class=\"portlet-body form\">\n        \n          <div class=\"form-body\">\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n              <div class=\"col-2 control-label text-right\">Item Name: <span class=\"required\">\n              * </span>\n            </div>\n            <div class=\"col-5\">\n              <input type=\"text\" class=\"form-control\" name=\"itemName\" placeholder=\"Item Name\"\n              value=\"\">\n            </div>\n            <div class=\"col-5\"></div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"row\">\n            <div class=\"col-2 control-label text-right\">Purchase From:\n            </div>\n            <div class=\"col-5\">\n              <input type=\"text\" class=\"form-control\" name=\"purchaseFrom\" placeholder=\"Purchase From\"\n              value=\"\">\n            </div>\n            <div class=\"col-5\"></div>\n          </div>\n        </div>\n\n          <div class=\"form-group\">\n            <div class=\"row\">\n            <div class=\"col-2 control-label text-right\">Purchase Date:\n            </div>\n            <div class=\"col-5\">\n              <div class=\"input-group input-medium\">\n                <input type=\"date\" class=\"form-control\" name=\"purchaseDate\">\n                \n                </div>\n              </div>\n              <div class=\"col-5\"></div>\n            </div>\n          </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n              <div class=\"col-2 control-label text-right\">Amount price:<span class=\"required\">  * </span>\n               <span class=\"fa fa-inr\"></span>\n              </div>\n\n                <div class=\"col-5\">\n                  <input type=\"text\" class=\"form-control\" name=\"price\" placeholder=\"Price of Item\"\n                  value=\"\">\n                </div>\n                <div class=\"col-5\"></div>\n              </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n                <div class=\"col-2 control-label text-right\">Attach Bill:</div>\n\n                <div class=\"col-5\">\n                \n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input\"  >\n                    <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                  </div>\n                      </div>\n                                        \n                \n                <div class=\"col-5\"></div>\n              </div>\n              </div>\n            \n\n              <div class=\"form-actions\">\n                <div class=\"row\">\n                  <div class=\"col text-center\">\n                    <button type=\"button\" class=\"btn green\"><i\n                      class=\"fa fa-check\"></i> Submit\n                    </button>\n\n                  </div>\n                </div>\n              </div>\n      </div>\n    </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/addnotice/addnotice.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addnotice/addnotice.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content-wrapper\" style=\"margin-left: -237px;\">\n \t\n  <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">\n      <h3>\n         Add Notice Board\n      </h3>\n      <div class=\"float-right\">\n        <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n      </div>\n      <div class=\"page-bar\">\n          <ul class=\"page-breadcrumb\">\n            <li>\n              <i class=\"fa fa-home\"></i>\n              <a>Home</a>\n              <i class=\"fa fa-angle-right\"></i>\n            </li>\n            <li>\n              <a href=\"#\" routerLink=\"/noticeboard\"> Notice\n              <i class=\"fa fa-angle-right\"></i>\n            </a>\n            </li>\n            <li>\n              <a href=\"\">Add Notice</a>\n            </li>\n          </ul>\n        \n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"portlet box blue\">\n\n\n                    <div class=\"portlet-title\">\n                        <div class=\"caption\">\n                          <i class=\"fa fa-plus\"></i>New Notice\n                        </div>\n                        <div class=\"tools\">\n                        </div>\n                      </div>\n                      <div class=\"portlet-body form\">\n\n                          <form style=\" height: 301px;\">\n                          \n                              <div class=\"form-body\" >\n                                  <div class=\"form-group\">\n                                      <label class=\"col-md-2 control-label\">Title: <span class=\"required\">\n                                      * </span>\n                                          </label>\n                                         \n                                          <div class=\"col-md-6\">\n                                              <input type=\"text\" class=\"form-control block\" name=\"title\" [(ngModel)]=\"noticedata.title\">\n                                            </div>\n                                      </div>\n                                      <div class=\"form-group\">\n                                        <label class=\"col-md-2 control-label\">Discription: <span class=\"required\">\n                                        * </span>\n                                            </label>\n                                            <div class=\"col-md-6\">\n                                                <textarea class=\"form-control\" name=\"description\"  [(ngModel)]=\"noticedata.description\"></textarea>\n                                              </div>\n                                        </div>\n                                        <div class=\"form-actions\">\n                                          <div class=\"row\">\n                                              <div class=\"col-md-offset-3 col-md-9\">\n\n                                                     <button type=\"button\" (click)=\"addnotice()\" class=\"btn green\">\n                                                Submit </button>\n\n                                              </div>\n                                          </div>\n                                      </div>\n                                      \n\n                              </div>\n                          \n                          \n                          </form>\n\n\n\n                      </div>\n\n\n                </div>\n\n\n              </div>\n              </div>\n\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/attendence/attendence.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attendence/attendence.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">      \n\t\t<div class=\"page-bar\">\n\t\t\t<h3 class=\"titleName\">\n\t\t\t\tAttendance\n\t\t\t  </h3>       \n\t\t\t<ul class=\"page-breadcrumb\">\n\t\t\t  <li class=\"Homebar\">\n\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t<a href=\"#\" routerLink=\"/homepage\">Home</a>         \n\t\t\t  </li>\n\t\t\t  <li>\n\t\t\t\t <i class=\"fa fa-angle-right\"></i>\n\t\t\t\t<a href=\"#\" routerLink=\"/iprocurement\">Attendance</a>\n\t\t\t   </li>\n\t\t\t </ul>  \n\t\t  </div>\n\t\t<div class=\"accordion\" id=\"accordionExample\">\n\t\t\t  <div class=\"card\">       \n\t\t\t   <div class=\"card-body\">\n\t\t\t\t  <h4 class=\"font-weight-bold mb-3 report\">  <i class=\"fas fa-chart-bar fa-1x mr-2\"></i> List of all Requests</h4>\n\t\t\t\t  <hr class=\"bg-primary\">\n\t\t\t\t <div class=\"row\">\n\t\t\t\t  <div class=\"col lg-6\">\n\t\t\t\t\t<div class=\"btn-group border-primary \">\n\t\t\t\t\t\t<span class=\"font-weight-bolder\">Show</span>  &nbsp; <button class=\"btn btnShow btn-sm dropdown-toggle \" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">                         \n\t\t\t\t\t\t\t </button>&nbsp;<span class=\"font-weight-bolder\">entries</span>\n\t\t\t\t\t\t\t <div class=\"dropdown-menu \">\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">10</a>\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">25</a>\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">50</a>\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">100</a>                           \n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t\t  <div class=\"col lg-6 \">\n\t\t\t\t\t  <div class=\"input-group mb-3 justify-content-end\">\n\t\t\t\t\t\t  <input type=\"text\" class=\" border search text-center\" placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"button-addon2\">\n\t\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-sm p-2\" type=\"button\" id=\"button-addon2\">Go</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t  </div>           \n\t\t\t\t  </div>\n\t\t\t\t\t<table class=\"table table-striped table-hover tabel-responsive\" id=\"myTable\">\n\t\t\t\t  <thead>\n\t\t\t\t\t<tr class=\"table-fields font-weight-bolder\">\n\t\t\t\t\t  <th><b>Employee ID</b></th>\n\t\t\t\t\t  <th><b>Name</b></th>\n\t\t\t\t\t  <th><b>InTime</b></th>\n\t\t\t\t\t  <th><b>OutTime</b></th>\n\t\t\t\t\t  <th><b>Reason</b></th>\n\t\t\t\t\t\t <th><b>Action</b></th> \n\t\t\t\t\t\t <th></th>\n\t\t\t\t  </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <td>524323</td>\n\t\t\t\t\t  <td>lokshma</td>\n\t\t\t\t\t  <td>9:30 AM</td>\n\t\t\t\t\t  <td>6:30 PM</td>\n\t\t\t\t\t  <td>Forgot ID card </td>\n\t\t\t\t\t  <td class=\"\"> \n\t\t\t\t\t\t <input type=\"radio\" name=\"check\">Approved\n\t\t\t\t\t\t <input type=\"radio\" name=\"check\" class=\"ml-4\">Denied\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t <button class=\" actionIcons\"><i class=\"fas fa-cloud-upload-alt mr-2\"> </i>Update</button>\n\t\t\t\t\t\t </td>                                               \n\t\t\t\t\t</tr> \n\t\t\t\t   </tbody>\n\t\t\t\t </table>\n\t\t\t\t <nav aria-label=\"Page navigation example\">\n\t\t\t\t\t<ul class=\"pagination justify-content-end font-weight-bold \">\n\t\t\t\t\t  <li class=\"page-item disabled border\">\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">1</a></li>\n\t\t\t\t\t  <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">2</a></li>\n\t\t\t\t\t  <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">3</a></li>\n\t\t\t\t\t  <li class=\"page-item border\">\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </nav>\n\t\t\t\t</div>        \n\t\t\t</div>\n\n<!-- <div class=\"container bg-light bgLogo\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\t\n\t\t\t\t\n\t\t\t\t\t<div class=\"col-md form-group\">\n\t\t\t\t\t<h3 class=\"\">Date  17-Jul-2019</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n\t\t\t\t  </div>\n\t\t\t\t<div class=\"page-bar\">\n\t\t\t\t\t\t<ul class=\"page-breadcrumb\">\n\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t\t\t\t<a >Home</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t  </li>\t\t\t \n\t\t\t\t  \n\t\t\t\t\t\t</ul>\t\t\t\t  \n\t\t\t\t\t  </div>\t\t\t\t\n\t\t\t<hr>\n\t\t\t<div class=\"portlet box blue\">\n\t\t\t\t\t\n\t\t\t\t<div class=\"portlet-title\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>Attendence\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"portlet-body form\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn green update-btn\"  onclick=\"M.toast({html: 'Upload Successfully...'})\"><i class=\"fa fa-upload\"></i> Update\n\t\t\t\t\t\t</button>\n\t\t\t\t<table class=\"table table-striped table-bordered table-hover\" >\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Employee Id</th>\n\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t<th class=\"col4\">Type of Leave</th>\n\t\t\t\t\t\t\t\t<th class=\"col5\">Reason</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>12345</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tlokshma\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t <div class=\"checkbox-btn\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"col4\" checked=\"checked\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slide\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control leaveType\">\n\t\t\t\t\t\t\t\t\t<option value=\"sick\">--select--</option>\n\t\t\t\t\t\t\t\t\t<option value=\"sick\">sick</option>\n\t\t\t\t\t\t\t\t\t<option value=\"casual\">casual</option>\n\t\t\t\t\t\t\t\t\t<option value=\"half day\">half day</option>\n\t\t\t\t\t\t\t\t\t<option value=\"maternity\">maternity</option>\n\t\t\t\t\t\t\t\t\t<option value=\"unpaid\">unpaid</option>\n\t\t\t\t\t\t\t\t\t<option value=\"others\">others</option>\n\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Reason\" class=\"validate\">\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t</div>\n</div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n    <div class=\"page-bar\">\n           <h3 class=\"titleName\">\n              Profile\n             </h3>\n              <ul class=\"page-breadcrumb\">\n             <li class=\"Homebar\">\n               <i class=\"fa fa-home\"></i>\n               <a href=\"#\" routerLink=\"/homepage\">Home</a>\n              \n             </li>\n             <li>\n                 <i class=\"fa fa-angle-right\"></i>\n               <a href=\"#\" routerLink=\"\">Profile</a>\n              </li>\n            </ul>  \n         </div>        \n\n\n<div class=\"row\">\n    <div class=\"col-3 font-weight-bold tabs\">\n      <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n        <a class=\"nav-link active border\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\"> <i class=\"fas fa-user-tie fa-1x mr-2\"></i>Employee Details </a>\n \n  <a class=\"nav-link border  text-warning\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">  <i class=\"fas fa-user-graduate mr-2\"></i>Education Details</a>\n     \n      <a class=\"nav-link border text-danger\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\"> \n      <i class=\"fas fa-university  mr-2\"></i>\n      Bank Details</a>\n        <a class=\"nav-link border text-success\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">\n            <i class=\"fas fa-briefcase  mr-2\"></i>Company Details</a>\n      </div>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"tab-content\" id=\"v-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n          <table class=\"table table-hover border border-left\">\n            <tbody>\n            <tr>\n            <td>ID</td>\n            <td>:</td>\n            <td>{{id}}</td>\n            </tr>\n            <tr>\n            <td>Phone</td>\n            <td>:</td>\n            <td>{{phone}}</td>\n            </tr>\n            <tr>\n            <td>DOB</td>\n            <td>:</td>\n            <td>{{DOB}}</td>\n            </tr>\n            <tr>\n            <td>Gender</td>\n            <td>:</td>\n            <td>{{gender}} </td>\n            </tr>\n            <tr>\n            <td>Email-1</td>\n            <td>:</td>\n            <td>{{email}}</td>\n            </tr>\n            \n            <tr>\n            <td>B.Group</td>\n            <td>:</td>\n            <td>B +ve</td>\n            </tr>\n            <tr>\n            <td>Local Address</td>\n            <td>:</td>\n            <td>R.No:5, Banjarahills, Hyderabad, Telangana.</td>\n            </tr>\n            <tr>\n            <td>Perminant Address</td>\n            <td>:</td>\n            <td>R.No:5, Banjarahills, Hyderabad, Telangana.</td>\n            </tr>\n            </tbody>\n            </table>\n        </div>\n        <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\n          <table class=\"table border border-left\">\n            <thead>\n            <tr>\n            <th scope=\"col\" class=\"font-weight-bold\">Qualification</th>\n            <th scope=\"col\" class=\"font-weight-bold\">:</th>\n            <th scope=\"col\" class=\"font-weight-bold\">Institution Name</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n            <td>SSC</td>\n            <td>:</td>\n            <td>Govt. High School</td>\n            </tr>\n            <tr>\n            <td>+2</td>\n            <td>:</td>\n            <td>Ekashila Jr. College</td>\n            </tr>\n            <tr>\n            <td>Degree</td>\n            <td>:</td>\n            <td>Gurunanak Institute of Technical Campus</td>\n            </tr>\n            </tbody>\n            </table> \n\n        </div>\n        <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\n          <table class=\"table border border-left\">\n      \n            <tbody>\n            <tr>\n            <td>Account Holder Name\t</td>\n            <td>:</td>\n            <td>kiran</td>\n            </tr>\n            <tr>\n            <td>Account Number\t</td>\n            <td>:</td>\n            <td>2121321313</td>\n            </tr>\n            <tr>\n            <td>Bank Name</td>\n            <td>:</td>\n            <td>ICICI</td>\n            </tr>\n            <tr>\n            <td>PAN Number</td>\n            <td>:</td>\n            <td>215415421</td>\n            </tr>\n            <tr>\n            <td>IFSC Code</td>\n            <td>:</td>\n            <td>214215413215</td>\n            </tr>\n            <tr>\n            <td>Branch</td>\n            <td>:</td>\n            <td>Banjarahills</td>\n            </tr>\n            </tbody>\n            </table>\n        </div>\n        <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\n          <table class=\"table border border-left\">\n      \n            <tbody>\n            <tr>\n            <td>Employee ID</td>\n            <td>:</td>\n            <td>ZYX_02_20_2019</td>\n            </tr>\n            <tr>\n            <td>Department</td>\n            <td>:</td>\n            <td>ALL</td>\n            </tr>\n            <tr>\n            <td>Designation</td>\n            <td>:</td>\n            <td>Developer</td>\n            </tr>\n            <tr>\n            <td>Date of Joining</td>\n            <td>:</td>\n            <td>02-Jan-2019</td>\n            </tr>\n            <tr>\n            <td>Salary ( $ )</td>\n            <td>:</td>\n            <td>40,000PM</td>\n            </tr>\n            </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fileupload/fileupload.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fileupload/fileupload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t\t<input id=\"imageUpload\" class=\"form-control\" class=\"\" type=\"file\" [formControl]=\"deviceForm.controls['imageUpload']\" [(ngModel)]=\"deviceTempObj.imageUpload\"\n\t\t(change)=\"fileChangeEvent($event)\">\n  </div> \t\t\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/holiday/holiday.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/holiday/holiday.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n    <div class=\"page-bar\">\n           <h3 class=\"titleName\">\n               Holiday\n             </h3>\n              <ul class=\"page-breadcrumb\">\n             <li class=\"Homebar\">\n               <i class=\"fa fa-home\"></i>\n               <a href=\"#\" routerLink=\"/homepage\">Home</a>\n              \n             </li>\n             <li>\n                 <i class=\"fa fa-angle-right\"></i>\n               <a href=\"#\" routerLink=\"\">Holiday</a>\n              </li>\n            </ul>  \n         </div>\n            <div class=\"row\">\n                <div class=\"col-lg-3\">\n                       <div class=\"card\">\n                               <h5 class=\" card-header font-weight-bold report\">Report Filter</h5>\n                               <hr class=\"bg-primary\">\n                               <div class=\"card-body\">\n                                 <div class=\"input-group  text-center\">\n                                       <fieldset disabled>\n                                               <div class=\"form-group\">\n                                                 \n                                                 <input type=\"text\" id=\"disabledTextInput\" class=\"form-control \" value=\"ZYCLYX Technologies\">\n                                               </div>\n                                               </fieldset>\n                                   </div>\n                                   <mat-form-field>\n                                    <mat-label>Holiday Type</mat-label>\n                                      <mat-select [(value)]=\"holidaytype\"  name=\"holidaytype\" [(ngModel)]=\"addholidaydata.holidaytype\">\n                                      <mat-option>None</mat-option>\n                                      <mat-option value=\"Holiday\">National Holiday</mat-option>\n                                      <mat-option value=\"OptionalHoliday\">Optional Holiday</mat-option>                                      \n                                      </mat-select>\n                                    </mat-form-field> \n                                     <!-- <p>You selected: <b class=\" field\">{{holidayType}}</b></p>  -->\n                                  \n                                   <mat-form-field class=\"example-full-width\">\n                                            <textarea matInput placeholder=\"Occation\" name=\"reason\" placeholder=\"Occasion\" [(ngModel)]=\"addholidaydata.reason\"></textarea>\n                                          </mat-form-field>                           \n                                        <div class=\"row\">\n                                     <div class=\"col-lg-6\">                                      \n                                         \n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput type=\"date\" name=\"date\" placeholder=\"Date\" [(ngModel)]=\"addholidaydata.date\" placeholder=\"Date\">\n                                          </mat-form-field>    \n                                         </div>\n                                         <div class=\"col-lg-6\">                                            \n                                             \n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Day\">\n                                              </mat-form-field>    \n                                            </div> \n                                           </div>\n                                         <a href=\"#\" class=\"btn blue btn-block rounded grtBtn\" (click)=\"addholiday()\" > <i class=\"far fa-check-square mr-2\"></i>save</a>\n                               </div>\n                             </div>\n                </div>\n                <div class=\"col-lg-9\">\n                      <div class=\"card\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t                                                   \n                                <div class=\"card-body\">\n                                   <h4 class=\"font-weight-bold mb-3 report\"><i class=\"far fa-calendar-alt fa-1x mr-2\"></i>Upload Holiday</h4>\n                                   <hr class=\"bg-primary\">\n                                  <div class=\"row\">\n                                      <mat-form-field>\n                                          <mat-label>Holiday Type</mat-label>\n                                            <mat-select [(value)]=\"holidayType\" name=\"holidayType\" [(ngModel)]=\"leavedata.holidayType\">\n                                     \n                                            <mat-option value=\"Holiday\">National Holiday</mat-option>\n                                            <mat-option value=\"OptionalHoliday\">Optional Holiday</mat-option>                                      \n                                            </mat-select>\n                                          </mat-form-field>\n                                          <div class=\"col-lg-6 sccessBtn\"> <button type=\"button\" class=\"btn btn-success sccessBtn p-2\" (click)=\"holidaytype()\" >submit</button>\n                                          </div> \n                 \n                                   <div class=\"col lg-6 \">\n                                       <div class=\"input-group mb-3 justify-content-end\">\n                                           <input type=\"text\" class=\" border search text-center\" placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"button-addon2\">\n                                           <div class=\"input-group-append\">\n                                             <button class=\"btn bg-primary btn-sm p-2\" type=\"button\" id=\"button-addon2\">Go</button>\n                                           </div>\n                                         </div>\n                                   </div>\n                                  \n                                   </div>\n                                     <table class=\"table table-striped table-bordered table-hover  tabel-responsive\" id=\"myTable\">\n                                   <thead>\n                                     <tr class=\"table-fields tabHead font-weight-bolder\">\n                                       <!-- <th><b>S.no</b></th> -->\n                                       <th>S NO</th>\n                <th>Date</th>\n                <th>Occasion</th>\n                <th>Day</th>\n                                   </tr>\n                                   </thead>\n                                   <tbody>                                 \n                                     <tr>\n                                       <!-- <td>1</td> -->\n                                       <tr *ngFor=\"let hero of myArray\">\n                                          <td>{{hero.id}}</td>\n                                          <td>{{hero.date}}</td>\n                                          <td>{{hero.reason}}</td>\n                                          <td>{{hero.dayofweek}}</td>\n                                      </tr>                      \n                                                                         \n                                                                    \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                       </tbody>\n                                  </table>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n                                  <div class=\"form-group text-right float-left\">\n                                       <span id=\"load_notification\"></span>\n                                      <input type=\"checkbox\" onchange=\"ToggleEmailNotification('notice_notification');return false;\"\n                                             class=\"make-switch\" name=\"notice_notification\" checked\n                                              data-on-color=\"success\" data-on-text=\"Yes\" data-off-text=\"No\" data-off-color=\"danger\">\n                                      <strong>Email Notification</strong><br>\n                                    </div>\n                                  <nav aria-label=\"Page navigation example\">\n                                     <ul class=\"pagination justify-content-end font-weight-bold \">\n                                       <li class=\"page-item disabled border\">\n                                         <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n                                       </li>\n                                       <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">1</a></li>\n                                       <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">2</a></li>\n                                       <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">3</a></li>\n                                       <li class=\"page-item border\">\n                                         <a class=\"page-link\" href=\"#\">Next</a>\n                                       </li>\n                                     </ul>\n                                   </nav>\t\t\t\t\t\t\t\t\t \n                                 </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n                             </div>\n                </div>\n            </div>\n<!-- <div class=\"page-content-wrapper \" style=\"margin-left: -237px;\">\n    <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">\n      <h3>\n    Holiday\n    </h3>\n<div class=\"float-right\">\n  <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n</div>\n  <div class=\"page-bar\">\n    <ul class=\"page-breadcrumb\">\n        <li>\n            <i class=\"fa fa-home\"></i>\n            <a >Home</a>\n           <a><i class=\"fa fa-angle-right\"></i>Holiday</a> \n        </li>      \n</div>\n<div class=\"row\">\n\n    <div class=\"row\">\n                \n        <div class=\"col-lg-6 mb-4\">\n    <select class=\"custom-select ml-3\" id=\"inputGroupSelect01\"name=\"holidayType\" [(ngModel)]=\"leavedata.holidayType\" placeholder=\"--select--\">\n        <option value=\"\" selected>--Select-- </option>\n        <option value=\"Holiday\"> Holiday</option>\n        <option value=\"OptionalHoliday\">Optional Holiday</option>      \n      </select>\n    </div> \n    <div class=\"col-lg-6 sccessBtn\"> <button type=\"button\" class=\"btn btn-success sccessBtn p-2\" (click)=\"holidaytype()\" >submit</button>\n    </div>\n     </div>\n    <div class=\"col-md-12\">\n        <div class=\"portlet box blue\">\n          <div class=\"tittle\">\n            <div class=\"caption text-white p-2\">\n                <i class=\"fas fa-edit mr-2\"></i>Holiday\n          </div>\n          </div>\n          <div class=\"portlet-body\">\n            <form>\n              <table class=\"table text-center\">              \n                <tr>\n                <th>S NO</th>\n                <th>Date</th>\n                <th>Occasion</th>\n                <th>Day</th>\n              </tr>\n              <tr *ngFor=\"let hero of myArray\">\n                <td>{{hero.id}}</td>\n                <td>{{hero.date}}</td>\n                <td>{{hero.reason}}</td>\n                <td>{{hero.dayofweek}}</td>\n            </tr>         \n               </table>\n            </form>\n          </div>\n        </div>\n    </div>\n</div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"page-bar\">\n\n     \n\n        <h3 class=\"titlename\" >\n          <strong> Welcome back, HRMS ADMIN!</strong></h3>\n        <h4 class=\"font-weight-bolder ml-3\">Today is Friday, 30 August 2019  </h4>\n        <div class=\"row\">\n            <div class=\"col-lg-3\">\n                    \n                <div class=\"card\">\n                       \n                        <div class=\"card-body\">\n                           \n                                    <div class=\"row\">\n                                            <div class=\"col-lg-3\">\n                                                <button type=\"button\" class=\"act4\" ><i class=\"fas fa-user-alt\"></i></button>\n                                                   \n                                        </div>\n                                        <div class=\"col-lg-9\">\n                                            <span><a routerLink='/viewdetails' style=\"color:rgb(16, 141, 243);  font-weight: bold;   font-size: 18px;\"><strong>Add</strong></a>\n                                            Employee </span><br><br>\n                                         \n                                            <a routerLink='/viewdetails'><p style=\"margin-top: -3px;     font-size: 12px;\">View Employees</p></a>\n                                           \n                                        </div>\n            \n                                        </div>\n                            </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"card \">\n                   \n                    <div class=\"card-body\">\n                            <div class=\"row\">\n                                    <div class=\"col-lg-3\">\n                                        <button type=\"button\" class=\"act2\" ><i class=\"fas fa-bell\"></i></button>\n                                           \n                                </div>\n                                <div class=\"col-lg-9\">\n                                    <span><a routerLink='/noticeboard' style=\"color:rgb(16, 141, 243);  font-weight: bold;   font-size: 18px;\"><strong>Add</strong></a>\nNotice</span><br><br>\n                                 \n\n                                     <a routerLink='/noticeboard'><p style=\"margin-top: -3px; font-size: 12px;\">View Notice</p></a>\n    \n                                   \n                                </div>\n    \n                                </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                    \n                <div class=\"card\">\n                         \n                        <div class=\"card-body\">\n                                <div class=\"row\">\n                                        <div class=\"col-lg-3\">\n                                            <button type=\"button\" class=\"act3\" ><i class=\"fas fa-calendar-alt\"></i></button>\n                                               \n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <span><a routerLink='/leaverequest' style=\"color:rgb(16, 141, 243);  font-weight: bold;   font-size: 18px;\"><strong>Leave</strong></a>\n                                         Management</span><br><br>                                    \n    \n                                         <a routerLink='/leaverequest'><p style=\"margin-top: -3px;    font-size: 12px;\">View Application</p></a>\n        \n                                       \n                                    </div>\n        \n                                    </div>\n                            \n    \n                            </div> \n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                  \n                <div class=\"card\">\n                 \n                        <div class=\"card-body\">\n                                <div class=\"row\">\n                                        <div class=\"col-lg-3\">\n                                            <button type=\"button\" class=\"act7\" ><i class=\"fas fa-file-upload\"></i></button>\n                                               \n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <span><a  routerLink='/uploadpayslips' style=\"color:rgb(16, 141, 243);  font-weight: bold;  font-size: 18px;\"><strong>Upload</strong></a>\n                                    Payslips</span><br><br>\n                                     \n    \n                                        <a routerLink='/uploadpayslips'><p style=\"margin-top: -3px;     font-size: 12px;\">View Payslips</p></a> \n        \n                                       \n                                    </div>\n        \n                                    </div>\n\n                            </div>\n                    \n                </div>\n            </div>\n        </div>\n\n        <div class=\"row \" style=\"margin-left:3px;margin-right: 3px;\">\n            <div class=\"card\" style=\"height: 500px;\">\n                <div class=\"row\">\n                   <div class=\"col-lg-3\">\n                   <p class=\"titlename\">Employee Absent Today</p>\n                   <div class=\"row\">\n                       <div class=\"col-lg-6\">\n                   <p style=\"margin-left: 15px;margin-top: -12px; color: rgb(45, 14, 129);\">Absent</p>\n                </div>\n                <div class=\"col-lg-6\">\n                    <p  class=\"float-right wegiht\" style=\"color: rgb(45, 14, 129);\">5</p>\n                </div>\n                </div>\n\n             <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" style=\"width: 50%\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                      <span class=\"float-left\" style=\"margin-left: 15px;color: rgb(8, 8, 8);\">Absent Status</span>\n                      <span class=\"float-right\" style=\"color: rgb(8, 8, 8);\">50%</span>\n\n                   </div>\n                   <div class=\"col-lg-3\">\n                        <p class=\"titlename\">Employee Present Today</p>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                        <p style=\"margin-left: 15px; margin-top: -12px; color: rgb(45, 14, 129);\">Present</p>\n                     </div>\n                     <div class=\"col-lg-6\">\n                         <p  class=\"float-right wegiht\" style=\"color: rgb(45, 14, 129);\">5</p>\n                     </div>\n                     </div>\n     \n                  <div class=\"progress\">\n                             <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" style=\"width: 50%\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                           </div>\n                           <span class=\"float-left\" style=\"margin-left: 15px;color: rgb(8, 8, 8);\">Present Status</span>\n                           <span class=\"float-right\" style=\"color: rgb(8, 8, 8);\">50%</span>\n                    </div>\n                    <div class=\"col-lg-3\">\n                            <p class=\"titlename\">Total Projects</p>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                            <p style=\"margin-left: 15px;margin-top: -12px; color: rgb(45, 14, 129);\">Project Status</p>\n                         </div>\n                         <div class=\"col-lg-6\">\n                             <p  class=\"float-right wegiht\" style=\"color: rgb(45, 14, 129);\">3</p>\n                         </div>\n                         </div>\n         \n                      <div class=\"progress\">\n                                 <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" style=\"width: 30%\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                               </div>\n                               <span class=\"float-left\" style=\"margin-left: 15px;color: rgb(8, 8, 8);\">completed</span>\n                               <span class=\"float-right\" style=\"color: rgb(8, 8, 8);\">35.56%</span>\n                        </div>\n                        <div class=\"col-lg-3\">\n                                <p class=\"titlename\">Tasks</p>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6\">\n                                <p style=\"margin-left: 15px; margin-top: -12px; color: rgb(45, 14, 129);\">Tasks Status</p>\n                             </div>\n                             <div class=\"col-lg-6\">\n                                 <p   class=\"float-right wegiht\" style=\"margin-right: 10px; color: rgb(45, 14, 129);\">8</p>\n                             </div>\n                             </div>\n             \n                          <div class=\"progress\" style=\"margin-right: 10px;\">\n                                     <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" style=\"width: 20%\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                   </div>\n                                   <span class=\"float-left\" style=\"margin-left: 15px;color: rgb(8, 8, 8);\">Completed</span>\n                                   <span class=\"float-right\" style=\"margin-right: 10px;color: rgb(8, 8, 8);\">20%</span>\n                            </div>\n                </div>\n            </div>\n        </div>        \n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/icons/icons.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/icons/icons.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Notice Board</h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/iprocurement/iprocurement.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/iprocurement/iprocurement.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">      \n  <div class=\"page-bar\">\n      <h3 class=\"titleName\">\n          Iprocurement\n        </h3>       \n      <ul class=\"page-breadcrumb\">\n        <li class=\"Homebar\">\n          <i class=\"fa fa-home\"></i>\n          <a href=\"#\" routerLink=\"/homepage\">Home</a>         \n        </li>\n        <li>\n           <i class=\"fa fa-angle-right\"></i>\n          <a href=\"#\" routerLink=\"/iprocurement\">Iprocurement</a>\n         </li>\n       </ul>  \n    </div>\n \n        <div class=\"card\">       \n         <div class=\"card-body\">\n            <h4 class=\"font-weight-bold mb-3 report\">   <i class=\"fa fa-list fa-1x mr-2\"></i>List of all Items</h4>\n            <hr class=\"bg-primary\">\n           <div class=\"row\">\n            <div class=\"col lg-6\">\n              <div class=\"btn-group border-primary \">\n                  <span class=\"font-weight-bolder\">Show</span>  &nbsp; <button class=\"btn btnShow btn-sm dropdown-toggle \" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">                         \n                       </button>&nbsp;<span class=\"font-weight-bolder\">entries</span>\n                       <div class=\"dropdown-menu \">\n                           <a class=\"dropdown-item\" href=\"#\">10</a>\n                           <a class=\"dropdown-item\" href=\"#\">25</a>\n                           <a class=\"dropdown-item\" href=\"#\">50</a>\n                           <a class=\"dropdown-item\" href=\"#\">100</a>                           \n                       </div>\n                     </div>\n          </div>\n            <div class=\"col lg-6 \">\n                <div class=\"input-group mb-3 justify-content-end\">\n                    <input type=\"text\" class=\" border search text-center\" placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"button-addon2\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn bg-primary btn-sm p-2\" type=\"button\" id=\"button-addon2\">Go</button>\n                    </div>\n                  </div>\n            </div>           \n            </div>\n              <table class=\"table table-striped table-hover tabel-responsive\" id=\"myTable\">\n            <thead>\n              <tr class=\"table-fields font-weight-bolder\">\n                <th><b>ID.</b></th>\n                <th><b> Item Name</b></th>\n                <th><b>Purchace_Date</b></th>\n                <th><b>Price ( <span class=\"fa fa-inr\"></span> )</b></th>\n                 <th><b>Action</b></th> \n                <th></th>\n\n            </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let hero of myArray\" >\n                <td>{{hero.tid}}</td>\n                <td>{{hero.item}}</td>\n                <td>{{hero.description}}</td>\n                <td>{{hero.amount}}</td>\n                <td class=\"\"> \n                   <input type=\"radio\" name=\"check\" class=\"\">Approved\n                   <input type=\"radio\" name=\"check\" class=\"ml-3\">Denied\n                </td>\n                <td>\n                   <button class=\" actionIcons\"><i class=\"fas fa-cloud-upload-alt mr-2\"></i>Update</button>\n                   </td>                                               \n              </tr> \n             </tbody>\n           </table>\n           <nav aria-label=\"Page navigation example\">\n              <ul class=\"pagination justify-content-end font-weight-bold \">\n                <li class=\"page-item disabled border\">\n                  <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n                </li>\n                <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">1</a></li>\n                <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item border\">\n                  <a class=\"page-link\" href=\"#\">Next</a>\n                </li>\n              </ul>\n            </nav>\n          </div>        \n      </div>\n\n<!-- <div class=\"page-content-wrapper\">\n  <div class=\"page-content bgLogo\">\n\n    <h3>\n      Iprocurement\n    </h3>\n    <div class=\"float-right\">\n      <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n    </div>\n    <div class=\"page-bar\">\n      <ul class=\"page-breadcrumb\">\n        <li>\n          <i class=\"fa fa-home\"></i>\n          <a href=\"#\">Home</a>\n          <i class=\"fa fa-angle-right\"></i>\n        </li>\n        <li>\n          <a href=\"#\">Iprocurement</a>\n          \n        </li>\n\n      </ul>\n\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-md-12\">\n            \n        <a href=\"#\" class=\"btn green\"  routerLink=\"/addiprocurement\">\n          Add New Item <i class=\"fa fa-plus\"></i>\n        </a> -->\n        <!-- <hr>\n        <div class=\"portlet box blue\">\n          <div class=\"portlet-title\">\n            <div class=\"caption\">\n              <i class=\"fa fa-database\"></i>Iprocurement List\n            </div>\n\n          </div>\n\n          <div class=\"portlet-body\">\n\n            <table class=\"table table-striped table-bordered table-hover\" id=\"iprocurement\">\n              <thead>\n                <tr>\n                  <div class=\"input-field search_field\">\n                  \n                    <input id=\"icon_search\" name=\"tid\" [(ngModel)]=\" empData.tid\"  type=\"search\" placeholder=\"search\">\n                    <i class=\"fa fa-search prefix\" (click)=\"searchname()\"></i>\n\n                  </div>\t\t\t\t\t\t\t\t\t\t\n                </tr>\n                <tr class=\"table-fields\">\n                  <th><b>FullID.</b></th>\n                  <th><b> EmployeeName</b></th>\n                  <th><b> TID</b></th>\n                  <th><b>Item</b></th>\n                  <th><b>Description</b></th>\n                  \n                  <th><b>Price ( <span class=\"fa fa-inr\"></span> )</b></th>\n                  <th><b>status</b></th>\n                 \n                 \n\n                </tr>\n\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let hero of myArray\" >\n                  <td>\n                    {{hero.fullid}}\n                  </td>\n                  <td>{{hero.name}} </td>\n                  <td>{{hero.tid}} </td>\n                  <td>{{hero.item}} </td>\n                  <td>{{hero.description}}</td>\n                  <td>{{hero.amount}}</td>\n                  <td>  <p class=\"left-align\">\n\t\t\t\t\t\t\t\t\t\t\t\n                      <input type=\"radio\" name=\"status1\" value=\"Approved\" [(ngModel)]=\" empData.status\" >\n                      <span> Approve</span>&nbsp;&nbsp;\n              \n              \n                      <input type=\"radio\"  name=\"status1\" value=\"Denied\" [(ngModel)]=\" empData.status\" >\n                      <span> Deny</span>\n\n                    \n                      <button class=\"btn btn-success p-1 ml-3\" type=\"submit\" (click)=\"sendstatus()\" >submit</button>\n                  \n              </p>\n</td>\n</tr>\n              </tbody>\n            </table>\n\n          </div>\n\n         \n\n         \n        </div>\t\n        \n        <img src={{photo}} height=\"400px\" width=\"600px\" class=\"\">\n      </div>\n    </div>      \n\n  </div>\n\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leaverequest/leaverequest.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leaverequest/leaverequest.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">      \n\t\t<div class=\"page-bar\">\n\t\t\t<h3 class=\"titleName\">\n\t\t\t\tLeave Requests\n\t\t\t  </h3>       \n\t\t\t<ul class=\"page-breadcrumb\">\n\t\t\t  <li class=\"Homebar\">\n\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t<a href=\"#\" routerLink=\"/homepage\">Home</a>         \n\t\t\t  </li>\n\t\t\t  <li>\n\t\t\t\t <i class=\"fa fa-angle-right\"></i>\n\t\t\t\t<a href=\"#\" routerLink=\"/iprocurement\">\tLeave Requests</a>\n\t\t\t   </li>\n\t\t\t </ul>  \n      </div>      \n      <div class=\"card\">       \n        <div class=\"card-body\">\n      <mat-form-field class=\"\">\n          <mat-label>Select Employee </mat-label>\n            <mat-select [(value)]=\"empName\" name=\"name\"[(ngModel)]=\" empData.name\">\n            \n            <mat-option value=\"{{hero.name}}\" *ngFor=\"let hero of myArray\">{{hero.name}}</mat-option>\n                    \n            </mat-select>\n          </mat-form-field>    \n          <button type=\"button\"  class=\"btn btn-sm btn-success selectEmp\" (click)=\"leaveapplication()\">submit</button>       \n  </div>\n  </div>\n\t\t\t  <div class=\"card\">       \n\t\t\t   <div class=\"card-body\">\n\t\t\t\t  <h4 class=\"font-weight-bold mb-3 report\"><i class=\"fas fa-edit fa-1x mr-2\"></i>List of all Leave Requests</h4>\n\t\t\t\t  <hr class=\"bg-primary\">\n\t\t\t\t <div class=\"row\">\n\t\t\t\t  <div class=\"col lg-6\">\n\t\t\t\t\t<div class=\"btn-group border-primary \">\n\t\t\t\t\t\t<span class=\"font-weight-bolder\">Show</span>  &nbsp; <button class=\"btn btnShow btn-sm dropdown-toggle \" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">                         \n\t\t\t\t\t\t\t </button>&nbsp;<span class=\"font-weight-bolder\">entries</span>\n\t\t\t\t\t\t\t <div class=\"dropdown-menu \">\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">10</a>\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">25</a>\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">50</a>\n\t\t\t\t\t\t\t\t <a class=\"dropdown-item\" href=\"#\">100</a>                           \n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t\t  <div class=\"col lg-6 \">\n\t\t\t\t\t  <div class=\"input-group mb-3 justify-content-end\">\n\t\t\t\t\t\t  <input type=\"text\" class=\" border search text-center\" placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"button-addon2\">\n\t\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-sm p-2\" type=\"button\" id=\"button-addon2\">Go</button>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t  </div>           \n\t\t\t\t  </div>\n\t\t\t\t\t<table class=\"table table-striped table-bordered table-hover tabel-responsive\" id=\"myTable\">\n\t\t\t\t  <thead>\n\t\t\t\t\t<tr class=\"table-fields font-weight-bolder\">\n\t\t\t\t\t  <th><b>ID</b></th>\n                                                                             <th><b>Name</b></th>\n                                                                       \n                                                                             <th><b>Leave Type</b></th>\n                                                                             <th><b>Reason</b></th>\n                                                                             <th><b>From Date</b></th>\n                                                                             <th><b>To Date</b></th>\n                                                                             <th><b>Status</b></th>        \n\t\t\t\t  </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <td> {{fullid}}</td>\n                                                                              <td> {{Ename}} </td>\n                                                                             <td>{{reqtype}}</td>\n                                                                              <td>{{reason}}  </td>\n                                                                              <td> {{fromdays}} </td>\n                                                                              <td>{{todays}}</td>\n\t\t\t\t\t  <td class=\"actionIcons\"> \n\t\t\t\t\t\t <input type=\"radio\"  name=\"status\" value=\"Approved\" [(ngModel)]=\" empData.status\">Approved\n\t\t\t\t\t\t <input type=\"radio\" name=\"status\" value=\"Denied\" [(ngModel)]=\" empData.status\">Denied\n\t\t\t\t\t\t <button class=\"text-success ml-4\" (click)=\"senddata()\"><i class=\"fas fa-cloud-upload-alt\"></i></button>\n\t\t\t\t\t\t </td>                                               \n\t\t\t\t\t</tr> \n\t\t\t\t   </tbody>\n\t\t\t\t </table>\n\t\t\t\t <nav aria-label=\"Page navigation example\">\n\t\t\t\t\t<ul class=\"pagination justify-content-end font-weight-bold \">\n\t\t\t\t\t  <li class=\"page-item disabled border\">\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">1</a></li>\n\t\t\t\t\t  <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">2</a></li>\n\t\t\t\t\t  <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">3</a></li>\n\t\t\t\t\t  <li class=\"page-item border\">\n\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </nav>\n\t\t\t\t</div>        \n\t\t\t</div>\n\n\n<!-- <div class=\"page-content-wrapper\" style=\"margin-left: -237px;\">\n    <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">   \n        <h3>\n            Leave Applications\n        </h3>\n         <div class=\"float-right\">\n                <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n              </div>\n            <div class=\"page-bar\">\n                <ul class=\"page-breadcrumb\">\n                    <li>\n                        <i class=\"fa fa-home\"></i>\n                        <a >Home</a>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </li>\n                </ul>\n             </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 mb-4\">\n                        <select class=\"form-control form-control-lg \"  name=\"name\"[(ngModel)]=\" empData.name\" >\n                                <option value=\"\" selected> --select Employee Name--</option>\n                                <option *ngFor=\"let hero of myArray\">{{hero.name}}</option>\n                                \n                              </select>\n                             </div>\n                  <button type=\"button\" class=\"btn btn-sm btn-success selectEmp\" (click)=\"leaveapplication()\">submit</button>                  \n                  <div class=\"col-md-4 form-group text-right\">\n                      </div>\n                    </div>  \n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div id=\"load\">\n                              </div> \n                              <div class=\"portlet box blue\">  \n                                  <div class=\"portlet-title\">\n                                      <div class=\"caption\">\n                                          <i class=\"fa fa-rocket\"></i>Applications\n                                      </div>\n                                      <div class=\"tools\">\n                                      </div>\n                                  </div>\n                                  <div class=\"portlet-body\">\n                                      <table class=\"table table-striped table-bordered table-hover\" id=\"applications\">\n                                                                          <thead>\n                                                                         <tr>\n                                                                             <th><b>ID</b></th>\n                                                                             <th><b>Name</b></th>\n                                                                       \n                                                                             <th><b>Leave Type</b></th>\n                                                                             <th><b>Reason</b></th>\n                                                                             <th><b>From Date</b></th>\n                                                                             <th><b>To Date</b></th>\n                                                                             <th><b>Status</b></th>\n                                                                           \n                                     \n                                                                         </tr>\n                                                                         </thead>\n                                                                         <tbody>\n                                                                         <tr>\n                                                                              <td> {{fullid}}</td>\n                                                                              <td> {{Ename}} </td>\n                                                                             <td>{{reqtype}}</td>\n                                                                              <td>{{reason}}  </td>\n                                                                              <td> {{fromdays}} </td>\n                                                                              <td>{{todays}}</td>                                                                           \n                                                                            <td> \n                                                                               <p class=\"left-align\">\t\t\t\t\t\t\t\t\t\t\t\n                                                                                    <input type=\"radio\" name=\"status\" value=\"Approved\" [(ngModel)]=\" empData.status\"/>\n                                                                                    <span> Approve</span>&nbsp;&nbsp;                                                                           \n                                                                            \n                                                                                    <input type=\"radio\"  name=\"status\" value=\"Denied\" [(ngModel)]=\" empData.status\" />\n                                                                                    <span> Deny</span>\n                                                                                    <input type=\"hidden\" name=\"fullid\" value=\"{{fullid}}\" [(ngModel)]=\" empData.fullid\">\n                                                                                    <button class=\"btn btn-sm btn-success float-right\" type=\"submit\" (click)=\"senddata()\">submit</button>\n                                                                                \n                                                                            </p>                                                                           \n                                                                            \n                                                                            </td>\n                                                                         </tr>                                     \n                                                                             </tbody>                                     \n                                                                 </table>\n                                                             </div>\n                                                             </div>\n                                                             </div>\n                          </div>\n                         </div>\n      </div>         \n   -->\n                 "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/markattendance/markattendance.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/markattendance/markattendance.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  markattendance works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/noticeboard/noticeboard.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/noticeboard/noticeboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">      \n        <div class=\"page-bar\">\n            <h3 class=\"titleName\">\n                Notice Board\n              </h3>       \n            <ul class=\"page-breadcrumb\">\n              <li class=\"Homebar\">\n                <i class=\"fa fa-home\"></i>\n                <a href=\"#\" routerLink=\"/homepage\">Home</a>         \n              </li>\n              <li>\n                 <i class=\"fa fa-angle-right\"></i>\n                <a href=\"#\" routerLink=\"/uploadpayslips\">NoticeBoard</a>\n               </li>\n             </ul>  \n          </div> \n          <button type=\"button\" class=\"btn float-right addBtn btn-sm\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            Add Notice\n            </button>\n            \n            <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title font-weight-bold report\" id=\"exampleModalLabel\">Add Notice</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">                      \n                      </button>    \n                       </div>   \n                       <hr class=\"bg-primary\">        \n                    <div class=\"modal-body\">                     \n                      <form class=\"example-form\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput class=\"Company text-dark font-weight-bold\" placeholder=\"Company\" disabled value=\"ZYCLYX Technologies\">\n                          </mat-form-field>                        \n                          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n                            <td><mat-form-field class=\"example-full-width\">\n                              <input matInput type=\"date\" placeholder=\"Date\">\n                            </mat-form-field></td>\n                            <td class=\"float-right\"><mat-form-field class=\"example-full-width\">\n                                <input matInput  name=\"title\" [(ngModel)]=\"noticedata.title\" placeholder=\"Title\">\n                              </mat-form-field></td>\n                          </tr></table>                        \n                          <p>\n                            <mat-form-field class=\"example-full-width\">\n                              <textarea matInput name=\"description\"  [(ngModel)]=\"noticedata.description\" placeholder=\"Description\"></textarea>\n                            </mat-form-field>                           \n                          </p>                        \n                         <label>Attachments : </label>\n                         <input class=\"ml-3\" type=\"file\">\n                        </form>                        \n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn bg-blue rounded btn-sm\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" (click)=\"addnotice()\" class=\"btn bg-success rounded btn-sm \">Save</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n           <div class=\"card\">             \n               <div class=\"card-body\">\n                  <h4 class=\"font-weight-bold mb-3 report\">  <i class=\"fas fa-sticky-note fa-1x mr-2\"></i>List of all Notices</h4>\n                  <hr class=\"bg-primary\">\n                 <div class=\"row\">\n                  <div class=\"col lg-6\">\n                      <div class=\"btn-group border-primary \">\n                          <span class=\"font-weight-bolder\">Show</span>  &nbsp; <button class=\"btn btnShow btn-sm dropdown-toggle \" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">                         \n                               </button>&nbsp;<span class=\"font-weight-bolder\">entries</span>\n                               <div class=\"dropdown-menu \">\n                                   <a class=\"dropdown-item\" href=\"#\">10</a>\n                                   <a class=\"dropdown-item\" href=\"#\">25</a>\n                                   <a class=\"dropdown-item\" href=\"#\">50</a>\n                                   <a class=\"dropdown-item\" href=\"#\">100</a>                           \n                               </div>\n                             </div>\n                 </div>\n                  <div class=\"col lg-6 \">\n                      <div class=\"input-group mb-3 justify-content-end\">\n                          <input type=\"text\" class=\" border search text-center\" placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"button-addon2\">\n                          <div class=\"input-group-append\">\n                            <button class=\"btn bg-primary btn-sm p-2\" type=\"button\" id=\"button-addon2\">Go</button>\n                          </div>\n                        </div>\n                  </div>           \n                  </div>\n                    <table class=\"table table-striped table-hover tabel-responsive\" id=\"myTable\">\n                  <thead>\n                    <tr class=\"table-fields font-weight-bolder\">\n                      <th> ID</th>\n                      <th> Title</th>\n                      <th> Description</th>\n                     \n                      <th> Date</th>                  \n                  </tr>\n                  </thead>\n                  <tbody>\n                    <tr  >\n                      <td>1</td>\n                      <td>{{title}}</td>\n                      <td>{{description}}</td>\n                      <td>{{date | date:'yyyy-MM-dd'}}</td>\n                                      \n                                                  \n                    </tr> \n                   </tbody>\n                 </table>\n                 <nav aria-label=\"Page navigation example\">\n                    <ul class=\"pagination justify-content-end font-weight-bold \">\n                      <li class=\"page-item disabled border\">\n                        <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n                      </li>\n                      <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">1</a></li>\n                      <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">2</a></li>\n                      <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">3</a></li>\n                      <li class=\"page-item border\">\n                        <a class=\"page-link\" href=\"#\">Next</a>\n                      </li>\n                    </ul>\n                  </nav>\n                </div>        \n            </div>\n\n<!-- <div class=\"page-content-wrapper\" style=\"margin-left: -237px;\">\n \t\n    <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">\n      <h3>\n           Notice Board\n       </h3>\n       <div class=\"float-right\">\n        <img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n      </div>\n        <div class=\"page-bar\">\n           <ul class=\"page-breadcrumb\">\n               <li>\n                   <i class=\"fa fa-home\"></i>\n                   <a href=\"#\">Home</a>\n                   <a><i class=\"fa fa-angle-right\"></i>Notice Board</a>\n               </li>\n             </ul>\n             </div>\n        <div class=\"row \">\n           <div class=\"col-md-6\">   \n           </div>\n           <div class=\"col-md-6 form-group text-right\">   \n               <span id=\"load_notification\"></span>\n               <input type=\"checkbox\" onchange=\"ToggleEmailNotification('notice_notification');return false;\"\n                      class=\"make-switch\" name=\"notice_notification\" checked\n                       data-on-color=\"success\" data-on-text=\"Yes\" data-off-text=\"No\" data-off-color=\"danger\">\n               <strong>Email Notification</strong><br>    \n           </div>\n       </div>     \n         <div class=\"row\">\n           <div class=\"col-md-12\">  \n               <div id=\"load\"> \n             </div>\n               <div class=\"portlet box blue\">\n                   <div class=\"portlet-title\">\n                       <div class=\"caption\">\n                           <i class=\"fa fa-clipboard\"></i>Notice List\n                       </div>\n                       <div class=\"tools\">\n                       </div>\n                   </div>\n                  <div class=\"portlet-body\">\n                     <table class=\"table table-striped table-bordered table-hover\" id=\"notices\">\n                           <thead>\n                           <tr>\n                               <th> ID</th>\n                               <th> Title</th>\n                               <th> Description</th>                              \n                               <th> Date</th>                          \n                           </tr>\n                           <tr>\n                               <td>1</td>\n                               <td>{{title}}</td>\n                               <td>{{description}}</td>\n                               <td>{{date}}</td>\n                           </tr>\n                           </thead>\n                           <tbody>   \n                           </tbody>\n                       </table>\n                   </div>\n               </div>              \n                 </div>\n                </div> \n    </div>\n    </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/uploadpayslips/uploadpayslips.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/uploadpayslips/uploadpayslips.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n\t<div class=\"page-bar\">\n\t\t\t\t <h3 class=\"titleName\">\n\t\t\t\t\t\t Payslips\n\t\t\t\t\t </h3>\n\t\t\t\t\t\t<ul class=\"page-breadcrumb\">\n\t\t\t\t\t <li class=\"Homebar\">\n\t\t\t\t\t\t <i class=\"fa fa-home\"></i>\n\t\t\t\t\t\t <a href=\"#\" routerLink=\"/homepage\">Home</a>\n\t\t\t\t\t\t\n\t\t\t\t\t </li>\n\t\t\t\t\t <li>\n\t\t\t\t\t\t\t <i class=\"fa fa-angle-right\"></i>\n\t\t\t\t\t\t <a href=\"#\" routerLink=\"\">Payslips</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>  \n\t\t\t </div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <h5 class=\" card-header font-weight-bold report\">Report Filter</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <hr class=\"bg-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group  text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <fieldset disabled>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" id=\"disabledTextInput\" class=\"form-control \" value=\"ZYCLYX Technologies\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </fieldset>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Employee</mat-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"name\"[(ngModel)]=\" empData.name\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"{{hero.name}}\" *ngFor=\"let hero of myArray\">{{hero.name}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <!-- <mat-option value=\"Lokshma\">Lokshma</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Sampath\">Sampath</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Umesh\">Umesh</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Sandeep\">Sandeep</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Kiran\">Kiran</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Rizwan\">Rizwan</mat-option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-label>Select Month</mat-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-select [(value)]=\"selected1\"  name=\"month\" [(ngModel)]=\"empData.month\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option>None</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"01\">January</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"02\">February</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"03\">March</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"04\">April</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"05\">May</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"06\">June</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"07\">July</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"08\">August</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"09\">September</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"10\">October</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"11\">November</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"12\">December</mat-option>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </mat-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </mat-form-field> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <p>You selected: <b class=\" field\">{{selected1}}</b></p> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t <mat-form-field class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-label> Select Year</mat-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-select [(value)]=\"selected2\"  name=\"year\" [(ngModel)]=\"empData.year\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option>None</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"2019\">2019</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"2018\">2018</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"2017\">2017</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-option value=\"2016\">2016</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </mat-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </mat-form-field> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <p>You selected: <b class=\" field\">{{selected2}}</b></p> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <a href=\"#\" class=\"btn blue btn-block rounded grtBtn\"> <i class=\"far fa-check-square mr-2\"></i>save</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t                                                   \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <h4 class=\"font-weight-bold mb-3 report\">  <i class=\"fa fa-upload fa-1x mr-2\"></i>List of Upload Payslips</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <hr class=\"bg-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"btn-group border-primary \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span class=\"font-weight-bolder\">Show</span>  &nbsp; <button class=\"btn btnShow btn-sm dropdown-toggle \" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;<span class=\"font-weight-bolder\">entries</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">10</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">25</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">50</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">100</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col lg-6 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group mb-3 justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\" border search text-center\" placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"button-addon2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class=\"btn bg-primary btn-sm p-2\" type=\"button\" id=\"button-addon2\">Go</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <table class=\"table table-striped table-hover  tabel-responsive\" id=\"myTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <tr class=\"table-fields tabHead font-weight-bolder\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <th><b>Emp Id</b></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <th><b>Name</b></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <th><b>Month</b></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th><b>Year</b></th> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th><b>Choose file</b></th> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th><b>Action</b></th> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>101654</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>{{EmployeeName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>{{selected1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>{{selected2}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"file\" name=\"imageproduct\" (change)=\"fileChangeEvent($event)\" #fileInput>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td class=\"\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class=\"actionIcons\" data-toggle=\"modal\" data-target=\"#exampleModalScrollable\"><i class=\"far fa-eye\"></i></button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <!-- <button class=\"bg-success\" name=\"upload\" (click)=\"uploadpayslips()\">Upload -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"text-success actionIcons\" name=\"upload\" (click)=\"uploadpayslips()\"><i class=\"fas fa-cloud-upload-alt\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"modal fade\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"modal-title font-weight-bold report\" id=\"exampleModalScrollableTitle\">Payslip</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr class=\"bg-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tView payslip here...\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{file1}}\" class=\"card-img-top\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm rounded btn-info\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class=\"text-danger actionIcons\" (click)=\"openDialog()\"><i class=\"fa fa-trash-alt \"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </tr>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>20123</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>Pavan</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>{{selected1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td>{{selected2}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <td class=\"actionIcons\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button><i class=\"far fa-eye\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class=\"text-success\"><i class=\"fas fa-cloud-upload-alt\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class=\"text-danger\"><i class=\"fa fa-trash-alt \"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </td>           \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </tr> -->\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group text-right float-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span id=\"load_notification\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" onchange=\"ToggleEmailNotification('notice_notification');return false;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"make-switch\" name=\"notice_notification\" checked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-on-color=\"success\" data-on-text=\"Yes\" data-off-text=\"No\" data-off-color=\"danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Email Notification</strong><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nav aria-label=\"Page navigation example\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <ul class=\"pagination justify-content-end font-weight-bold \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <li class=\"page-item disabled border\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">1</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">2</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <li class=\"page-item border\"><a class=\"page-link\" href=\"#\">3</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <li class=\"page-item border\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <a class=\"page-link\" href=\"#\">Next</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </nav>\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n<!-- <div class=\"page-content-wrapper\" style=\"margin-left: -237px;\">\n \t\n    <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">\n\n\t\t<h3>\n\t\t\tPaySlips\n\t\t</h3>\n\t\t<div class=\"float-right\">\n\t\t\t<img src=\"/assets/img/black logo.png\" height=\"50px\" width=\"200px\" class=\"\">\n\t\t</div>\n\t\t<div class=\"page-bar\">\n\t\t\t<ul class=\"page-breadcrumb\">\n\t\t\t\t<li>\n\t\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t\t<a routerLink=\"/homepage\">Home</a>\n\t\t\t\t\t\n\t\t\t\t<a>\t<i class=\"fa fa-angle-right\"></i>Upload Payslips</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"modal\" id=\"terms\">\n\t\t\t\t\t<div class=\"modal-header #7e57c2 deep-purple lighten-1\">\n\t            <button type=\"button\"class=\"modal-close close_btn \"><i class=\"fa fa-close\"></i></button>\n\t            <h4 class=\"modal-title white-text\"><b><i class=\"fas fa-user-plus\"></i> Add Employee</b></h4>\n        </div>\n        <div class=\"modal-body\">\n\n        <div class=\"row add_emp\">\n        <div class=\"col s12\">\n         Employee Name:\n          <div class=\"input-field inline\">\n            <input id=\"text\" type=\"text\" class=\"validate\">\n            <label for=\"text\">Name</label>\n            \n            </div></div>\n            <button type=\"submit\" class=\"btn green mt-3 modal-close\">submit</button>\n          \n        \n      </div>\n        \t\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"portlet box blue\">\n\t\t\t\t\t<div class=\"portlet-title\">\n\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t<i class=\"fa fa-upload\"></i>Upload Payslips\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"portlet-body\">\n\n\t\t\t\t\t\t<table class=\"table table-striped table-bordered table-hover\" id=\"iprocurement\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-field col s3 btn_field \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t\t\t<th><b>Employee Name</b></th>\n\t\t\t\t\t\t\t\t\t<th><b>Choose PaySlip</b></th>\n\t\t\t\t\t\t\t\t\t<th>Month</th>\n\t\t\t\t\t\t\t\t\t<th>Year</th>\n\t\t\t\t\t\t\t\t\t<th><b>View</b></th>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<th><b>Upload</b></th>\n\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>   <select class=\"form-control form-control-lg \"  name=\"name\"[(ngModel)]=\" empData.name\" >\n\t\t\t\t\t\t\t\t\t\t<option  >--select Employee Name--</option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let hero of myArray\">{{hero.name}}</option>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</select></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"imageproduct\" (change)=\"fileChangeEvent($event)\" #fileInput>\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control form-control-lg\" name=\"month\" [(ngModel)]=\"empData.month\">\n\t\t\t\t\t\t\t\t\t\t\t<option>--select Month--</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"01\">01</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"02\">02</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"03\">03</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"04\">04</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"05\">05</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"06\">06</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"07\">07</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"08\">08</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"09\">09</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">10</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">11</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\">12</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control form-control-lg\" name=\"year\" [(ngModel)]=\"empData.year\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>--select Year--</option>\n\t\t\t\t\t\t\t<option value=\"2019\">2019</option>\n\t\t\t\t\t\t\t<option value=\"2018\">2018</option>\n\t\t\t\t\t\t\t<option value=\"2017\">2017</option>\n\t\t\t\t\t\t\t<option value=\"2016\">2016</option>\n\t\t\t\t\t\t\t<option value=\"2015\">2015</option>\n\t\t\t\t\t\t\t<option value=\"2014\">2014</option>\n\t\t\t\t\t\t\t<option value=\"2013\">2013</option>\n\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button class=\"\">view payslip</button>\n\t\t\t\t\t\t\t</td>\n \n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<button class=\"bg-success\" name=\"upload\" (click)=\"uploadpayslips()\">Upload\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td> \n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>      \n\n\t\t\t</div>\n\n\t\t</div>\n\t\t <div class=\"pop\">\n\t\t\t\t<input type=\"button\" id=\"close\" value=\"X\">\n\t\t\t\t<strong>Delete?</strong>\n\t\t\t\t<h4>Are you sure want to delete?</h4>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\">Cancel</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\">Delete</button>\n\t\t\t\t\n\t\t\t  \n\t\t\t  \n\t\t\t  \n\t\t\t  </div>\n\t\t\t  <div class=\"cover\"></div>\n\t\t\t   -->\n\n\n\t "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewattendance/viewattendance.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewattendance/viewattendance.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n   <mat-toolbar>\n      <span class=\"fill-remaining-space\"></span>\n      <span>Angular 6 Material</span>\n      <span class=\"fill-remaining-space\"></span>\n  </mat-toolbar>\n \n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewdetails/viewdetails.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewdetails/viewdetails.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <button data-toggle=\"modal\" data-target=\"#exampleModalScrollable\" class=\"ml-3 bg-primary addEmpBtn p-2 rounded text-white\" type=\"button\">              \r\n                Add Employee </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n          <ul class=\"navbar-nav mr-auto\">           \r\n            <li class=\"nav-item dropdown\">          \r\n          </li>           \r\n          </ul>\r\n          <div class=\"input-field search_field\">\r\n            <!-- //<div class=\"col-md-6 mb-4\"> -->\r\n                 <!-- <select class=\"form-control form-control-lg custom-select\"  name=\"name\" [(ngModel)]=\" empData.name\">\r\n                        <option selected>--select Employee Name--</option>\r\n                        <option *ngFor=\"let hero of myArray\">{{hero.name}}</option>\r\n                        \r\n                      </select>  -->\r\n                      \r\n          <!-- </div>  //    -->\r\n                 <input class=\"ml-2\" id=\"icon_search\" type=\"search\" name=\"fullid\" [(ngModel)]=\" empData.fullid\" placeholder=\"search \" > \r\n                <p class=\" btn btn-sm bg-primary \" (click)=\"viewemployee()\" routerLink=\"/viewdetails\">Go</p>\r\n                     \r\n            \r\n              </div>\r\n              \r\n        </div>\r\n      </nav>      \r\n      <!-- Modal -->\r\n      <div class=\"modal fade\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title font-weight-bold report\" id=\"exampleModalScrollableTitle\">Add employee Details </h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">          \r\n              <mat-form-field class=\"example-full-width \">\r\n                    <input matInput class=\"font-weight-bold text-dark\" placeholder=\"Employee Id\" disabled value=\"ZYX_2019_128\">\r\n                  </mat-form-field>\r\n              <br><div class=\"container mr-4 text-center\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 imgUp rounded\">\r\n                          <div class=\"imagePreview\"></div>\r\n                          <label class=\"btn btn-info btn-sm btnpriview\" (click)=\"priview()\">\r\n                              Upload<input type=\"file\"  name=\"imageproduct\" \r\n                              [(ngModel)]=\"imageproduct\"\r\n                              #uploadImage=\"ngModel\"\r\n                              (change)=\"fileChangeEvent($event)\" \r\n                              #fileInpu class=\"uploadFile img\" value=\"Upload Photo\" style=\"width: 0px;height: 0px;overflow: hidden;\">\r\n                         </label>\r\n                     </div><!-- col-2 -->\r\n                     <!-- <i class=\"fa fa-plus imgAdd\"></i> -->\r\n                  </div><!-- row -->\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-6\">\r\n                        <mat-form-field>\r\n                          <input matInput name=\"first_name\" \r\n                          Autocomplete=\"off\" \r\n                          [(ngModel)]=\" empData.first_name\"  placeholder=\"First Name\">\r\n                        \r\n                        </mat-form-field></div>\r\n                        <div class=\"col-lg-6\">\r\n                                <mat-form-field>\r\n                                  <input matInput   name=\"last_name\"\r\n                                  Autocomplete=\"off\" \r\n                                  [(ngModel)]=\" empData.last_name\" placeholder=\"Last Name\">\r\n                                </mat-form-field></div>\r\n                 </div>\r\n                <div class=\"row\">\r\n                          <div class=\"col-lg-6\">\r\n                          <mat-form-field>\r\n                             <input type=\"email\" name=\"email\" \r\n                             Autocomplete=\"off\" \r\n                             [(ngModel)]=\" empData.email\" matInput placeholder=\"email\">\r\n                             </mat-form-field></div>\r\n                             <div class=\"col-lg-6\">\r\n                              <mat-form-field>\r\n                             <input matInput  name=\"phonenumber\" \r\n                             Autocomplete=\"off\" \r\n                             [(ngModel)]=\" empData.phonenumber\"placeholder=\"phone Number\">\r\n                             </mat-form-field></div>\r\n                   </div>\r\n                   <div class=\"row mb-3\">\r\n                        <div class=\"col-lg-6\">\r\n                        <mat-form-field>\r\n                           <input type=\"date\" name=\"DOB\" \r\n                           Autocomplete=\"off\" \r\n                           [(ngModel)]=\" empData.DOB\"  matInput placeholder=\"DOB\">\r\n                           </mat-form-field></div>\r\n                           <div class=\"col-lg-6\">\r\n                            <mat-form-field>\r\n                           <input type=\"date\"  name=\"DOJ\"\r\n                           Autocomplete=\"off\" \r\n                           [(ngModel)]=\" empData.DOJ\" matInput placeholder=\"DOJ\">\r\n                           </mat-form-field></div>\r\n                 </div>\r\n                 <div class=\"row\">\r\n                     <div class=\"col-lg\">\r\n                            <div class=\"input-group\">                                   \r\n                                      <span class=\"input-group-text\">Gender :</span>                                    \r\n                                    <input type=\"radio\"  \tname=\"gender\" \r\n                                    value=\"male\" \r\n                                    [(ngModel)]=\" empData.gender\" class=\"mt-1\">Male \r\n            &nbsp;&nbsp;&nbsp;<input type=\"radio\" \tname=\"gender\" \r\n            value=\"female\" \r\n            [(ngModel)]=\" empData.gender\"class=\"mt-1\">Female\r\n                                  </div>\r\n                     </div>\r\n                 </div>\r\n                 <div class=\"row mt-3\">\r\n                        <div class=\"col-lg-6\">\r\n                        <mat-form-field>\r\n                           <input type=\"password\"  \tname=\"password\" \r\n                           Autocomplete=\"off\" \r\n                           [(ngModel)]=\" empData.password\" matInput placeholder=\"password\">\r\n                           </mat-form-field></div>\r\n                           <div class=\"col-lg-6\">\r\n                            <mat-form-field>\r\n                           <input type=\"password\" name=\"cnf_pswd\" \r\n                           Autocomplete=\"off\"\r\n                           [(ngModel)]=\" empData.cnf_pswd\" matInput placeholder=\"confirm password\">\r\n                           </mat-form-field></div>\r\n                 </div>\r\n                  </div><!-- container -->           \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"reset\" class=\"btn btn-info btn-sm rounded\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" (click)=\"addemployee()\" class=\"btn btn-success btn-sm rounded\">Add</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n<div class=\"container\" style=\"margin-left: 360px;\">\r\n<div class=\"row\">\r\n\t\r\n<div class=\"card text-center rounded shadow p-0\" style=\"width: 15rem;\">\r\n  <img src=\"{{photo}}\" class=\"card-img-top rounded-circle sideImg\" width=\"150px\" height=\"150px\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title font-weight-bold\">{{name}}</h5>\r\n    <p class=\"card-text\">IT Trainee</p>\r\n    <p class=\"card-text\"><i class=\"fas fa-user text-info mr-2\"></i>{{id}}</p>\r\n    <p class=\"card-text mr-3\"><i class=\"fas fa-phone text-info mr-2\"></i>{{phone}}</p>\r\n\r\n    <a routerLink=\"/details\" class=\"btn-sm btn-primary  rounded shadow text-white\"><i class=\"fas fa-arrow-right text-white mr-2\"></i>View Details</a>\r\n    </div>\r\n \r\n</div>\r\n<!-- <div class=\"col-3\">\r\n<div class=\"card text-center rounded shadow p-0\" style=\"width: 15rem;\">\r\n  <img src=\"assets/img/photo.jpg\" class=\"card-img-top rounded-circle sideImg\" width=\"150px\" height=\"150px\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title font-weight-bold\">Mariyam shaik</h5>\r\n    <p class=\"card-text\">IT Trainee</p>\r\n    <p class=\"card-text\"><i class=\"fas fa-user text-info mr-2\"></i>ZYX_2019_129</p>\r\n    <p class=\"card-text mr-3\"><i class=\"fas fa-phone text-info mr-2\"></i>8976542310</p>\r\n\r\n    <a  routerLink=\"/details\" class=\"btn-sm btn-primary rounded shadow text-white\"><i class=\"fas fa-arrow-right text-white mr-2\"></i>View Details</a>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<!-- <div class=\"col-3\">\r\n<div class=\"card text-center rounded shadow p-0\" style=\"width: 15rem;\">\r\n  <img src=\"assets/img/photo.jpg\" class=\"card-img-top rounded-circle sideImg\" width=\"150px\" height=\"150px\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title font-weight-bold\">Bhegam Sana</h5>\r\n    <p class=\"card-text\">IT Trainee</p>\r\n    <p class=\"card-text\"><i class=\"fas fa-user text-info mr-2\"></i>ZYX_2019_130</p>\r\n    <p class=\"card-text mr-3\"><i class=\"fas fa-phone text-info mr-2\"></i>6259874315</p>\r\n\r\n    <a  routerLink=\"/details\" class=\"btn-sm btn-primary rounded shadow text-white\"><i class=\"fas fa-arrow-right text-white mr-2\"></i>View Details</a>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<!-- <div class=\"col-3\">\r\n<div class=\"card text-center rounded shadow p-0\" style=\"width: 15rem;\">\r\n  <img src=\"assets/img/photo.jpg\" class=\"card-img-top rounded-circle sideImg\" width=\"150px\" height=\"150px\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title font-weight-bold\">Sana Bhegam</h5>\r\n    <p class=\"card-text\">IT Trainee</p>\r\n    <p class=\"card-text\"><i class=\"fas fa-user text-info mr-2\"></i>ZYX_2019_131</p>\r\n    <p class=\"card-text mr-3\"><i class=\"fas fa-phone text-info mr-2\"></i>6987315649</p>\r\n\r\n    <a  routerLink=\"/details\" class=\"btn-sm btn-primary shadow rounded text-white\"><i class=\"fas fa-arrow-right text-white mr-2\"></i>View Details</a>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n</div>\r\n</div>\r\n<!-- \r\n<div class=\" container mt-4 viewData\">\r\n        <div class=\"input-field search_field\">\r\n           \r\n                 <input class=\"ml-2\" id=\"icon_search\" type=\"search\" name=\"fullid\" [(ngModel)]=\" empData.fullid\" placeholder=\"search \" > \r\n                <p class=\" btn btn-sm bg-primary \" (click)=\"viewemployee()\" routerLink=\"/viewdetails\">Go</p>                    \r\n            \r\n              </div>             \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card m-2\" style=\"width: 16rem;\">\r\n                <img src=\"{{photo}}\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body text-center\">\r\n                    <h5 class=\"card-title\">{{name}}</h5>\r\n                    <p class=\"card-text\"><i class=\"fa fa-briefcase mr-2\" aria-hidden=\"true\"></i>Developer</p>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-sm border-right\">\r\n                        <h2 class=\"mb-0\">2</h2>\r\n                        <p>Attendence</p>\r\n                    </div>\r\n                    <div class=\"col-sm border-right\">\r\n                        <h2 class=\"mb-0\">2/2</h2>\r\n                        <p>Leave</p>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <h2 class=\"mb-0\">2</h2>\r\n                        <p>Optional Leaves</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n            <div class=\"card my-2\" style=\"width: 50rem;\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 text-center\">\r\n                            <i class=\"fas fa-user-tie fa-4x mb-4\"></i>\r\n                            <h4>Employee Details</h4>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-sm-8\">\r\n                            <table class=\"table table-hover table-borderless border-left\">\r\n                                <tbody>\r\n\r\n                                  \r\n\r\n\r\n                                    <tr>\r\n                                        <td>ID</td>\r\n                                        <td>{{id}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Phone</td>\r\n                                        <td>{{phone}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>DOB</td>\r\n                                        <td>{{DOB}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Gender</td>\r\n                                        <td>{{gender}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Email-1</td>\r\n                                        <td>{{email}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Email-2</td>\r\n                                        <td>{{email}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>B.Group</td>\r\n                                        <td>B +ve</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Local Address</td>\r\n                                        <td>R.No:5, Banjarahills, Hyderabad, Telangana.</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Perminant Address</td>\r\n                                        <td>R.No:5, Banjarahills, Hyderabad, Telangana.</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card my-2\" style=\"width: 50rem;\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 text-center\">\r\n                            <i class=\"fas fa-user-graduate fa-4x mb-4\"></i>\r\n                            <h4>Education Details</h4>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-sm-8\">\r\n                            <table class=\"table table-borderless border-left\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">Qualification</th>\r\n                                        <th scope=\"col\">Institution Name</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>SSC</td>\r\n                                        <td>Govt. High School</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>+2</td>\r\n                                        <td>Ekashila Jr. College</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Degree</td>\r\n                                        <td>Gurunanak Institute of Technical Campus</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card my-2\" style=\"width: 50rem;\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 text-center\">\r\n                            <i class=\"fas fa-briefcase fa-4x mb-4\"></i>\r\n                            <h4>Company Details</h4>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-sm-8\">\r\n                            <table class=\"table table-borderless border-left\">\r\n\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>{{email}}</td>\r\n                                        <td>{{email}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>{{email}}</td>\r\n                                        <td>ALL</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Designation</td>\r\n                                        <td>Developer</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Date of Joining</td>\r\n                                        <td>{{DOJ}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Salary ( $ )</td>\r\n                                        <td>40,000PM</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card my-2\" style=\"width: 50rem;\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 text-center\">\r\n                            <i class=\"fas fa-university fa-4x mb-4\"></i>\r\n                            <h4>Bank Details</h4>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <table class=\"table table-borderless border-left\">\r\n\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Account Holder Name </td>\r\n                                        <td>kiran</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Account Number </td>\r\n                                        <td>2121321313</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Bank Name</td>\r\n                                        <td>ICICI</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>PAN Number</td>\r\n                                        <td>215415421</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>IFSC Code</td>\r\n                                        <td>214215413215</td>\r\n                                    </tr>ng serve -por\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>  \r\n            </div>\r\n            </div>\r\n            </div>\r\n            -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewemployeelist/viewemployeelist.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewemployeelist/viewemployeelist.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content-wrapper\" style=\"margin-left: -237px;\">\n \t\n  <div class=\"page-content bgLogo\" style=\"margin-right: -232px;\">\n    <h3 >\n         Employee Details\n     </h3>\n      <div class=\"page-bar\">\n         <ul class=\"page-breadcrumb\">\n             <li>\n                 <i class=\"fa fa-home\"></i>\n                 <a routerLink='/homepage'>Home</a>\n                 <i class=\"fa fa-angle-right\"></i>\n             </li>\n             <li>\n                 <a>Employee Details</a>\n                 <i class=\"fa \"></i>\n             </li>\n \n         </ul>\n \n     </div>\n      <div class=\"row \">\n         <div class=\"col-md-6\">\n\n         </div>\n         <div class=\"col-md-6 form-group text-right\">\n \n \n \n         </div>\n     </div>\n \n \n       <div class=\"row\">\n         <div class=\"col-md-12\">\n \n \n             <!-- BEGIN EXAMPLE TABLE PORTLET-->\n             <div id=\"load\">\n \n                 \n                                 \n \n             </div>\n             <div class=\"portlet box blue\">\n                 <div class=\"portlet-title\">\n                     <div class=\"caption\">\n                         <i class=\"fa fa-download\"></i>View Details\n                     </div>\n                     <div class=\"tools\">\n                     </div>\n                 </div>\n \n                 <div class=\"portlet-body\">\n\n                    <!-- <div class=\"input-field search_field\">\n                        <i class=\"fa fa-search prefix\"></i>\n                        <input id=\"icon_search\" type=\"search\" placeholder=\"search\">\n    \n                      </div>\t\t\t\t\t -->\n\n                    <!-- <div class=\"input-field search_field\">\n                       \n                        <input id=\"icon_search\" type=\"search\" name=\"fullid\" [(ngModel)]=\" empData.fullid\" placeholder=\"search\"> \n                        <i class=\"far fa-search btn btn-sm btn-success\" (click)=\"viewemployee()\" routerLink=\"/viewdetails\"></i>\n    \n                      </div>\t -->\n \n \n                     <table class=\"table table-striped table-bordered table-hover\" id=\"notices\">\n\n                            <!-- <li *ngFor=\"let hero of heroes\"> -->\n                    \n                         <tr class=\"text-center\">\n                             <th>Employee ID</th>\n                             <th>Employee Name</th>\n                            \n                                                \n                         </tr>\n                      \n                         \n                         <tbody class=\"text-center\">\n                         \n                         \t<tr>\n                           \n                                      <td  > {{fullid}}</td>\n                                      <td > {{name}}</td> \n                                      <input type=\"hidden\"  name=\"names\" ng-value=\"name\" [(ngModel)]=\" viewemployee1.names\" >\n                                      <input type=\"hidden\"  name=\"fullid\" ng-value=\"fullid\" [(ngModel)]=\" viewemployee1.fullid\" >\n                                      \n                      \n                               </tr>\n                              \n                            <tr >\n                            \t\n                            \t <td> {{fullid1}}</td>\n                                      <td >{{name1}}</td>\n                                  \n                            </tr>   \n                            <tr>\n                            \t\n                            \t <td> {{fullid2}}</td>\n                                      <td> {{name2}}</td>\n                                  \n                            </tr>   \n\n                            <tr>\n                            \t\n                            \t <td>{{fullid3}}</td>\n                                      <td> {{name3}}</td>\n                                      \n                            </tr>  \n                            <tr>\n                            \t\n                            \t <td> {{fullid4}}</td>\n                                      <td>{{name4}}</td>\n                                   \n                            </tr>                            \n \n                         </tbody>\n                     </table>\n                 </div>\n             </div>\n             <!-- END EXAMPLE TABLE PORTLET-->\n \n         </div>\n     </div>\n \n \n \n  </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewnotice/viewnotice.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewnotice/viewnotice.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\ntable {\n  font-size: 15px;\n}\n\ninput {\n  border-bottom: none;\n}\n\n.headtext {\n  font-style: bold;\n  margin-left: 165px;\n  color: #ff9800;\n}\n\n.page-bar {\n  background: none;\n}\n\n.card {\n  overflow: hidden;\n  opacity: 0.9;\n}\n\ninput[type=text]:not(.browser-default) {\n  border-bottom: none;\n}\n\ninput[type=date]:not(.browser-default) {\n  border-bottom: none;\n}\n\ninput[type=file]:not(.browser-default) {\n  border-bottom: none;\n}\n\ninput[type=password]:not(.browser-default) {\n  border-bottom: none;\n}\n\ntr {\n  border-bottom: 0px;\n}\n\n.submit-btn {\n  border: none;\n  height: auto;\n  padding: 10px;\n  color: white;\n}\n\n.header {\n  background-color: #000;\n}\n\ninput {\n  border: none;\n  outline: none;\n}\n\n.btnsubmit {\n  margin-left: 200px;\n}\n\n.empData {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWVtcGxveWVlL0Q6XFxmaW5hbCBhZG1pbiBkYXNoYm9hcmRcXG5ld19BZG1pbl9wYW5lbC9zcmNcXGFwcFxcYWRkLWVtcGxveWVlXFxhZGQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQywyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FGOztBRElDO0VBQ0MsZUFBQTtBQ0RGOztBREdDO0VBQ0MsbUJBQUE7QUNBRjs7QURHQztFQUdDLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FEUUM7RUFDQyxnQkFBQTtBQ0xGOztBRFFDO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0M7RUFDQyxtQkFBQTtBQ0pGOztBRE1DO0VBQ0MsbUJBQUE7QUNIRjs7QURLQztFQUNDLG1CQUFBO0FDRkY7O0FESUM7RUFDQyxtQkFBQTtBQ0RGOztBREdDO0VBQ0Msa0JBQUE7QUNBRjs7QURFQztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQztFQUNDLHNCQUFBO0FDRUY7O0FEQUM7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERDO0VBQ0Msa0JBQUE7QUNJRjs7QURGQztFQUNDLHNFQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9hZGQtZW1wbG95ZWUvYWRkLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0LmJnTG9nb3tcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvQmcuanBnJyk7XHJcblx0XHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHQgICBcclxuXHR9XHJcblx0XHJcblx0dGFibGV7XHJcblx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0fVxyXG5cdGlucHV0e1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHJcblx0fVxyXG5cdC5oZWFkdGV4dHtcclxuXHRcdFx0XHJcblx0XHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXN0eWxlOiBib2xkO1xyXG5cdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNjVweDtcclxuXHRcdGNvbG9yOiAjZmY5ODAwO1xyXG5cdFx0Ly8gd2lkdGg6IDMwMHB4O1xyXG5cdFx0XHJcblxyXG5cdH1cclxuXHQucGFnZS1iYXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZHtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRvcGFjaXR5OiAuOTtcclxuXHR9XHJcblx0aW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCl7XHJcblx0XHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdH1cclxuXHRpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtcclxuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0fVxyXG5cdGlucHV0W3R5cGU9ZmlsZV06bm90KC5icm93c2VyLWRlZmF1bHQpe1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHR9XHJcblx0aW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpe1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHR9XHJcblx0dHJ7XHJcblx0XHRib3JkZXItYm90dG9tOiAwcHg7XHJcblx0fVxyXG5cdC5zdWJtaXQtYnRue1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0aGVpZ2h0OmF1dG87XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHQuaGVhZGVye1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjojMDAwO1xyXG5cdH1cclxuXHRpbnB1dHtcclxuXHRcdGJvcmRlcjpub25lO1xyXG5cdFx0b3V0bGluZTpub25lO1xyXG5cdH1cclxuXHQuYnRuc3VibWl0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG5cdH1cclxuXHQuZW1wRGF0YXtcclxuXHRcdGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcblxyXG5cdH0iLCIuYmdMb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvQmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW5wdXQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uaGVhZHRleHQge1xuICBmb250LXN0eWxlOiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTY1cHg7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4ucGFnZS1iYXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCkge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06bm90KC5icm93c2VyLWRlZmF1bHQpIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxudHIge1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuXG4uZW1wRGF0YSB7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.ts ***!
  \********************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://127.0.0.1:3000/users/uploadFile';
var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(_auth, _router, _fb) {
        this._auth = _auth;
        this._router = _router;
        this._fb = _fb;
        this.empData = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            DOJ: '',
            phonenumber: '',
            gender: '',
            DOB: '',
            cnf_pswd: '',
            //confirmpassword: '',
            token: localStorage.getItem('token'),
            id: localStorage.getItem('id')
        };
        this.filesToUpload = [];
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.emoployeeData = this._fb.group({
            firstName: [''],
            lastName: [''],
            dob: [''],
            email: [''],
            password: [''],
            phonenumber: [''],
            profileImage: [''],
            DOJ: [''],
            gender: [''],
        });
    };
    AddEmployeeComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // this.fileName = this.filesToUpload[0].name;
    };
    AddEmployeeComponent.prototype.addemployee = function () {
        var _this = this;
        var payload = new FormData();
        ///const file: File = this.filesToUpload[0];
        payload.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
        console.log(File + " file");
        payload.append('first_name', this.empData.first_name);
        payload.append('last_name', this.empData.last_name);
        payload.append('email', this.empData.email);
        payload.append('password', this.empData.password);
        payload.append('DOJ', this.empData.DOJ);
        payload.append('phonenumber', this.empData.phonenumber),
            payload.append('gender', this.empData.gender),
            payload.append('DOB', this.empData.DOB),
            payload.append('token', this.empData.token);
        payload.append('id', this.empData.id);
        this._auth.uploadSheet(payload)
            .subscribe(function (res) {
            console.log(res);
            console.log(_this.empData);
            console.log(_this.empData.id);
            if (localStorage.getItem('token') == "undefined") {
                _this._router.navigate(['/signin']);
            }
            else {
                _this._router.navigate(['/holiday']);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/viewnotice']);
                }
            }
        });
    };
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! raw-loader!./add-employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.scss */ "./src/app/add-employee/add-employee.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/addholiday/addholiday.component.scss":
/*!******************************************************!*\
  !*** ./src/app/addholiday/addholiday.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.sccessBtn {\n  margin: 0 auto;\n}\n\n.custom-select {\n  width: 200px;\n  height: 34px;\n}\n\n.pop {\n  padding: 10px;\n  display: none;\n  border-radius: 5px;\n  background-color: #fff;\n  position: absolute;\n  top: 10%;\n  left: 40%;\n  z-index: 1000;\n  overflow: hidden;\n  box-shadow: 0 0 20px -10px black;\n}\n\n.pop input .h3 {\n  padding: 0px;\n  font-size: 28px;\n  letter-spacing: -1px;\n  display: block;\n  color: #666;\n  margin: 0px 0px 15px 0px;\n  font-weight: 300;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.cover {\n  width: 100%;\n  height: 116%;\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n#close {\n  float: right;\n  background-color: none;\n  padding: 5px;\n  outline: none;\n  border: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close:hover,\n#close:focus {\n  background-color: red;\n  padding: 5px;\n  color: white;\n}\n\n.remove {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  background-color: tomato;\n  color: white;\n  border: none;\n  border-radius: 15px;\n}\n\nh3 {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  color: #f38c06;\n  font-weight: bold;\n}\n\n.caption {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.form-control, input[type=text]:not(.browser-default) {\n  border: 1px solid #ccc;\n  text-align: left;\n  height: 2rem;\n}\n\n.form-control, input[type=date]:not(.browser-default) {\n  height: 1rem;\n  border-bottom: none;\n}\n\n.form-control, textarea[type=text]:not(.browser-default) {\n  border: 1px solid #ccc;\n  text-align: left;\n  height: 2rem;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaG9saWRheS9EOlxcZmluYWwgYWRtaW4gZGFzaGJvYXJkXFxuZXdfQWRtaW5fcGFuZWwvc3JjXFxhcHBcXGFkZGhvbGlkYXlcXGFkZGhvbGlkYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZGhvbGlkYXkvYWRkaG9saWRheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrREE7RUFDSSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ2pESjs7QURvREE7RUFDSSxjQUFBO0FDakRKOztBRG9EQztFQUNJLFlBQUE7RUFDQSxZQUFBO0FDakRMOztBRG1EQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ2hEQTs7QURtREE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNoREE7O0FEa0RBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQy9DQTs7QURpREE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDOUNBOztBRGdEQTs7RUFFQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDN0NBOztBRCtDQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQzVDQTs7QUQ4Q0E7RUFDQSxzRUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQzNDQTs7QUQ2Q0E7RUFDQSxzRUFBQTtBQzFDQTs7QUQ2Q0E7RUFDSyxzQkFBQTtFQUNBLGdCQUFBO0VBQ0QsWUFBQTtBQzFDSjs7QUQ0Q0k7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUN6Q0w7O0FEMkNLO0VBQ0csc0JBQUE7RUFDQSxnQkFBQTtFQUNELFlBQUE7QUN4Q1A7O0FEMENPO0VBQ0MsZ0JBQUE7QUN2Q1IiLCJmaWxlIjoic3JjL2FwcC9hZGRob2xpZGF5L2FkZGhvbGlkYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZmlsZS1maWVsZCAuYnRue1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6MnJlbTtcclxuLy8gICB9XHJcblxyXG4vLyBsYWJlbHtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5wYWdlLWNvbnRlbnQtd3JhcHBlciAucGFnZS1jb250ZW50IHtcclxuLy8gbWFyZ2luLWxlZnQ6IDBweDsgXHJcbi8vIG1hcmdpbi10b3A6IDBweDsgXHJcbi8vIG1pbi1oZWlnaHQ6MHB4O1xyXG4vLyBwYWRkaW5nOiAwcHg7XHJcbi8vIH1cclxuLy8gLmZvcm0tY29udHJvbCxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtcclxuLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gdGV4dC1hbGlnbjpsZWZ0O1xyXG4vLyBoZWlnaHQ6MnJlbTtcclxuLy8gfVxyXG4vLyAuZm9ybS1jb250cm9sLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpe1xyXG4vLyBoZWlnaHQ6IDFyZW07XHJcbi8vIGJvcmRlci1ib3R0b206bm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLnBvcnRsZXQuYm94LmJsdWV7XHJcbi8vICAgICB3aWR0aDogNzklO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vIH1cclxuLy8gLmN1c3RvbS1maWxle1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gfVxyXG4vLyAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVye1xyXG4gIFxyXG4vLyAgICAgaGVpZ2h0OmF1dG87XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyB9XHJcbi8vIGgze1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuLy8gICAgIGNvbG9yOiAjZjM4YzA2O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuLy8gLmNhcHRpb257XHJcbi8vICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG5cclxuLy8gfVxyXG5cclxuLmJnTG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvQmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgXHJcbn1cclxuLnNjY2Vzc0J0bntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gfVxyXG4gXHJcbiAuY3VzdG9tLXNlbGVjdHtcclxuICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gfVxyXG4ucG9weyBcclxucGFkZGluZzogMTBweDtcclxuZGlzcGxheTogbm9uZTtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMTAlO1xyXG5sZWZ0OiA0MCU7XHJcbnotaW5kZXg6IDEwMDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJveC1zaGFkb3c6IDAgMCAyMHB4IC0xMHB4IGJsYWNrO1xyXG5cclxufVxyXG4ucG9wIGlucHV0IC5oM3tcclxucGFkZGluZzogMHB4O1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG5kaXNwbGF5OiBibG9jaztcclxuY29sb3I6ICM2NjY7XHJcbm1hcmdpbjogMHB4IDBweCAxNXB4IDBweDtcclxuZm9udC13ZWlnaHQ6IDMwMDtcclxuZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWZcclxufVxyXG4uY292ZXJ7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDExNiU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuZGlzcGxheTogbm9uZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG56LWluZGV4OiA5OTk7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG4jY2xvc2V7XHJcbmZsb2F0OiByaWdodDtcclxuYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxucGFkZGluZzogNXB4O1xyXG5vdXRsaW5lOiBub25lO1xyXG5ib3JkZXI6IG5vbmU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5yaWdodDogMDtcclxufVxyXG4jY2xvc2U6aG92ZXIsXHJcbiNjbG9zZTpmb2N1c3tcclxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5wYWRkaW5nOiA1cHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucmVtb3ZlIHtcclxud2lkdGg6IDMwcHg7XHJcbmhlaWdodDogMzBweDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbmNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyOiBub25lO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbmgze1xyXG5mb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG5jb2xvcjogI2YzOGMwNjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNhcHRpb257XHJcbmZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcblxyXG59XHJcbi5mb3JtLWNvbnRyb2wsaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCl7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBoZWlnaHQ6MnJlbTtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2wsaW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCl7XHJcbiAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgICB9XHJcbiAgICAgLmZvcm0tY29udHJvbCx0ZXh0YXJlYVt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgIGhlaWdodDoycmVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgLnBhZ2UtYmFye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9IiwiLmJnTG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL0JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNjY2Vzc0J0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4ucG9wIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA0MCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xMHB4IGJsYWNrO1xufVxuXG4ucG9wIGlucHV0IC5oMyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW46IDBweCAwcHggMTVweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY292ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbiNjbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxuI2Nsb3NlOmhvdmVyLFxuI2Nsb3NlOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlbW92ZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGNvbG9yOiAjZjM4YzA2O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcHRpb24ge1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbi5mb3JtLWNvbnRyb2wsIGlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uZm9ybS1jb250cm9sLCBpbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB7XG4gIGhlaWdodDogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmZvcm0tY29udHJvbCwgdGV4dGFyZWFbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/addholiday/addholiday.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addholiday/addholiday.component.ts ***!
  \****************************************************/
/*! exports provided: AddholidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddholidayComponent", function() { return AddholidayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddholidayComponent = /** @class */ (function () {
    function AddholidayComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.addholidaydata = { token: localStorage.getItem('token'),
            date: '',
            reason: '',
            holidaytype: '',
            deviceForm: '',
        };
    }
    AddholidayComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".bt").on('click', function () {
                $(".cover").show();
                $(".pop").show();
            });
            $("#close").on('click', function () {
                $(".cover").hide();
                $(".pop").hide();
            });
        });
        var html = '<tr><td><input type="text" name="name"></td><td><input type="date" name="date"></td><td><button class="remove">-</button></td></tr>';
        $(function () {
            $('#addRow').click(function () {
                $('tbody').append(html);
            });
            $(document).on('click', '.remove', function () {
                $(this).parents('tr').remove();
            });
        });
    };
    AddholidayComponent.prototype.addholiday = function () {
        console.log(this.addholidaydata);
        this._auth.addholiday(this.addholidaydata)
            .subscribe(function (res) {
            console.log(res);
            //   if(localStorage.getItem('token')=="undefined")
            //   {
            //     this._router.navigate(['/signin'])
            //   }
            //   else{
            //     //console.log('routed')
            //   this._router.navigate(['/addnotice'])
            //   }
            // },
            // err => {
            //   if( err instanceof HttpErrorResponse ) {
            //     if (err.status === 401) {
            //       this._router.navigate(['/viewnotice'])
            //     }
            //   }
        });
    };
    AddholidayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addholiday',
            template: __webpack_require__(/*! raw-loader!./addholiday.component.html */ "./node_modules/raw-loader/index.js!./src/app/addholiday/addholiday.component.html"),
            styles: [__webpack_require__(/*! ./addholiday.component.scss */ "./src/app/addholiday/addholiday.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddholidayComponent);
    return AddholidayComponent;
}());



/***/ }),

/***/ "./src/app/addiprocurement/addiprocurement.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/addiprocurement/addiprocurement.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.file-field .btn {\n  line-height: 2rem;\n  background-color: #657a87;\n}\n\n.btn-small {\n  background-color: #ccc;\n}\n\nlabel {\n  color: black;\n}\n\n.page-bar {\n  background: none;\n}\n\n.form-control {\n  background: none;\n}\n\n.page-content-wrapper .page-content {\n  margin-left: 0px;\n  margin-top: 0px;\n  min-height: 0px;\n  padding: 0px;\n}\n\n.form-control, input[type=text]:not(.browser-default) {\n  border: 1px solid #ccc;\n  text-align: left;\n  height: 2rem;\n}\n\n.form-control, input[type=date]:not(.browser-default) {\n  height: 1rem;\n  border-bottom: none;\n}\n\n.portlet.box.blue {\n  width: 79%;\n  margin-left: 10px;\n}\n\n.custom-file {\n  border: 1px solid #ccc;\n}\n\n.custom-file-label::after {\n  background: #c1bbbb;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXByb2N1cmVtZW50L0Q6XFxmaW5hbCBhZG1pbiBkYXNoYm9hcmRcXG5ld19BZG1pbl9wYW5lbC9zcmNcXGFwcFxcYWRkaXByb2N1cmVtZW50XFxhZGRpcHJvY3VyZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZGlwcm9jdXJlbWVudC9hZGRpcHJvY3VyZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDQSxnQkFBQTtBQ0tBOztBREZBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNLQTs7QURIQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTUE7O0FESkE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNPQTs7QURKQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksc0JBQUE7QUNRSjs7QUROQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvYWRkaXByb2N1cmVtZW50L2FkZGlwcm9jdXJlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0xvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL0JnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIFxyXG59XHJcbi5maWxlLWZpZWxkIC5idG57XHJcbiAgICBsaW5lLWhlaWdodDoycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjU3YTg3O1xyXG59XHJcbi5idG4tc21hbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7XHJcbn1cclxubGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnBhZ2UtYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG5iYWNrZ3JvdW5kOm5vbmU7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQtd3JhcHBlciAucGFnZS1jb250ZW50IHtcclxubWFyZ2luLWxlZnQ6IDBweDsgXHJcbm1hcmdpbi10b3A6IDBweDsgXHJcbm1pbi1oZWlnaHQ6MHB4O1xyXG5wYWRkaW5nOiAwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCxpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtcclxuYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5oZWlnaHQ6MnJlbTtcclxufVxyXG4uZm9ybS1jb250cm9sLGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpe1xyXG5oZWlnaHQ6IDFyZW07XHJcbmJvcmRlci1ib3R0b206bm9uZTtcclxufVxyXG5cclxuLnBvcnRsZXQuYm94LmJsdWV7XHJcbiAgICB3aWR0aDogNzklO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmN1c3RvbS1maWxle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4uY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVye1xyXG4gICAgYmFja2dyb3VuZDogI2MxYmJiYjtcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbiIsIi5iZ0xvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9CZy5qcGdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5maWxlLWZpZWxkIC5idG4ge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1N2E4Nztcbn1cblxuLmJ0bi1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGFnZS1iYXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnBhZ2UtY29udGVudC13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZm9ybS1jb250cm9sLCBpbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmZvcm0tY29udHJvbCwgaW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCkge1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wb3J0bGV0LmJveC5ibHVlIHtcbiAgd2lkdGg6IDc5JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jdXN0b20tZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzFiYmJiO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/addiprocurement/addiprocurement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/addiprocurement/addiprocurement.component.ts ***!
  \**************************************************************/
/*! exports provided: AddiprocurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddiprocurementComponent", function() { return AddiprocurementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddiprocurementComponent = /** @class */ (function () {
    function AddiprocurementComponent() {
    }
    AddiprocurementComponent.prototype.ngOnInit = function () {
    };
    AddiprocurementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addiprocurement',
            template: __webpack_require__(/*! raw-loader!./addiprocurement.component.html */ "./node_modules/raw-loader/index.js!./src/app/addiprocurement/addiprocurement.component.html"),
            styles: [__webpack_require__(/*! ./addiprocurement.component.scss */ "./src/app/addiprocurement/addiprocurement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddiprocurementComponent);
    return AddiprocurementComponent;
}());



/***/ }),

/***/ "./src/app/addnotice/addnotice.component.scss":
/*!****************************************************!*\
  !*** ./src/app/addnotice/addnotice.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group input, textarea {\n  border: 1px solid #dbdada;\n  background: none;\n  width: 200%;\n  height: 30px;\n}\n\n.box {\n  width: 700px;\n}\n\nh3 {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  color: #f38c06;\n  font-weight: bold;\n}\n\n.caption {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkbm90aWNlL0Q6XFxmaW5hbCBhZG1pbiBkYXNoYm9hcmRcXG5ld19BZG1pbl9wYW5lbC9zcmNcXGFwcFxcYWRkbm90aWNlXFxhZGRub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZG5vdGljZS9hZGRub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLHNFQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxzRUFBQTtBQ0lKOztBRERBO0VBQ0ksMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNJSjs7QUREQTtFQUNJLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9hZGRub3RpY2UvYWRkbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMTksIDIxOCwgMjE4KTtcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5ib3h7XHJcbiAgICB3aWR0aDo3MDBweDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBjb2xvcjogI2YzOGMwNjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jYXB0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuXHJcbn1cclxuLmJnTG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvQmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgXHJcbn1cclxuLnBhZ2UtYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufSIsIi5mb3JtLWdyb3VwIGlucHV0LCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRhZGE7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5ib3gge1xuICB3aWR0aDogNzAwcHg7XG59XG5cbmgzIHtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBjb2xvcjogI2YzOGMwNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xufVxuXG4uYmdMb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvQmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucGFnZS1iYXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addnotice/addnotice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/addnotice/addnotice.component.ts ***!
  \**************************************************/
/*! exports provided: AddnoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnoticeComponent", function() { return AddnoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddnoticeComponent = /** @class */ (function () {
    function AddnoticeComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.noticedata = {
            title: '',
            description: '',
        };
    }
    AddnoticeComponent.prototype.ngOnInit = function () {
    };
    AddnoticeComponent.prototype.addnotice = function () {
        var _this = this;
        console.log(this.noticedata);
        this._auth.addnotice(this.noticedata)
            .subscribe(function (res) {
            console.log(res);
            if (localStorage.getItem('token') == "undefined") {
                _this._router.navigate(['/signin']);
            }
            else {
                _this._router.navigate(['/holiday']);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/viewnotice']);
                }
            }
        });
    };
    AddnoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addnotice',
            template: __webpack_require__(/*! raw-loader!./addnotice.component.html */ "./node_modules/raw-loader/index.js!./src/app/addnotice/addnotice.component.html"),
            styles: [__webpack_require__(/*! ./addnotice.component.scss */ "./src/app/addnotice/addnotice.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddnoticeComponent);
    return AddnoticeComponent;
}());



/***/ }),

/***/ "./src/app/attendence/attendence.component.scss":
/*!******************************************************!*\
  !*** ./src/app/attendence/attendence.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-bar {\n  background: none;\n}\n\n.card {\n  box-shadow: 0 0 15px -5px black;\n}\n\n.btn:hover {\n  background: green;\n  color: white;\n}\n\nthead {\n  background: #dff3ff;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.Homebar i, .Homebar a {\n  color: #0177bc;\n}\n\n.btnShow {\n  background: #e4e2e2;\n}\n\n.btnShow:hover {\n  background: #e4e2e2;\n}\n\ntable {\n  font-style: normal;\n}\n\n.actionIcons {\n  background: white;\n  border-radius: 2px;\n  border: 1px solid green;\n  color: green;\n  padding: 5px;\n  width: 100px;\n}\n\n.actionIcons:hover {\n  background: green;\n  color: white;\n}\n\n.search {\n  margin: 5px 0px;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.update-btn {\n  float: right;\n  margin: 5px;\n  background: green;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kZW5jZS9EOlxcZmluYWwgYWRtaW4gZGFzaGJvYXJkXFxuZXdfQWRtaW5fcGFuZWwvc3JjXFxhcHBcXGF0dGVuZGVuY2VcXGF0dGVuZGVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F0dGVuZGVuY2UvYXR0ZW5kZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwrQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7QUNPSjs7QURKQTtFQUNJLG1CQUFBO0FDT0o7O0FESkE7RUFDUSxrQkFBQTtBQ09SOztBRE1BO0VBQ0ksaUJBQUE7RUFDRCxrQkFBQTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDRCxZQUFBO0FDSEg7O0FETUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNISjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDREo7O0FEaUdBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNJLFlBQUE7QUM5RkoiLCJmaWxlIjoic3JjL2FwcC9hdHRlbmRlbmNlL2F0dGVuZGVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggLTVweCBibGFjaztcclxufVxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxudGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiNkZmYzZmY7XHJcbn1cclxuLnRpdGxlTmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNjNweDtcclxufVxyXG4uSG9tZWJhciBpLC5Ib21lYmFyIGF7XHJcbiAgICBjb2xvcjojMDE3N2JjO1xyXG59XHJcbi5idG5TaG93e1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTJlMjtcclxuXHJcbn1cclxuLmJ0blNob3c6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xyXG5cclxufVxyXG50YWJsZXsgICAgIFxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgIH1cclxuXHJcbi8vIC5hY3Rpb25JY29ucyBidXR0b257XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IC0xcHggYmxhY2s7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMjBQWDtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIHdpZHRoOiAzMHB4O1xyXG4vLyB9XHJcbi5hY3Rpb25JY29uc3tcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiAycHg7ICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICB3aWR0aDoxMDBweDtcclxuICAgXHJcbn1cclxuLmFjdGlvbkljb25zOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ucmVwb3J0e1xyXG4gICAgY29sb3I6ICMwMTc3YmM7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbiAgICAvLyB0YWJsZSB0aGVhZCB0ciB0ZHtcclxuICAgIC8vICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrIDtcclxuICAgIC8vIH1cclxuICAgIC8vIGgze1xyXG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAvLyAgICAgY29sb3I6ICNmMzhjMDY7XHJcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAuY2FwdGlvbntcclxuICAgIC8vICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyAuYmdMb2dve1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvQmcuanBnJyk7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgIFxyXG4gICAgLy8gfVxyXG5cclxuLy8gICAgIHRkIC5jaGVja2JveC1idG57XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDc4JTtcclxuLy8gICAgIGxlZnQ6IDM3JTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbi8vICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7XHJcbi8vIH1cclxuLy8gdGQgLmNoZWNrYm94LWJ0biBpbnB1dHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgIHotaW5kZXg6MTtcclxuXHJcbi8vIH1cclxuLy8gdGQgLmNoZWNrYm94LWJ0biBkaXZ7XHJcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gdG9wOiAwO1xyXG4vLyBsZWZ0OiAwO1xyXG4vLyB3aWR0aDogODAlO1xyXG4vLyBoZWlnaHQ6IDcwJTtcclxuLy8gYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuLy8gYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbi8vIH1cclxuLy8gdGQgLmNoZWNrYm94LWJ0biBkaXYgLnNsaWRle1xyXG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vIHRvcDogMDtcclxuLy8gbGVmdDogMDtcclxuLy8gd2lkdGg6IDQwcHg7XHJcbi8vIGhlaWdodDogNDBweDtcclxuLy8gYmFja2dyb3VuZDojY2NjO1xyXG4vLyB0cmFuc2l0aW9uOiAwLjVzO1xyXG4vLyB9XHJcbi8vIHRkIC5jaGVja2JveC1idG4gaW5wdXQ6Y2hlY2tlZCArIGRpdiAuc2xpZGV7XHJcbi8vIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDYwcHgpO1xyXG4vLyB9XHJcbi8vIHRkIC5jaGVja2JveC1idG4gLnNsaWRlOmJlZm9yZXtcclxuLy8gY29udGVudDpcIkFcIjtcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB0b3A6IDA7XHJcbi8vIGxlZnQ6IC02MHB4O1xyXG4vLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIHdpZHRoOiA2MHB4O1xyXG4vLyBoZWlnaHQ6IDEwMCU7XHJcbi8vIGJhY2tncm91bmQ6I0YzNTY1RDtcclxuXHJcbi8vIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4vLyBmb250LXdlaWdodDogYm9sZDtcclxuLy8gY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcbi8vIHRkIC5jaGVja2JveC1idG4gLnNsaWRlOmFmdGVye1xyXG4vLyBjb250ZW50OiBcIlBcIjtcclxuLy8gcmlnaHQ6IC00MHB4O1xyXG4vLyBiYWNrZ3JvdW5kOiM0NWI2YWY7XHJcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gdG9wOiAwO1xyXG4vLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIHdpZHRoOiA2MHB4O1xyXG4vLyBoZWlnaHQ6IDEwMCU7XHJcbi8vIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4vLyBmb250LXdlaWdodDogYm9sZDtcclxuLy8gY29sb3I6IHdoaXRlO1xyXG5cclxuLnVwZGF0ZS1idG57XHJcbmZsb2F0OiByaWdodDtcclxubWFyZ2luOjVweDtcclxuYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4iLCIucGFnZS1iYXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IC01cHggYmxhY2s7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNkZmYzZmY7XG59XG5cbi50aXRsZU5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNjNweDtcbn1cblxuLkhvbWViYXIgaSwgLkhvbWViYXIgYSB7XG4gIGNvbG9yOiAjMDE3N2JjO1xufVxuXG4uYnRuU2hvdyB7XG4gIGJhY2tncm91bmQ6ICNlNGUyZTI7XG59XG5cbi5idG5TaG93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U0ZTJlMjtcbn1cblxudGFibGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5hY3Rpb25JY29ucyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBjb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uYWN0aW9uSWNvbnM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4ucmVwb3J0IHtcbiAgY29sb3I6ICMwMTc3YmM7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/attendence/attendence.component.ts":
/*!****************************************************!*\
  !*** ./src/app/attendence/attendence.component.ts ***!
  \****************************************************/
/*! exports provided: AttendenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceComponent", function() { return AttendenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttendenceComponent = /** @class */ (function () {
    function AttendenceComponent() {
    }
    AttendenceComponent.prototype.ngOnInit = function () {
    };
    AttendenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendence',
            template: __webpack_require__(/*! raw-loader!./attendence.component.html */ "./node_modules/raw-loader/index.js!./src/app/attendence/attendence.component.html"),
            styles: [__webpack_require__(/*! ./attendence.component.scss */ "./src/app/attendence/attendence.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AttendenceComponent);
    return AttendenceComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-bar {\n  background: none;\n}\n\n.company {\n  cursor: not-allowed;\n}\n\n.rpFilter {\n  font-weight: bold;\n}\n\n.field {\n  font-size: 18px;\n  color: #0177bc;\n}\n\n.btn:hover {\n  background: green;\n  color: white;\n}\n\nthead {\n  background: #ccc;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.Homebar i, .Homebar a {\n  color: #0177bc;\n}\n\n.btnShow {\n  background: #e4e2e2;\n}\n\n.btnShow:hover {\n  background: #e4e2e2;\n}\n\ntable {\n  font-style: normal;\n}\n\n.actionIcons button {\n  background: white;\n  box-shadow: 1px 1px 3px -1px black;\n  background: none;\n  outline: none;\n  border: none;\n  margin-right: 10PX;\n  padding: 5px;\n  width: 30px;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9EOlxcZmluYWwgYWRtaW4gZGFzaGJvYXJkXFxuZXdfQWRtaW5fcGFuZWwvc3JjXFxhcHBcXGRldGFpbHNcXGRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNBLGdCQUFBO0FDTkE7O0FEUUE7RUFDSSxtQkFBQTtBQ0xKOztBRE9BO0VBQ0ksaUJBQUE7QUNKSjs7QURNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNISjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNRLGtCQUFBO0FDQ1I7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudGFiLWNvbnRlbnQsLnRhYnN7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAtNXB4IGJsYWNrO1xyXG4vLyB9XHJcblxyXG4vLyAuY2FyZHtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IC01cHggYmxhY2s7XHJcbi8vIH1cclxuLnBhZ2UtYmFyIHtcclxuYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uY29tcGFueXtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuLnJwRmlsdGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZpZWxke1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IzAxNzdiYztcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnRoZWFke1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG4udGl0bGVOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2M3B4O1xyXG59XHJcbi5Ib21lYmFyIGksLkhvbWViYXIgYXtcclxuICAgIGNvbG9yOiMwMTc3YmM7XHJcbn1cclxuLmJ0blNob3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xyXG5cclxufVxyXG4uYnRuU2hvdzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNlNGUyZTI7XHJcblxyXG59XHJcbnRhYmxleyAgICAgXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgfVxyXG5cclxuLmFjdGlvbkljb25zIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggLTFweCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMFBYO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnBhZ2UtYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufSIsIi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jb21wYW55IHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnJwRmlsdGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maWVsZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMwMTc3YmM7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi50aXRsZU5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNjNweDtcbn1cblxuLkhvbWViYXIgaSwgLkhvbWViYXIgYSB7XG4gIGNvbG9yOiAjMDE3N2JjO1xufVxuXG4uYnRuU2hvdyB7XG4gIGJhY2tncm91bmQ6ICNlNGUyZTI7XG59XG5cbi5idG5TaG93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U0ZTJlMjtcbn1cblxudGFibGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5hY3Rpb25JY29ucyBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggLTFweCBibGFjaztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDEwUFg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Component, OnInit } from '@angular/core';


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_auth, _router, _httpclient, http) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        this.http = http;
        this.empData = {
            fullid: localStorage.getItem('fulli')
        };
        this.email = '';
        this.found = false;
        this.image = '';
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.empData.fullid + "fulli is");
        var viewemployee = new FormData();
        ///const file: File = this.filesToUpload[0];
        viewemployee.append('fullid', this.empData.fullid);
        this._auth.viewemployee(viewemployee)
            .subscribe(function (res) {
            //console.log("sampath")
            console.log(res);
            _this.email = res[0].email;
            console.log(_this.email);
            _this.name = res[0].name;
            _this.id = res[0].fullid;
            _this.DOJ = res[0].DOJ;
            _this.DOB = res[0].DOB;
            _this.phone = res[0].phone;
            _this.gender = res[0].gender;
            _this.photo = res[0].photo;
            console.log(res[0].photo);
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/fileupload/fileupload.component.scss":
/*!******************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/fileupload/fileupload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.ts ***!
  \****************************************************/
/*! exports provided: FileuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function() { return FileuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.AddemployeeData = { 'token': localStorage.getItem('token') };
        this.filesToUpload = [];
    }
    FileuploadComponent.prototype.ngOnInit = function () {
    };
    FileuploadComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // this.fileName = this.filesToUpload[0].name;
    };
    FileuploadComponent.prototype.uploadFile = function () {
        var payload = new FormData();
        var file = this.filesToUpload[0];
        payload.append('content', file, file.name);
        this._auth.uploadSheet(payload).subscribe(function (res) {
        });
    };
    FileuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fileupload',
            template: __webpack_require__(/*! raw-loader!./fileupload.component.html */ "./node_modules/raw-loader/index.js!./src/app/fileupload/fileupload.component.html"),
            styles: [__webpack_require__(/*! ./fileupload.component.scss */ "./src/app/fileupload/fileupload.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FileuploadComponent);
    return FileuploadComponent;
}());



/***/ }),

/***/ "./src/app/holiday/holiday.component.scss":
/*!************************************************!*\
  !*** ./src/app/holiday/holiday.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pop {\n  padding: 10px;\n  display: none;\n  border-radius: 5px;\n  background-color: #fff;\n  position: absolute;\n  top: 10%;\n  left: 40%;\n  width: 25%;\n  height: 20%;\n  z-index: 1000;\n  overflow: hidden;\n  box-shadow: 0 0 20px -10px black;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.search {\n  margin: 5px 0px;\n}\n\n.actionIcons {\n  background: white;\n  box-shadow: 1px 1px 3px -1px black;\n  background: none;\n  outline: none;\n  border: none;\n  margin-right: 20PX;\n  padding: 5px;\n  width: 30px;\n}\n\n.bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.cover {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n#close {\n  float: right;\n  background-color: none;\n  padding: 5px;\n  outline: none;\n  border: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close:hover,\n#close:focus {\n  background-color: red;\n  padding: 5px;\n  color: white;\n}\n\n.tabHead {\n  background: #ccc;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.field {\n  font-size: 15px;\n  color: #0177bc;\n}\n\n.modal-header {\n  border-bottom: none;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9saWRheS9EOlxcZmluYWwgYWRtaW4gZGFzaGJvYXJkXFxuZXdfQWRtaW5fcGFuZWwvc3JjXFxhcHBcXGhvbGlkYXlcXGhvbGlkYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbGlkYXkvaG9saWRheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDRSxVQUFBO0VBRUgsV0FBQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDQUQ7O0FER0E7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQ0FEOztBREVBO0VBQ0MsZUFBQTtBQ0NEOztBRENBO0VBQ0MsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUQ7O0FEQUE7RUFDQywyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0dEOztBREFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0dEOztBRERBO0VBQ0MsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ0lEOztBREZBOztFQUVDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNLRDs7QURIQTtFQUNBLGdCQUFBO0FDTUE7O0FESkM7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRE5BO0VBQ0MsbUJBQUE7QUNTRDs7QURQQTtFQUNJLGdCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9ob2xpZGF5L2hvbGlkYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9weyBcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTAlO1xyXG5cdGxlZnQ6IDQwJTtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHJcbmhlaWdodDogMjAlO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3gtc2hhZG93OiAwIDAgMjBweCAtMTBweCBibGFjaztcclxuXHJcbn1cclxuLnJlcG9ydHtcclxuXHRjb2xvcjogIzAxNzdiYztcclxuXHRmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLnNlYXJjaHtcclxuXHRtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLmFjdGlvbkljb25ze1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggM3B4IC0xcHggYmxhY2s7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwUFg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG59XHJcbi5iZ0xvZ297XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9CZy5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gXHJcbn0gXHJcbi5jb3ZlcntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG4jY2xvc2V7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuI2Nsb3NlOmhvdmVyLFxyXG4jY2xvc2U6Zm9jdXN7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRhYkhlYWR7XHJcbmJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHQudGl0bGVOYW1le1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRtYXJnaW4tdG9wOiA2M3B4O1xyXG59XHJcblx0LmZpZWxke1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0Y29sb3I6IzAxNzdiYztcclxufVxyXG4ubW9kYWwtaGVhZGVye1xyXG5cdGJvcmRlci1ib3R0b206bm9uZTtcclxufVx0XHJcbi5wYWdlLWJhcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHQvLyAuY2xvc2VfYnRue1xyXG4gICBcdC8vIFx0ZmxvYXQ6IHJpZ2h0O1xyXG4gICBcdC8vIFx0Ym9yZGVyOiBub25lO1xyXG4gICBcdC8vIFx0b3V0bGluZTogbm9uZTtcclxuICAgXHQvLyBcdGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgIFx0Ly8gXHRjb2xvcjogI2NjYztcclxuICAgXHQvLyB9XHJcbiAgIFx0Ly8gLmlucHV0ZmllbGRzIC5jb2wtbWQtNiBpbnB1dHtcclxuICAgXHQvLyBcdGJvcmRlcjowLjVweCBzb2xpZCAjY2NjO1xyXG5cclxuICAgXHQvLyB9XHJcbiAgIFx0Ly8gLm1vZGFse1xyXG4gICBcdC8vIFx0dG9wOjEwcHg7XHJcbiAgIFx0Ly8gXHRib3R0b206YXV0bzsgICBcdFx0XHJcblx0XHQgLy8gICAgXHR9XHJcblxyXG5cclxuLy8gXHRcdCAuYmdMb2dve1xyXG4vLyBcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL0JnLmpwZycpO1xyXG4vLyBcdFx0XHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4vLyBcdFx0XHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbi8vIFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHQgXHJcbi8vIFx0fSBcclxuLy8gXHRcdCAuc2NjZXNzQnRue1xyXG4vLyBcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuLy8gXHRcdCB9XHJcblx0XHQgXHJcbi8vIFx0XHQgLmN1c3RvbS1zZWxlY3R7XHJcbi8vIFx0XHRcdCB3aWR0aDogMjAwcHg7XHJcbi8vIFx0XHRcdCBoZWlnaHQ6IDM0cHg7XHJcbi8vIFx0XHQgfVxyXG4vLyBcdCAgIC5wb3B7IFxyXG4vLyBcdFx0cGFkZGluZzogMTBweDtcclxuLy8gXHRcdGRpc3BsYXk6IG5vbmU7XHJcbi8vIFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4vLyBcdFx0dG9wOiAxMCU7XHJcbi8vIFx0XHRsZWZ0OiA0MCU7XHJcbi8vIFx0XHR6LWluZGV4OiAxMDAwO1xyXG4vLyBcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gXHRcdGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xMHB4IGJsYWNrO1xyXG4gIFxyXG4vLyBcdCAgfVxyXG4vLyBcdCAgLnBvcCBpbnB1dCAuaDN7XHJcbi8vIFx0XHRwYWRkaW5nOiAwcHg7XHJcbi8vIFx0XHRmb250LXNpemU6IDI4cHg7XHJcbi8vIFx0XHRsZXR0ZXItc3BhY2luZzogLTFweDtcclxuLy8gXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4vLyBcdFx0Y29sb3I6ICM2NjY7XHJcbi8vIFx0XHRtYXJnaW46IDBweCAwcHggMTVweCAwcHg7XHJcbi8vIFx0XHRmb250LXdlaWdodDogMzAwO1xyXG4vLyBcdFx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWZcclxuLy8gXHQgIH1cclxuLy8gXHQgIC5jb3ZlcntcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdFx0aGVpZ2h0OiAxMTYlO1xyXG4vLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4vLyBcdFx0ZGlzcGxheTogbm9uZTtcclxuLy8gXHRcdHRvcDogMDtcclxuLy8gXHRcdGxlZnQ6IDA7XHJcbi8vIFx0XHR6LWluZGV4OiA5OTk7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbi8vIFx0ICB9XHJcbi8vIFx0ICAjY2xvc2V7XHJcbi8vIFx0XHRmbG9hdDogcmlnaHQ7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4vLyBcdFx0cGFkZGluZzogNXB4O1xyXG4vLyBcdFx0b3V0bGluZTogbm9uZTtcclxuLy8gXHRcdGJvcmRlcjogbm9uZTtcclxuLy8gXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gXHRcdHRvcDogMDtcclxuLy8gXHRcdHJpZ2h0OiAwO1xyXG4vLyBcdCAgfVxyXG4vLyBcdCAgI2Nsb3NlOmhvdmVyLFxyXG4vLyBcdCAgI2Nsb3NlOmZvY3Vze1xyXG4vLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4vLyBcdFx0cGFkZGluZzogNXB4O1xyXG4vLyBcdFx0Y29sb3I6IHdoaXRlO1xyXG4vLyBcdCAgfVxyXG4vLyBcdCAgLnJlbW92ZSB7XHJcbi8vIFx0XHR3aWR0aDogMzBweDtcclxuLy8gXHRcdGhlaWdodDogMzBweDtcclxuLy8gXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuLy8gXHRcdGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuLy8gXHRcdGNvbG9yOiB3aGl0ZTtcclxuLy8gXHRcdGJvcmRlcjogbm9uZTtcclxuLy8gXHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vIFx0fVxyXG4vLyBcdGgze1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuLy8gICAgIGNvbG9yOiAjZjM4YzA2O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuLy8gLmNhcHRpb257XHJcbi8vICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4vLyB9IiwiLnBvcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogNDAlO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDIwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTEwcHggYmxhY2s7XG59XG5cbi5yZXBvcnQge1xuICBjb2xvcjogIzAxNzdiYztcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uYWN0aW9uSWNvbnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggLTFweCBibGFjaztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDIwUFg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5iZ0xvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9CZy5qcGdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuI2Nsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jY2xvc2U6aG92ZXIsXG4jY2xvc2U6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiSGVhZCB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi50aXRsZU5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNjNweDtcbn1cblxuLmZpZWxkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAxNzdiYztcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/holiday/holiday.component.ts":
/*!**********************************************!*\
  !*** ./src/app/holiday/holiday.component.ts ***!
  \**********************************************/
/*! exports provided: HolidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayComponent", function() { return HolidayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HolidayComponent = /** @class */ (function () {
    function HolidayComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.addholidaydata = {
            holidaytype: '',
            reason: '',
            date: '',
            token: localStorage.getItem('token')
        };
        this.Type = '';
        this.day = '';
        this.leavedata = {
            type: '',
            fromDate: '',
            toDate: '',
            reason: '',
            holidayType: '',
            fullid: localStorage.getItem('fullid')
        };
    }
    HolidayComponent.prototype.ngOnInit = function () {
    };
    // 
    HolidayComponent.prototype.holidaytype = function () {
        var _this = this;
        var holidaytype1 = new FormData();
        console.log(this.leavedata.holidayType + "type");
        holidaytype1.append('holidayType', this.leavedata.holidayType);
        this._auth.holidaytype(holidaytype1)
            .subscribe(function (res) {
            console.log(res);
            _this.myArray = res;
            // console.log(this.myArray[0].reason)
            // this.reason=res[0].reason
            // this.Type=res[0].holidaytype
            // this.date=res[0].date
            // this.day=res[0].dayofweek
            // this.file1=res[0].file
            // console.log(res[0].file+"photo")
        });
    };
    HolidayComponent.prototype.addholiday = function () {
        console.log(this.addholidaydata);
        this._auth.addholiday(this.addholidaydata)
            .subscribe(function (res) {
            console.log(res + "res is ");
            //   if(localStorage.getItem('token')=="undefined")
            //   {
            //     this._router.navigate(['/signin'])
            //   }
            //   else{
            //     //console.log('routed')
            //   this._router.navigate(['/addnotice'])
            //   }
            // },
            // err => {
            //   if( err instanceof HttpErrorResponse ) {
            //     if (err.status === 401) {
            //       this._router.navigate(['/viewnotice'])
            //     }
            //   }
        });
    };
    HolidayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-holiday',
            template: __webpack_require__(/*! raw-loader!./holiday.component.html */ "./node_modules/raw-loader/index.js!./src/app/holiday/holiday.component.html"),
            styles: [__webpack_require__(/*! ./holiday.component.scss */ "./src/app/holiday/holiday.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HolidayComponent);
    return HolidayComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titlename {\n  margin-top: 65px;\n  color: black;\n}\n\n.container {\n  margin-top: 60px;\n}\n\n.fas {\n  color: white;\n}\n\n.act {\n  color: white;\n  font-size: 10px;\n  background-color: #63dae8;\n}\n\n.act1 {\n  color: white;\n  font-size: 10px;\n  background-color: #d83636;\n}\n\n.act2 {\n  width: 52px;\n  height: 54px;\n  background-color: #07c540;\n  border: none;\n}\n\n.act3 {\n  width: 52px;\n  height: 54px;\n  background-color: #e90f0f;\n  border: none;\n}\n\n.act4 {\n  width: 52px;\n  height: 54px;\n  background-color: #4773f8;\n  border: none;\n}\n\n.act6 {\n  margin-top: -3px;\n  font-size: 12px;\n}\n\n.card {\n  height: 90px;\n}\n\n.act7 {\n  width: 52px;\n  height: 54px;\n  background-color: #D4AF37;\n  border: none;\n}\n\n.titlename {\n  margin-top: 10px;\n  margin-left: 15px;\n  font-weight: 600;\n  color: #38383f;\n}\n\n.progress {\n  margin-left: 15px;\n}\n\n.wegiht {\n  margin-top: -12px;\n  font-weight: 500;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvRDpcXGZpbmFsIGFkbWluIGRhc2hib2FyZFxcbmV3X0FkbWluX3BhbmVsL3NyY1xcYXBwXFxob21lcGFnZVxcaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFBc0IsZUFBQTtBQ08xQjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksaUJBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsaUJBQUE7QUNheEMiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZW5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbn1cclxuLmZhc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYWN0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzZGFlODtcclxufVxyXG4uYWN0MXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNiwgNTQsIDU0KTtcclxufVxyXG4uYWN0MntcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gIFxyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDE5NywgNjQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hY3Qze1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxNSwgMTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hY3Q0e1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3MSwgMTE1LCAyNDgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hY3Q2e1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDsgICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FyZHtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG4uYWN0N3tcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gIFxyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDRBRjM3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi50aXRsZW5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA2Myk7XHJcbn1cclxuLnByb2dyZXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLndlZ2lodHtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4OyBmb250LXdlaWdodDo1MDA7IGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxufSIsIi50aXRsZW5hbWUge1xuICBtYXJnaW4tdG9wOiA2NXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uZmFzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWN0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2RhZTg7XG59XG5cbi5hY3QxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODM2MzY7XG59XG5cbi5hY3QyIHtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3YzU0MDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYWN0MyB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTBmMGY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmFjdDQge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3M2Y4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hY3Q2IHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmFjdDcge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRBRjM3O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50aXRsZW5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzODM4M2Y7XG59XG5cbi5wcm9ncmVzcyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ud2VnaWh0IHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.css":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = /** @class */ (function () {
    function IconsComponent(httpClient) {
        this.httpClient = httpClient;
    }
    IconsComponent.prototype.ngOnInit = function () {
        this.httpClient.get("https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/")
            .subscribe(function (data) {
            console.log(data);
        });
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/index.js!./src/app/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.css */ "./src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/iprocurement/iprocurement.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/iprocurement/iprocurement.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 0 15px -5px black;\n}\n\n.btn:hover {\n  background: green;\n  color: white;\n}\n\nthead {\n  background: #dff3ff;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.Homebar i, .Homebar a {\n  color: #0177bc;\n}\n\n.actionIcons {\n  background: white;\n  border-radius: 2px;\n  border: 1px solid green;\n  color: green;\n  padding: 5px;\n  width: 100px;\n}\n\n.actionIcons:hover {\n  background: green;\n  color: white;\n}\n\n.search {\n  margin: 5px 0px;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXByb2N1cmVtZW50L0Q6XFxmaW5hbCBhZG1pbiBkYXNoYm9hcmRcXG5ld19BZG1pbl9wYW5lbC9zcmNcXGFwcFxcaXByb2N1cmVtZW50XFxpcHJvY3VyZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lwcm9jdXJlbWVudC9pcHJvY3VyZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBRERBO0VBQ0ksaUJBQUE7RUFDRCxrQkFBQTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDRCxZQUFBO0FDSUg7O0FEREE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvaXByb2N1cmVtZW50L2lwcm9jdXJlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggLTVweCBibGFjaztcclxufVxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxudGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZmM2ZmO1xyXG4gICAgXHJcbn1cclxuLnRpdGxlTmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNjNweDtcclxufVxyXG4uSG9tZWJhciBpLC5Ib21lYmFyIGF7XHJcbiAgICBjb2xvcjojMDE3N2JjO1xyXG59XHJcblxyXG4uYWN0aW9uSWNvbnN7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgYm9yZGVyLXJhZGl1czogMnB4OyAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgd2lkdGg6MTAwcHg7XHJcbiAgIFxyXG59XHJcbi5hY3Rpb25JY29uczpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLnJlcG9ydHtcclxuICAgIGNvbG9yOiAjMDE3N2JjO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5wYWdlLWJhcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLy8gLmJnTG9nb3tcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvQmcuanBnJyk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgXHJcbi8vIH1cclxuLy8gLnJvdyAuY29se1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXNlYXJjaF17XHJcbi8vICAgICBoZWlnaHQ6MXJlbTtcclxuLy8gfVxyXG4vLyAuZmEtc2VhcmNoOmJlZm9yZXtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gIC5mYXtcclxuLy8gICAgICAgICAgbGluZS1oZWlnaHQ6MHB4O1xyXG4vLyAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuLy8gICB9XHJcbi8vIC5pbnB1dC1maWVsZCAucHJlZml4e1xyXG4vLyAgICAgICAgICB0b3A6MHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gIC5wYWdlLWNvbnRlbnQtd3JhcHBlciAucGFnZS1jb250ZW50e1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0ciB0aHtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuLy8gICAgICAgICB9XHJcbiAgICAgICBcclxuLy8gICAgICAgIGlucHV0W3R5cGU9c2VhcmNoXXtcclxuLy8gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbi8vICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgICAgIFxyXG5cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaDN7XHJcbi8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjZjM4YzA2O1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmNhcHRpb257XHJcbi8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgfVxyXG4iLCIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IC01cHggYmxhY2s7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNkZmYzZmY7XG59XG5cbi50aXRsZU5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNjNweDtcbn1cblxuLkhvbWViYXIgaSwgLkhvbWViYXIgYSB7XG4gIGNvbG9yOiAjMDE3N2JjO1xufVxuXG4uYWN0aW9uSWNvbnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgY29sb3I6IGdyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmFjdGlvbkljb25zOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnJlcG9ydCB7XG4gIGNvbG9yOiAjMDE3N2JjO1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/iprocurement/iprocurement.component.ts":
/*!********************************************************!*\
  !*** ./src/app/iprocurement/iprocurement.component.ts ***!
  \********************************************************/
/*! exports provided: IprocurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IprocurementComponent", function() { return IprocurementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IprocurementComponent = /** @class */ (function () {
    function IprocurementComponent(_auth, _router, _httpclient) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        this.item = '';
        this.description = '';
        this.amount = '';
        this.tid = '';
        this.Ename = '';
        this.fullid = '';
        this.item1 = '';
        this.description1 = '';
        this.amount1 = '';
        this.tid1 = '';
        this.Ename1 = '';
        this.fullid1 = '';
        this.item2 = '';
        this.description2 = '';
        this.amount2 = '';
        this.tid2 = '';
        this.Ename2 = '';
        this.fullid2 = '';
        this.item3 = '';
        this.description3 = '';
        this.amount3 = '';
        this.tid3 = '';
        this.Ename3 = '';
        this.fullid3 = '';
        this.empData = {
            tid: '',
            status: '',
        };
    }
    IprocurementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpclient.get('http://localhost:3000/IProcurement/getDataAdmin')
            .subscribe(function (res) {
            console.log("heklo");
            console.log(res);
            _this.myArray = res;
            _this.item = _this.myArray[0].item;
            _this.fullid = _this.myArray[0].fullid;
            console.log(_this.item);
            _this.item = res[0].item;
            _this.description = res[0].description;
            _this.amount = res[0].amount;
            _this.Ename = res[0].employee;
            _this.fullid = res[0].fullid;
            _this.tid = res[0].tid;
            _this.item1 = res[1].item;
            _this.description1 = res[1].description;
            _this.amount1 = res[1].amount;
            _this.Ename1 = res[1].employee;
            _this.fullid1 = res[1].fullid;
            _this.tid1 = res[1].tid;
            _this.item2 = res[2].item;
            _this.description2 = res[2].description;
            _this.amount2 = res[2].amount;
            _this.Ename2 = res[2].employee;
            _this.fullid2 = res[2].fullid;
            _this.tid2 = res[2].tid;
            _this.item3 = res[3].item;
            _this.description3 = res[3].description;
            _this.amount3 = res[3].amount;
            _this.Ename3 = res[3].employee;
            _this.fullid3 = res[3].fullid;
            _this.tid3 = res[3].tid;
            //  console.log(this.reqtype)
            //   console.log("datat"+this.fullid);
        });
    };
    // searchid(){
    //   let  sendid = new FormData();
    //   //senddata.fullid= this.fullid
    //   sendid.append('tid',this.empData.tid);
    //   //sendid.append('fullid',this.tid);
    //   //console.log(sendid+"senddata")
    //   this._auth.searchid(sendid)
    //   .subscribe((res)=>{
    //     console.log("iprocurement")
    //     console.log(res+"res is")
    //     //console.log(this.empData)
    //     }
    //   ) 
    // }
    IprocurementComponent.prototype.searchname = function () {
        var _this = this;
        console.log('inside of function');
        //console.log(this.viewemployee1)
        var viewemployee = new FormData();
        ///const file: File = this.filesToUpload[0];
        viewemployee.append('tid', this.empData.tid);
        this._auth.viewemployee1(viewemployee)
            .subscribe(function (res) {
            console.log("sampath");
            console.log(res);
            // this.email=res[0].email
            // this.name=res[0].name
            // this.id=res[0].fullid
            // this.DOJ=res[0].DOJ
            // this.DOB=res[0].DOB
            // this.gender=res[0].gender
            _this.photo = res[0].photo;
            console.log(_this.photo);
        });
    };
    IprocurementComponent.prototype.sendstatus = function () {
        var _this = this;
        var id = this.tid;
        console.log(this.tid + "id111 is");
        console.log(this.fullid + "fullid is");
        //console.log("datat....2"+this.fullid);
        var senddata1 = new FormData();
        //senddata.fullid= this.fullid
        senddata1.append('status', this.empData.status);
        senddata1.append('tid', this.tid);
        senddata1.append('fullid', this.fullid);
        //console.log(senddata+"senddata")
        this._auth.sendstatusipro(senddata1)
            .subscribe(function (res) {
            console.log(res);
            console.log(_this.empData);
        });
    };
    IprocurementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iprocurement',
            template: __webpack_require__(/*! raw-loader!./iprocurement.component.html */ "./node_modules/raw-loader/index.js!./src/app/iprocurement/iprocurement.component.html"),
            styles: [__webpack_require__(/*! ./iprocurement.component.scss */ "./src/app/iprocurement/iprocurement.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], IprocurementComponent);
    return IprocurementComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _viewdetails_viewdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../viewdetails/viewdetails.component */ "./src/app/viewdetails/viewdetails.component.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _holiday_holiday_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../holiday/holiday.component */ "./src/app/holiday/holiday.component.ts");
/* harmony import */ var _leaverequest_leaverequest_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../leaverequest/leaverequest.component */ "./src/app/leaverequest/leaverequest.component.ts");
/* harmony import */ var _uploadpayslips_uploadpayslips_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../uploadpayslips/uploadpayslips.component */ "./src/app/uploadpayslips/uploadpayslips.component.ts");
/* harmony import */ var _noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../noticeboard/noticeboard.component */ "./src/app/noticeboard/noticeboard.component.ts");
/* harmony import */ var _iprocurement_iprocurement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../iprocurement/iprocurement.component */ "./src/app/iprocurement/iprocurement.component.ts");
/* harmony import */ var _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../attendence/attendence.component */ "./src/app/attendence/attendence.component.ts");
/* harmony import */ var _addnotice_addnotice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../addnotice/addnotice.component */ "./src/app/addnotice/addnotice.component.ts");
/* harmony import */ var _viewnotice_viewnotice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../viewnotice/viewnotice.component */ "./src/app/viewnotice/viewnotice.component.ts");
/* harmony import */ var _addiprocurement_addiprocurement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../addiprocurement/addiprocurement.component */ "./src/app/addiprocurement/addiprocurement.component.ts");
/* harmony import */ var _markattendance_markattendance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../markattendance/markattendance.component */ "./src/app/markattendance/markattendance.component.ts");
/* harmony import */ var _viewattendance_viewattendance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../viewattendance/viewattendance.component */ "./src/app/viewattendance/viewattendance.component.ts");
/* harmony import */ var _addholiday_addholiday_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../addholiday/addholiday.component */ "./src/app/addholiday/addholiday.component.ts");
/* harmony import */ var _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../fileupload/fileupload.component */ "./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var _viewemployeelist_viewemployeelist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../viewemployeelist/viewemployeelist.component */ "./src/app/viewemployeelist/viewemployeelist.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





;




















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
            ],
            declarations: [
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"],
                _viewdetails_viewdetails_component__WEBPACK_IMPORTED_MODULE_6__["ViewdetailsComponent"],
                _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__["AddEmployeeComponent"],
                _holiday_holiday_component__WEBPACK_IMPORTED_MODULE_8__["HolidayComponent"],
                _leaverequest_leaverequest_component__WEBPACK_IMPORTED_MODULE_9__["LeaverequestComponent"],
                _uploadpayslips_uploadpayslips_component__WEBPACK_IMPORTED_MODULE_10__["UploadpayslipsComponent"],
                _noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_11__["NoticeboardComponent"],
                _iprocurement_iprocurement_component__WEBPACK_IMPORTED_MODULE_12__["IprocurementComponent"],
                _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_13__["AttendenceComponent"],
                _addnotice_addnotice_component__WEBPACK_IMPORTED_MODULE_14__["AddnoticeComponent"],
                _viewnotice_viewnotice_component__WEBPACK_IMPORTED_MODULE_15__["ViewnoticeComponent"],
                _addiprocurement_addiprocurement_component__WEBPACK_IMPORTED_MODULE_16__["AddiprocurementComponent"],
                _markattendance_markattendance_component__WEBPACK_IMPORTED_MODULE_17__["MarkattendanceComponent"],
                _viewattendance_viewattendance_component__WEBPACK_IMPORTED_MODULE_18__["ViewattendanceComponent"],
                _addholiday_addholiday_component__WEBPACK_IMPORTED_MODULE_19__["AddholidayComponent"],
                _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_20__["FileuploadComponent"],
                _viewemployeelist_viewemployeelist_component__WEBPACK_IMPORTED_MODULE_21__["ViewemployeelistComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_22__["DetailsComponent"],
                app_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_24__["HomepageComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _viewdetails_viewdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../viewdetails/viewdetails.component */ "./src/app/viewdetails/viewdetails.component.ts");
/* harmony import */ var app_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var app_holiday_holiday_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/holiday/holiday.component */ "./src/app/holiday/holiday.component.ts");
/* harmony import */ var app_leaverequest_leaverequest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/leaverequest/leaverequest.component */ "./src/app/leaverequest/leaverequest.component.ts");
/* harmony import */ var app_uploadpayslips_uploadpayslips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/uploadpayslips/uploadpayslips.component */ "./src/app/uploadpayslips/uploadpayslips.component.ts");
/* harmony import */ var app_noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/noticeboard/noticeboard.component */ "./src/app/noticeboard/noticeboard.component.ts");
/* harmony import */ var app_iprocurement_iprocurement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/iprocurement/iprocurement.component */ "./src/app/iprocurement/iprocurement.component.ts");
/* harmony import */ var app_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/attendence/attendence.component */ "./src/app/attendence/attendence.component.ts");
/* harmony import */ var app_addnotice_addnotice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/addnotice/addnotice.component */ "./src/app/addnotice/addnotice.component.ts");
/* harmony import */ var app_viewnotice_viewnotice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/viewnotice/viewnotice.component */ "./src/app/viewnotice/viewnotice.component.ts");
/* harmony import */ var app_addiprocurement_addiprocurement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/addiprocurement/addiprocurement.component */ "./src/app/addiprocurement/addiprocurement.component.ts");
/* harmony import */ var app_markattendance_markattendance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/markattendance/markattendance.component */ "./src/app/markattendance/markattendance.component.ts");
/* harmony import */ var app_viewattendance_viewattendance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/viewattendance/viewattendance.component */ "./src/app/viewattendance/viewattendance.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var app_addholiday_addholiday_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/addholiday/addholiday.component */ "./src/app/addholiday/addholiday.component.ts");
/* harmony import */ var app_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/fileupload/fileupload.component */ "./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var app_viewemployeelist_viewemployeelist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/viewemployeelist/viewemployeelist.component */ "./src/app/viewemployeelist/viewemployeelist.component.ts");
/* harmony import */ var app_details_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var app_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");




















var AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_0__["IconsComponent"] },
    { path: 'viewdetails', component: _viewdetails_viewdetails_component__WEBPACK_IMPORTED_MODULE_1__["ViewdetailsComponent"] },
    { path: 'AddEmployee', component: app_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__["AddEmployeeComponent"] },
    { path: 'holiday', component: app_holiday_holiday_component__WEBPACK_IMPORTED_MODULE_3__["HolidayComponent"] },
    { path: 'leaverequest', component: app_leaverequest_leaverequest_component__WEBPACK_IMPORTED_MODULE_4__["LeaverequestComponent"] },
    { path: 'uploadpayslips', component: app_uploadpayslips_uploadpayslips_component__WEBPACK_IMPORTED_MODULE_5__["UploadpayslipsComponent"] },
    { path: 'noticeboard', component: app_noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_6__["NoticeboardComponent"] },
    { path: 'iprocurement', component: app_iprocurement_iprocurement_component__WEBPACK_IMPORTED_MODULE_7__["IprocurementComponent"] },
    { path: 'attendence', component: app_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_8__["AttendenceComponent"] },
    { path: 'addnotice', component: app_addnotice_addnotice_component__WEBPACK_IMPORTED_MODULE_9__["AddnoticeComponent"], canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'viewnotice', component: app_viewnotice_viewnotice_component__WEBPACK_IMPORTED_MODULE_10__["ViewnoticeComponent"] },
    { path: 'addiprocurement', component: app_addiprocurement_addiprocurement_component__WEBPACK_IMPORTED_MODULE_11__["AddiprocurementComponent"] },
    { path: 'markattendance', component: app_markattendance_markattendance_component__WEBPACK_IMPORTED_MODULE_12__["MarkattendanceComponent"] },
    { path: 'viewattendance', component: app_viewattendance_viewattendance_component__WEBPACK_IMPORTED_MODULE_13__["ViewattendanceComponent"] },
    { path: 'addholiday', component: app_addholiday_addholiday_component__WEBPACK_IMPORTED_MODULE_15__["AddholidayComponent"] },
    { path: 'fileupload', component: app_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_16__["FileuploadComponent"] },
    { path: 'viewemployeelist', component: app_viewemployeelist_viewemployeelist_component__WEBPACK_IMPORTED_MODULE_17__["ViewemployeelistComponent"] },
    { path: 'details', component: app_details_details_component__WEBPACK_IMPORTED_MODULE_18__["DetailsComponent"] },
    { path: 'homepage', component: app_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"] },
];


/***/ }),

/***/ "./src/app/leaverequest/leaverequest.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/leaverequest/leaverequest.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 0 15px -5px black;\n}\n\n.btn:hover {\n  background: green;\n  color: white;\n}\n\nthead {\n  background: #ccc;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.Homebar i, .Homebar a {\n  color: #0177bc;\n}\n\n.btnShow {\n  background: #e4e2e2;\n}\n\n.btnShow:hover {\n  background: #e4e2e2;\n}\n\ntable {\n  font-style: normal;\n}\n\n.actionIcons button {\n  background: white;\n  box-shadow: 1px 1px 3px -1px black;\n  background: none;\n  outline: none;\n  border: none;\n  margin-right: 20PX;\n  padding: 5px;\n  width: 30px;\n}\n\n.search {\n  margin: 5px 0px;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmVyZXF1ZXN0L0Q6XFxmaW5hbCBhZG1pbiBkYXNoYm9hcmRcXG5ld19BZG1pbl9wYW5lbC9zcmNcXGFwcFxcbGVhdmVyZXF1ZXN0XFxsZWF2ZXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlYXZlcmVxdWVzdC9sZWF2ZXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7QUNNSjs7QURIQTtFQUNJLG1CQUFBO0FDTUo7O0FESEE7RUFDUSxrQkFBQTtBQ01SOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlcmVxdWVzdC9sZWF2ZXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IC01cHggYmxhY2s7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnRoZWFke1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG4udGl0bGVOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2M3B4O1xyXG59XHJcbi5Ib21lYmFyIGksLkhvbWViYXIgYXtcclxuICAgIGNvbG9yOiMwMTc3YmM7XHJcbn1cclxuLmJ0blNob3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xyXG5cclxufVxyXG4uYnRuU2hvdzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNlNGUyZTI7XHJcblxyXG59XHJcbnRhYmxleyAgICAgXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgfVxyXG5cclxuLmFjdGlvbkljb25zIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggLTFweCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMFBYO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ucmVwb3J0e1xyXG4gICAgY29sb3I6ICMwMTc3YmM7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLnBhZ2UtYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4vLyAudGhlYWQgdHJ7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG4vLyBidXR0b24ge1xyXG4vLyBwYWRkaW5nOiA1cHg7XHJcbi8vIH1cclxuLy8gLnNlbGVjdEVtcHtcclxuLy8gICAgIHdpZHRoOiA3MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyOXB4O1xyXG4vLyB9XHJcbi8vIGgze1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuLy8gICAgIGNvbG9yOiAjZjM4YzA2O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuLy8gLmNhcHRpb257XHJcbi8vICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4vLyB9XHJcbi8vIC5iZ0xvZ297XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL0JnLmpwZycpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIFxyXG4vLyB9IiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAtNXB4IGJsYWNrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4udGl0bGVOYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDYzcHg7XG59XG5cbi5Ib21lYmFyIGksIC5Ib21lYmFyIGEge1xuICBjb2xvcjogIzAxNzdiYztcbn1cblxuLmJ0blNob3cge1xuICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xufVxuXG4uYnRuU2hvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNGUyZTI7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYWN0aW9uSWNvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IC0xcHggYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMFBYO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4ucmVwb3J0IHtcbiAgY29sb3I6ICMwMTc3YmM7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLnBhZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/leaverequest/leaverequest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/leaverequest/leaverequest.component.ts ***!
  \********************************************************/
/*! exports provided: LeaverequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaverequestComponent", function() { return LeaverequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaverequestComponent = /** @class */ (function () {
    function LeaverequestComponent(_auth, _router, _httpclient) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        this.ename = '';
        this.ename1 = '';
        this.ename2 = '';
        this.empData = {
            status: '',
            name: '',
        };
        this.Ename = '';
        this.reason = '';
        //fullid:any
        this.fromdays = '';
        this.todays = '';
        this.reqtype = '';
    }
    LeaverequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("gud");
        this._httpclient.get('http://localhost:3000/LeaveRequest/getAdmins')
            .subscribe(function (res) {
            console.log(res);
            _this.myArray = res;
            _this.ename = _this.myArray[0].name;
            console.log(_this.myArray[0].name + "name is");
            _this.ename = res[0].name;
            _this.ename1 = res[1].name;
            console.log(_this.ename);
            //this.name2=res[2].name
            console.log("hey");
        });
        // this._httpclient.get('http://localhost:3000/LeaveRequest/getLeaveData')
        // .subscribe(
        //   (res)=>{
        //     console.log("heklo")
        //     console.log(res)
        //     this.Ename=res["name"]
        //     this.reason=res["reason"]
        //     this.fullid=res["fullid"]
        //     this.fromdays=res["fromdays"]
        //     this.todays=res["todays"]
        //     this.reqtype=res["reqtype"]
        //   //  console.log(this.reqtype)
        //     console.log("datat"+this.fullid);
        //   }
        // )
    };
    LeaverequestComponent.prototype.leaveapplication = function () {
        var _this = this;
        var leavedata = new FormData();
        leavedata.append('name', this.empData.name);
        console.log(this.empData);
        this._auth.leaveappliaction(leavedata)
            .subscribe(function (res) {
            console.log(res);
            //this.myArray=res
            console.log(res["reason"]);
            _this.reason = res["reason"];
            console.log(_this.reason);
            _this.Ename = res["name"];
            _this.reason = res["reason"];
            _this.fullid = res["fullid"];
            console.log(_this.fullid + "fullid is");
            _this.fromdays = res["fromdays"];
            _this.todays = res["todays"];
            _this.reqtype = res["reqtype"];
        });
    };
    LeaverequestComponent.prototype.senddata = function () {
        var _this = this;
        var id = this.fullid;
        //console.log(id+"id is")
        //console.log("datat....2"+this.fullid);
        var senddata = new FormData();
        //senddata.fullid= this.fullid
        senddata.append('status', this.empData.status);
        senddata.append('fullid', this.fullid);
        //console.log(senddata+"senddata")
        this._auth.sendstatus(senddata)
            .subscribe(function (res) {
            console.log("senddata");
            console.log(res);
            console.log(_this.empData);
        });
    };
    LeaverequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaverequest',
            template: __webpack_require__(/*! raw-loader!./leaverequest.component.html */ "./node_modules/raw-loader/index.js!./src/app/leaverequest/leaverequest.component.html"),
            styles: [__webpack_require__(/*! ./leaverequest.component.scss */ "./src/app/leaverequest/leaverequest.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LeaverequestComponent);
    return LeaverequestComponent;
}());



/***/ }),

/***/ "./src/app/markattendance/markattendance.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/markattendance/markattendance.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmthdHRlbmRhbmNlL21hcmthdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/markattendance/markattendance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/markattendance/markattendance.component.ts ***!
  \************************************************************/
/*! exports provided: MarkattendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkattendanceComponent", function() { return MarkattendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarkattendanceComponent = /** @class */ (function () {
    function MarkattendanceComponent() {
    }
    MarkattendanceComponent.prototype.ngOnInit = function () {
    };
    MarkattendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-markattendance',
            template: __webpack_require__(/*! raw-loader!./markattendance.component.html */ "./node_modules/raw-loader/index.js!./src/app/markattendance/markattendance.component.html"),
            styles: [__webpack_require__(/*! ./markattendance.component.scss */ "./src/app/markattendance/markattendance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarkattendanceComponent);
    return MarkattendanceComponent;
}());



/***/ }),

/***/ "./src/app/noticeboard/noticeboard.component.scss":
/*!********************************************************!*\
  !*** ./src/app/noticeboard/noticeboard.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 0 20px -5px black;\n}\n\n.btn:hover {\n  background: green;\n  color: white;\n}\n\n.page-bar {\n  background: none;\n}\n\nthead {\n  background: #dff3ff;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.Homebar i, .Homebar a {\n  color: #0177bc;\n}\n\n.addBtn {\n  background: #0177bc;\n}\n\n.btnShow {\n  background: #e4e2e2;\n}\n\n.btnShow:hover {\n  background: #e4e2e2;\n}\n\ntable {\n  font-style: normal;\n}\n\n.actionIcons {\n  background: white;\n  box-shadow: 1px 1px 3px -1px black;\n  background: none;\n  outline: none;\n  border: none;\n  margin-right: 20PX;\n  padding: 5px;\n  width: 30px;\n}\n\n.search {\n  margin: 5px 0px;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.modal-header {\n  border-bottom: none;\n}\n\n.Company {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlYm9hcmQvRDpcXGZpbmFsIGFkbWluIGRhc2hib2FyZFxcbmV3X0FkbWluX3BhbmVsL3NyY1xcYXBwXFxub3RpY2Vib2FyZFxcbm90aWNlYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGljZWJvYXJkL25vdGljZWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0FDSUo7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7QUNPSjs7QURMQTtFQUNJLG1CQUFBO0FDUUo7O0FETkE7RUFDUSxrQkFBQTtBQ1NSOztBRFBBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVUo7O0FEUkE7RUFDSSxlQUFBO0FDV0o7O0FEVEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1lKOztBRFZBO0VBQ0ksbUJBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9ub3RpY2Vib2FyZC9ub3RpY2Vib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggLTVweCBibGFjazsgXHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wYWdlLWJhcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxudGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZmM2ZmO1xyXG4gICAgXHJcbn1cclxuLnRpdGxlTmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNjNweDtcclxufVxyXG4uSG9tZWJhciBpLC5Ib21lYmFyIGF7XHJcbiAgICBjb2xvcjojMDE3N2JjO1xyXG59XHJcbi5hZGRCdG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE3N2JjO1xyXG59XHJcbi5idG5TaG93e1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTJlMjtcclxufVxyXG4uYnRuU2hvdzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNlNGUyZTI7XHJcbn1cclxudGFibGV7ICAgICBcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICB9XHJcbi5hY3Rpb25JY29uc3tcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggLTFweCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMFBYO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ucmVwb3J0e1xyXG4gICAgY29sb3I6ICMwMTc3YmM7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm1vZGFsLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLkNvbXBhbnl7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG5cclxuLy8gaDN7XHJcbi8vICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4vLyAgICAgY29sb3I6ICNmMzhjMDY7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG4vLyAuY2FwdGlvbntcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcblxyXG4vLyB9XHJcbi8vIC5iZ0xvZ297XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL0JnLmpwZycpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIFxyXG4vLyB9IiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAtNXB4IGJsYWNrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZGZmM2ZmO1xufVxuXG4udGl0bGVOYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDYzcHg7XG59XG5cbi5Ib21lYmFyIGksIC5Ib21lYmFyIGEge1xuICBjb2xvcjogIzAxNzdiYztcbn1cblxuLmFkZEJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMTc3YmM7XG59XG5cbi5idG5TaG93IHtcbiAgYmFja2dyb3VuZDogI2U0ZTJlMjtcbn1cblxuLmJ0blNob3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xufVxuXG50YWJsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmFjdGlvbkljb25zIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IC0xcHggYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMFBYO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4ucmVwb3J0IHtcbiAgY29sb3I6ICMwMTc3YmM7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5Db21wYW55IHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/noticeboard/noticeboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/noticeboard/noticeboard.component.ts ***!
  \******************************************************/
/*! exports provided: NoticeboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardComponent", function() { return NoticeboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticeboardComponent = /** @class */ (function () {
    function NoticeboardComponent(_auth, _router, _httpclient) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        this.title = '';
        this.description = '';
        this.date = '';
        this.noticedata = {
            title: '',
            description: '',
        };
    }
    NoticeboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpclient.get('http://localhost:3000/NoticeBoard/ViewNotice')
            .subscribe(function (res) {
            console.log(res + "res is");
            console.log(res["title"]);
            console.log(res["description"]);
            _this.title = res["title"];
            _this.description = res["description"];
            _this.date = res["date"];
        });
    };
    NoticeboardComponent.prototype.addnotice = function () {
        var _this = this;
        console.log(this.noticedata);
        this._auth.addnotice(this.noticedata)
            .subscribe(function (res) {
            console.log(res);
            if (localStorage.getItem('token') == "undefined") {
                _this._router.navigate(['/signin']);
            }
            else {
                _this._router.navigate(['/holiday']);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/viewnotice']);
                }
            }
        });
    };
    NoticeboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticeboard',
            template: __webpack_require__(/*! raw-loader!./noticeboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/noticeboard/noticeboard.component.html"),
            styles: [__webpack_require__(/*! ./noticeboard.component.scss */ "./src/app/noticeboard/noticeboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NoticeboardComponent);
    return NoticeboardComponent;
}());



/***/ }),

/***/ "./src/app/uploadpayslips/uploadpayslips.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/uploadpayslips/uploadpayslips.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pop {\n  padding: 10px;\n  display: none;\n  border-radius: 5px;\n  background-color: #fff;\n  position: absolute;\n  top: 10%;\n  left: 40%;\n  width: 25%;\n  height: 20%;\n  z-index: 1000;\n  overflow: hidden;\n  box-shadow: 0 0 20px -10px black;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.search {\n  margin: 5px 0px;\n}\n\n.actionIcons {\n  background: white;\n  box-shadow: 1px 1px 3px -1px black;\n  background: none;\n  outline: none;\n  border: none;\n  margin-right: 20PX;\n  padding: 5px;\n  width: 30px;\n}\n\n.bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.cover {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n#close {\n  float: right;\n  background-color: none;\n  padding: 5px;\n  outline: none;\n  border: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close:hover,\n#close:focus {\n  background-color: red;\n  padding: 5px;\n  color: white;\n}\n\n.tabHead {\n  background: #dff3ff;\n}\n\n.titleName {\n  font-weight: bold;\n  margin-top: 63px;\n}\n\n.field {\n  font-size: 18px;\n  color: #0177bc;\n}\n\n.modal-header {\n  border-bottom: none;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkcGF5c2xpcHMvRDpcXGZpbmFsIGFkbWluIGRhc2hib2FyZFxcbmV3X0FkbWluX3BhbmVsL3NyY1xcYXBwXFx1cGxvYWRwYXlzbGlwc1xcdXBsb2FkcGF5c2xpcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZHBheXNsaXBzL3VwbG9hZHBheXNsaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNJLFVBQUE7RUFFTixXQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUNFLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDR0o7O0FEREU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDSUo7O0FERkU7O0VBRUUscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0UsbUJBQUE7QUNNRjs7QURKSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNPTjs7QURMSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUU47O0FETkU7RUFDRSxtQkFBQTtBQ1NKOztBRFBFO0VBQ0UsZ0JBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHBheXNsaXBzL3VwbG9hZHBheXNsaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHsgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gXHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xMHB4IGJsYWNrO1xyXG5cclxuICB9XHJcbiAgLnJlcG9ydHtcclxuICAgIGNvbG9yOiAjMDE3N2JjO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbiAgLnNlYXJjaHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4gIC5hY3Rpb25JY29uc3tcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggLTFweCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMFBYO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuICAuYmdMb2dve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9CZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICBcclxufSBcclxuICAuY292ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gIH1cclxuICAjY2xvc2V7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAjY2xvc2U6aG92ZXIsXHJcbiAgI2Nsb3NlOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLnRhYkhlYWR7XHJcbiAgYmFja2dyb3VuZDogI2RmZjNmZjtcclxufVxyXG4gICAgLnRpdGxlTmFtZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYzcHg7XHJcbiAgfVxyXG4gICAgLmZpZWxke1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiMwMTc3YmM7XHJcbiAgfVxyXG4gIC5tb2RhbC1oZWFkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgfVxyXG4gIC5wYWdlLWJhcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn0iLCIucG9wIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA0MCU7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMjAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAtMTBweCBibGFjaztcbn1cblxuLnJlcG9ydCB7XG4gIGNvbG9yOiAjMDE3N2JjO1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5hY3Rpb25JY29ucyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAtMXB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjBQWDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmJnTG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL0JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4jY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbiNjbG9zZTpob3ZlcixcbiNjbG9zZTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWJIZWFkIHtcbiAgYmFja2dyb3VuZDogI2RmZjNmZjtcbn1cblxuLnRpdGxlTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA2M3B4O1xufVxuXG4uZmllbGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDE3N2JjO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnBhZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/uploadpayslips/uploadpayslips.component.ts":
/*!************************************************************!*\
  !*** ./src/app/uploadpayslips/uploadpayslips.component.ts ***!
  \************************************************************/
/*! exports provided: UploadpayslipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadpayslipsComponent", function() { return UploadpayslipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_diloge_diloge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/diloge/diloge.component */ "./src/app/diloge/diloge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadpayslipsComponent = /** @class */ (function () {
    function UploadpayslipsComponent(_auth, _router, _httpclient) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        //name:string='';
        this.name1 = '';
        this.name2 = '';
        this.name3 = '';
        this.empData = {
            file: '',
            month: '',
            year: '',
            name: '',
        };
        this.filesToUpload = [];
    }
    UploadpayslipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpclient.get('http://localhost:3000/Payslips/getEmployeeNames')
            .subscribe(function (res) {
            console.log(res);
            _this.myArray = res;
            //this.name = this.myArray[0].name;
            // console.log('res==>', this.name)
            // this.name1=res[1].name
            // this.name2=res[2].name
            // this.name2=res[3].name
            // console.log( this.name)
        });
        // this._httpclient.get('http://localhost:3000/Payslips/getEmployeeNames')
        // .subscribe(
        //   (res)=>{
        // }
        // )
        //   this.Ename=res["name"]
        //   this.reason=res["reason"]
        //   this.fullid=res["fullid"]
        //   this.fromdays=res["fromdays"]
        //   this.todays=res["todays"]
        //   this.reqtype=res["reqtype"]
        // //  console.log(this.reqtype)
        //   console.log("datat"+this.fullid);
        //  $(document).ready(function(){
        //    $(".bt").on('click', function(){
        //      $(".cover").show();
        //      $(".pop").show();
        //    });
        //    $("#close").on('click', function(){
        //      $(".cover").hide();
        //      $(".pop").hide();
        //    });
        //  });
    };
    UploadpayslipsComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // this.fileName = this.filesToUpload[0].name;
    };
    UploadpayslipsComponent.prototype.uploadpayslips = function () {
        var _this = this;
        var senddata1 = new FormData();
        //senddata.fullid= this.fullid
        senddata1.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
        console.log(File + " file");
        senddata1.append('month', this.empData.month);
        senddata1.append('year', this.empData.year);
        senddata1.append('name', this.empData.name);
        console.log(this.empData.month);
        //console.log(senddata+"senddata")
        //console.log(this.senddata1)
        this._auth.uploadpayslips(senddata1)
            .subscribe(function (res) {
            console.log(res);
            _this.myArray = res[0];
            //alert(this.myArray)
            console.log(_this.empData);
        });
    };
    UploadpayslipsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(app_diloge_diloge_component__WEBPACK_IMPORTED_MODULE_4__["DilogeComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UploadpayslipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uploadpayslips',
            template: __webpack_require__(/*! raw-loader!./uploadpayslips.component.html */ "./node_modules/raw-loader/index.js!./src/app/uploadpayslips/uploadpayslips.component.html"),
            styles: [__webpack_require__(/*! ./uploadpayslips.component.scss */ "./src/app/uploadpayslips/uploadpayslips.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UploadpayslipsComponent);
    return UploadpayslipsComponent;
}());



/***/ }),

/***/ "./src/app/viewattendance/viewattendance.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/viewattendance/viewattendance.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdhdHRlbmRhbmNlL3ZpZXdhdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/viewattendance/viewattendance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/viewattendance/viewattendance.component.ts ***!
  \************************************************************/
/*! exports provided: ViewattendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewattendanceComponent", function() { return ViewattendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewattendanceComponent = /** @class */ (function () {
    function ViewattendanceComponent() {
    }
    ViewattendanceComponent.prototype.ngOnInit = function () {
    };
    ViewattendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewattendance',
            template: __webpack_require__(/*! raw-loader!./viewattendance.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewattendance/viewattendance.component.html"),
            styles: [__webpack_require__(/*! ./viewattendance.component.scss */ "./src/app/viewattendance/viewattendance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewattendanceComponent);
    return ViewattendanceComponent;
}());



/***/ }),

/***/ "./src/app/viewdetails/viewdetails.component.scss":
/*!********************************************************!*\
  !*** ./src/app/viewdetails/viewdetails.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sideImg {\n  height: 100px;\n  width: 100px;\n  margin-top: 20px;\n  box-shadow: 0 0 10px -4px;\n  z-index: 1000;\n  margin-left: 70px;\n}\n\n.fas {\n  color: #0177bc;\n}\n\n.report {\n  color: #0177bc;\n  font-size: 23px;\n}\n\n.navbar {\n  margin-top: 50px;\n}\n\n.search:hover {\n  background: green;\n  color: white;\n}\n\nbody {\n  background-color: #f5f5f5;\n}\n\n.imagePreview {\n  width: 400%;\n  height: 180px;\n  background-position: center center;\n  background: url(http://cliquecities.com/assets/no-image-e3699ae23f866f6cbdf8ba2443ee5c4e.jpg);\n  background-color: #fff;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: inline-block;\n  box-shadow: 0px -3px 6px 2px rgba(0, 0, 0, 0.2);\n  position: relative;\n  left: 100px;\n}\n\n.btnpriview {\n  width: 190px;\n  margin: -5px 98px auto;\n  border-radius: 0px;\n  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.2);\n}\n\n.imgUp {\n  margin-bottom: 15px;\n}\n\n.page-bar {\n  background: none;\n}\n\n.addEmpBtn {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2RldGFpbHMvRDpcXGZpbmFsIGFkbWluIGRhc2hib2FyZFxcbmV3X0FkbWluX3BhbmVsL3NyY1xcYXBwXFx2aWV3ZGV0YWlsc1xcdmlld2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdkZXRhaWxzL3ZpZXdkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0lBOztBREZBO0VBRUUseUJBQUE7QUNJRjs7QURGQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDRiw2RkFBQTtFQUNBLHNCQUFBO0VBQ0Usc0JBQUE7RUFDRiw0QkFBQTtFQUNFLHFCQUFBO0VBQ0YsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUVJLFlBQUE7RUFDQSxzQkFBQTtFQUNGLGtCQUFBO0VBQ0EsOENBQUE7QUNLRjs7QURIQTtFQUVFLG1CQUFBO0FDS0Y7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREpBO0VBQ0UsWUFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvdmlld2RldGFpbHMvdmlld2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZUltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTRweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBtYXJnaW4tbGVmdDo3MHB4O1xyXG5cclxufVxyXG4uZmFze1xyXG4gICAgY29sb3I6IzAxNzdiYztcclxufVxyXG4ucmVwb3J0e1xyXG4gICAgY29sb3I6ICMwMTc3YmM7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLm5hdmJhcntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnNlYXJjaDpob3ZlcntcclxuYmFja2dyb3VuZDogZ3JlZW47XHJcbmNvbG9yOndoaXRlO1xyXG59XHJcbmJvZHlcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcclxufVxyXG4uaW1hZ2VQcmV2aWV3IHtcclxuICAgIHdpZHRoOiA0MDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDp1cmwoaHR0cDovL2NsaXF1ZWNpdGllcy5jb20vYXNzZXRzL25vLWltYWdlLWUzNjk5YWUyM2Y4NjZmNmNiZGY4YmEyNDQzZWU1YzRlLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNoYWRvdzowcHggLTNweCA2cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDoxMDBweDtcclxufVxyXG4uYnRucHJpdmlld1xyXG57XHJcbiAgICB3aWR0aDogMTkwcHg7ICAgXHJcbiAgICBtYXJnaW46IC01cHggOThweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6MHB4O1xyXG4gIGJveC1zaGFkb3c6MHB4IDRweCA2cHggMnB4IHJnYmEoMCwwLDAsMC4yKTsgXHJcbn1cclxuLmltZ1VwXHJcbntcclxuICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuLnBhZ2UtYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uYWRkRW1wQnRue1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcbi8vIC5zZWFyY2hfZmllbGQgaW5wdXR7XHJcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG5cclxuXHJcbi8vIH1cclxuLy8gLnZpZXdEYXRhe1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcbi8vIH1cclxuXHJcbi8vIGl7XHJcbi8vICAgICBjb2xvcjogcmdiKDc4LCA0NiwgNDApO1xyXG4vLyB9XHJcbi8vIGg0e1xyXG4vLyAgICAgY29sb3I6I2ZmNDk0OTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjsgXHJcblxyXG4vLyB9XHJcbiIsIi5zaWRlSW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAtNHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLmZhcyB7XG4gIGNvbG9yOiAjMDE3N2JjO1xufVxuXG4ucmVwb3J0IHtcbiAgY29sb3I6ICMwMTc3YmM7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLm5hdmJhciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zZWFyY2g6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmltYWdlUHJldmlldyB7XG4gIHdpZHRoOiA0MDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL2NsaXF1ZWNpdGllcy5jb20vYXNzZXRzL25vLWltYWdlLWUzNjk5YWUyM2Y4NjZmNmNiZGY4YmEyNDQzZWU1YzRlLmpwZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTAwcHg7XG59XG5cbi5idG5wcml2aWV3IHtcbiAgd2lkdGg6IDE5MHB4O1xuICBtYXJnaW46IC01cHggOThweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5pbWdVcCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5hZGRFbXBCdG4ge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/viewdetails/viewdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/viewdetails/viewdetails.component.ts ***!
  \******************************************************/
/*! exports provided: ViewdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdetailsComponent", function() { return ViewdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewdetailsComponent = /** @class */ (function () {
    function ViewdetailsComponent(_auth, _router, _httpclient, http) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        this.http = http;
        this.empData = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            DOJ: '',
            phonenumber: '',
            gender: '',
            DOB: '',
            fullid: '',
            cnf_pswd: '',
            //confirmpassword: '',
            token: localStorage.getItem('token'),
            id: localStorage.getItem('id')
        };
        this.employees = { token: localStorage.getItem('token') };
        this.email = '';
        this.found = false;
        this.image = '';
        this.getdetails = {};
        this.datas = [
            {
                "email": "sampath@gmail.com",
                "password": "$2b$10$QvVZi.MWBP93gqdyGre9y.GocVyvL/JcPQOqFCNI522bIs9Gp1Sv.",
                "created": "2019-08-07 11:53:32.678",
                "id": 1,
                "fullid": "ZYX_2019_08_1",
                "reason": "Reason",
                "reqtype": "sick",
                "requestto": null,
                "status": "Approved",
                "name": "sampath kumar",
                "photo": "http://localhost:3000/images/bga.jpg",
                "DOJ": "2019-08-14",
                "DOB": "2019-08-06",
                "gender": "male",
                "phone": "9966218131",
                "fromdays": "2019-08-14",
                "todays": "2019-08-16"
            }
        ];
        this.filesToUpload = [];
    }
    ViewdetailsComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // this.fileName = this.filesToUpload[0].name;
    };
    ViewdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpclient.get('http://localhost:3000/Payslips/getEmployeeNames')
            .subscribe(function (res) {
            console.log('===>', res);
            _this.myArray = res;
            _this.name = _this.myArray[0].name;
            console.log('res==>', _this.name);
            _this.name = res[1].name;
            // this.name2=res[2].name
            // this.name2=res[3].name
            console.log(_this.name);
        });
    };
    ViewdetailsComponent.prototype.viewemployee = function () {
        var _this = this;
        console.log('inside of function');
        //console.log(this.viewemployee1)
        var viewemployee = new FormData();
        ///const file: File = this.filesToUpload[0];
        viewemployee.append('fullid', this.empData.fullid);
        localStorage.setItem('fulli', this.empData.fullid);
        this._auth.viewemployee(viewemployee)
            .subscribe(function (res) {
            console.log("sampath");
            console.log(res);
            _this.email = res[0].email;
            console.log(_this.email);
            _this.name = res[0].name;
            _this.id = res[0].fullid;
            _this.DOJ = res[0].DOJ;
            _this.DOB = res[0].DOB;
            _this.phone = res[0].phone;
            _this.gender = res[0].gender;
            _this.photo = res[0].photo;
            console.log(res[0].photo);
        });
    };
    ViewdetailsComponent.prototype.addemployee = function () {
        var _this = this;
        console.log("addemployee");
        console.log(this.empData.DOJ + "id is");
        var payload = new FormData();
        var file = this.filesToUpload[0];
        payload.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
        console.log(File + " file");
        payload.append('first_name', this.empData.first_name);
        payload.append('last_name', this.empData.last_name);
        payload.append('email', this.empData.email);
        payload.append('password', this.empData.password);
        payload.append('DOJ', this.empData.DOJ);
        payload.append('phonenumber', this.empData.phonenumber),
            payload.append('gender', this.empData.gender),
            payload.append('DOB', this.empData.DOB),
            payload.append('token', this.empData.token);
        payload.append('id', this.empData.id);
        this._auth.uploadSheet(payload)
            .subscribe(function (res) {
            console.log(res);
            console.log(_this.empData);
            console.log(_this.empData.id);
            if (localStorage.getItem('token') == "undefined") {
                _this._router.navigate(['/signin']);
            }
            else {
                _this._router.navigate(['/homepage']);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/viewnotice']);
                }
            }
        });
    };
    ViewdetailsComponent.prototype.priview = function () {
        $(".imgAdd").click(function () {
            $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
        });
        $(document).on("click", "i.del", function () {
            $(this).parent().remove();
        });
        $(function () {
            $(document).on("change", ".uploadFile", function () {
                var uploadFile = $(this);
                var files = !!this.files ? this.files : [];
                // if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
                if (/^image/.test(files[0].type)) { // only image file
                    var reader = new FileReader(); // instance of the FileReader
                    reader.readAsDataURL(files[0]); // read the local file
                    reader.onloadend = function () {
                        //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                        uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
                    };
                }
            });
        });
    };
    ViewdetailsComponent.prototype.alert = function () {
        alert("Added auccessfully");
    };
    ViewdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewdetails',
            template: __webpack_require__(/*! raw-loader!./viewdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewdetails/viewdetails.component.html"),
            styles: [__webpack_require__(/*! ./viewdetails.component.scss */ "./src/app/viewdetails/viewdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], ViewdetailsComponent);
    return ViewdetailsComponent;
}());

/*   console.log(data);
        console.log(data[0].email);
        

          if(data.length){

       
               this.email=data[0].email;
               this.found=true;

             console.log(this.email+"email is");*/ 


/***/ }),

/***/ "./src/app/viewemployeelist/viewemployeelist.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/viewemployeelist/viewemployeelist.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgLogo {\n  background-image: url(\"/assets/img/Bg.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.page-bar {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2VtcGxveWVlbGlzdC9EOlxcZmluYWwgYWRtaW4gZGFzaGJvYXJkXFxuZXdfQWRtaW5fcGFuZWwvc3JjXFxhcHBcXHZpZXdlbXBsb3llZWxpc3RcXHZpZXdlbXBsb3llZWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdlbXBsb3llZWxpc3Qvdmlld2VtcGxveWVlbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld2VtcGxveWVlbGlzdC92aWV3ZW1wbG95ZWVsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnTG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvQmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgXHJcbn1cclxuLnBhZ2UtYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufSIsIi5iZ0xvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9CZy5qcGdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5wYWdlLWJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/viewemployeelist/viewemployeelist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/viewemployeelist/viewemployeelist.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewemployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewemployeelistComponent", function() { return ViewemployeelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewemployeelistComponent = /** @class */ (function () {
    function ViewemployeelistComponent(_auth, _router, _httpclient) {
        this._auth = _auth;
        this._router = _router;
        this._httpclient = _httpclient;
        this.empData = {
            fullid: ''
        };
        this.viewemployee1 = {
            names: '',
            fullid: ''
        };
        this.name1 = '';
        this.fullid1 = '';
        this.name2 = '';
        this.fullid2 = '';
        this.name3 = '';
        this.fullid3 = '';
        this.name4 = '';
        this.fullid4 = '';
    }
    ViewemployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpclient.get('http://localhost:3000/admin/getUsersList')
            .subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            console.log(res);
            _this.name = res[0].name;
            _this.fullid = res[0].fullid;
            _this.name1 = res[1].name;
            _this.fullid1 = res[1].fullid;
            _this.name2 = res[2].name;
            _this.fullid2 = res[2].fullid;
            _this.name3 = res[3].name;
            _this.fullid3 = res[3].fullid;
            _this.name4 = res[4].name;
            _this.fullid4 = res[5].fullid;
            //   this.image=res[0].photo;
            //  this.found=true;
            //  console.log(this.email+"email is");
            //  console.log(this.image+" image is");
        });
    };
    ViewemployeelistComponent.prototype.viewemployee = function () {
        console.log('inside of function');
        console.log(this.viewemployee1);
        var viewemployee = new FormData();
        ///const file: File = this.filesToUpload[0];
        viewemployee.append('fullid', this.empData.fullid);
        this._auth.viewemployee(viewemployee)
            .subscribe(function (res) {
            console.log("sampath");
            console.log(res);
        });
    };
    ViewemployeelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewemployeelist',
            template: __webpack_require__(/*! raw-loader!./viewemployeelist.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewemployeelist/viewemployeelist.component.html"),
            styles: [__webpack_require__(/*! ./viewemployeelist.component.scss */ "./src/app/viewemployeelist/viewemployeelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ViewemployeelistComponent);
    return ViewemployeelistComponent;
}());



/***/ }),

/***/ "./src/app/viewnotice/viewnotice.component.scss":
/*!******************************************************!*\
  !*** ./src/app/viewnotice/viewnotice.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdub3RpY2Uvdmlld25vdGljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/viewnotice/viewnotice.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewnotice/viewnotice.component.ts ***!
  \****************************************************/
/*! exports provided: ViewnoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewnoticeComponent", function() { return ViewnoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewnoticeComponent = /** @class */ (function () {
    function ViewnoticeComponent() {
    }
    ViewnoticeComponent.prototype.ngOnInit = function () {
        //   $(document).ready( function () {
        //     $('#myTable').DataTable();
        // } );
    };
    ViewnoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewnotice',
            template: __webpack_require__(/*! raw-loader!./viewnotice.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewnotice/viewnotice.component.html"),
            styles: [__webpack_require__(/*! ./viewnotice.component.scss */ "./src/app/viewnotice/viewnotice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewnoticeComponent);
    return ViewnoticeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map