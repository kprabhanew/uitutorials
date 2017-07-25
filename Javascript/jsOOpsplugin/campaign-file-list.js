"use strict";

//Ensure that the root name space is established.

var rism = rism ? rism : {};
rism.pdm = rism.pdm ? rism.pdm : {};

rism.pdm.campaign = (function() {

	var fn = {}, 
	_options = {statusFailed : "Rejected"},
	PLACEHOLDER_MSG_START_TYPING = "Search by entering a File name...";
	var CLASS_FILTERING = "filtering";
	var STRING_PERIOD = ".";
	var CLASS_SELECTOR_FILTERING = STRING_PERIOD + CLASS_FILTERING;
	/**
	 * This object will hold all the datatable methods
	 */
	fn.datatable = {};

	fn.initialize = function initialize() {
		//alert("hi");
		
		fn.createDatatable();
		
		// Build Pagination Controls
	    fn.setupPageSelectionButtons();
	 // Add icon to each filter column header
	    $( "#pag-camp-list-tbl").find(CLASS_SELECTOR_FILTERING).each(function(){
	    	$(this).append( "<span class='col-filter'></span>" );
		});
	 
	    $("#pag-camp-list-tbl th.item-status")
		.on(EVENT_CLICK, CLASS_SELECTOR_COL_FILTER, fn.handleStatusFilterClickEvent );
	    //var statusFailed = "Failed";

	};
	/**
	 * Renders the table detail element to display the status
	 */
	fn.datatable.renderStatus = function (itemStatus, renderType, cartLineItem) {

		if (renderType === DATA_TABLE_FUNCTION_CALL_TYPE_DISPLAY) {

			var negativeStatusClass = STRING_EMPTY;
			if (itemStatus === _options.statusFailed) {
				negativeStatusClass = "negative-status";
			}

			var htmlText = "<span ";
			htmlText += "class='" + negativeStatusClass + "'>";
			htmlText += itemStatus;
			htmlText += "</span>";
			return htmlText;
		}
		return itemStatus;
	};	
	
	/**
	 * Renders the table detail element to display the date received
	 */
	fn.datatable.renderDate = function (newDate, renderDate) {
		if (renderDate === DATA_TABLE_FUNCTION_CALL_TYPE_DISPLAY) {
				var formatedDate = new Date(newDate),
				month =  (formatedDate.getMonth()+1),
				hours = formatedDate.getHours(),
				minutes = formatedDate.getMinutes();
				var ampm = hours >= 12 ? 'PM' : 'AM';
				hours = hours % 12;
				hours = hours ? hours : 12; // the hour '0' should be '12'
				minutes = minutes < 10 ? '0'+minutes : minutes;
				var strDate = (month<=9 ? '0' + month : month) + "/" + formatedDate.getDate() + "/" + formatedDate.getFullYear();
				var strTime = hours + ':' + minutes + ' ' + ampm;
			   return  strDate + " @ " + strTime;
			   
		}
		
		return newDate;
		
	};
	
	
	/**
	 * This return the datatable column and its properties
	 */
	fn.datatable.getColumnProperties = function () {
		
		return [
				{
				    sTitle : "<span>Campaign</span>",
				    mData : "compaignDate",
				    sType : "html",
				    sClass : "item-number ellipsis",
				    bSearchable : false
				},  {
				    sTitle : "<span>File Name</span>",
				    mData : "fileName",
				    sType : "html",
				    sClass : "alt-item-number ellipsis",
				    bSearchable : true
				}, {
				    sTitle : "<span>Date Received</span>",
				    mData : "lastUpdateTimestamp",
				    sType : "html",
				    sClass : " ellipsis",
				    bSearchable : false,
				    mRender: fn.datatable.renderDate
				}, {
				    sTitle : "<span>Status</span>",
				    mData : "status",
				    sType : "html",
				    sClass : "item-status ellipsis filtering",
				    bSearchable : true,
				    mRender: fn.datatable.renderStatus
				}
		];
	}
	
	
	fn.createDatatable = function() {
		$campaignFileListDataTable = $("#pag-camp-list-tbl").DataTable(
				{ 	aoColumns : fn.datatable.getColumnProperties(),
		        oLanguage : {
		            sSearch : STRING_EMPTY,
		            sZeroRecords : "No Results Found",
		            sInfo : "Showing _START_ - _END_ of  _TOTAL_",
		            sInfoFiltered : STRING_EMPTY,
		        },
//					        buttons: [{
//				                extend: 'excel',
//				                text: '<span class="icon icon-export" style="display: none"></span>',
//				                extension: '.xlsx',
//				                exportOptions: {
//				                	modifier: {
//				                		page: 'current'
//				                	},
//				                	columns: "thead th:not(.noExport)"
//				                },
//				                title: 'table'
//					        }],
		        bPaginate : true,
		        //stateSave: true,
		        sDom : 'B<"#pag-item-mgmt-tbl_filter_wrapper.icon icon-search"f>tr<"bottom"lip>',
		        aaSorting : [ [ 0, "asc" ] ],
		        //sAjaxSource : _pageOpt.uriString,
		        sPaginationType : "full_numbers",
		        aaData : campaignUploadFileList,
		        bAutoWidth : false,
		        bStateSave: true,
		        "bProcessing": true,
		        "iDisplayLength" : 25,
		        /* stateSaveCallback: function(settings, data) {
		        	//storage.sessionId = _pageOpt.sessionId;
		        	storage.data = JSON.stringify(data);
		        	//utils.setSessionStorage(_pageOpt.path, storage);
		        },*/
		       // stateLoadCallback: function(settings) {
/*					        	_pageOpt.path = DATATABLE_ITEM_MGT_STATE_SAVE_ID + currentUserIdNumber + window.location.pathname;
					        	storage = utils.getSessionStorage(_pageOpt.path);
					        	if(storage == "" || storage.sessionId === _pageOpt.sessionId) {
					        		storage = (storage == "") ? {} : storage;
					        		storage.resizeReset = false;
					        		return storage.data && JSON.parse(storage.data) || null;
					        	} else {
					        		storage.resizeReset = true;
					        		utils.clearSessionStorage(_pageOpt.path);
					        		return null;
					        	}*/
		       // }, 
		        fnInitComplete : fn.dataTableInitComplete,
		        drawCallback: fn.afterDrawCallback
		        //bServerSide : true,
		        //fnServerData : fn.requestServerItemData,
		        //drawCallback: fn.afterDrawCallback
		    }		
		
		
		);
		$("#pag-camp-list-tbl_filter input").addClass("filter-input").watermark(PLACEHOLDER_MSG_START_TYPING);
	};

	
	/**
     * Handles the status filter icon click event
     */
    fn.handleStatusFilterClickEvent = function handleStatusFilterClickEvent (event) {
    	
    	console.log("Enter handleStatusFilterClickEvent()");
    	
    	event.stopPropagation();	 
    	
    	 /*var orderStatusFilterOptions = fn.convertToStatusFilterOptions (_pageOpt.filterOptions);*/
    	rism.ux.widget.MultiOptionSelector.show ();
    	rism.ux.widget.MultiOptionSelector.setOptions (orderStatusFilterOptions); 
    	
    	console.log("Exit handleStatusFilterClickEvent()");
    };	    
    
    
    
    fn.findPageSizeOption = function findPageSizeOption (pageSize) {
    	
		var targetOptionLabel = "View " + pageSize;
		var $pageSizeContainer = $("#pag-item-mgmt-div-table-pagination");
	
		var $pageSizeListItems = $pageSizeContainer.find(ELEMENT_LIST_ITEM);
	
		var $pageSizeListItem = $pageSizeListItems.filter (function() {
			return $(this).text() === targetOptionLabel;
		});
	
		return $pageSizeListItem;
	};
	/* var pageSize = null;
	var $pageSizeElement = fn.findPageSizeOption (pageSize); */
	
	
	fn.dataTableInitComplete = function dataTableInitComplete( oSettings, json ) {
	    var $dataTable = $("#pag-camp-list-tbl").dataTable();
	    
	    $dataTable.fnAdjustColumnSizing();
	    
	    $("#pag-camp-list-tbl_info").on(EVENT_MOUSE_OVER, fn.handleHoverText);
	    
	    $("#pag-camp-list-tbl_previous").html("<label class='icon-pre'/>");
	    $("#pag-camp-list-tbl_next").html("<label class='icon-next'/>");
	
		// Build Page Size Dropdown with customInfo
	    fn.setupPageSizeSelect($dataTable);
		
		// Build Pagination Controls
	    fn.setupPageSelectionButtons();
	    
	    // Gracefully display the bottom after load... 
	    fn.showPaginationOptions();
	    
	     // Add icon to each filter column header
	    $( "#pag-item-mgmt-tbl").find(CLASS_SELECTOR_FILTERING).each(function(){
	    	$(this).append( "<span class='col-filter'></span>" );
		}); 
	    
	    //fn.buildDTbuttons();
	    $("#pag-camp-list-tbl").colResizable({liveDrag:true, postbackSafe: true, headerOnly: true/*, flush: storage.resizeReset*/});
	};			
	
	
	/**
	 * Sets the page size select customInfo and builds the element on the page;
	 * Once built, it attaches the handler to change the page size.
	 * 
	 * @param $dataTable
	 * 			The jQ selector for current dataTable
	 */
	fn.setupPageSizeSelect = function setupPageSizeSelect($dataTable) {
		var pageInfo = $dataTable.api().page.info();
		var customInfo = {
			id: "pag-camp-list-div-table-pagination",
			$dataTable: $dataTable,
			defaultSelectId: "#" + $dataTable.attr("id") + "_length",
			openUp: true,
			selectedLength: pageInfo.recordsDisplay
		};
		
		DTPageSizeSelectBuilder(window.jQuery).init(customInfo);	
		
		fn.setPageSizeSelection(pageInfo.length);
	
	    $("#pag-camp-list-div-table-pagination-select").on(EVENT_CHANGE,
	            fn.handleItemMgmtListPaginationChange);
	};
	
	
	/**
	 * ItemMgmt List Pagination Change
	 */
	fn.handleItemMgmtListPaginationChange = function handleItemMgmtListPaginationChange ( ) {
	
		consoleLogTrace(" Pagination change triggered.. ");
	
		var $visibleSelectElement = $("#pag-camp-list-div-table-pagination-select");
		var length = $visibleSelectElement.val().replace("View ",STRING_EMPTY)/1;
		//var itemMgmtTable = $("#pag-item-mgmt-tbl").DataTable();
	
		//var settings = itemMgmtTable.fnSettings();
		//settings._iDisplayLength = parseInt(length);
		//itemMgmtTable.fnDraw();
		
		$campaignFileListDataTable.page.len(parseInt(length)).draw();
	
		consoleLogTrace(" Pagination change trigger done ");
	};
	
	
	/**
	 * Selects the given page size from the pagination page size drop-down list.
	 *
	 * @param pageSize
	 *            The number of rows to display on each page.
	 */
	fn.setPageSizeSelection = function setPageSizeSelection ( pageSize ) {
	
		var $pageSizeSelectElement = $("#pag-camp-list-div-table-pagination-select");
		console.assert(($pageSizeSelectElement.length === 1),
		        "There should be one and only one page size select element.");
	
		var pageSizeLabel = "View " + pageSize;
	
		// Select the criteria type
		$pageSizeSelectElement.val(pageSizeLabel);
		
		// Force the sparkbox to sync with the hidden select element.
		$pageSizeSelectElement.trigger(EVENT_CHANGE);
	
	};
	
	/**
	 * Sets the pagination buttons to DTFastScroller
	 */
	fn.setupPageSelectionButtons = function setupPageSelectionButtons() {
	    $("#pag-camp-list-tbl_previous").html("<label class='icon-pre'/>");
	    $("#pag-camp-list-tbl_next").html("<label class='icon-next'/>");
	
	    //DTFastScroll.initFastScroll(true, $itemsDataTable, $("#pag-item-mgmt-tbl_paginate"));
		//DTFastScroll.initPageScrollTop();
	};	
	
	fn.afterDrawCallback = function afterDrawCallback(settings) {
		// Build Pagination Controls
	    fn.setupPageSelectionButtons();
	};
	
	/**
	 * Show page size dropdown
	 */
	fn.showPaginationOptions = function showPaginationOptions() {
		$(".bottom").fadeIn();
	};
	
	return {
		init : fn.initialize,
		methods : fn
	}

})();