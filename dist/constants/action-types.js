'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _defaultSettings = require('./default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionTypes = (0, _keymirror2.default)({
  // visState
  ADD_DATA: null,
  ADD_FILTER: null,
  ADD_LAYER: null,
  INTERACTION_CONFIG_CHANGE: null,
  LAYER_CONFIG_CHANGE: null,
  LAYER_VISUAL_CHANNEL_CHANGE: null,
  LAYER_TYPE_CHANGE: null,
  LAYER_VIS_CONFIG_CHANGE: null,
  LAYER_HOVER: null,
  LAYER_CLICK: null,
  MAP_CLICK: null,
  REMOVE_FILTER: null,
  REMOVE_LAYER: null,
  REMOVE_DATASET: null,
  REORDER_LAYER: null,
  SET_FILTER: null,
  SHOW_DATASET_TABLE: null,
  UPDATE_LAYER_BLENDING: null,
  UPDATE_VIS_DATA: null,
  TOGGLE_FILTER_ANIMATION: null,
  TOGGLE_LAYER_CONFIG_ACTIVE: null,
  ENLARGE_FILTER: null,
  SET_VISIBLE_LAYERS_FOR_MAP: null,
  TOGGLE_LAYER_FOR_MAP: null,
  SET_FILTER_PLOT: null,
  LOAD_FILES: null,
  LOAD_FILES_ERR: null,

  // mapState
  UPDATE_MAP: null,
  FIT_BOUNDS: null,
  TOGGLE_PERSPECTIVE: null,
  TOGGLE_SPLIT_MAP: null,
  TOGGLE_FULLSCREEN: null,

  // mapStyle
  MAP_CONFIG_CHANGE: null,
  SET_DEFAULT_MAP_STYLE: null,
  MAP_STYLE_CHANGE: null,
  LOAD_MAP_STYLES: null,
  LOAD_MAP_STYLE_ERR: null,
  MAP_BUILDING_CHANGE: null,

  // uiState
  TOGGLE_SIDE_PANEL: null,
  TOGGLE_MODAL: null,
  OPEN_DELETE_MODAL: null,

  // buildingData
  // TODO: remove this after mapzen shut down
  UPDATE_BUILDING_TILES: null,
  LOAD_BUILDING_TILE: null,
  LOAD_BUILDING_TILE_START: null,
  LOAD_BUILDING_TILE_SUCCESS: null,
  LOAD_BUILDING_TILE_ERROR: null,
  INITIATE_BUILDING_DATA: null,

  // all
  INIT: null,
  RECEIVE_MAP_CONFIG: null,
  RESET_MAP_CONFIG: null
});

var addPrefix = function addPrefix(actions) {
  return Object.keys(actions).reduce(function (accu, key) {
    var _extends2;

    return (0, _extends4.default)({}, accu, (_extends2 = {}, _extends2[key] = '' + _defaultSettings.ACTION_PREFIX + actions[key], _extends2));
  }, {});
};

exports.default = addPrefix(ActionTypes);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIl0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIiwiQUREX0RBVEEiLCJBRERfRklMVEVSIiwiQUREX0xBWUVSIiwiSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSIsIkxBWUVSX0NPTkZJR19DSEFOR0UiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJMQVlFUl9UWVBFX0NIQU5HRSIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwiTEFZRVJfSE9WRVIiLCJMQVlFUl9DTElDSyIsIk1BUF9DTElDSyIsIlJFTU9WRV9GSUxURVIiLCJSRU1PVkVfTEFZRVIiLCJSRU1PVkVfREFUQVNFVCIsIlJFT1JERVJfTEFZRVIiLCJTRVRfRklMVEVSIiwiU0hPV19EQVRBU0VUX1RBQkxFIiwiVVBEQVRFX0xBWUVSX0JMRU5ESU5HIiwiVVBEQVRFX1ZJU19EQVRBIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJUT0dHTEVfTEFZRVJfQ09ORklHX0FDVElWRSIsIkVOTEFSR0VfRklMVEVSIiwiU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsIlNFVF9GSUxURVJfUExPVCIsIkxPQURfRklMRVMiLCJMT0FEX0ZJTEVTX0VSUiIsIlVQREFURV9NQVAiLCJGSVRfQk9VTkRTIiwiVE9HR0xFX1BFUlNQRUNUSVZFIiwiVE9HR0xFX1NQTElUX01BUCIsIlRPR0dMRV9GVUxMU0NSRUVOIiwiTUFQX0NPTkZJR19DSEFOR0UiLCJTRVRfREVGQVVMVF9NQVBfU1RZTEUiLCJNQVBfU1RZTEVfQ0hBTkdFIiwiTE9BRF9NQVBfU1RZTEVTIiwiTE9BRF9NQVBfU1RZTEVfRVJSIiwiTUFQX0JVSUxESU5HX0NIQU5HRSIsIlRPR0dMRV9TSURFX1BBTkVMIiwiVE9HR0xFX01PREFMIiwiT1BFTl9ERUxFVEVfTU9EQUwiLCJVUERBVEVfQlVJTERJTkdfVElMRVMiLCJMT0FEX0JVSUxESU5HX1RJTEUiLCJMT0FEX0JVSUxESU5HX1RJTEVfU1RBUlQiLCJMT0FEX0JVSUxESU5HX1RJTEVfU1VDQ0VTUyIsIkxPQURfQlVJTERJTkdfVElMRV9FUlJPUiIsIklOSVRJQVRFX0JVSUxESU5HX0RBVEEiLCJJTklUIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwiUkVTRVRfTUFQX0NPTkZJRyIsImFkZFByZWZpeCIsIk9iamVjdCIsImtleXMiLCJhY3Rpb25zIiwicmVkdWNlIiwiYWNjdSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxjQUFjLHlCQUFVO0FBQzVCO0FBQ0FDLFlBQVUsSUFGa0I7QUFHNUJDLGNBQVksSUFIZ0I7QUFJNUJDLGFBQVcsSUFKaUI7QUFLNUJDLDZCQUEyQixJQUxDO0FBTTVCQyx1QkFBcUIsSUFOTztBQU81QkMsK0JBQTZCLElBUEQ7QUFRNUJDLHFCQUFtQixJQVJTO0FBUzVCQywyQkFBeUIsSUFURztBQVU1QkMsZUFBYSxJQVZlO0FBVzVCQyxlQUFhLElBWGU7QUFZNUJDLGFBQVcsSUFaaUI7QUFhNUJDLGlCQUFlLElBYmE7QUFjNUJDLGdCQUFjLElBZGM7QUFlNUJDLGtCQUFnQixJQWZZO0FBZ0I1QkMsaUJBQWUsSUFoQmE7QUFpQjVCQyxjQUFZLElBakJnQjtBQWtCNUJDLHNCQUFvQixJQWxCUTtBQW1CNUJDLHlCQUF1QixJQW5CSztBQW9CNUJDLG1CQUFpQixJQXBCVztBQXFCNUJDLDJCQUF5QixJQXJCRztBQXNCNUJDLDhCQUE0QixJQXRCQTtBQXVCNUJDLGtCQUFnQixJQXZCWTtBQXdCNUJDLDhCQUE0QixJQXhCQTtBQXlCNUJDLHdCQUFzQixJQXpCTTtBQTBCNUJDLG1CQUFpQixJQTFCVztBQTJCNUJDLGNBQVksSUEzQmdCO0FBNEI1QkMsa0JBQWdCLElBNUJZOztBQThCNUI7QUFDQUMsY0FBWSxJQS9CZ0I7QUFnQzVCQyxjQUFZLElBaENnQjtBQWlDNUJDLHNCQUFvQixJQWpDUTtBQWtDNUJDLG9CQUFrQixJQWxDVTtBQW1DNUJDLHFCQUFtQixJQW5DUzs7QUFxQzVCO0FBQ0FDLHFCQUFtQixJQXRDUztBQXVDNUJDLHlCQUF1QixJQXZDSztBQXdDNUJDLG9CQUFrQixJQXhDVTtBQXlDNUJDLG1CQUFpQixJQXpDVztBQTBDNUJDLHNCQUFvQixJQTFDUTtBQTJDNUJDLHVCQUFxQixJQTNDTzs7QUE2QzVCO0FBQ0FDLHFCQUFtQixJQTlDUztBQStDNUJDLGdCQUFjLElBL0NjO0FBZ0Q1QkMscUJBQW1CLElBaERTOztBQWtENUI7QUFDQTtBQUNBQyx5QkFBdUIsSUFwREs7QUFxRDVCQyxzQkFBb0IsSUFyRFE7QUFzRDVCQyw0QkFBMEIsSUF0REU7QUF1RDVCQyw4QkFBNEIsSUF2REE7QUF3RDVCQyw0QkFBMEIsSUF4REU7QUF5RDVCQywwQkFBd0IsSUF6REk7O0FBMkQ1QjtBQUNBQyxRQUFNLElBNURzQjtBQTZENUJDLHNCQUFvQixJQTdEUTtBQThENUJDLG9CQUFrQjtBQTlEVSxDQUFWLENBQXBCOztBQWlFQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNoQkMsT0FBT0MsSUFBUCxDQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixDQUNFLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBOztBQUFBLHNDQUNLRCxJQURMLDZCQUVHQyxHQUZILDBDQUU0QkgsUUFBUUcsR0FBUixDQUY1QjtBQUFBLEdBREYsRUFLRSxFQUxGLENBRGdCO0FBQUEsQ0FBbEI7O2tCQVNlTixVQUFVbkQsV0FBVixDIiwiZmlsZSI6ImFjdGlvbi10eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrZXlNaXJyb3IgZnJvbSAna2V5bWlycm9yJztcbmltcG9ydCB7QUNUSU9OX1BSRUZJWH0gZnJvbSAnLi9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgQWN0aW9uVHlwZXMgPSBrZXlNaXJyb3Ioe1xuICAvLyB2aXNTdGF0ZVxuICBBRERfREFUQTogbnVsbCxcbiAgQUREX0ZJTFRFUjogbnVsbCxcbiAgQUREX0xBWUVSOiBudWxsLFxuICBJTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFOiBudWxsLFxuICBMQVlFUl9DT05GSUdfQ0hBTkdFOiBudWxsLFxuICBMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0U6IG51bGwsXG4gIExBWUVSX1RZUEVfQ0hBTkdFOiBudWxsLFxuICBMQVlFUl9WSVNfQ09ORklHX0NIQU5HRTogbnVsbCxcbiAgTEFZRVJfSE9WRVI6IG51bGwsXG4gIExBWUVSX0NMSUNLOiBudWxsLFxuICBNQVBfQ0xJQ0s6IG51bGwsXG4gIFJFTU9WRV9GSUxURVI6IG51bGwsXG4gIFJFTU9WRV9MQVlFUjogbnVsbCxcbiAgUkVNT1ZFX0RBVEFTRVQ6IG51bGwsXG4gIFJFT1JERVJfTEFZRVI6IG51bGwsXG4gIFNFVF9GSUxURVI6IG51bGwsXG4gIFNIT1dfREFUQVNFVF9UQUJMRTogbnVsbCxcbiAgVVBEQVRFX0xBWUVSX0JMRU5ESU5HOiBudWxsLFxuICBVUERBVEVfVklTX0RBVEE6IG51bGwsXG4gIFRPR0dMRV9GSUxURVJfQU5JTUFUSU9OOiBudWxsLFxuICBUT0dHTEVfTEFZRVJfQ09ORklHX0FDVElWRTogbnVsbCxcbiAgRU5MQVJHRV9GSUxURVI6IG51bGwsXG4gIFNFVF9WSVNJQkxFX0xBWUVSU19GT1JfTUFQOiBudWxsLFxuICBUT0dHTEVfTEFZRVJfRk9SX01BUDogbnVsbCxcbiAgU0VUX0ZJTFRFUl9QTE9UOiBudWxsLFxuICBMT0FEX0ZJTEVTOiBudWxsLFxuICBMT0FEX0ZJTEVTX0VSUjogbnVsbCxcblxuICAvLyBtYXBTdGF0ZVxuICBVUERBVEVfTUFQOiBudWxsLFxuICBGSVRfQk9VTkRTOiBudWxsLFxuICBUT0dHTEVfUEVSU1BFQ1RJVkU6IG51bGwsXG4gIFRPR0dMRV9TUExJVF9NQVA6IG51bGwsXG4gIFRPR0dMRV9GVUxMU0NSRUVOOiBudWxsLFxuXG4gIC8vIG1hcFN0eWxlXG4gIE1BUF9DT05GSUdfQ0hBTkdFOiBudWxsLFxuICBTRVRfREVGQVVMVF9NQVBfU1RZTEU6IG51bGwsXG4gIE1BUF9TVFlMRV9DSEFOR0U6IG51bGwsXG4gIExPQURfTUFQX1NUWUxFUzogbnVsbCxcbiAgTE9BRF9NQVBfU1RZTEVfRVJSOiBudWxsLFxuICBNQVBfQlVJTERJTkdfQ0hBTkdFOiBudWxsLFxuXG4gIC8vIHVpU3RhdGVcbiAgVE9HR0xFX1NJREVfUEFORUw6IG51bGwsXG4gIFRPR0dMRV9NT0RBTDogbnVsbCxcbiAgT1BFTl9ERUxFVEVfTU9EQUw6IG51bGwsXG5cbiAgLy8gYnVpbGRpbmdEYXRhXG4gIC8vIFRPRE86IHJlbW92ZSB0aGlzIGFmdGVyIG1hcHplbiBzaHV0IGRvd25cbiAgVVBEQVRFX0JVSUxESU5HX1RJTEVTOiBudWxsLFxuICBMT0FEX0JVSUxESU5HX1RJTEU6IG51bGwsXG4gIExPQURfQlVJTERJTkdfVElMRV9TVEFSVDogbnVsbCxcbiAgTE9BRF9CVUlMRElOR19USUxFX1NVQ0NFU1M6IG51bGwsXG4gIExPQURfQlVJTERJTkdfVElMRV9FUlJPUjogbnVsbCxcbiAgSU5JVElBVEVfQlVJTERJTkdfREFUQTogbnVsbCxcblxuICAvLyBhbGxcbiAgSU5JVDogbnVsbCxcbiAgUkVDRUlWRV9NQVBfQ09ORklHOiBudWxsLFxuICBSRVNFVF9NQVBfQ09ORklHOiBudWxsXG59KTtcblxuY29uc3QgYWRkUHJlZml4ID0gYWN0aW9ucyA9PlxuICBPYmplY3Qua2V5cyhhY3Rpb25zKS5yZWR1Y2UoXG4gICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICBba2V5XTogYCR7QUNUSU9OX1BSRUZJWH0ke2FjdGlvbnNba2V5XX1gXG4gICAgfSksXG4gICAge31cbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkUHJlZml4KEFjdGlvblR5cGVzKTtcbiJdfQ==