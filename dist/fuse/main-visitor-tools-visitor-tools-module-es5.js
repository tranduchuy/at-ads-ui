(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-visitor-tools-visitor-tools-module"],{

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[(/** @type {?} */ (key))] = source[(/** @type {?} */ (key))];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return prop === 'transform' || prop === 'all'; }));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    function (part) { return part.trim(); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                /** @type {?} */
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold && (Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0))) {
                    _this._hasStartedDragging = true;
                    _this._ngZone.run((/**
                     * @return {?}
                     */
                    function () { return _this._startDragSequence(event); }));
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!_this._dragDropRegistry.isDragging(_this)) {
                return;
            }
            _this._removeSubscriptions();
            _this._dragDropRegistry.stopDragging(_this);
            if (_this._handles) {
                _this._rootElement.style.webkitTapHighlightColor = _this._rootElementTapHighlight;
            }
            if (!_this._hasStartedDragging) {
                return;
            }
            _this.released.next({ source: _this });
            if (!_this._dropContainer) {
                // Convert the active transform into a passive one. This means that next time
                // the user starts dragging the item, its position will be calculated relatively
                // to the new passive transform.
                _this._passiveTransform.x = _this._activeTransform.x;
                _this._passiveTransform.y = _this._activeTransform.y;
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.ended.next({
                        source: _this,
                        distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                    });
                }));
                _this._dragDropRegistry.stopDragging(_this);
                return;
            }
            _this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            function () {
                _this._cleanupDragArtifacts(event);
                _this._dragDropRegistry.stopDragging(_this);
            }));
        });
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); }));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return toggleNativeDragInteractions(handle, false); }));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    DragRef.prototype.getFreeDragPosition = /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        return { x: this._passiveTransform.x, y: this._passiveTransform.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    DragRef.prototype.setFreeDragPosition = /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._toggleNativeDragInteractions();
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance);
            _this._dropContainer = _this._initialContainer;
        }));
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left it's
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
                _this.entered.next({
                    item: _this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(_this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = viewRef.rootNodes[0];
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            }));
        }));
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = this._placeholderRef.rootNodes[0];
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point) : point;
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this.disabled || this._handles.length > 0;
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    DragRef.prototype._applyRootElementTransform = /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    DragRef.prototype._getDragDistance = /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    function (currentPosition) {
        /** @type {?} */
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    var descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document) {
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = true;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        _dragDropRegistry.registerDropContainer(this);
        this._document = _document;
        this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] ? element.nativeElement : element;
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        this.beforeStarted.next();
        this._isDragging = true;
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._startReceiving(_this); }));
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
        if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
        /** @type {?} */
        var activeDraggables = this._activeDraggables;
        /** @type {?} */
        var currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        /** @type {?} */
        var newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @breaking-change 9.0.0 `distance` parameter to become required.
     */
    /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer, distance) {
        if (distance === void 0) { distance = { x: 0, y: 0 }; }
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._withDropContainer((/** @type {?} */ (_this))); }));
        if ((/** @type {?} */ (this)).isDragging()) {
            (/** @type {?} */ (this))._cacheItems();
        }
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        this._clientRect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).getBoundingClientRect();
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            /** @type {?} */
            var clientRect = elementToMeasure.getBoundingClientRect();
            return {
                drag: drag,
                offset: 0,
                // We need to clone the `clientRect` here, because all the values on it are readonly
                // and we need to be able to update them. Also we can't use a spread here, because
                // the values on a `ClientRect` aren't own properties. See:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
                clientRect: {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height
                }
            };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getRootElement().style.transform = ''; }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._stopReceiving(_this); }));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        }));
    };
    /** Caches the current items in the list and their positions. */
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItems = /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheOwnPosition();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._canReceive(item, x, y); }));
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = (/** @type {?} */ (this._document.elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.find` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); }),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); }),
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            // TODO(crisbeto): prevent mouse wheel scrolling while
            // dragging until we've set up proper scroll handling.
            if (!isTouchEvent) {
                this._globalListeners.set('wheel', {
                    handler: this._preventDefaultWhileDragging,
                    options: activeCapturingEventOptions
                });
            }
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return instance.id === id; }));
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDragItem(instance); }));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDropContainer(instance); }));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); }))).subscribe(observer);
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "boundaryElementSelector", {
        /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * @breaking-change 9.0.0
         */
        get: /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * \@breaking-change 9.0.0
         * @return {?}
         */
        function () {
            return typeof this.boundaryElement === 'string' ? this.boundaryElement : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            this.boundaryElement = selector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    CdkDrag.prototype.getFreeDragPosition = /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        return this._dragRef.getFreeDragPosition();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle._parentDrag === _this; }))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle.element; }));
                _this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._stateChanges; })));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this.dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe((/**
         * @return {?}
         */
        function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        function () {
            _this.released.emit({ source: _this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        }));
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragConstrainPosition',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        });
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDropList.prototype, "sortingDisabled", {
        /** Whether sorting within this drop list is disabled. */
        get: /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */
        function () { return this._sortingDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this._dropListRef.withItems(items.map((/**
             * @param {?} drag
             * @return {?}
             */
            function (drag) { return drag._dragRef; })));
        }));
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return ref.withDirection(value); }));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    function (list) { return list.id === drop; })))) : drop;
            }));
            if (_this._group) {
                _this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = _this.sortingDisabled;
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) { return drop && drop !== _this; })).map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return list._dropListRef; })))
                .withOrientation(_this.orientation);
        }));
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return CdkDrag; })), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListEnterPredicate',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/conversion.js ***!
  \************************************************************/
/*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return rgbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return rgbaToArgbHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return convertHexToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return parseIntFromHex; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");

function rgbToRgb(r, g, b) {
    return {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
        g: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
        b: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255,
    };
}
function rgbToHsl(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + ((q - p) * (6 * t));
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + ((q - p) * ((2 / 3) - t) * 6);
    }
    return p;
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    l = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);
    if (s === 0) {
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? (l * (1 + s)) : (l + s - (l * s));
        var p = (2 * l) - q;
        r = hue2rgb(p, q, h + (1 / 3));
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
function hsvToRgb(h, s, v) {
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - (f * s));
    var t = v * (1 - ((1 - f) * s));
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
    ];
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js ***!
  \*****************************************************************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/format-input.js ***!
  \**************************************************************/
/*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return inputToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return isValidCSSUnit; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");



function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            v = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            l = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = Object(_util__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
var CSS_INTEGER = '[-\\+]?\\d+%?';
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js ***!
  \************************************************************/
/*! exports provided: fromRatio, legacyRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return fromRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return legacyRandom; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");


function fromRatio(ratio, opts) {
    var newColor = {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
        g: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
        b: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b),
    };
    if (ratio.a !== undefined) {
        newColor.a = Number(ratio.a);
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
}
function legacyRandom() {
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    });
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/index.js ***!
  \*******************************************************/
/*! exports provided: TinyColor, tinycolor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return TinyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return tinycolor; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");




var TinyColor = (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        if (color instanceof TinyColor) {
            return color;
        }
        this.originalInput = color;
        var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format, (_a !== null && _a !== void 0 ? _a : rgb.format));
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    TinyColor.prototype.getBrightness = function () {
        var rgb = this.toRgb();
        return ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
    };
    TinyColor.prototype.getLuminance = function () {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    };
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = Object(_util__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    TinyColor.prototype.toHsv = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor.prototype.toHsvString = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHsl = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor.prototype.toHslString = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
    };
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100); };
        return this.a === 1 ?
            "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" :
            "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.keys(_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][key] === hex) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = (format !== null && format !== void 0 ? format : this.format);
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
            g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
            b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
            a: ((rgb2.a - rgb1.a) * p) + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + (i * increment)) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/public_api.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/public_api.js ***!
  \************************************************************/
/*! exports provided: default, TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; });

/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "names", function() { return _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]; });

/* harmony import */ var _readability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readability */ "./node_modules/@ctrl/tinycolor/dist/es/readability.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["readability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["isReadable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["mostReadable"]; });

/* harmony import */ var _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-ms-filter */ "./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"]; });

/* harmony import */ var _from_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-ratio */ "./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["fromRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"]; });

/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ "./node_modules/@ctrl/tinycolor/dist/es/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["bounds"]; });









/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]);


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/random.js":
/*!********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/random.js ***!
  \********************************************************/
/*! exports provided: random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return bounds; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");

function random(options) {
    if (options === void 0) { options = {}; }
    if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    var h = pickHue(options.hue, options.seed);
    var s = pickSaturation(h, options);
    var v = pickBrightness(h, s, options);
    var res = { h: h, s: s, v: v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
}
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
        default:
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
        default:
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - (m * s1);
            return (m * S) + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        var namedColor = bounds.find(function (n) { return n.name === colorInput; });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        var parsed = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + (Math.random() * (range[1] + 1 - range[0])));
    }
    var max = range[1] || 1;
    var min = range[0] || 0;
    seed = ((seed * 9301) + 49297) % 233280;
    var rnd = seed / 233280.0;
    return Math.floor(min + (rnd * (max - min)));
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
var bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [[0, 0], [100, 0]],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]],
    },
];


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/readability.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/readability.js ***!
  \*************************************************************/
/*! exports provided: readability, isReadable, mostReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return readability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return isReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return mostReadable; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");

function readability(color1, color2) {
    var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
    var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
function isReadable(color1, color2, wcag2) {
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var _a, _b;
    var readabilityLevel = readability(color1, color2);
    switch ((_a = wcag2.level, (_a !== null && _a !== void 0 ? _a : 'AA')) + (_b = wcag2.size, (_b !== null && _b !== void 0 ? _b : 'small'))) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    args.includeFallbackColors = false;
    return mostReadable(baseColor, ['#fff', '#000'], args);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js ***!
  \**************************************************************/
/*! exports provided: toMsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return toMsFilter; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");


function toMsFilter(firstColor, secondColor) {
    var color = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
    var hex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
    if (secondColor) {
        var s = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
        secondHex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/util.js":
/*!******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/util.js ***!
  \******************************************************/
/*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound01", function() { return bound01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp01", function() { return clamp01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnePointZero", function() { return isOnePointZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercentage", function() { return isPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAlpha", function() { return boundAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPercentage", function() { return convertToPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var processPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
    return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === 'string' && n.includes('%');
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "./node_modules/material-colors/dist/colors.es2015.js":
/*!************************************************************!*\
  !*** ./node_modules/material-colors/dist/colors.es2015.js ***!
  \************************************************************/
/*! exports provided: red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, darkText, lightText, darkIcons, lightIcons, white, black, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),

/***/ "./node_modules/ngx-color/circle/fesm5/ngx-color-circle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-color/circle/fesm5/ngx-color-circle.js ***!
  \*****************************************************************/
/*! exports provided: CircleComponent, ColorCircleModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCircleModule", function() { return ColorCircleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CircleSwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm5/ngx-color.js");






var CircleSwatchComponent = /** @class */ (function () {
    function CircleSwatchComponent() {
        this.circleSize = 28;
        this.circleSpacing = 14;
        this.focus = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focusStyle = {};
        this.swatchStyle = {
            borderRadius: '50%',
            background: 'transparent',
            transition: '100ms box-shadow ease 0s',
        };
    }
    CircleSwatchComponent.prototype.ngOnChanges = function () {
        this.swatchStyle.boxShadow = "inset 0 0 0 " + this.circleSize / 2 + "px " + this.color;
        this.focusStyle.boxShadow = "inset 0 0 0 " + this.circleSize / 2 + "px " + this.color + ", 0 0 5px " + this.color;
        if (this.focus) {
            this.focusStyle.boxShadow = "inset 0 0 0 3px " + this.color + ", 0 0 5px " + this.color;
        }
    };
    CircleSwatchComponent.prototype.handleClick = function (_a) {
        var hex = _a.hex, $event = _a.$event;
        this.onClick.emit({ hex: hex, $event: $event });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleSwatchComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleSwatchComponent.prototype, "circleSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleSwatchComponent.prototype, "circleSpacing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleSwatchComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleSwatchComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleSwatchComponent.prototype, "onSwatchHover", void 0);
    CircleSwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-circle-swatch',
            template: "\n  <div class=\"circle-swatch\"\n    [style.width.px]=\"circleSize\" [style.height.px]=\"circleSize\"\n    [style.margin-right.px]=\"circleSpacing\" [style.margin-bottom.px]=\"circleSpacing\"\n    >\n    <color-swatch\n      [color]=\"color\" [style]=\"swatchStyle\" [focus]=\"focus\" [focusStyle]=\"focusStyle\"\n      (onClick)=\"handleClick($event)\" (onHover)=\"onSwatchHover.emit($event)\">\n    </color-swatch>\n    <div class=\"clear\"></div>\n  </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            preserveWhitespaces: false,
            styles: ["\n  .circle-swatch {\n    transform: scale(1);\n    transition: transform 100ms ease;\n  }\n  .circle-swatch:hover {\n    transform: scale(1.2);\n  }\n  "]
        })
    ], CircleSwatchComponent);
    return CircleSwatchComponent;
}());

var CircleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CircleComponent, _super);
    function CircleComponent() {
        var _this = _super.call(this) || this;
        /** Pixel value for picker width */
        _this.width = 252;
        /** Color squares to display */
        _this.colors = [
            material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['500'],
        ];
        /** Value for circle size */
        _this.circleSize = 28;
        /** Value for spacing between circles */
        _this.circleSpacing = 14;
        return _this;
    }
    CircleComponent.prototype.isActive = function (color) {
        return this.hex === color;
    };
    CircleComponent.prototype.handleBlockChange = function (_a) {
        var hex = _a.hex, $event = _a.$event;
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_4__["isValidHex"])(hex)) {
            this.handleChange({ hex: hex, source: 'hex' }, $event);
        }
    };
    CircleComponent.prototype.handleValueChange = function (_a) {
        var data = _a.data, $event = _a.$event;
        this.handleChange(data, $event);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], CircleComponent.prototype, "colors", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleComponent.prototype, "circleSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleComponent.prototype, "circleSpacing", void 0);
    CircleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-circle',
            template: "\n    <div\n      class=\"circle-picker {{ className }}\"\n      [style.width.px]=\"width\"\n      [style.margin-right.px]=\"-circleSpacing\"\n      [style.margin-bottom.px]=\"-circleSpacing\"\n    >\n      <color-circle-swatch\n        *ngFor=\"let color of colors\"\n        [circleSize]=\"circleSize\"\n        [circleSpacing]=\"circleSpacing\"\n        [color]=\"color\"\n        [focus]=\"isActive(color)\"\n        (onClick)=\"handleBlockChange($event)\"\n        (onSwatchHover)=\"onSwatchHover.emit($event)\"\n      ></color-circle-swatch>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            preserveWhitespaces: false,
            styles: ["\n      .circle-picker {\n        display: flex;\n        flex-wrap: wrap;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CircleComponent);
    return CircleComponent;
}(ngx_color__WEBPACK_IMPORTED_MODULE_4__["ColorWrap"]));
var ColorCircleModule = /** @class */ (function () {
    function ColorCircleModule() {
    }
    ColorCircleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [CircleComponent, CircleSwatchComponent],
            exports: [CircleComponent, CircleSwatchComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_4__["SwatchModule"]],
        })
    ], ColorCircleModule);
    return ColorCircleModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-circle.js.map


/***/ }),

/***/ "./node_modules/ngx-color/fesm5/ngx-color.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-color/fesm5/ngx-color.js ***!
  \***************************************************/
/*! exports provided: AlphaComponent, AlphaModule, CheckboardComponent, CheckboardModule, ColorWrap, ColorWrapModule, CoordinatesDirective, CoordinatesModule, EditableInputComponent, EditableInputModule, HueComponent, HueModule, RaisedComponent, RaisedModule, SaturationComponent, SaturationModule, ShadeComponent, ShadeModule, SwatchComponent, SwatchModule, getCheckerboard, getContrastingColor, isValidHex, render, simpleCheckForValidColor, toState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponent", function() { return AlphaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaModule", function() { return AlphaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardComponent", function() { return CheckboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardModule", function() { return CheckboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrap", function() { return ColorWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrapModule", function() { return ColorWrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesDirective", function() { return CoordinatesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesModule", function() { return CoordinatesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputComponent", function() { return EditableInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputModule", function() { return EditableInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueComponent", function() { return HueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueModule", function() { return HueModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedComponent", function() { return RaisedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedModule", function() { return RaisedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationComponent", function() { return SaturationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationModule", function() { return SaturationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeComponent", function() { return ShadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeModule", function() { return ShadeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchComponent", function() { return SwatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchModule", function() { return SwatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckerboard", function() { return getCheckerboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastingColor", function() { return getContrastingColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHex", function() { return isValidHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleCheckForValidColor", function() { return simpleCheckForValidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toState", function() { return toState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/es/public_api.js");







var checkboardCache = {};
function render(c1, c2, size) {
    if (typeof document === 'undefined') {
        return null;
    }
    var canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        return null;
    } // If no context can be found, return early.
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = c2;
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size, size);
    ctx.fillRect(0, 0, size, size);
    return canvas.toDataURL();
}
function getCheckerboard(c1, c2, size) {
    var key = c1 + "-" + c2 + "-" + size;
    if (checkboardCache[key]) {
        return checkboardCache[key];
    }
    var checkboard = render(c1, c2, size);
    if (!checkboard) {
        return null;
    }
    checkboardCache[key] = checkboard;
    return checkboard;
}

var CheckboardComponent = /** @class */ (function () {
    function CheckboardComponent() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    CheckboardComponent.prototype.ngOnInit = function () {
        var background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: "url(" + background + ") center left",
        };
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CheckboardComponent.prototype, "white", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CheckboardComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CheckboardComponent.prototype, "grey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CheckboardComponent.prototype, "boxShadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CheckboardComponent.prototype, "borderRadius", void 0);
    CheckboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-checkboard',
            template: "<div class=\"grid\" [ngStyle]=\"gridStyles\"></div>",
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n  .grid {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n  }\n  "]
        })
    ], CheckboardComponent);
    return CheckboardComponent;
}());
var CheckboardModule = /** @class */ (function () {
    function CheckboardModule() {
    }
    CheckboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [CheckboardComponent],
            exports: [CheckboardComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        })
    ], CheckboardModule);
    return CheckboardModule;
}());

var CoordinatesDirective = /** @class */ (function () {
    function CoordinatesDirective(el) {
        this.el = el;
        this.coordinatesChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mousechange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mouseListening = false;
    }
    CoordinatesDirective.prototype.mousemove = function ($event, x, y, isTouch) {
        if (isTouch === void 0) { isTouch = false; }
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event: $event, x: x, y: y, isTouch: isTouch });
        }
    };
    CoordinatesDirective.prototype.mouseup = function () {
        this.mouseListening = false;
    };
    CoordinatesDirective.prototype.mousedown = function ($event, x, y, isTouch) {
        if (isTouch === void 0) { isTouch = false; }
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event: $event, x: x, y: y, isTouch: isTouch });
    };
    CoordinatesDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (p, q) { return p.x === q.x && p.y === q.y; }))
            .subscribe(function (n) { return _this.handleChange(n.x, n.y, n.$event, n.isTouch); });
    };
    CoordinatesDirective.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CoordinatesDirective.prototype.handleChange = function (x, y, $event, isTouch) {
        var containerWidth = this.el.nativeElement.clientWidth;
        var containerHeight = this.el.nativeElement.clientHeight;
        var left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        var top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x: x,
            y: y,
            top: top,
            left: left,
            containerWidth: containerWidth,
            containerHeight: containerHeight,
            $event: $event,
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CoordinatesDirective.prototype, "coordinatesChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mousemove', ['$event', '$event.pageX', '$event.pageY']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchmove', [
            '$event',
            '$event.touches[0].clientX',
            '$event.touches[0].clientY',
            'true',
        ]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], CoordinatesDirective.prototype, "mousemove", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mouseup'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchend'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], CoordinatesDirective.prototype, "mouseup", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('mousedown', ['$event', '$event.pageX', '$event.pageY']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('touchstart', [
            '$event',
            '$event.touches[0].clientX',
            '$event.touches[0].clientY',
            'true',
        ]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], CoordinatesDirective.prototype, "mousedown", null);
    CoordinatesDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({ selector: '[ngx-color-coordinates]' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], CoordinatesDirective);
    return CoordinatesDirective;
}());
var CoordinatesModule = /** @class */ (function () {
    function CoordinatesModule() {
    }
    CoordinatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [CoordinatesDirective],
            exports: [CoordinatesDirective],
        })
    ], CoordinatesModule);
    return CoordinatesModule;
}());

var AlphaComponent = /** @class */ (function () {
    function AlphaComponent() {
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    AlphaComponent.prototype.ngOnChanges = function () {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: "linear-gradient(to bottom, rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 0) 0%,\n          rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 1) 100%)",
            };
        }
        else {
            this.gradient = {
                background: "linear-gradient(to right, rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 0) 0%,\n          rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 1) 100%)",
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    };
    AlphaComponent.prototype.handleChange = function (_a) {
        var top = _a.top, left = _a.left, containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, $event = _a.$event;
        var data;
        if (this.direction === 'vertical') {
            var a = void 0;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: a,
                    source: 'rgb',
                };
            }
        }
        else {
            var a = void 0;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data: data, $event: $event });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlphaComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlphaComponent.prototype, "rgb", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlphaComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], AlphaComponent.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], AlphaComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], AlphaComponent.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlphaComponent.prototype, "onChange", void 0);
    AlphaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-alpha',
            template: "\n  <div class=\"alpha\" [style.border-radius]=\"radius\">\n    <div class=\"alpha-checkboard\">\n      <color-checkboard></color-checkboard>\n    </div>\n    <div class=\"alpha-gradient\" [ngStyle]=\"gradient\" [style.box-shadow]=\"shadow\" [style.border-radius]=\"radius\"></div>\n    <div ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" class=\"alpha-container color-alpha-{{direction}}\">\n      <div class=\"alpha-pointer\" [style.left.%]=\"pointerLeft\" [style.top.%]=\"pointerTop\">\n        <div class=\"alpha-slider\" [ngStyle]=\"pointer\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .alpha {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-checkboard {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n    .alpha-gradient {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-container {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .alpha-pointer {\n      position: absolute;\n    }\n    .alpha-slider {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },\n  "]
        })
    ], AlphaComponent);
    return AlphaComponent;
}());
var AlphaModule = /** @class */ (function () {
    function AlphaModule() {
    }
    AlphaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [AlphaComponent],
            exports: [AlphaComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule],
        })
    ], AlphaModule);
    return AlphaModule;
}());

function simpleCheckForValidColor(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    var checked = 0;
    var passed = 0;
    keysToCheck.forEach(function (letter) {
        if (!data[letter]) {
            return;
        }
        checked += 1;
        if (!isNaN(data[letter])) {
            passed += 1;
        }
        if (letter === 's' || letter === 'l') {
            var percentPatt = /^\d+%$/;
            if (percentPatt.test(data[letter])) {
                passed += 1;
            }
        }
    });
    return checked === passed ? data : false;
}
function toState(data, oldHue) {
    var color = data.hex ? new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data.hex) : new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    var rgb = color.toRgb();
    var hex = color.toHex();
    if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
    }
    var transparent = hex === '000000' && rgb.a === 0;
    return {
        hsl: hsl,
        hex: transparent ? 'transparent' : "#" + hex,
        rgb: rgb,
        hsv: hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source,
    };
}
function isValidHex(hex) {
    return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](hex).isValid;
}
function getContrastingColor(data) {
    if (!data) {
        return '#fff';
    }
    var col = toState(data);
    if (col.hex === 'transparent') {
        return 'rgba(0,0,0,0.4)';
    }
    var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
}

var ColorWrap = /** @class */ (function () {
    function ColorWrap() {
        this.className = '';
        this.color = {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1,
        };
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChangeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ColorWrap.prototype.ngOnInit = function () {
        var _this = this;
        this.changes = this.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100))
            .subscribe(function (x) { return _this.onChangeComplete.emit(x); });
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    };
    ColorWrap.prototype.ngOnChanges = function () {
        this.setState(toState(this.color, this.oldHue));
    };
    ColorWrap.prototype.ngOnDestroy = function () {
        this.changes.unsubscribe();
    };
    ColorWrap.prototype.setState = function (data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    };
    ColorWrap.prototype.handleChange = function (data, $event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            var color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({ color: color, $event: $event });
            this.afterValidChange();
        }
    };
    /** hook for components after a complete change */
    ColorWrap.prototype.afterValidChange = function () { };
    ColorWrap.prototype.handleSwatchHover = function (data, $event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            var color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color: color, $event: $event });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ColorWrap.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ColorWrap.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ColorWrap.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ColorWrap.prototype, "onChangeComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ColorWrap.prototype, "onSwatchHover", void 0);
    ColorWrap = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // create seletor base for test override property
            selector: 'color-wrap',
            template: ""
        })
    ], ColorWrap);
    return ColorWrap;
}());
var ColorWrapModule = /** @class */ (function () {
    function ColorWrapModule() {
    }
    ColorWrapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [ColorWrap],
            exports: [ColorWrap],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        })
    ], ColorWrapModule);
    return ColorWrapModule;
}());

var EditableInputComponent = /** @class */ (function () {
    function EditableInputComponent() {
        this.placeholder = '';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focus = false;
    }
    EditableInputComponent.prototype.ngOnInit = function () {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    };
    EditableInputComponent.prototype.handleFocus = function ($event) {
        this.focus = true;
    };
    EditableInputComponent.prototype.handleFocusOut = function ($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    };
    EditableInputComponent.prototype.handleKeydown = function ($event) {
        var _a, _b;
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        var stringValue = String($event.target.value);
        var isPercentage = stringValue.indexOf('%') > -1;
        var num = Number(stringValue.replace(/%/g, ''));
        if (!isNaN(num)) {
            var amount = this.arrowOffset || 1;
            // Up
            if ($event.keyCode === 38) {
                if (this.label) {
                    this.onChange.emit({
                        data: (_a = {}, _a[this.label] = num + amount, _a),
                        $event: $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num + amount, $event: $event });
                }
                if (isPercentage) {
                    this.currentValue = num + amount + "%";
                }
                else {
                    this.currentValue = num + amount;
                }
            }
            // Down
            if ($event.keyCode === 40) {
                if (this.label) {
                    this.onChange.emit({
                        data: (_b = {}, _b[this.label] = num - amount, _b),
                        $event: $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num - amount, $event: $event });
                }
                if (isPercentage) {
                    this.currentValue = num - amount + "%";
                }
                else {
                    this.currentValue = num - amount;
                }
            }
        }
    };
    EditableInputComponent.prototype.handleKeyup = function ($event) {
        var _a;
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: (_a = {}, _a[this.label] = $event.target.value, _a),
                $event: $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event: $event });
        }
    };
    EditableInputComponent.prototype.ngOnChanges = function () {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    };
    EditableInputComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    EditableInputComponent.prototype.subscribe = function () {
        var _this = this;
        this.mousemove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').subscribe(function (ev) {
            return _this.handleDrag(ev);
        });
        this.mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').subscribe(function () {
            return _this.unsubscribe();
        });
    };
    EditableInputComponent.prototype.unsubscribe = function () {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    };
    EditableInputComponent.prototype.handleMousedown = function ($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    };
    EditableInputComponent.prototype.handleDrag = function ($event) {
        var _a;
        if (this.dragLabel) {
            var newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: (_a = {}, _a[this.label] = newValue, _a), $event: $event });
            }
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditableInputComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditableInputComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditableInputComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], EditableInputComponent.prototype, "arrowOffset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], EditableInputComponent.prototype, "dragLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], EditableInputComponent.prototype, "dragMax", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditableInputComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditableInputComponent.prototype, "onChange", void 0);
    EditableInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-editable-input',
            template: "\n  <div class=\"wrap\" [ngStyle]=\"wrapStyle\">\n    <input [ngStyle]=\"inputStyle\" spellCheck=\"false\"\n      [value]=\"currentValue\" [placeholder]=\"placeholder\"\n      (keydown)=\"handleKeydown($event)\" (keyup)=\"handleKeyup($event)\"\n      (focus)=\"handleFocus($event)\" (focusout)=\"handleFocusOut($event)\" />\n    <span *ngIf=\"label\" [ngStyle]=\"labelStyle\" (mousedown)=\"handleMousedown($event)\">\n      {{ label }}\n    </span>\n  </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    :host {\n      display: flex;\n    }\n    .wrap {\n      position: relative;\n    }\n  "]
        })
    ], EditableInputComponent);
    return EditableInputComponent;
}());
var EditableInputModule = /** @class */ (function () {
    function EditableInputModule() {
    }
    EditableInputModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [EditableInputComponent],
            exports: [EditableInputComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        })
    ], EditableInputModule);
    return EditableInputModule;
}());

var HueComponent = /** @class */ (function () {
    function HueComponent() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.left = '0px';
        this.top = '';
    }
    HueComponent.prototype.ngOnChanges = function () {
        if (this.direction === 'horizontal') {
            this.left = this.hsl.h * 100 / 360 + "%";
        }
        else {
            this.top = -(this.hsl.h * 100 / 360) + 100 + "%";
        }
    };
    HueComponent.prototype.handleChange = function (_a) {
        var top = _a.top, left = _a.left, containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, $event = _a.$event;
        var data;
        if (this.direction === 'vertical') {
            var h = void 0;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                var percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h: h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            var h = void 0;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                var percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h: h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data: data, $event: $event });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], HueComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], HueComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], HueComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HueComponent.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], HueComponent.prototype, "hidePointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HueComponent.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], HueComponent.prototype, "onChange", void 0);
    HueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-hue',
            template: "\n  <div class=\"color-hue color-hue-{{direction}}\" [style.border-radius.px]=\"radius\" [style.box-shadow]=\"shadow\">\n    <div ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" class=\"color-hue-container\">\n      <div class=\"color-hue-pointer\" [style.left]=\"left\" [style.top]=\"top\" *ngIf=\"!hidePointer\">\n        <div class=\"color-hue-slider\" [ngStyle]=\"pointer\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    .color-hue {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-hue-container {\n      margin: 0 2px;\n      position: relative;\n      height: 100%;\n    }\n    .color-hue-pointer {\n      position: absolute;\n    }\n    .color-hue-slider {\n      margin-top: 1px;\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      transform: translateX(-2px);\n    }\n    .color-hue-horizontal {\n      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n    .color-hue-vertical {\n      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n  "]
        })
    ], HueComponent);
    return HueComponent;
}());
var HueModule = /** @class */ (function () {
    function HueModule() {
    }
    HueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [HueComponent],
            exports: [HueComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
        })
    ], HueModule);
    return HueModule;
}());

var RaisedComponent = /** @class */ (function () {
    function RaisedComponent() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], RaisedComponent.prototype, "zDepth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RaisedComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RaisedComponent.prototype, "background", void 0);
    RaisedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-raised',
            template: "\n  <div class=\"raised-wrap\">\n    <div class=\"raised-bg zDepth-{{zDepth}}\" [style.background]=\"background\"></div>\n    <div class=\"raised-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    .raised-wrap {\n      position: relative;\n      display: inline-block;\n    }\n    .raised-bg {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    .raised-content {\n      position: relative;\n    }\n    .zDepth-0 {\n      box-shadow: none;\n    }\n    .zDepth-1 {\n      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n    }\n    .zDepth-2 {\n      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);\n    }\n    .zDepth-3 {\n      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);\n    }\n    .zDepth-4 {\n      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);\n    }\n    .zDepth-5 {\n      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);\n    }\n  "]
        })
    ], RaisedComponent);
    return RaisedComponent;
}());
var RaisedModule = /** @class */ (function () {
    function RaisedModule() {
    }
    RaisedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [RaisedComponent],
            exports: [RaisedComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        })
    ], RaisedModule);
    return RaisedModule;
}());

var SaturationComponent = /** @class */ (function () {
    function SaturationComponent() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    SaturationComponent.prototype.ngOnChanges = function () {
        this.background = "hsl(" + this.hsl.h + ", 100%, 50%)";
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    };
    SaturationComponent.prototype.handleChange = function (_a) {
        var top = _a.top, left = _a.left, containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, $event = _a.$event;
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        var saturation = left / containerWidth;
        var bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        var data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data: data, $event: $event });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SaturationComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SaturationComponent.prototype, "hsv", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], SaturationComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SaturationComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SaturationComponent.prototype, "circle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SaturationComponent.prototype, "onChange", void 0);
    SaturationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-saturation',
            template: "\n  <div class=\"color-saturation\" ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" [style.background]=\"background\">\n    <div class=\"saturation-white\">\n      <div class=\"saturation-black\"></div>\n      <div class=\"saturation-pointer\" [ngStyle]=\"pointer\" [style.top]=\"pointerTop\" [style.left]=\"pointerLeft\">\n        <div class=\"saturation-circle\" [ngStyle]=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    .saturation-white {\n      background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-black {\n      background: linear-gradient(to top, #000, rgba(0,0,0,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-saturation {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-pointer {\n      position: absolute;\n      cursor: default;\n    }\n    .saturation-circle {\n      width: 4px;\n      height: 4px;\n      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n      border-radius: 50%;\n      cursor: hand;\n      transform: translate(-2px, -4px);\n    }\n  "]
        })
    ], SaturationComponent);
    return SaturationComponent;
}());
var SaturationModule = /** @class */ (function () {
    function SaturationModule() {
    }
    SaturationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [SaturationComponent],
            exports: [SaturationComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
        })
    ], SaturationModule);
    return SaturationModule;
}());

var SwatchComponent = /** @class */ (function () {
    function SwatchComponent() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    SwatchComponent.prototype.ngOnInit = function () {
        this.divStyles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ background: this.color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' }, this.style);
    };
    SwatchComponent.prototype.currentStyles = function () {
        this.focusStyles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.divStyles, this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    };
    SwatchComponent.prototype.handleFocusOut = function () {
        this.inFocus = false;
    };
    SwatchComponent.prototype.handleFocus = function () {
        this.inFocus = true;
    };
    SwatchComponent.prototype.handleHover = function (hex, $event) {
        this.onHover.emit({ hex: hex, $event: $event });
    };
    SwatchComponent.prototype.handleClick = function (hex, $event) {
        this.onClick.emit({ hex: hex, $event: $event });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SwatchComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SwatchComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SwatchComponent.prototype, "focusStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SwatchComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SwatchComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SwatchComponent.prototype, "onHover", void 0);
    SwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-swatch',
            template: "\n    <div\n      class=\"swatch\"\n      [ngStyle]=\"currentStyles()\"\n      [attr.title]=\"color\"\n      (click)=\"handleClick(color, $event)\"\n      (keydown.enter)=\"handleClick(color, $event)\"\n      (focus)=\"handleFocus()\"\n      (blur)=\"handleFocusOut()\"\n      (mouseover)=\"handleHover(color, $event)\"\n      tabindex=\"0\"\n    >\n      <ng-content></ng-content>\n      <color-checkboard\n        *ngIf=\"color === 'transparent'\"\n        boxShadow=\"inset 0 0 0 1px rgba(0,0,0,0.1)\"\n      ></color-checkboard>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        })
    ], SwatchComponent);
    return SwatchComponent;
}());
var SwatchModule = /** @class */ (function () {
    function SwatchModule() {
    }
    SwatchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [SwatchComponent],
            exports: [SwatchComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule],
        })
    ], SwatchModule);
    return SwatchModule;
}());

var ShadeComponent = /** @class */ (function () {
    function ShadeComponent() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ShadeComponent.prototype.ngOnChanges = function () {
        this.gradient = {
            background: "linear-gradient(to right,\n          hsl(" + this.hsl.h + ", 90%, 55%),\n          #000)",
        };
        var hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    };
    ShadeComponent.prototype.handleChange = function (_a) {
        var left = _a.left, containerWidth = _a.containerWidth, $event = _a.$event;
        var data;
        var v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        var hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data: data, $event: $event });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ShadeComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ShadeComponent.prototype, "rgb", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ShadeComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], ShadeComponent.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], ShadeComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ShadeComponent.prototype, "onChange", void 0);
    ShadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'color-shade',
            template: "\n    <div class=\"shade\" [style.border-radius]=\"radius\">\n      <div\n        class=\"shade-gradient\"\n        [ngStyle]=\"gradient\"\n        [style.box-shadow]=\"shadow\"\n        [style.border-radius]=\"radius\"\n      ></div>\n      <div\n        ngx-color-coordinates\n        (coordinatesChange)=\"handleChange($event)\"\n        class=\"shade-container\"\n      >\n        <div\n          class=\"shade-pointer\"\n          [style.left.%]=\"pointerLeft\"\n          [style.top.%]=\"pointerTop\"\n        >\n          <div class=\"shade-slider\" [ngStyle]=\"pointer\"></div>\n        </div>\n      </div>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .shade {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-gradient {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-container {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .shade-pointer {\n      position: absolute;\n    }\n    .shade-slider {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },\n  "]
        })
    ], ShadeComponent);
    return ShadeComponent;
}());
var ShadeModule = /** @class */ (function () {
    function ShadeModule() {
    }
    ShadeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [ShadeComponent],
            exports: [ShadeComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
        })
    ], ShadeModule);
    return ShadeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/visitor-tools/fake-customer/fake-customer.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/visitor-tools/fake-customer/fake-customer.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\" fxLayout=\"row\" fxLayout.xs=\"column\">\n    <div class=\"parent-title\">CÔNG CỤ KHÁCH HÀNG\n      <mat-icon>arrow_forward_ios</mat-icon>\n    </div>\n    <div class=\"subtitle\">CẤU HÌNH GIẢ KHÁCH MUA HÀNG - WEBSITE\n      <span class=\"selected-website\">\n        {{(websiteCtrl.value.name || '') | uppercase}}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"inner\" *ngIf=\"isProcessing === false\">\n\n    <div class=\"no-website-notify\" *ngIf=\"hasWebsite === false\">\n      Không tìm thấy website nào.\n    </div>\n\n    <div *ngIf=\"hasWebsite === true\">\n      <mat-form-field class=\"website-selection\">\n        <mat-label>Lựa chọn website</mat-label>\n        <mat-select [formControl]=\"websiteCtrl\" #singleSelect (selectionChange)=\"selectWebsite()\"\n          [disabled]=\"isProcessing === true\">\n          <mat-option>\n            <ngx-mat-select-search [formControl]=\"websiteFilterCtrl\" [placeholderLabel]=\"'Tìm kiếm'\"\n              [noEntriesFoundLabel]=\"'Không tìm thấy website nào'\"></ngx-mat-select-search>\n          </mat-option>\n          <mat-option *ngFor=\"let website of filteredWebsites | async\" [value]=\"website\">\n            {{website.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div class=\"fake-customer-config\">\n        <div fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\">\n          <div class=\"config\" fxFlex=\"50\">\n            <mat-accordion>\n              <mat-expansion-panel (opened)=\"configPanelOpenState = true\" (closed)=\"configPanelOpenState = false\">\n                <mat-expansion-panel-header>\n                  <mat-panel-description>\n                    <span class=\"step-label\">1</span>\n                    Kích hoạt, vị trí, thời gian hiển thị\n                    <!-- <mat-icon>more_horiz</mat-icon> -->\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <div class=\"panel-content\">\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"20\">Cho phép hiển thị</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"enabled-toggle\">\n                        <mat-slide-toggle [color]=\"enableDisplayToggle.color\" [checked]=\"displayConfig.isEnabled\"\n                          [disabled]=\"enableDisplayToggle.disabled\" (change)=\"onCheckEnableDisplayToggle($event)\">\n                        </mat-slide-toggle>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"20\">Thiết bị</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"enabled-device-selection\">\n                        <mat-checkbox *ngFor=\"let item of displayConfig.runningDevices\" [checked]=\"item.checked\"\n                          (change)=\"onSelectRunningDeviceCheckBox($event, item.value)\">\n                          {{item.name}}\n                        </mat-checkbox>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start center\">\n                    <div class=\"item-title\" fxFlex=\"20\">Vị trí</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"position-selection\" fxLayout=\"row\" fxLayoutGap=\"31px\">\n                        <div class=\"position-option-wrapper\" *ngFor=\"let element of positionOptions\"\n                          [class.selected]=\"element.selected\" (click)=\"onSelectPositionOption(element.value)\">\n                          <div class=\"position-option\">\n                            <div class=\"notification {{element.name}}\"></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start center\">\n                    <div class=\"item-title\" fxFlex=\"20\">Thời gian hiển thị</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"time-setting\">\n                        <span>{{minAutoDisplayTime}} giây</span>\n                        <mat-slider class=\"example-margin\" [value]=\"displayConfig.autoDisplayTime\" [disabled]=\"false\"\n                          [invert]=\"false\" [min]=\"minAutoDisplayTime\" [max]=\"maxAutoDisplayTime\" [step]=\"1\"\n                          [thumbLabel]=\"true\" [tickInterval]=\"10\" [vertical]=\"false\" color=\"accent\"\n                          (change)=\"onChangeAutoDisplayTime($event)\">\n                        </mat-slider>\n                        <span>{{maxAutoDisplayTime}} giây</span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"btn-apply\">\n                    <button mat-stroked-button (click)=\"applyFakeCustomerConfig(1)\">Áp dụng</button>\n                  </div>\n\n                </div>\n              </mat-expansion-panel>\n\n              <mat-expansion-panel (opened)=\"configPanelOpenState = true\" (closed)=\"configPanelOpenState = false\">\n                <mat-expansion-panel-header>\n                  <mat-panel-description>\n                    <span class=\"step-label\">2</span>\n                    Nội dung hiển thị\n                    <!-- <mat-icon>more_horiz</mat-icon> -->\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <div class=\"panel-content\">\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"20\">Ảnh đại diện</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"avatar-selection\">\n                        <mat-radio-group fxLayout=\"row\" fxLayoutGap=\"10px grid\" fxLayoutAlign=\"center center\"\n                          (change)=\"onSelectAvatarOption($event)\">\n                          <mat-radio-button *ngFor=\"let item of avatarOptions\" [value]=\"item.value\"\n                            [checked]=\"item.checked\">\n                            {{item.name}}\n                          </mat-radio-button>\n                        </mat-radio-group>\n                      </div>\n                      <div class=\"show-hide-avatar-storage\">\n                        <div class=\"btn btn-show no-select\" *ngIf=\"!isAvatarStorageShown\"\n                          (click)=\"isAvatarStorageShown = true\">Xem bộ sưu tập</div>\n                        <div class=\"btn btn-hide no-select\" *ngIf=\"isAvatarStorageShown\"\n                          (click)=\"isAvatarStorageShown = false\">Ẩn bộ sưu tập</div>\n                      </div>\n                      <div *ngIf=\"isAvatarStorageShown\" class=\"avatar-storage\" fxLayout=\"row wrap\"\n                        fxLayoutAlign=\"center center\">\n                        <img src=\"{{url}}\" alt=\"\" *ngFor=\"let url of avatars\">\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"notice\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n                    <span style=\"color: crimson\">*</span><span>\n                      Bạn có thể sử dụng cú pháp <span class=\"highline\">#fake_name</span> <span\n                        class=\"highline\">#fake_phone</span> <span class=\"highline\">#fake_email</span> hoặc\n                      <span class=\"highline\">#fake_location</span> để thêm vào tiêu đề và nội dung. Cú pháp sẽ làm cho\n                      nội\n                      dung sinh động hơn.\n                    </span>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"14.3\">Tiêu đề</div>\n                    <div class=\"item-content\" fxFlex=\"85.7\">\n                      <div class=\"custom-content\">\n                        <div class=\"fake-data-selection\" fxLayout=\"row wrap\" fxLayoutGap=\"grid\">\n\n                          <span class=\"fake-data sample no-select {{item.value !== 5 ? 'info' : 'text'}}\"\n                            *ngFor=\"let item of fakeDataFields\" (click)=\"onSelectFakeDataField({\n                            name: item.name,\n                            fieldName: item.fieldName,\n                            value: item.value\n                          }, 1)\">{{item.name}}</span>\n\n                          <div class=\"btn-clear-all-selected\">\n                            <span class=\"no-select\" (click)=\"clearAllSelectedFakeData(1)\">Clear all</span>\n                          </div>\n\n                        </div>\n\n                        <!-- <div class=\"fake-data-collection no-select example-list\" fxLayout=\"row wrap\" fxLayoutGap=\"grid\"\n                          fxLayoutAlign=\"start start\" cdkDropList cdkDropListOrientation=\"horizontal\"\n                          (cdkDropListDropped)=\"drop($event)\">\n\n                          <div class=\"fake-data selected {{item.value !== 5 ? 'info' : 'text'}} no-select example-box\"\n                            *ngFor=\"let item of selectedTitleFakeDataFields; let i = index\" cdkDrag>\n\n                            <span *ngIf=\"item.value !== 5\">{{item.name}}</span>\n\n                            <textarea *ngIf=\"item.value === 5\" type=\"text\" placeholder=\"Nhập nội dung\" autofocus\n                              (input)=\"onInputFakeDataText($event.target.value, {option: 1, index: i})\"></textarea>\n\n                            <button mat-icon-button class=\"btn-remove\" (click)=\"removeSelectedFakeDataField(i, 1)\">\n                              <mat-icon>close</mat-icon>\n                            </button>\n\n                          </div>\n\n                          <span *ngIf=\"selectedTitleFakeDataFields.length === 0\" class=\"placeholder\">Chưa có nội\n                            dung</span>\n\n                        </div> -->\n\n                        <textarea class=\"fake-data-input\" placeholder=\"Chưa có nội dung\"\n                          [(ngModel)]=\"contentConfig.title\" (input)=\"onInputContent($event, 1)\">{{contentConfig.title}}</textarea>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"14.3\">Nội dung</div>\n                    <div class=\"item-content\" fxFlex=\"85.7\">\n                      <div class=\"custom-content\">\n                        <div class=\"fake-data-selection\" fxLayout=\"row wrap\" fxLayoutGap=\"grid\">\n\n                          <span class=\"fake-data sample no-select {{item.value !== 5 ? 'info' : 'text'}}\"\n                            *ngFor=\"let item of fakeDataFields\" (click)=\"onSelectFakeDataField({\n                            name: item.name,\n                            fieldName: item.fieldName,\n                            value: item.value\n                          }, 2)\">{{item.name}}</span>\n\n                          <div class=\"btn-clear-all-selected\">\n                            <span class=\"no-select\" (click)=\"clearAllSelectedFakeData(2)\">Clear all</span>\n                          </div>\n\n                        </div>\n\n                        <!-- <div class=\"fake-data-collection no-select example-list\" fxLayout=\"row wrap\" fxLayoutGap=\"grid\"\n                          fxLayoutAlign=\"start start\" cdkDropList cdkDropListOrientation=\"horizontal\"\n                          (cdkDropListDropped)=\"drop($event)\">\n\n                          <div class=\"fake-data selected {{item.value !== 5 ? 'info' : 'text'}} no-select example-box\"\n                            *ngFor=\"let item of selectedBodyFakeDataFields; let i = index\" cdkDrag>\n\n                            <span *ngIf=\"item.value !== 5\">{{item.name}}</span>\n\n                            <textarea *ngIf=\"item.value === 5\" type=\"text\" placeholder=\"Nhập nội dung\" autofocus\n                              (input)=\"onInputFakeDataText($event.target.value, {option: 2, index: i})\"></textarea>\n\n                            <button mat-icon-button class=\"btn-remove\" (click)=\"removeSelectedFakeDataField(i, 2)\">\n                              <mat-icon>close</mat-icon>\n                            </button>\n\n                          </div>\n\n                          <span *ngIf=\"selectedBodyFakeDataFields.length === 0\" class=\"placeholder\">Chưa có nội\n                            dung</span>\n\n                        </div> -->\n\n                        <textarea class=\"fake-data-input\" placeholder=\"Chưa có nội dung\"\n                          [(ngModel)]=\"contentConfig.body\" (input)=\"onInputContent($event, 2)\">{{contentConfig.body}}</textarea>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"14.3\">Link đến trang</div>\n                    <div class=\"item-content\" fxFlex=\"85.7\">\n                      <div class=\"enter-page-url\">\n                        <input type=\"text\" placeholder=\"Chưa có đường dẫn\" value=\"{{contentConfig.pageUrl}}\"\n                          (input)=\"onInputPageUrl($event)\">\n\n                        <div class=\"enter-page-url__notice\">\n                          <span style=\"color: crimson\">*</span> Đường dẫn phải kèm theo <span\n                            class=\"highline\">http://</span> hoặc <span class=\"highline\">https://</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"btn-apply\">\n                    <button mat-stroked-button (click)=\"applyFakeCustomerConfig(2)\">Áp dụng</button>\n                  </div>\n\n                </div>\n              </mat-expansion-panel>\n\n              <mat-expansion-panel (opened)=\"configPanelOpenState = true\" (closed)=\"configPanelOpenState = false\">\n                <mat-expansion-panel-header>\n                  <mat-panel-description>\n                    <span class=\"step-label\">3</span>\n                    Màu sắc chủ đề, hình dạng\n                    <!-- <mat-icon>more_horiz</mat-icon> -->\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <div class=\"panel-content\">\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"20\">Màu sắc chủ đề</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"theme-color-selection\">\n                        <color-circle [color]=\"styleConfig.themeColor\" (onChangeComplete)=\"onSelectThemeColor($event)\"\n                          circleSize=\"15\" width=\"100%\">\n                        </color-circle>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start start\">\n                    <div class=\"item-title\" fxFlex=\"20\">Hình dạng</div>\n                    <div class=\"item-content\" fxFlex=\"80\">\n                      <div class=\"shape-selection\">\n                        <mat-radio-group fxLayout=\"row\" (change)=\"onSelectShapeOption($event)\">\n                          <mat-radio-button *ngFor=\"let item of shapeOptions\" [value]=\"item.value\"\n                            [checked]=\"item.checked\">\n                            {{item.name}}\n                          </mat-radio-button>\n                        </mat-radio-group>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"btn-apply\">\n                    <button mat-stroked-button (click)=\"applyFakeCustomerConfig(3)\">Áp dụng</button>\n                  </div>\n\n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </div>\n\n          <div class=\"sample\" fxFlex=\"50\">\n            <div class=\"browser-container\">\n              <div class=\"browser\" fxLayout=\"column\">\n                <div class=\"website-domain\">\n                  <a href=\"{{websiteCtrl.value.name}}\" target=\"_blank\"\n                    matTooltip=\"Nhấn để truy cập website của bạn\">{{websiteCtrl.value.name}}</a>\n                </div>\n                <div class=\"fake-customer {{selectedPosition.name}} {{selectedShape.style}}\" fxLayout=\"row\"\n                  fxLayoutAlign=\"start center\" [style.border-left]=\"'4px solid ' + styleConfig.themeColor\">\n                  <div class=\"avatar-area\">\n                    <div class=\"avatar\">\n                      <img src=\"{{avatars[0]}}\" alt=\"\">\n                    </div>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"title\">{{sampleTitle || 'Chưa có tiêu đề'}}</div>\n                    <div class=\"body\" fxLayout=\"column\">{{sampleBody || 'Chưa có nội dung'}}</div>\n                    <div class=\"page-url\">\n                      <a href=\"{{contentConfig.pageUrl}} || ''\"\n                        [style.color]=\"styleConfig.themeColor\">{{contentConfig.pageUrl || 'Chưa có link'}}</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/visitor-tools/send-info/send-info.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/visitor-tools/send-info/send-info.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\" fxLayout=\"row\" fxLayout.xs=\"column\">\n    <div class=\"parent-title\">CÔNG CỤ KHÁCH HÀNG\n      <mat-icon>arrow_forward_ios</mat-icon>\n    </div>\n    <div class=\"subtitle\">CẤU HÌNH GỬI THÔNG TIN TƯ VẤN - WEBSITE\n      <span class=\"selected-website\">\n        {{(websiteCtrl.value.name || '') | uppercase}}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"inner\" *ngIf=\"isProcessing === false\">\n\n    <div class=\"no-website-notify\" *ngIf=\"hasWebsite === false\">\n      Không tìm thấy website nào.\n    </div>\n\n    <div *ngIf=\"hasWebsite === true\">\n      <mat-form-field class=\"website-selection\">\n        <mat-label>Lựa chọn website</mat-label>\n        <mat-select [formControl]=\"websiteCtrl\" #singleSelect (selectionChange)=\"selectWebsite()\"\n          [disabled]=\"isProcessing === true\">\n          <mat-option>\n            <ngx-mat-select-search [formControl]=\"websiteFilterCtrl\" [placeholderLabel]=\"'Tìm kiếm'\"\n              [noEntriesFoundLabel]=\"'Không tìm thấy website nào'\"></ngx-mat-select-search>\n          </mat-option>\n          <mat-option *ngFor=\"let website of filteredWebsites | async\" [value]=\"website\">\n            {{website.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div class=\"popup-config\">\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\">\n          <div class=\"tabs\" fxFlex=\"50\">\n            <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n              <mat-tab label=\"1. Nội dung popup\">\n                <div class=\"tab-content popup-style\">\n                  <form [formGroup]=\"popupStyleForm\" (ngSubmit)=\"submitPopupStyleForm()\">\n                    <div class=\"theme-color-selection\">\n                      <mat-label style=\"color: gray\">\n                        <mat-icon>palette</mat-icon>\n                        Màu sắc chủ đề\n                      </mat-label>\n                      <div class=\"form-control select-color-panel\">\n                        <color-circle [color]=\"popupStyleForm.controls['themeColor'].value\"\n                          (onChangeComplete)=\"selectColorCircle($event)\" circleSize=\"15\" width=\"100%\">\n                        </color-circle>\n                      </div>\n                    </div>\n                    <div class=\"background-image-selection\">\n                      <p class=\"background-image-selection-title\">\n                        <mat-icon>headset_mic</mat-icon>\n                        Thông tin người tư vấn\n                      </p>\n                      <div class=\"supporter-details\">\n                        <mat-form-field class=\"example-full-width\" class=\"popup-style-form-field\">\n                          <input matInput placeholder=\"Họ và tên\" formControlName=\"supporterName\" maxlength=\"30\">\n                        </mat-form-field>\n                        <div *ngIf=\"supporterName.invalid && (supporterName.dirty || supporterName.touch)\"\n                          class=\"errors\">\n                          <div *ngIf=\"supporterName.errors.required\">\n                            Bắt buộc\n                          </div>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"15px\" class=\"popup-style-form-field\">\n                          <mat-form-field class=\"example-full-width\" fxFlex=\"65\">\n                            <input matInput placeholder=\"Chuyên môn\" formControlName=\"supporterMajor\" maxlength=\"30\">\n                          </mat-form-field>\n                          <div fxFlex=\"35\">\n                            <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"Số điện thoại\" formControlName=\"supporterPhone\"\n                                maxlength=\"10\">\n                            </mat-form-field>\n                            <div *ngIf=\"supporterPhone.invalid && (supporterPhone.dirty || supporterPhone.touch)\"\n                              class=\"errors\">\n                              <div *ngIf=\"supporterPhone.errors.required\">\n                                Bắt buộc\n                              </div>\n                              <div *ngIf=\"supporterPhone.errors.invalidPhoneNumber\">\n                                Số điện thoại không hợp lệ\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                      <div class=\"background-image-selection-storage\">\n                        <mat-label style=\"color: gray; font-size: 12px\">Ảnh đại diện</mat-label>\n                        <div class=\"form-control\" fxLayout=\"row wrap\" fxLayoutGap=\"grid\">\n                          <img src=\"{{url}}\" alt=\"\" *ngFor=\"let url of images\" (click)=\"selectSupporterAvatar(url)\">\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                  <div class=\"submit-area\">\n                    <button mat-raised-button color=\"accent\" (click)=\"submitPopupStyleForm(false)\">\n                      Lưu cấu hình\n                    </button>\n                  </div>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"2. Cài đặt hiển thị\">\n                <div class=\"tab-content popup-display\">\n                  <div class=\"enable-display\">\n                    <mat-slide-toggle [color]=\"popupDisplayEnableSlideToggle.color\"\n                      [checked]=\"popupDisplayEnableSlideToggle.checked\"\n                      [disabled]=\"popupDisplayEnableSlideToggle.disabled\"\n                      (change)=\"onCheckPopupDisplayEnableSlideToggle($event)\">\n                      {{popupDisplayEnableSlideToggle.label}}\n                    </mat-slide-toggle>\n                  </div>\n\n                  <div class=\"customize-open-popup-button-position\" *ngIf=\"popupDisplayEnableSlideToggle.checked\">\n                    <mat-label style=\"color: gray; font-size: 12px\">Vị trí nút mở popup</mat-label>\n                    <div class=\"selection\">\n                      <mat-radio-group fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\"\n                        (change)=\"changeOpenPopupButtonPosition($event)\">\n                        <mat-radio-button *ngFor=\"let item of openPopupButtonPositions\" [value]=\"item.value\"\n                          [checked]=\"item.checked\">\n                          {{item.name}}\n                        </mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                  </div>\n\n                  <div class=\"auto-display-popup\">\n                    <div class=\"enable-toggle\">\n                      <mat-slide-toggle [color]=\"autoDisplayPopupSlideToggle.color\"\n                        [checked]=\"autoDisplayPopupSlideToggle.checked\"\n                        [disabled]=\"autoDisplayPopupSlideToggle.disabled\"\n                        (change)=\"onCheckAutoDisplayPopupSlideToggle($event)\">\n                        {{autoDisplayPopupSlideToggle.label}}\n                      </mat-slide-toggle>\n                    </div>\n                    <div class=\"time-selection\" *ngIf=\"autoDisplayPopupSlideToggle.checked\">\n                      <mat-radio-group fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\"\n                        (change)=\"changeAutoDisplayPopupTime($event)\">\n                        <mat-radio-button *ngFor=\"let item of autoDisplayPopupTimeOptions\" [value]=\"item.value\"\n                          [checked]=\"item.checked\">\n                          {{item.name}}\n                        </mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"display-popup-before-exit-page\">\n                    <mat-slide-toggle [color]=\"displayPopupBeforeExitPageToggle.color\"\n                      [checked]=\"displayPopupBeforeExitPageToggle.checked\"\n                      [disabled]=\"displayPopupBeforeExitPageToggle.disabled\"\n                      (change)=\"onCheckDisplayPopupBeforeExitPageToggle($event)\">\n                      {{displayPopupBeforeExitPageToggle.label}}\n                    </mat-slide-toggle>\n                  </div> -->\n\n                </div>\n              </mat-tab>\n              <!-- <mat-tab label=\"3. Nội dung thành công\" [disabled]=\"true\">\n                <div class=\"tab-content popup-done\">\n                  Chúng tôi đang xây dựng chức năng này.\n                </div>\n              </mat-tab> -->\n            </mat-tab-group>\n          </div>\n\n          <div class=\"popup-example\" fxFlex=\"50\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n            <div class=\"browser-container\">\n              <div class=\"browser\" fxLayout=\"column\">\n                <div class=\"website-domain\">\n                  <a href=\"{{websiteCtrl.value.name}}\" target=\"_blank\"\n                    matTooltip=\"Nhấn để truy cập website của bạn\">{{websiteCtrl.value.name}}</a>\n                </div>\n                <div class=\"popup\">\n                  <div class=\"header\">\n                    <span>x</span>\n                  </div>\n                  <div class=\"content\">\n                    <div fxLayout=\"row\">\n                      <div class=\"info\" fxFlex=\"60\">\n                        <div class=\"title\" [style.color]=\"popupStyleForm.controls['themeColor'].value\">Trợ giúp qua điện\n                          thoại\n                        </div>\n                        <div class=\"notice\">\n                          Vui lòng nhập họ tên, số điện thoại và email của bạn, chúng tôi sẽ gọi lại bạn ngay. Hoặc bạn\n                          có\n                          thể <span [style.color]=\"popupStyleForm.controls['themeColor'].value\">nhấn vào đây</span> để\n                          gọi\n                          trực tiếp cho chúng tôi.\n                        </div>\n                        <div class=\"input\">Họ và tên</div>\n                        <div class=\"input\">Số điện thoại</div>\n                        <div class=\"input\">Địa chỉ email</div>\n                        <p class=\"button\" [style.background]=\"popupStyleForm.controls['themeColor'].value\">Gửi yêu cầu\n                        </p>\n                      </div>\n                      <div class=\"background-img\" fxFlex=\"40\">\n                        <div class=\"supporter-avatar\" [style.background-image]=\"'url(' + popupStyleForm.controls['supporterAvatar'].value + ')'\"></div>\n                        <div class=\"supporter-name\">{{popupStyleForm.controls['supporterName'].value || ''}}</div>\n                        <div class=\"supporter-major\">{{popupStyleForm.controls['supporterMajor'].value || ''}}</div>\n                        <div class=\"supporter-phone\">\n                          <img src=\"https://ducanhduhoc.vn/wp-content/themes/zen/asset/img/phone-flat.png\" alt=\"\"\n                            class=\"phone-icon\">\n                          <span class=\"phone-number\">{{popupStyleForm.controls['supporterPhone'].value || ''}}</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"footer\">\n                      <img src=\"https://image.flaticon.com/icons/png/128/222/222506.png\" alt=\"\">\n                      <span>x2.com.vn</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"open-popup-button-wrapper\">\n                  <div class=\"open-popup-button\" *ngIf=\"popupDisplayEnableSlideToggle.checked\"\n                    [class.bottom-left]=\"openPopupButtonPositionStyle === 1\"\n                    [class.bottom-right]=\"openPopupButtonPositionStyle === 2\"\n                    [class.center-right]=\"openPopupButtonPositionStyle === 3\"\n                    [class.center-left]=\"openPopupButtonPositionStyle === 4\"\n                    [class.top-left]=\"openPopupButtonPositionStyle === 5\"\n                    [class.top-right]=\"openPopupButtonPositionStyle === 6\"\n                    [ngStyle]=\"{'background-image': 'url(' + popupStyleForm.controls['supporterAvatar'].value + ')'}\">\n                    <div class=\"say-hello-label\">Hi</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/visitor-tools/fake-customer/fake-customer.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/visitor-tools/fake-customer/fake-customer.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-drag-preview {\n  margin-top: 8px;\n  margin-right: 12px;\n  min-height: 24px;\n  font-size: 10px;\n  border: 0;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  padding: 2px 6px 1px 6px;\n  font-weight: bold;\n  border-radius: 3px;\n  max-height: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.cdk-drag-preview.info {\n  background: #039be5;\n  color: white;\n}\n.cdk-drag-preview.text {\n  padding-right: 0;\n  min-height: 45px;\n  background: #f1f3f5;\n  color: rgba(0, 0, 0, 0.7);\n}\n.cdk-drag-preview.text textarea {\n  padding: 2px;\n  width: 150px;\n  height: 35px;\n  border: 0;\n}\n.cdk-drag-preview .btn-remove {\n  display: none;\n}\n.container {\n  width: 100%;\n  height: 50vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  background-attachment: fixed;\n}\n.container .no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n               supported by Chrome, Opera and Firefox */\n}\n.container ::ng-deep .mat-tab-group .mat-tab-body .mat-tab-body-content {\n  overflow: hidden !important;\n}\n.container ::ng-deep .mat-tab-group .mat-tab-body {\n  overflow-y: hidden !important;\n}\n.container ::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.container body.theme-default .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background: #039be5;\n}\n.container .main-title {\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 16px;\n  padding: 45px 30px 0 60px;\n  height: 25vh;\n  font-weight: bold;\n}\n.container .main-title mat-icon {\n  font-size: 14px;\n  margin: 4px 0 0 10px;\n}\n.container .main-title .selected-website {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  min-height: 450px;\n  width: 94%;\n  background: white;\n  margin: 40px;\n  padding: 50px 20px 0 50px;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  z-index: 10;\n  top: -16vh;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .errors {\n  color: crimson;\n  font-size: 10px;\n  margin-top: -10px;\n  padding-bottom: 10px;\n}\n.container .inner .website-selection {\n  width: 250px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  color: gray;\n}\n.container .inner .title2.popup-config-title {\n  padding: 15px 0 15px 0;\n}\n.container .inner .fake-customer-config {\n  padding: 20px 0 20px 0;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content {\n  padding: 0 20px 0px 0;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .btn-apply {\n  width: 100%;\n  text-align: right;\n  margin-top: 10px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .btn-apply button {\n  font-size: 12px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .notice {\n  padding-top: 30px;\n  font-size: 10px;\n  color: gray;\n  line-height: 16px;\n  text-align: justify;\n  padding-left: 5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .notice .highline {\n  font-weight: bold;\n  color: #039be5;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item {\n  padding-top: 20px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-title {\n  font-size: 11px;\n  color: gray;\n  text-align: right;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection {\n  margin-left: -2px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper {\n  border: 2px solid white;\n  padding: 2px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option {\n  width: 40px;\n  height: 40px;\n  background: #e5f4fc;\n  border: 0.5px solid #40a5ec;\n  cursor: pointer;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option:hover {\n  opacity: 0.8;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option .notification {\n  width: 15px;\n  height: 7px;\n  background: #039be5;\n  position: relative;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option .notification.bottom-left {\n  top: 30px;\n  left: 2px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option .notification.bottom-right {\n  top: 30px;\n  left: 22px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option .notification.top-left {\n  top: 2px;\n  left: 2px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .position-option-wrapper .position-option .notification.top-right {\n  top: 2px;\n  left: 22px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .position-selection .selected {\n  border: 2px solid orange;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .time-setting {\n  color: gray;\n  font-size: 10px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .time-setting mat-slider {\n  width: 195px;\n  margin-left: 10px;\n  margin-right: 5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .avatar-selection .mat-radio-button {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 2px;\n  width: 160px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .show-hide-avatar-storage {\n  padding-top: 10px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .show-hide-avatar-storage .btn {\n  cursor: pointer;\n  border: 0.5px solid #039be5;\n  font-size: 9px;\n  font-weight: bold;\n  border-radius: 4px;\n  width: 90px;\n  display: table;\n  text-align: center;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .show-hide-avatar-storage .btn-show {\n  background: white;\n  color: #039be5;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .show-hide-avatar-storage .btn-show:hover {\n  background: #039be5;\n  color: white;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .show-hide-avatar-storage .btn-hide {\n  background: #039be5;\n  color: white;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .avatar-storage {\n  height: 180px;\n  border-radius: 5px;\n  margin: 10px 0 5px 0;\n  padding: 5px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-animation: 0.2s fadeIn ease-in;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .avatar-storage img {\n  margin: 2.5px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: fade 0.2s linear;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .avatar-storage img:hover {\n  -webkit-transform: scale(2, 2);\n          transform: scale(2, 2);\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data {\n  font-size: 9px;\n  padding: 2px 6px 1px 6px;\n  font-weight: bold;\n  border-radius: 3px;\n  max-height: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 4px 2px 2px 2px;\n  cursor: pointer;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.sample {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.sample.info {\n  color: #039be5;\n  border: 0.5px solid #039be5;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.sample.info:hover {\n  background: #40a5ec;\n  color: white;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.sample.text {\n  color: rgba(0, 0, 0, 0.7);\n  border: 0.5px solid silver;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.sample.text:hover {\n  background: #f1f3f5;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected {\n  margin-top: 8px;\n  margin-right: 12px;\n  min-height: 24px;\n  font-size: 10px;\n  border: 0;\n  cursor: default;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.info {\n  background: #039be5;\n  color: white;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.text {\n  padding-right: 0;\n  min-height: 45px;\n  background: #f1f3f5;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.text textarea {\n  padding: 2px;\n  width: 150px;\n  height: 35px;\n  border: 0;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.text .btn-remove {\n  top: -19px;\n  right: -5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.text .btn-remove mat-icon {\n  margin-top: -7px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected .btn-remove {\n  font-size: 11px;\n  padding: 1px;\n  background: white;\n  color: gray;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  top: -9px;\n  right: -11px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  cursor: pointer;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected .btn-remove mat-icon {\n  font-size: 10px;\n  margin-top: -6.5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.cdk-drag-placeholder {\n  opacity: 0.4;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data.selected::last-child {\n  border: none;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-selection .btn-clear-all-selected {\n  -webkit-box-flex: 2;\n          flex-grow: 2;\n  text-align: right;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-selection .btn-clear-all-selected span {\n  font-size: 10px;\n  color: gray;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-selection .btn-clear-all-selected span:hover {\n  color: #039be5;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-input {\n  width: 100%;\n  height: 60px;\n  border-radius: 3px;\n  border: 0.5px solid #dcdcdc;\n  font-size: 10px;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.7);\n  padding: 10px 5px 5px 10px;\n  margin-top: 2px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-collection {\n  height: 100px;\n  overflow-y: auto;\n  width: 100%;\n  border: 0.5px solid #dcdcdc;\n  border-radius: 3px;\n  margin-top: 5px;\n  padding: 5px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-collection .placeholder {\n  margin-left: 5px;\n  font-size: 9px;\n  color: gray;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .custom-content .fake-data-collection.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .enter-page-url input {\n  border: 0.5px solid #dcdcdc;\n  height: 30px;\n  border-radius: 3px;\n  font-size: 9px;\n  width: 100%;\n  padding-left: 10px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .enter-page-url .enter-page-url__notice {\n  color: gray;\n  font-size: 9px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .enter-page-url .enter-page-url__notice .highline {\n  font-weight: bold;\n  color: #039be5;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .shape-selection .mat-radio-button {\n  font-size: 11px;\n  width: 150px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .enabled-device-selection {\n  margin-left: 2px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .panel-content .item .item-content .enabled-device-selection .mat-checkbox {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.7);\n  margin-right: 20px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel ::ng-deep .mat-expansion-panel-body {\n  padding: 0 0 16px 24px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .mat-expansion-panel-header {\n  padding: 0 24px 0 24px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .mat-expansion-panel-header-title,\n.container .inner .fake-customer-config .config mat-expansion-panel .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .mat-expansion-panel-header-description {\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 13px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel .mat-expansion-panel-header-description .step-label {\n  padding: 2.5px;\n  width: 16px;\n  height: 16px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n  background: #039be5;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 16px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel mat-panel-title {\n  padding-top: 5px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel mat-panel-title mat-icon {\n  margin-top: 5px;\n  font-size: 20px;\n}\n.container .inner .fake-customer-config .config mat-expansion-panel mat-panel-description {\n  padding-top: 5px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .fake-customer-config .sample .browser-container {\n  border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .fake-customer-config .sample .browser-container .browser {\n  background: url('157853860662229211.png');\n  background-size: 100% 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100.4%;\n  height: 430px;\n  position: relative;\n  top: -1px;\n  left: -0.2%;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .website-domain {\n  font-size: 11px;\n  position: relative;\n  top: -33.8%;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .website-domain a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer {\n  padding: 5px 5px 0 5px;\n  width: 33.33%;\n  height: 80px;\n  background: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  position: absolute;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer.shape1 {\n  border-radius: 0;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer.shape2 {\n  border-radius: 5px;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .avatar-area {\n  padding-left: 2px;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .avatar-area .avatar {\n  border-radius: 50%;\n  background: silver;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .avatar-area .avatar img {\n  border-radius: 50%;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .content {\n  overflow: hidden;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .content .title {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 9px;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .content .body {\n  padding-top: 5px;\n  font-size: 8px;\n  color: gray;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .content .page-url {\n  padding-top: 5px;\n  font-size: 8px;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer .content .page-url a {\n  text-decoration: none;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer.bottom-left {\n  top: 75%;\n  left: 2%;\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer.bottom-right {\n  top: 75%;\n  left: 64%;\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer.top-left {\n  top: 28%;\n  left: 2%;\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n.container .inner .fake-customer-config .sample .browser-container .browser .fake-customer.top-right {\n  top: 28%;\n  left: 64%;\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n@-webkit-keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(10px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-10px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3Zpc2l0b3ItdG9vbHMvZmFrZS1jdXN0b21lci9mYWtlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3Zpc2l0b3ItdG9vbHMvZmFrZS1jdXN0b21lci9mYWtlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEsd0VBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDREo7QURHSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw0QkFBQTtBQ0pGO0FETUU7RUFDRSwyQkFBQTtFQUE2QixlQUFBO0VBQzdCLHlCQUFBO0VBQTJCLFdBQUE7RUFDRCxtQkFBQTtFQUMxQixzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4QixxQkFBQTtFQUF1QiwyQkFBQTtFQUN2QixpQkFBQTtFQUFtQjt1REFBQTtBQ0d2QjtBRENFO0VBQ0UsMkJBQUE7QUNDSjtBREVFO0VBQ0UsNkJBQUE7QUNBSjtBREdFOztFQUVFLG1CQUFBO0FDREo7QURJRTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNGTjtBREtJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDSE47QURPRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSx3Q0FBQTtBQ05KO0FET0k7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNMTjtFRE9JO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0xOO0FBQ0Y7QURESTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0xOO0VET0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDTE47QUFDRjtBRFFJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTk47QURZSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1ZOO0FEYUk7RUFDRSxXQUFBO0FDWE47QURhTTtFQUNFLHNCQUFBO0FDWFI7QURlSTtFQUNFLHNCQUFBO0FDYk47QURpQlU7RUFDRSxxQkFBQTtBQ2ZaO0FEaUJZO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNmZDtBRGlCYztFQUNFLGVBQUE7QUNmaEI7QURtQlk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDakJkO0FEbUJjO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2pCaEI7QURxQlk7RUFDRSxpQkFBQTtBQ25CZDtBRG9CYztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNsQmhCO0FEcUJnQjtFQUNFLGlCQUFBO0FDbkJsQjtBRG9Ca0I7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNsQnBCO0FEbUJvQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUVBLGVBQUE7QUNsQnRCO0FEbUJzQjtFQUNFLFlBQUE7QUNqQnhCO0FEb0JzQjtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2xCeEI7QURvQndCO0VBQ0UsU0FBQTtFQUNBLFNBQUE7QUNsQjFCO0FEcUJ3QjtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDbkIxQjtBRHNCd0I7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQ3BCMUI7QUR1QndCO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUNyQjFCO0FEMkJrQjtFQUNFLHdCQUFBO0FDekJwQjtBRDZCZ0I7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQzNCbEI7QUQ0QmtCO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUMxQnBCO0FEK0JrQjtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQzdCcEI7QURpQ2dCO0VBQ0UsaUJBQUE7QUMvQmxCO0FEZ0NrQjtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUM5QnBCO0FEaUNrQjtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQy9CcEI7QURpQ29CO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDL0J0QjtBRG1Da0I7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNqQ3BCO0FEcUNnQjtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUVBLHNDQUFBO0FDcENsQjtBRHFDa0I7RUFDRTtJQUNFLFVBQUE7RUNuQ3BCO0VEcUNrQjtJQUNFLFVBQUE7RUNuQ3BCO0FBQ0Y7QUQ2QmtCO0VBQ0U7SUFDRSxVQUFBO0VDbkNwQjtFRHFDa0I7SUFDRSxVQUFBO0VDbkNwQjtBQUNGO0FEc0NrQjtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsbUNBQUE7QUNyQ3BCO0FEc0NvQjtFQUNFO0lBQ0UsVUFBQTtFQ3BDdEI7RURzQ29CO0lBQ0UsVUFBQTtFQ3BDdEI7QUFDRjtBRDhCb0I7RUFDRTtJQUNFLFVBQUE7RUNwQ3RCO0VEc0NvQjtJQUNFLFVBQUE7RUNwQ3RCO0FBQ0Y7QUR1Q29CO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ3JDdEI7QUQyQ2tCO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDekNwQjtBRDJDb0I7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUN6Q3RCO0FEMkNzQjtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBQ3pDeEI7QUQyQ3dCO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDekMxQjtBRDZDc0I7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDM0N4QjtBRDZDd0I7RUFDRSxtQkFBQTtBQzNDMUI7QURnRG9CO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtBQzlDdEI7QUQwRHNCO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDeER4QjtBRDJEc0I7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ3pEeEI7QUQyRHdCO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ3pEMUI7QUQ0RHdCO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUMxRDFCO0FENEQwQjtFQUNFLGdCQUFBO0FDMUQ1QjtBRCtEc0I7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGVBQUE7QUM3RHhCO0FEK0R3QjtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQzdEMUI7QURpRXNCO0VBQ0UsWUFBQTtBQy9EeEI7QURrRXNCO0VBQ0Usc0VBQUE7RUFBQSw4REFBQTtFQUFBLHNEQUFBO0VBQUEsMEdBQUE7QUNoRXhCO0FEbUVzQjtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7QUNqRXhCO0FEb0VzQjtFQUNFLFlBQUE7QUNsRXhCO0FEd0VvQjtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGlCQUFBO0FDdEV0QjtBRHdFc0I7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSxlQUFBO0FDdkV4QjtBRHdFd0I7RUFDRSxjQUFBO0FDdEUxQjtBRDRFa0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZUFBQTtBQzNFcEI7QUQ4RWtCO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQzVFcEI7QUQ4RW9CO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQzVFdEI7QUQrRW9CO0VBQ0Usc0VBQUE7RUFBQSw4REFBQTtFQUFBLHNEQUFBO0VBQUEsMEdBQUE7QUM3RXRCO0FEbUZrQjtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDakZwQjtBRG9Ga0I7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ2xGcEI7QURvRm9CO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDbEZ0QjtBRHdGa0I7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ3RGcEI7QUQwRmdCO0VBQ0UsZ0JBQUE7QUN4RmxCO0FEeUZrQjtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDdkZwQjtBRDhGVTtFQUNFLHNCQUFBO0FDNUZaO0FEOEZVO0VBQ0Usc0JBQUE7QUM1Rlo7QUQrRlU7O0VBRUUsYUFBQTtBQzdGWjtBRGdHVTtFQUVFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDL0ZaO0FEaUdZO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDL0ZkO0FEa0dVO0VBQ0UsZ0JBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDakdaO0FEa0dZO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNoR2Q7QURtR1U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNqR1o7QUR1R1E7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0FDckdWO0FEc0dVO0VBQ0UseUNBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDcEdaO0FEc0dZO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3BHZDtBRHNHYztFQUNFLHlCQUFBO0FDcEdoQjtBRHdHWTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBFQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ3ZHZDtBRHlHYztFQUNFLGdCQUFBO0FDdkdoQjtBRDBHYztFQUNFLGtCQUFBO0FDeEdoQjtBRDJHYztFQUlFLGlCQUFBO0FDNUdoQjtBRDhHZ0I7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDNUdsQjtBRDZHa0I7RUFDRSxrQkFBQTtBQzNHcEI7QURnSGM7RUFDRSxnQkFBQTtBQzlHaEI7QUQrR2dCO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDN0dsQjtBRGdIZ0I7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDOUdsQjtBRGlIZ0I7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUMvR2xCO0FEaUhrQjtFQUNFLHFCQUFBO0FDL0dwQjtBRG9IYztFQUNFLFFBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQ2xIaEI7QURxSGM7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7QUNuSGhCO0FEc0hjO0VBQ0UsUUFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FDcEhoQjtBRHVIYztFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtBQ3JIaEI7QUR3SGM7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ3RIaEI7RUR3SGM7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7RUN0SGhCO0VEd0hjO0lBQ0Usb0NBQUE7RUN0SGhCO0VEd0hjO0lBQ0UsZ0NBQUE7RUN0SGhCO0FBQ0Y7QUR3SGM7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDdEhoQjtFRHdIYztJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDdEhoQjtFRHdIYztJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUN0SGhCO0VEd0hjO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ3RIaEI7QUFDRjtBRHdIYztFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0VDdEhoQjtFRHdIYztJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ3RIaEI7RUR3SGM7SUFDRSxtQ0FBQTtFQ3RIaEI7RUR3SGM7SUFDRSxnQ0FBQTtFQ3RIaEI7QUFDRjtBRHdIYztFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7RUN0SGhCO0VEd0hjO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUN0SGhCO0VEd0hjO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtFQ3RIaEI7RUR3SGM7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDdEhoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi92aXNpdG9yLXRvb2xzL2Zha2UtY3VzdG9tZXIvZmFrZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBwYWRkaW5nOiAycHggNnB4IDFweCA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC1oZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuICAmLmluZm8ge1xuICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJi50ZXh0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogI2YxZjNmNTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4gICAgdGV4dGFyZWEge1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tcmVtb3ZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cbiAgLm5vLXNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIE9wZXJhIGFuZCBGaXJlZm94ICovXG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAgLm1hdC10YWItYm9keSAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLFxuICBib2R5LnRoZW1lLWRlZmF1bHQgLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgfVxuXG4gIC5tYWluLXRpdGxlIHtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogNDVweCAzMHB4IDAgNjBweDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW46IDRweCAwIDAgMTBweDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQtd2Vic2l0ZSB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiA5NCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiA0MHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAwIDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRvcDogLTE2dmg7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lcnJvcnMge1xuICAgICAgY29sb3I6IGNyaW1zb247XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5uby13ZWJzaXRlLW5vdGlmeSB7XG4gICAgfVxuXG4gICAgLndlYnNpdGUtc2VsZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgIC50aXRsZTIge1xuICAgICAgY29sb3I6IGdyYXk7XG5cbiAgICAgICYucG9wdXAtY29uZmlnLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDE1cHggMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmFrZS1jdXN0b21lci1jb25maWcge1xuICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbiAgICAgIC5jb25maWcge1xuICAgICAgICAvLyBoZWlnaHQ6IDgwMHB4O1xuICAgICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAgICAgICAucGFuZWwtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMHB4IDA7XG5cbiAgICAgICAgICAgIC5idG4tYXBwbHkge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGljZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG5cbiAgICAgICAgICAgICAgLmhpZ2hsaW5lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIC5pdGVtLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgICAgICAgLnBvc2l0aW9uLXNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICAgIC5wb3NpdGlvbi1vcHRpb24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIC5wb3NpdGlvbi1vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTVmNGZjO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzQwYTVlYztcblxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmJvdHRvbS1sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnRvcC1sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi50b3AtcmlnaHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aW1lLXNldHRpbmcge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXQtc2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmF2YXRhci1zZWxlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zaG93LWhpZGUtYXZhdGFyLXN0b3JhZ2Uge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMzliZTU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmJ0bi1zaG93IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5idG4taGlkZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYXZhdGFyLXN0b3JhZ2Uge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwLjJzIGZhZGVJbiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMi41cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmN1c3RvbS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgIC5mYWtlLWRhdGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweCAxcHggNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMnB4IDJweCAycHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAgICAgICAgICAgICAmLnNhbXBsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAmLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMzliZTU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDBhNWVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgJi50ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHNpbHZlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYzZjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBzZWxlY3RpbmdBbmkgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBzZWxlY3RpbmdBbmkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICYuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICYudGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYzZjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1yZW1vdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIC5idG4tcmVtb3ZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC05cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNi41cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgJi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgJi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgJjo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5mYWtlLWRhdGEtc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1jbGVhci1hbGwtc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5mYWtlLWRhdGEtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI2RjZGNkYztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5mYWtlLWRhdGEtY29sbGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVudGVyLXBhZ2UtdXJsIHtcbiAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGNkY2RjO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5lbnRlci1wYWdlLXVybF9fbm90aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2hhcGUtc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVuYWJsZWQtZGV2aWNlLXNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgICAgICAgLm1hdC1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNnB4IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI0cHggMCAyNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZmxleC1iYXNpczogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgICAgICAgICAgLnN0ZXAtbGFiZWwge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyLjVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hdC1wYW5lbC10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNhbXBsZSB7XG4gICAgICAgIC5icm93c2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAuYnJvd3NlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzLzE1Nzg1Mzg2MDY2MjIyOTIxMS5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwLjQlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICAgIGxlZnQ6IC0wLjIlO1xuXG4gICAgICAgICAgICAud2Vic2l0ZS1kb21haW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMzMuOCU7XG5cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmFrZS1jdXN0b21lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuXG4gICAgICAgICAgICAgICYuc2hhcGUxIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5zaGFwZTIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hdmF0YXItYXJlYSB7XG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuXG4gICAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XG4gICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGFnZS11cmwge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuXG4gICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuYm90dG9tLWxlZnQge1xuICAgICAgICAgICAgICAgIHRvcDogNzUlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5ib3R0b20tcmlnaHQge1xuICAgICAgICAgICAgICAgIHRvcDogNzUlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDY0JTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi50b3AtbGVmdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAyOCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLnRvcC1yaWdodCB7XG4gICAgICAgICAgICAgICAgdG9wOiAyOCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNjQlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XG4gICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblJpZ2h0IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XG4gICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBwYWRkaW5nOiAycHggNnB4IDFweCA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC1oZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uY2RrLWRyYWctcHJldmlldy5pbmZvIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNkay1kcmFnLXByZXZpZXcudGV4dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmMWYzZjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY2RrLWRyYWctcHJldmlldy50ZXh0IHRleHRhcmVhIHtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xufVxuLmNkay1kcmFnLXByZXZpZXcgLmJ0bi1yZW1vdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmY2VjNSAwJSwgIzE0NTU3YiA3NCUpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLmNvbnRhaW5lciAubm8tc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbn1cbi5jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWJvZHkgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAgLm1hdC10YWItYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYixcbi5jb250YWluZXIgYm9keS50aGVtZS1kZWZhdWx0IC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA0NXB4IDMwcHggMCA2MHB4O1xuICBoZWlnaHQ6IDI1dmg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA0cHggMCAwIDEwcHg7XG59XG4uY29udGFpbmVyIC5tYWluLXRpdGxlIC5zZWxlY3RlZC13ZWJzaXRlIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgbWluLWhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA5NCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDQwcHg7XG4gIHBhZGRpbmc6IDUwcHggMjBweCAwIDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAtMTZ2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmVycm9ycyB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLXNlbGVjdGlvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIHtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyLnBvcHVwLWNvbmZpZy10aXRsZSB7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcge1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweCAwcHggMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLmJ0bi1hcHBseSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLmJ0bi1hcHBseSBidXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5ub3RpY2Uge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAubm90aWNlIC5oaWdobGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAzOWJlNTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLnBvc2l0aW9uLXNlbGVjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5wb3NpdGlvbi1zZWxlY3Rpb24gLnBvc2l0aW9uLW9wdGlvbi13cmFwcGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAucG9zaXRpb24tc2VsZWN0aW9uIC5wb3NpdGlvbi1vcHRpb24td3JhcHBlciAucG9zaXRpb24tb3B0aW9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjRmYztcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNDBhNWVjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLnBvc2l0aW9uLXNlbGVjdGlvbiAucG9zaXRpb24tb3B0aW9uLXdyYXBwZXIgLnBvc2l0aW9uLW9wdGlvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAucG9zaXRpb24tc2VsZWN0aW9uIC5wb3NpdGlvbi1vcHRpb24td3JhcHBlciAucG9zaXRpb24tb3B0aW9uIC5ub3RpZmljYXRpb24ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAucG9zaXRpb24tc2VsZWN0aW9uIC5wb3NpdGlvbi1vcHRpb24td3JhcHBlciAucG9zaXRpb24tb3B0aW9uIC5ub3RpZmljYXRpb24uYm90dG9tLWxlZnQge1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAucG9zaXRpb24tc2VsZWN0aW9uIC5wb3NpdGlvbi1vcHRpb24td3JhcHBlciAucG9zaXRpb24tb3B0aW9uIC5ub3RpZmljYXRpb24uYm90dG9tLXJpZ2h0IHtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAyMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5wb3NpdGlvbi1zZWxlY3Rpb24gLnBvc2l0aW9uLW9wdGlvbi13cmFwcGVyIC5wb3NpdGlvbi1vcHRpb24gLm5vdGlmaWNhdGlvbi50b3AtbGVmdCB7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLnBvc2l0aW9uLXNlbGVjdGlvbiAucG9zaXRpb24tb3B0aW9uLXdyYXBwZXIgLnBvc2l0aW9uLW9wdGlvbiAubm90aWZpY2F0aW9uLnRvcC1yaWdodCB7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAyMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5wb3NpdGlvbi1zZWxlY3Rpb24gLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC50aW1lLXNldHRpbmcge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC50aW1lLXNldHRpbmcgbWF0LXNsaWRlciB7XG4gIHdpZHRoOiAxOTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5hdmF0YXItc2VsZWN0aW9uIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuc2hvdy1oaWRlLWF2YXRhci1zdG9yYWdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLnNob3ctaGlkZS1hdmF0YXItc3RvcmFnZSAuYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMzliZTU7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogOTBweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuc2hvdy1oaWRlLWF2YXRhci1zdG9yYWdlIC5idG4tc2hvdyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuc2hvdy1oaWRlLWF2YXRhci1zdG9yYWdlIC5idG4tc2hvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuc2hvdy1oaWRlLWF2YXRhci1zdG9yYWdlIC5idG4taGlkZSB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuYXZhdGFyLXN0b3JhZ2Uge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjJzIGZhZGVJbiBlYXNlLWluO1xufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmF2YXRhci1zdG9yYWdlIGltZyB7XG4gIG1hcmdpbjogMi41cHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZSAwLjJzIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuYXZhdGFyLXN0b3JhZ2UgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLCAyKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBwYWRkaW5nOiAycHggNnB4IDFweCA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC1oZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDRweCAycHggMnB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5jdXN0b20tY29udGVudCAuZmFrZS1kYXRhLnNhbXBsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YS5zYW1wbGUuaW5mbyB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMzliZTU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2FtcGxlLmluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDBhNWVjO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2FtcGxlLnRleHQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YS5zYW1wbGUudGV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMWYzZjU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2VsZWN0ZWQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5jdXN0b20tY29udGVudCAuZmFrZS1kYXRhLnNlbGVjdGVkLmluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2VsZWN0ZWQudGV4dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmMWYzZjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2VsZWN0ZWQudGV4dCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YS5zZWxlY3RlZC50ZXh0IC5idG4tcmVtb3ZlIHtcbiAgdG9wOiAtMTlweDtcbiAgcmlnaHQ6IC01cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2VsZWN0ZWQudGV4dCAuYnRuLXJlbW92ZSBtYXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEuc2VsZWN0ZWQgLmJ0bi1yZW1vdmUge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTlweDtcbiAgcmlnaHQ6IC0xMXB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YS5zZWxlY3RlZCAuYnRuLXJlbW92ZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogLTYuNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5jdXN0b20tY29udGVudCAuZmFrZS1kYXRhLnNlbGVjdGVkLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5jdXN0b20tY29udGVudCAuZmFrZS1kYXRhLnNlbGVjdGVkLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YS5zZWxlY3RlZDphY3RpdmUge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5jdXN0b20tY29udGVudCAuZmFrZS1kYXRhLnNlbGVjdGVkOjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAucGFuZWwtY29udGVudCAuaXRlbSAuaXRlbS1jb250ZW50IC5jdXN0b20tY29udGVudCAuZmFrZS1kYXRhLXNlbGVjdGlvbiAuYnRuLWNsZWFyLWFsbC1zZWxlY3RlZCB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEtc2VsZWN0aW9uIC5idG4tY2xlYXItYWxsLXNlbGVjdGVkIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEtc2VsZWN0aW9uIC5idG4tY2xlYXItYWxsLXNlbGVjdGVkIHNwYW46aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuY3VzdG9tLWNvbnRlbnQgLmZha2UtZGF0YS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGNkY2RjO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDVweCAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEtY29sbGVjdGlvbiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNkY2RjZGM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEtY29sbGVjdGlvbiAucGxhY2Vob2xkZXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmN1c3RvbS1jb250ZW50IC5mYWtlLWRhdGEtY29sbGVjdGlvbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuZW50ZXItcGFnZS11cmwgaW5wdXQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNkY2RjZGM7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuZW50ZXItcGFnZS11cmwgLmVudGVyLXBhZ2UtdXJsX19ub3RpY2Uge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmVudGVyLXBhZ2UtdXJsIC5lbnRlci1wYWdlLXVybF9fbm90aWNlIC5oaWdobGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLnBhbmVsLWNvbnRlbnQgLml0ZW0gLml0ZW0tY29udGVudCAuc2hhcGUtc2VsZWN0aW9uIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmVuYWJsZWQtZGV2aWNlLXNlbGVjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5wYW5lbC1jb250ZW50IC5pdGVtIC5pdGVtLWNvbnRlbnQgLmVuYWJsZWQtZGV2aWNlLXNlbGVjdGlvbiAubWF0LWNoZWNrYm94IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMCAwIDE2cHggMjRweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAyNHB4IDAgMjRweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5jb25maWcgbWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiAuc3RlcC1sYWJlbCB7XG4gIHBhZGRpbmc6IDIuNXB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgbWF0LXBhbmVsLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuY29uZmlnIG1hdC1leHBhbnNpb24tcGFuZWwgbWF0LXBhbmVsLXRpdGxlIG1hdC1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLmNvbmZpZyBtYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvMTU3ODUzODYwNjYyMjI5MjExLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwLjQlO1xuICBoZWlnaHQ6IDQzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogLTAuMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLndlYnNpdGUtZG9tYWluIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMzLjglO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5zYW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC53ZWJzaXRlLWRvbWFpbiBhIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lciB7XG4gIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lci5zaGFwZTEge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5zYW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5mYWtlLWN1c3RvbWVyLnNoYXBlMiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lciAuYXZhdGFyLWFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lciAuYXZhdGFyLWFyZWEgLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5zYW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5mYWtlLWN1c3RvbWVyIC5hdmF0YXItYXJlYSAuYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lciAuY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLmZha2UtY3VzdG9tZXIgLmNvbnRlbnQgLnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLmZha2UtY3VzdG9tZXIgLmNvbnRlbnQgLmJvZHkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDhweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLmZha2UtY3VzdG9tZXIgLmNvbnRlbnQgLnBhZ2UtdXJsIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLmZha2UtY3VzdG9tZXIgLmNvbnRlbnQgLnBhZ2UtdXJsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZmFrZS1jdXN0b21lci1jb25maWcgLnNhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLmZha2UtY3VzdG9tZXIuYm90dG9tLWxlZnQge1xuICB0b3A6IDc1JTtcbiAgbGVmdDogMiU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lci5ib3R0b20tcmlnaHQge1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNjQlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mYWtlLWN1c3RvbWVyLWNvbmZpZyAuc2FtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAuZmFrZS1jdXN0b21lci50b3AtbGVmdCB7XG4gIHRvcDogMjglO1xuICBsZWZ0OiAyJTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZha2UtY3VzdG9tZXItY29uZmlnIC5zYW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5mYWtlLWN1c3RvbWVyLnRvcC1yaWdodCB7XG4gIHRvcDogMjglO1xuICBsZWZ0OiA2NCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/visitor-tools/fake-customer/fake-customer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/visitor-tools/fake-customer/fake-customer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FakeCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeCustomerComponent", function() { return FakeCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var app_main_website_management_website_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/website-management/website-management.service */ "./src/app/main/website-management/website-management.service.ts");
/* harmony import */ var app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _visitor_tools_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../visitor-tools.service */ "./src/app/main/visitor-tools/visitor-tools.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");















var FakeCustomerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FakeCustomerComponent, _super);
    function FakeCustomerComponent(_fuseProgressBarService, _fuseSplashScreenService, _websiteManagementService, _dialogService, _sessionService, _visitorToolsService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this._websiteManagementService = _websiteManagementService;
        _this._dialogService = _dialogService;
        _this._sessionService = _sessionService;
        _this._visitorToolsService = _visitorToolsService;
        _this.websites = [];
        /** control for selected website */
        _this.websiteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        /** control for the MatSelect filter keyword */
        _this.websiteFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        /** list of websites filterd by search keyword */
        _this.filteredWebsites = new rxjs__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
        _this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        _this.enableDisplayToggle = {
            label: 'Cho phép hiển thị',
            color: 'accent',
            checked: true,
            disabled: false
        };
        _this.positionOptions = [
            {
                name: 'bottom-left',
                value: 1,
                selected: true
            },
            {
                name: 'bottom-right',
                value: 2,
                selected: false
            },
            {
                name: 'top-left',
                value: 3,
                selected: false
            },
            {
                name: 'top-right',
                value: 4,
                selected: false
            }
        ];
        _this.avatarOptions = [
            {
                name: 'Thanh niên',
                value: 1,
                checked: true
            },
            {
                name: 'Trung niên',
                value: 2,
                checked: false
            },
            {
                name: 'Biểu tượng',
                value: 3,
                checked: false
            },
            {
                name: 'Hình động',
                value: 4,
                checked: false
            }
        ];
        _this.avatars = [];
        _this.shapeOptions = [
            {
                name: 'Bo góc vuông',
                value: 1,
                checked: true,
                style: 'shape1'
            },
            {
                name: 'Bo góc tròn',
                value: 2,
                checked: false,
                style: 'shape2'
            }
        ];
        _this.displayConfig = {
            isEnabled: false,
            runningDevices: [
                {
                    name: 'Máy tính',
                    value: 1,
                    checked: true
                },
                {
                    name: 'Điện thoại',
                    value: 2,
                    checked: true
                },
                {
                    name: 'Máy tính bảng',
                    value: 3,
                    checked: true
                }
            ],
            positionOnPage: 1,
            autoDisplayTime: 30
        };
        _this.contentConfig = {
            avatarType: _this.avatarOptions[0].value,
            title: 'Khách đang xem sản phẩm',
            body: '#fake_name đã để lại thông tin: sđt #fake_phone, email #fake_email',
            pageUrl: 'https://x2.com.vn'
        };
        _this.styleConfig = {
            themeColor: '#2196f3',
            shape: 1
        };
        _this.isAvatarStorageShown = false;
        _this.minAutoDisplayTime = 10; // seconds
        _this.maxAutoDisplayTime = 90; // seconds
        //===================
        _this.fakeDataFields = [
            {
                name: '#fake_name',
                fieldName: '#fake_name',
                value: 1,
            },
            {
                name: '#fake_phone',
                fieldName: '#fake_phone',
                value: 2
            },
            {
                name: '#fake_email',
                fieldName: '#fake_email',
                value: 3
            },
            {
                name: '#fake_location',
                fieldName: '#fake_location',
                value: 4
            }
        ];
        _this.selectedTitleFakeDataFields = [];
        _this.selectedBodyFakeDataFields = [];
        _this.websiteCtrl.setValue({
            id: '',
            name: ''
        });
        _this.loadAvatarsByOption(1);
        _this.selectedPosition = _this.positionOptions[0];
        _this.selectedShape = _this.shapeOptions[0];
        _this.sampleTitle = _this.mapFakeData(_this.contentConfig.title);
        _this.sampleBody = _this.mapFakeData(_this.contentConfig.body);
        return _this;
    }
    FakeCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getWebsites(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    FakeCustomerComponent.prototype.onChangeAutoDisplayTime = function (e) {
        this.displayConfig.autoDisplayTime = e.value;
    };
    FakeCustomerComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["moveItemInArray"])(this.selectedTitleFakeDataFields, event.previousIndex, event.currentIndex);
    };
    FakeCustomerComponent.prototype.loadAvatarsByOption = function (option) {
        this.avatars = [];
        switch (option) {
            //teenagers
            case 1:
                for (var i = 110; i <= 199; i++) {
                    this.avatars.push("https://w.cokhach.com/assets/images/avatar/2/" + i + ".jpg");
                }
                break;
            //matures
            case 2:
                for (var i = 111; i <= 198; i++) {
                    this.avatars.push("https://w.cokhach.com/assets/images/avatar/3/" + i + ".jpg");
                }
                break;
            //symbols
            case 3:
                for (var i = 111; i <= 129; i++) {
                    this.avatars.push("https://w.cokhach.com/assets/images/avatar/1/" + i + ".png");
                }
                break;
            case 4:
                for (var i = 1; i <= 16; i++) {
                    this.avatars.push("https://w.cokhach.com/assets/images/avatar/4/" + i + ".gif");
                }
                break;
            default:
                break;
        }
    };
    FakeCustomerComponent.prototype.removeSelectedFakeDataField = function (index, option) {
        //Title
        if (option === 1) {
            var list = this.selectedTitleFakeDataFields.filter(function (item, i) { return i !== index; });
            this.selectedTitleFakeDataFields = list;
        }
        //Body
        if (option === 2) {
            var list = this.selectedBodyFakeDataFields.filter(function (item, i) { return i !== index; });
            this.selectedBodyFakeDataFields = list;
        }
    };
    FakeCustomerComponent.prototype.onInputFakeDataText = function (text, data) {
        var option = data.option, index = data.index;
        //Title
        if (option === 1)
            this.selectedTitleFakeDataFields[index]['text'] = text;
        //Body
        if (option === 2)
            this.selectedBodyFakeDataFields[index]['text'] = text;
    };
    FakeCustomerComponent.prototype.onInputContent = function (e, opt) {
        var text = e.target.value;
        // Title
        if (opt === 1) {
            this.contentConfig.title = text;
            this.sampleTitle = this.mapFakeData(this.contentConfig.title);
        }
        // Body
        if (opt === 2) {
            this.contentConfig.body = text;
            this.sampleBody = this.mapFakeData(this.contentConfig.body);
        }
    };
    FakeCustomerComponent.prototype.onSelectFakeDataField = function (field, option) {
        var selectedField = field.fieldName;
        //Title
        if (option === 1) {
            // if (!_.find(this.selectedTitleFakeDataFields, item => item.value === field.value))
            // this.selectedTitleFakeDataFields.push(field);
            this.contentConfig.title += selectedField;
            this.sampleTitle = this.mapFakeData(this.contentConfig.title);
        }
        //Body
        if (option === 2) {
            // if (!_.find(this.selectedBodyFakeDataFields, item => item.value === field.value))
            // this.selectedBodyFakeDataFields.push(field);
            this.contentConfig.body += selectedField;
            this.sampleBody = this.mapFakeData(this.contentConfig.body);
        }
    };
    FakeCustomerComponent.prototype.clearAllSelectedFakeData = function (option) {
        //Title
        if (option === 1) {
            // this.selectedTitleFakeDataFields = [];
            this.contentConfig.title = '';
            this.sampleTitle = '';
        }
        //Body
        if (option === 2)
            // this.selectedBodyFakeDataFields = [];
            this.contentConfig.body = '';
        this.sampleBody = '';
    };
    FakeCustomerComponent.prototype.generateFakeCustomerConfig = function (opt) {
        if (opt === 1)
            return this.displayConfig;
        if (opt === 2)
            return this.contentConfig;
        if (opt === 3)
            return this.styleConfig;
        return null;
    };
    FakeCustomerComponent.prototype.mapFakeData = function (text) {
        var mappedText = text
            .replace(/#fake_name/g, 'Tue Vo')
            .replace(/#fake_phone/g, '0932 659 211')
            .replace(/#fake_email/g, 'tuevo.it@gmail.com')
            .replace(/#fake_location/g, '31 Vo Van Tan');
        return mappedText;
    };
    FakeCustomerComponent.prototype.applyFakeCustomerConfig = function (opt) {
        var params = this.generateFakeCustomerConfig(opt);
        if (params) {
            console.log(params);
        }
    };
    FakeCustomerComponent.prototype.onInputPageUrl = function (e) {
        this.contentConfig.pageUrl = e.target.value;
    };
    FakeCustomerComponent.prototype.onCheckEnableDisplayToggle = function (e) {
        this.displayConfig.isEnabled = e.checked;
    };
    FakeCustomerComponent.prototype.onSelectThemeColor = function (e) {
        this.styleConfig.themeColor = e.color.hex;
    };
    FakeCustomerComponent.prototype.onSelectPositionOption = function (value) {
        for (var _i = 0, _a = this.positionOptions; _i < _a.length; _i++) {
            var opt = _a[_i];
            if (opt.value === value) {
                opt.selected = true;
                this.selectedPosition = opt;
            }
            else
                opt.selected = false;
        }
        this.displayConfig.positionOnPage = value;
    };
    FakeCustomerComponent.prototype.onSelectAvatarOption = function (e) {
        for (var _i = 0, _a = this.avatarOptions; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.value === e.value)
                option.checked = true;
            else
                option.checked = false;
        }
        this.contentConfig.avatarType = e.value;
        this.loadAvatarsByOption(e.value);
    };
    FakeCustomerComponent.prototype.onSelectShapeOption = function (e) {
        for (var _i = 0, _a = this.shapeOptions; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.value === e.value) {
                option.checked = true;
                this.selectedShape = option;
            }
            else
                option.checked = false;
        }
        this.styleConfig.shape = e.value;
    };
    FakeCustomerComponent.prototype.onSelectRunningDeviceCheckBox = function (e, value) {
        var checkedDevice = lodash__WEBPACK_IMPORTED_MODULE_13__["find"](this.displayConfig.runningDevices, function (d) { return d.value === value; });
        checkedDevice.checked = e.checked;
    };
    FakeCustomerComponent.prototype.getWebsites = function (accountId) {
        var _this = this;
        var sub = this._websiteManagementService.getWebsites(accountId)
            .subscribe(function (res) {
            _this.websites = (res.data.website || []).map(function (website) {
                return {
                    id: website._id,
                    name: website.domain
                };
            });
            if (_this.websites.length > 0) {
                _this.hasWebsite = true;
                // load the initial account list
                _this.filteredWebsites.next(_this.websites.slice());
                // listen for search field value changes
                _this.websiteFilterCtrl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this._onDestroy))
                    .subscribe(function () {
                    _this.filterWebsites();
                });
                // set default option is the first item of list websites
                _this.websiteCtrl.setValue(_this.websites[0]);
                _this._fuseProgressBarService.hide();
                _this._fuseSplashScreenService.hide();
                _this.isProcessing = false;
            }
            else {
                _this.hasWebsite = false;
                _this.isProcessing = false;
                _this._fuseProgressBarService.hide();
                _this._fuseSplashScreenService.hide();
                _this._dialogService._openInfoDialog('Tài khoản chưa có website nào. Vui lòng thêm', 'tại đây', "/quan-ly-website/" + _this._sessionService.activeAccountId);
            }
        });
        this.subscriptions.push(sub);
    };
    FakeCustomerComponent.prototype.filterWebsites = function () {
        if (!this.websites) {
            return;
        }
        // get the search keyword
        var search = this.websiteFilterCtrl.value;
        if (!search) {
            this.filteredWebsites.next(this.websites.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the websites
        this.filteredWebsites.next(this.websites.filter(function (website) { return website.name.toLowerCase().indexOf(search) > -1; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelect"])
    ], FakeCustomerComponent.prototype, "singleSelect", void 0);
    FakeCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fake-customer',
            template: __webpack_require__(/*! raw-loader!./fake-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/visitor-tools/fake-customer/fake-customer.component.html"),
            styles: [__webpack_require__(/*! ./fake-customer.component.scss */ "./src/app/main/visitor-tools/fake-customer/fake-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["FuseProgressBarService"],
            _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__["FuseSplashScreenService"],
            app_main_website_management_website_management_service__WEBPACK_IMPORTED_MODULE_4__["WebsiteManagementService"],
            app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _visitor_tools_service__WEBPACK_IMPORTED_MODULE_7__["VisitorToolsService"]])
    ], FakeCustomerComponent);
    return FakeCustomerComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_11__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/visitor-tools/send-info/send-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/visitor-tools/send-info/send-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 50vh;\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  background-attachment: fixed;\n}\n.container ::ng-deep .mat-tab-group .mat-tab-body .mat-tab-body-content {\n  overflow: hidden !important;\n}\n.container ::ng-deep .mat-tab-group .mat-tab-body {\n  overflow-y: hidden !important;\n}\n.container .main-title {\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 16px;\n  padding: 45px 30px 0 60px;\n  height: 25vh;\n  font-weight: bold;\n}\n.container .main-title mat-icon {\n  font-size: 14px;\n  margin: 4px 0 0 10px;\n}\n.container .main-title .selected-website {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  min-height: 550px;\n  width: 94%;\n  background: white;\n  margin: 40px;\n  padding: 50px 20px 0 50px;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  z-index: 10;\n  top: -16vh;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .errors {\n  color: crimson;\n  font-size: 10px;\n  margin-top: -10px;\n  padding-bottom: 10px;\n}\n.container .inner .website-selection {\n  width: 250px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  color: gray;\n}\n.container .inner .title2.popup-config-title {\n  padding: 15px 0 15px 0;\n}\n.container .inner .popup-config .tabs {\n  min-height: 585px;\n}\n.container .inner .popup-config .tabs .example-stretched-tabs {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .popup-config .tabs .tab-content {\n  padding: 20px;\n  padding-top: 30px;\n}\n.container .inner .popup-config .tabs .tab-content .auto-display-popup {\n  padding-top: 30px;\n}\n.container .inner .popup-config .tabs .tab-content .auto-display-popup .time-selection {\n  padding-top: 20px;\n  padding-left: 15px;\n}\n.container .inner .popup-config .tabs .tab-content .auto-display-popup .time-selection .mat-radio-button {\n  font-size: 13px;\n  width: 150px;\n  margin-top: -5px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style mat-icon {\n  font-size: 16px;\n  color: gray;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .theme-color-selection .select-color-panel {\n  -webkit-animation: fade 1.2s ease-in-out;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .theme-color-selection .select-color-panel:hover {\n  opacity: 0.8;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .popup-style-form-field {\n  width: 100%;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection {\n  padding-top: 20px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-title {\n  color: gray;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .supporter-details {\n  width: 100%;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-storage img {\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n  margin: 5px;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: fade 1.2s ease-in-out;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-storage img:hover {\n  -webkit-transform: scale(1.5, 1.5);\n          transform: scale(1.5, 1.5);\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .submit-area {\n  padding-top: 40px;\n  padding-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .submit-area button {\n  padding-top: 0;\n  background: #44b543;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .customize-open-popup-button-position {\n  padding-top: 10px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .customize-open-popup-button-position .mat-radio-button {\n  font-size: 13px;\n  width: 120px;\n  margin-top: -5px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .customize-open-popup-button-position .selection {\n  padding-top: 20px;\n  padding-left: 15px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .display-popup-before-exit-page {\n  padding-top: 28px;\n}\n.container .inner .popup-config .tabs .tab-content .form-control {\n  padding-top: 15px;\n}\n.container .inner .popup-config .popup-example {\n  margin-top: 45px;\n}\n.container .inner .popup-config .popup-example .browser-container {\n  border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .popup-config .popup-example .browser-container .browser {\n  background: url('157853860662229211.png');\n  background-size: 100% 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100.4%;\n  height: 430px;\n  position: relative;\n  top: -0.2%;\n  left: -0.2%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper {\n  height: 30px;\n  width: 100%;\n  position: relative;\n  top: 5%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  position: relative;\n  background-size: 100% 100%;\n  background-position: center;\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button .say-hello-label {\n  background: crimson;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  font-weight: bold;\n  border-radius: 50%;\n  width: 14px;\n  height: 14px;\n  font-size: 8px;\n  float: right;\n  margin: -5px -5px 0 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-animation: 0.5s alertAnimation infinite;\n}\n@-webkit-keyframes alertAnimation {\n  from {\n    -webkit-transform: scale(1.07, 1.07);\n            transform: scale(1.07, 1.07);\n  }\n  to {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes alertAnimation {\n  from {\n    -webkit-transform: scale(1.07, 1.07);\n            transform: scale(1.07, 1.07);\n  }\n  to {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.bottom-left {\n  left: 2%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.bottom-right {\n  left: 93%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.center-right {\n  left: 93%;\n  top: -495%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.center-left {\n  left: 2%;\n  top: -495%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.top-left {\n  left: 2%;\n  top: -940%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.top-right {\n  left: 93%;\n  top: -940%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .website-domain {\n  font-size: 11px;\n  position: relative;\n  top: 6.7%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .website-domain a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup {\n  border-radius: 5px;\n  margin-top: 100px;\n  width: 59%;\n  height: 51%;\n  background: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .header {\n  width: 100%;\n  height: 5%;\n  padding: 2px 4px 2px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 7px;\n  color: silver;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info {\n  padding: 14px;\n  padding-top: 5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .title {\n  font-weight: bold;\n  font-size: 11px;\n  text-align: center;\n  padding: 8px 0 8px 0;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .notice {\n  font-size: 7px;\n  color: gray;\n  text-align: justify;\n  line-height: 9px;\n  padding-bottom: 5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .input {\n  background: whitesmoke;\n  padding: 5px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 9px;\n  margin-top: 5px;\n  color: rgba(0, 0, 0, 0.5);\n  border-radius: 3.5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .button {\n  text-align: center;\n  font-size: 9px;\n  padding: 5px;\n  background: silver;\n  color: white;\n  font-weight: bold;\n  border-radius: 3.5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img {\n  height: 170px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: 14px;\n  background: white;\n  margin-top: 15px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-size: 100% 100%;\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-name {\n  padding-top: 5px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n  font-size: 10px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-major {\n  color: gray;\n  font-size: 9px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-phone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px;\n  padding-left: 0;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-phone .phone-icon {\n  width: 12px;\n  height: 12px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-phone .phone-number {\n  font-size: 9px;\n  margin-left: 5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .footer {\n  color: gray;\n  font-size: 7px;\n  width: 98%;\n  text-align: right;\n  position: relative;\n  top: -10px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .footer img {\n  width: 10px;\n  height: 7px;\n}\n@media screen and (max-width: 600px) {\n  .container .main-title {\n    height: 35vh;\n    padding: 45px 20px 20px 20px;\n    font-size: 14px;\n    text-align: center;\n  }\n  .container .inner {\n    margin: 15px;\n    padding: 45px 15px 15px 20px;\n  }\n  .container .inner .popup-config .tabs .tab-content {\n    padding: 0;\n    padding-top: 30px;\n  }\n  .container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-storage img {\n    width: 60px;\n    height: 60px;\n    margin-top: -30px;\n    margin-left: -15px;\n  }\n  .container .inner .popup-config .tabs .tab-content.popup-style .submit-area {\n    padding-top: 0;\n  }\n  .container .inner .popup-config .popup-example {\n    margin-top: 0;\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser {\n    background: rgba(3, 155, 229, 0.04);\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser .website-domain {\n    display: none;\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser .popup {\n    margin: 0;\n    width: 85%;\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser .popup .content .footer {\n    top: -15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3Zpc2l0b3ItdG9vbHMvc2VuZC1pbmZvL3NlbmQtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi92aXNpdG9yLXRvb2xzL3NlbmQtaW5mby9zZW5kLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSwyQkFBQTtBQ0NKO0FERUU7RUFDRSw2QkFBQTtBQ0FKO0FER0U7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNESjtBREdJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDRE47QURJSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FETUU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsd0NBQUE7QUNMSjtBRE1JO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDSk47RURNSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNKTjtBQUNGO0FERkk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNKTjtFRE1JO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0pOO0FBQ0Y7QURPSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0xOO0FEV0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNUTjtBRFlJO0VBQ0UsV0FBQTtBQ1ZOO0FEWU07RUFDRSxzQkFBQTtBQ1ZSO0FEZU07RUFDRSxpQkFBQTtBQ2JSO0FEZVE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNiVjtBRGdCUTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ2RWO0FEZ0JVO0VBQ0UsaUJBQUE7QUNkWjtBRGdCWTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNkZDtBRGVjO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2JoQjtBRG1CWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDakJkO0FEb0JjO0VBQ0Usd0NBQUE7QUNsQmhCO0FEbUJnQjtFQUNFO0lBQ0UsVUFBQTtFQ2pCbEI7RURtQmdCO0lBQ0UsVUFBQTtFQ2pCbEI7QUFDRjtBRFdnQjtFQUNFO0lBQ0UsVUFBQTtFQ2pCbEI7RURtQmdCO0lBQ0UsVUFBQTtFQ2pCbEI7QUFDRjtBRG9CZ0I7RUFDRSxZQUFBO0FDbEJsQjtBRHVCWTtFQUNFLFdBQUE7QUNyQmQ7QUR3Qlk7RUFDRSxpQkFBQTtBQ3RCZDtBRHdCYztFQUNFLFdBQUE7QUN0QmhCO0FEeUJjO0VBQ0UsV0FBQTtBQ3ZCaEI7QUQyQmdCO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsd0NBQUE7QUMxQmxCO0FEMkJrQjtFQUNFO0lBQ0UsVUFBQTtFQ3pCcEI7RUQyQmtCO0lBQ0UsVUFBQTtFQ3pCcEI7QUFDRjtBRDRCa0I7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDMUJwQjtBRGdDWTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM5QmQ7QURnQ2M7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUM5QmhCO0FEb0NZO0VBQ0UsaUJBQUE7QUNsQ2Q7QURvQ2M7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbENoQjtBRHFDYztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQ2hCO0FEdUNZO0VBQ0UsaUJBQUE7QUNyQ2Q7QUR5Q1U7RUFDRSxpQkFBQTtBQ3ZDWjtBRDRDTTtFQUNFLGdCQUFBO0FDMUNSO0FENENRO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtBQzFDVjtBRDJDVTtFQUNFLHlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3pDWjtBRDJDWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDekNkO0FEMENjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQ3hDaEI7QUQwQ2dCO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdFQUFBO0VBQ0EsK0NBQUE7QUN4Q2xCO0FEMENrQjtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ3hDcEI7RUQwQ2tCO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFQ3hDcEI7QUFDRjtBRGtDa0I7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUN4Q3BCO0VEMENrQjtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUN4Q3BCO0FBQ0Y7QUQ0Q2dCO0VBQ0UsUUFBQTtBQzFDbEI7QUQ2Q2dCO0VBQ0UsU0FBQTtBQzNDbEI7QUQ4Q2dCO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUM1Q2xCO0FEK0NnQjtFQUNFLFFBQUE7RUFDQSxVQUFBO0FDN0NsQjtBRGdEZ0I7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQzlDbEI7QURpRGdCO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUMvQ2xCO0FEb0RZO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2xEZDtBRG9EYztFQUNFLHlCQUFBO0FDbERoQjtBRHNEWTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEVBQUE7QUNwRGQ7QURzRGM7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ3BEaEI7QUR3RGdCO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDdERsQjtBRHdEa0I7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDdERwQjtBRHlEa0I7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3ZEcEI7QUQwRGtCO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ3hEcEI7QUQyRGtCO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUN6RHBCO0FENkRnQjtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzNEbEI7QUQ2RGtCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtBQzNEcEI7QUQ4RGtCO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQzVEcEI7QUQrRGtCO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUM3RHBCO0FEZ0VrQjtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUM5RHBCO0FEZ0VvQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDOUR0QjtBRGlFb0I7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUMvRHRCO0FEb0VnQjtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDbEVsQjtBRG9Fa0I7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ2xFcEI7QUQ4RUE7RUFFSTtJQUNFLFlBQUE7SUFDQSw0QkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQzVFSjtFRCtFRTtJQUNFLFlBQUE7SUFDQSw0QkFBQTtFQzdFSjtFRGlGUTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQy9FVjtFRG9GZ0I7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNsRmxCO0VEdUZZO0lBQ0UsY0FBQTtFQ3JGZDtFRDJGTTtJQUNFLGFBQUE7RUN6RlI7RUQ0RlU7SUFDRSxtQ0FBQTtFQzFGWjtFRDJGWTtJQUNFLGFBQUE7RUN6RmQ7RUQyRlk7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQ3pGZDtFRDRGZ0I7SUFDRSxVQUFBO0VDMUZsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi92aXNpdG9yLXRvb2xzL3NlbmQtaW5mby9zZW5kLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdmY2VjNSAwJSwgIzE0NTU3YiA3NCUpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1ib2R5IC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA0NXB4IDMwcHggMCA2MHB4O1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbjogNHB4IDAgMCAxMHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC13ZWJzaXRlIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgbWluLWhlaWdodDogNTUwcHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDQwcHg7XG4gICAgcGFkZGluZzogNTBweCAyMHB4IDAgNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdG9wOiAtMTZ2aDtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVycm9ycyB7XG4gICAgICBjb2xvcjogY3JpbXNvbjtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLm5vLXdlYnNpdGUtbm90aWZ5IHtcbiAgICB9XG5cbiAgICAud2Vic2l0ZS1zZWxlY3Rpb24ge1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlMiB7XG4gICAgICBjb2xvcjogZ3JheTtcblxuICAgICAgJi5wb3B1cC1jb25maWctdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wb3B1cC1jb25maWcge1xuICAgICAgLnRhYnMge1xuICAgICAgICBtaW4taGVpZ2h0OiA1ODVweDtcblxuICAgICAgICAuZXhhbXBsZS1zdHJldGNoZWQtdGFicyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAgICAgICAgIC5hdXRvLWRpc3BsYXktcG9wdXAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIC50aW1lLXNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnBvcHVwLXN0eWxlIHtcbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aGVtZS1jb2xvci1zZWxlY3Rpb24ge1xuICAgICAgICAgICAgICAuc2VsZWN0LWNvbG9yLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZSAxLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvcHVwLXN0eWxlLWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgICAgICAgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zdXBwb3J0ZXItZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24tc3RvcmFnZSB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZSAxLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWJtaXQtYXJlYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NGI1NDM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnBvcHVwLWRpc3BsYXkge1xuICAgICAgICAgICAgLmN1c3RvbWl6ZS1vcGVuLXBvcHVwLWJ1dHRvbi1wb3NpdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpc3BsYXktcG9wdXAtYmVmb3JlLWV4aXQtcGFnZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wb3B1cC1leGFtcGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcblxuICAgICAgICAuYnJvd3Nlci1jb250YWluZXIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgLmJyb3dzZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy8xNTc4NTM4NjA2NjIyMjkyMTEucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMC40JTtcbiAgICAgICAgICAgIGhlaWdodDogNDMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0wLjIlO1xuICAgICAgICAgICAgbGVmdDogLTAuMiU7XG5cbiAgICAgICAgICAgIC5vcGVuLXBvcHVwLWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgICAub3Blbi1wb3B1cC1idXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuXG4gICAgICAgICAgICAgICAgLnNheS1oZWxsby1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTVweCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwLjVzIGFsZXJ0QW5pbWF0aW9uIGluZmluaXRlO1xuXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFsZXJ0QW5pbWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3LCAxLjA3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYm90dG9tLWxlZnQge1xuICAgICAgICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5ib3R0b20tcmlnaHQge1xuICAgICAgICAgICAgICAgICAgbGVmdDogOTMlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDkzJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTQ5NSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5jZW50ZXItbGVmdCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTQ5NSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi50b3AtbGVmdCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTk0MCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi50b3AtcmlnaHQge1xuICAgICAgICAgICAgICAgICAgbGVmdDogOTMlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAtOTQwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndlYnNpdGUtZG9tYWluIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogNi43JTtcblxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1OSU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTElO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cbiAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4IDJweCAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgOHB4IDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5ub3RpY2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy41cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNpbHZlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy41cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJhY2tncm91bmQtaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgICAuc3VwcG9ydGVyLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnN1cHBvcnRlci1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnN1cHBvcnRlci1tYWpvciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnN1cHBvcnRlci1waG9uZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICAgICAgICAgICAgICAucGhvbmUtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBob25lLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDdweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG5cbiAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLm1haW4tdGl0bGUge1xuICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwcHggMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW5uZXIge1xuICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgcGFkZGluZzogNDVweCAxNXB4IDE1cHggMjBweDtcblxuICAgICAgLnBvcHVwLWNvbmZpZyB7XG4gICAgICAgIC50YWJzIHtcbiAgICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICAgICAgICAgICAmLnBvcHVwLXN0eWxlIHtcbiAgICAgICAgICAgICAgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24tc3RvcmFnZSB7XG4gICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zdWJtaXQtYXJlYSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucG9wdXAtZXhhbXBsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgIC5icm93c2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuYnJvd3NlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMDQpO1xuICAgICAgICAgICAgICAud2Vic2l0ZS1kb21haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcHVwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcblxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZmNlYzU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWJvZHkgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAgLm1hdC10YWItYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA0NXB4IDMwcHggMCA2MHB4O1xuICBoZWlnaHQ6IDI1dmg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA0cHggMCAwIDEwcHg7XG59XG4uY29udGFpbmVyIC5tYWluLXRpdGxlIC5zZWxlY3RlZC13ZWJzaXRlIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgbWluLWhlaWdodDogNTUwcHg7XG4gIHdpZHRoOiA5NCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDQwcHg7XG4gIHBhZGRpbmc6IDUwcHggMjBweCAwIDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAtMTZ2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmVycm9ycyB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLXNlbGVjdGlvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyIHtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGl0bGUyLnBvcHVwLWNvbmZpZy10aXRsZSB7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIHtcbiAgbWluLWhlaWdodDogNTg1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC5leGFtcGxlLXN0cmV0Y2hlZC10YWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmF1dG8tZGlzcGxheS1wb3B1cCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmF1dG8tZGlzcGxheS1wb3B1cCAudGltZS1zZWxlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmF1dG8tZGlzcGxheS1wb3B1cCAudGltZS1zZWxlY3Rpb24gLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLXN0eWxlIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLXN0eWxlIC50aGVtZS1jb2xvci1zZWxlY3Rpb24gLnNlbGVjdC1jb2xvci1wYW5lbCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDEuMnMgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAudGhlbWUtY29sb3Itc2VsZWN0aW9uIC5zZWxlY3QtY29sb3ItcGFuZWw6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAucG9wdXAtc3R5bGUtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtc3R5bGUgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLnN1cHBvcnRlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXN0b3JhZ2UgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDEuMnMgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXN0b3JhZ2UgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuc3VibWl0LWFyZWEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuc3VibWl0LWFyZWEgYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGJhY2tncm91bmQ6ICM0NGI1NDM7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1kaXNwbGF5IC5jdXN0b21pemUtb3Blbi1wb3B1cC1idXR0b24tcG9zaXRpb24ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLWRpc3BsYXkgLmN1c3RvbWl6ZS1vcGVuLXBvcHVwLWJ1dHRvbi1wb3NpdGlvbiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtZGlzcGxheSAuY3VzdG9taXplLW9wZW4tcG9wdXAtYnV0dG9uLXBvc2l0aW9uIC5zZWxlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtZGlzcGxheSAuZGlzcGxheS1wb3B1cC1iZWZvcmUtZXhpdC1wYWdlIHtcbiAgcGFkZGluZy10b3A6IDI4cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudCAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvMTU3ODUzODYwNjYyMjI5MjExLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwLjQlO1xuICBoZWlnaHQ6IDQzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuMiU7XG4gIGxlZnQ6IC0wLjIlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNSU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24gLnNheS1oZWxsby1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogLTVweCAtNXB4IDAgMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC41cyBhbGVydEFuaW1hdGlvbiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYWxlcnRBbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcsIDEuMDcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24uYm90dG9tLWxlZnQge1xuICBsZWZ0OiAyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5vcGVuLXBvcHVwLWJ1dHRvbi13cmFwcGVyIC5vcGVuLXBvcHVwLWJ1dHRvbi5ib3R0b20tcmlnaHQge1xuICBsZWZ0OiA5MyU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24uY2VudGVyLXJpZ2h0IHtcbiAgbGVmdDogOTMlO1xuICB0b3A6IC00OTUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIgLm9wZW4tcG9wdXAtYnV0dG9uLmNlbnRlci1sZWZ0IHtcbiAgbGVmdDogMiU7XG4gIHRvcDogLTQ5NSU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24udG9wLWxlZnQge1xuICBsZWZ0OiAyJTtcbiAgdG9wOiAtOTQwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5vcGVuLXBvcHVwLWJ1dHRvbi13cmFwcGVyIC5vcGVuLXBvcHVwLWJ1dHRvbi50b3AtcmlnaHQge1xuICBsZWZ0OiA5MyU7XG4gIHRvcDogLTk0MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAud2Vic2l0ZS1kb21haW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2LjclO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLndlYnNpdGUtZG9tYWluIGEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgd2lkdGg6IDU5JTtcbiAgaGVpZ2h0OiA1MSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNSU7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBjb2xvcjogc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5pbmZvIHtcbiAgcGFkZGluZzogMTRweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuaW5mbyAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAwIDhweCAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5pbmZvIC5ub3RpY2Uge1xuICBmb250LXNpemU6IDdweDtcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmluZm8gLmlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzLjVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuaW5mbyAuYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDlweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmJhY2tncm91bmQtaW1nIC5zdXBwb3J0ZXItYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyAuc3VwcG9ydGVyLW5hbWUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyAuc3VwcG9ydGVyLW1ham9yIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyAuc3VwcG9ydGVyLXBob25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyAuc3VwcG9ydGVyLXBob25lIC5waG9uZS1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuYmFja2dyb3VuZC1pbWcgLnN1cHBvcnRlci1waG9uZSAucGhvbmUtbnVtYmVyIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmZvb3RlciB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDdweDtcbiAgd2lkdGg6IDk4JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuZm9vdGVyIGltZyB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDdweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIHBhZGRpbmc6IDQ1cHggMTVweCAxNXB4IDIwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtc3R5bGUgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uIC5iYWNrZ3JvdW5kLWltYWdlLXNlbGVjdGlvbi1zdG9yYWdlIGltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuc3VibWl0LWFyZWEge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMDQpO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC53ZWJzaXRlLWRvbWFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuZm9vdGVyIHtcbiAgICB0b3A6IC0xNXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/visitor-tools/send-info/send-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/visitor-tools/send-info/send-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: SendInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendInfoComponent", function() { return SendInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var app_main_website_management_website_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/website-management/website-management.service */ "./src/app/main/website-management/website-management.service.ts");
/* harmony import */ var app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _visitor_tools_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../visitor-tools.service */ "./src/app/main/visitor-tools/visitor-tools.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_shared_validators_phone_number_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/validators/phone-number.validator */ "./src/app/shared/validators/phone-number.validator.ts");















var SendInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SendInfoComponent, _super);
    function SendInfoComponent(_fuseProgressBarService, _fuseSplashScreenService, _websiteManagementService, _dialogService, _sessionService, _visitorToolsService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this._websiteManagementService = _websiteManagementService;
        _this._dialogService = _dialogService;
        _this._sessionService = _sessionService;
        _this._visitorToolsService = _visitorToolsService;
        _this.websites = [];
        _this.images = [
            'http://vaytienkhongthechap.net.vn/wp-content/uploads/2016/04/telephone_skills.jpg',
            'https://tekshanghai.com/wp-content/uploads/2018/12/tek-contact-us-support-man.png.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxpmxve4G01hSCfB-D1bmdznjBweo6vgAD_ZM06cxUeBAHmtf1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFcmk67STyYb6HciXbcTguIXPJ69M9iLT5PjM2sFBU_xatnOi-'
        ];
        _this.popupDisplayEnableSlideToggle = {
            label: 'Hiển thị nút mở popup',
            color: 'accent',
            checked: false,
            disabled: false
        };
        _this.openPopupButtonPositions = [
            {
                name: 'Dưới - Trái',
                value: 1,
                checked: false,
                style: 'bottom-left'
            },
            {
                name: 'Dưới - Phải',
                value: 2,
                checked: false,
                style: 'bottom-right'
            },
            {
                name: 'Giữa - Phải',
                value: 3,
                checked: false,
                style: 'center-right'
            },
            {
                name: 'Giữa - Trái',
                value: 4,
                checked: false,
                style: 'center-left'
            },
            {
                name: 'Trên - Trái',
                value: 5,
                checked: false,
                style: 'top-left'
            },
            {
                name: 'Trên - Phải',
                value: 6,
                checked: false,
                style: 'top-right'
            }
        ];
        _this.autoDisplayPopupSlideToggle = {
            label: 'Tự động hiển thị popup khi vào trang',
            color: 'accent',
            checked: false,
            disabled: false
        };
        _this.displayPopupBeforeExitPageToggle = {
            label: 'Tự động hiển thị popup trước khi thoát trang',
            color: 'accent',
            checked: false,
            disabled: false
        };
        _this.autoDisplayPopupTimeOptions = [
            {
                name: 'Sau mỗi 5 phút',
                value: 5,
                checked: false
            },
            {
                name: 'Sau mỗi 10 phút',
                value: 10,
                checked: false
            },
            {
                name: 'Sau mỗi 15 phút',
                value: 15,
                checked: false
            },
        ];
        /** control for selected website */
        _this.websiteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** control for the MatSelect filter keyword */
        _this.websiteFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** list of websites filterd by search keyword */
        _this.filteredWebsites = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        _this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        for (var i = 11; i <= 30; i++)
            _this.images.push("//w.cokhach.com/assets/images/background/popup-bg-" + i + ".jpg");
        return _this;
    }
    SendInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        this.initForms();
        this.websiteCtrl.setValue({
            id: '',
            name: ''
        });
        var sub = this._sessionService.getAccountId()
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getWebsites(accountId);
            }
        });
        this.subscriptions.push(sub);
    };
    SendInfoComponent.prototype.onCheckPopupDisplayEnableSlideToggle = function (e) {
        this.websiteCtrl.value.isPopupOpening = e.checked;
        this.setPopupDisplay({ popupStatus: e.checked });
    };
    SendInfoComponent.prototype.onCheckAutoDisplayPopupSlideToggle = function (e) {
        this.setPopupDisplay({ autoShowPopup: e.checked });
    };
    SendInfoComponent.prototype.changeOpenPopupButtonPosition = function (e) {
        this.setPopupDisplay({ popupPosition: e.value });
        // for (const item of this.openPopupButtonPositions) {
        //   if (item.value === e.value) {
        //     item.checked = true;
        //     this.openPopupButtonPositionStyle = item.value;
        //   } else {
        //     item.checked = false;
        //   }
        // }
    };
    SendInfoComponent.prototype.changeAutoDisplayPopupTime = function (e) {
        this.setPopupDisplay({ autoShowPopupRepeatTime: e.value });
    };
    SendInfoComponent.prototype.onCheckDisplayPopupBeforeExitPageToggle = function (e) {
        console.log(e.checked);
    };
    SendInfoComponent.prototype.setPopupDisplay = function (property) {
        var _this = this;
        var sub = this._visitorToolsService.setPopupDislay(property, this.websiteCtrl.value.id)
            .subscribe(function (res) {
            _this.setPopupConfig(res.data.popupConfig || null);
        }, function (error) {
            _this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    };
    SendInfoComponent.prototype.selectColorCircle = function (e) {
        this.popupStyleForm.controls['themeColor'].setValue(e.color.hex);
    };
    SendInfoComponent.prototype.selectSupporterAvatar = function (url) {
        this.popupStyleForm.controls['supporterAvatar'].setValue(url);
    };
    SendInfoComponent.prototype.selectWebsite = function () {
        this.setPopupConfig();
    };
    SendInfoComponent.prototype.updateWebsiteInCurrentList = function (websiteId, data) {
        var website = lodash__WEBPACK_IMPORTED_MODULE_13__["find"](this.websites, function (w) { return w.id === websiteId; });
        website[data.name] = data.value;
    };
    SendInfoComponent.prototype.setPopupConfig = function (optionalConfig) {
        if (optionalConfig)
            this.websiteCtrl.value.popupConfig = optionalConfig;
        this.popupDisplayEnableSlideToggle.checked = this.websiteCtrl.value.isPopupOpening;
        var config = this.websiteCtrl.value.popupConfig;
        var popupStyleConfig = {}, popupDisplayConfig = {};
        if (config) {
            popupStyleConfig = {
                themeColor: config.themeColor,
                supporterAvatar: config.supporter.avatar,
                supporterName: config.supporter.name,
                supporterMajor: config.supporter.major,
                supporterPhone: config.supporter.phone,
            };
            popupDisplayConfig = {
                popupPosition: config.popupPosition,
                autoShowPopupRepeatTime: config.autoShowPopupRepeatTime,
                autoShowPopup: config.autoShowPopup
            };
        }
        else {
            popupStyleConfig = {
                themeColor: '#2196f3',
                supporterAvatar: this.images[0],
                supporterName: 'Nguyễn Thị A',
                supporterMajor: 'Hỗ trợ viên',
                supporterPhone: '0999999999',
            };
            this.submitPopupStyleForm(true);
        }
        //set popup style config
        for (var key in popupStyleConfig) {
            this.popupStyleForm.controls[key].setValue(popupStyleConfig[key]);
        }
        this.setPopupDisplayConfig(popupDisplayConfig);
    };
    SendInfoComponent.prototype.setPopupDisplayConfig = function (popupDisplayConfig) {
        //Automatically initialize popup display config values if they have not been initialized yet
        if (!popupDisplayConfig.popupPosition) {
            this.setPopupDisplay({ popupPosition: this.openPopupButtonPositions[1].value });
            this.websiteCtrl.value.popupConfig['popupPosition'] = this.openPopupButtonPositions[1].value;
        }
        if (!popupDisplayConfig.autoShowPopupRepeatTime) {
            this.setPopupDisplay({ autoShowPopupRepeatTime: this.autoDisplayPopupTimeOptions[0].value });
            this.websiteCtrl.value.popupConfig['autoShowPopupRepeatTime'] = this.autoDisplayPopupTimeOptions[0].value;
        }
        if (popupDisplayConfig.autoShowPopup === undefined) {
            this.setPopupDisplay({ autoShowPopup: false });
            this.websiteCtrl.value.popupConfig['autoShowPopup'] = false;
        }
        this.autoDisplayPopupSlideToggle.checked = this.websiteCtrl.value.popupConfig['autoShowPopup'];
        for (var _i = 0, _a = this.openPopupButtonPositions; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.value === this.websiteCtrl.value.popupConfig['popupPosition']) {
                item.checked = true;
                this.openPopupButtonPositionStyle = item.value;
            }
            else {
                item.checked = false;
            }
        }
        for (var _b = 0, _c = this.autoDisplayPopupTimeOptions; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.value === this.websiteCtrl.value.popupConfig['autoShowPopupRepeatTime']) {
                item.checked = true;
            }
            else {
                item.checked = false;
            }
        }
    };
    SendInfoComponent.prototype.changePopupStyleFormControlValue = function (value, controlName) {
        this.popupStyleForm.controls[controlName].setValue(value);
    };
    SendInfoComponent.prototype.initForms = function () {
        this.popupStyleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            themeColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('#2196f3'),
            supporterAvatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.images[0]),
            supporterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Nguyễn Thị A', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            supporterMajor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Hỗ trợ viên'),
            supporterPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0999999999', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                app_shared_validators_phone_number_validator__WEBPACK_IMPORTED_MODULE_14__["invalidPhoneNumberValidator"]
            ])
        });
    };
    Object.defineProperty(SendInfoComponent.prototype, "supporterName", {
        get: function () {
            return this.popupStyleForm.get('supporterName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendInfoComponent.prototype, "supporterPhone", {
        get: function () {
            return this.popupStyleForm.get('supporterPhone');
        },
        enumerable: true,
        configurable: true
    });
    SendInfoComponent.prototype.generatePopupStyleParams = function () {
        var params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.popupStyleForm.value);
        for (var key in params)
            if (!params[key])
                return null;
        return params;
    };
    SendInfoComponent.prototype.submitPopupStyleForm = function (isInit) {
        var _this = this;
        var popupStyleParams = this.generatePopupStyleParams();
        if (!popupStyleParams) {
            this._dialogService._openErrorDialog({ messages: ['Vui lòng điền đầy đủ thông tin'] });
            return;
        }
        this._fuseProgressBarService.show();
        var sub = this._visitorToolsService.updatePopupConfig(popupStyleParams, this.websiteCtrl.value.id)
            .subscribe(function (res) {
            _this.setPopupConfig(res.data.popupConfig || null);
            _this._fuseProgressBarService.hide();
            if (!isInit) {
                _this._dialogService._openSuccessDialog({
                    messages: ["\n              <center>\n                Thi\u1EBFt l\u1EADp th\u00E0nh c\u00F4ng!\n                <br>Ki\u1EC3m tra website c\u1EE7a b\u1EA1n <a href=\"" + _this.websiteCtrl.value.name + "\" target=\"_blank\">t\u1EA1i \u0111\u00E2y</a>\n              </center>\n            "]
                });
            }
        }, function (error) {
            _this._fuseProgressBarService.hide();
            if (!isInit) {
                _this._dialogService._openErrorDialog(error.error);
            }
        });
        this.subscriptions.push(sub);
    };
    SendInfoComponent.prototype.numberWithSpaces = function (value, pattern) {
        var i = 0, phone = value.toString();
        return pattern.replace(/#/g, function (_) { return phone[i++]; });
    };
    SendInfoComponent.prototype.getWebsites = function (accountId) {
        var _this = this;
        var sub = this._websiteManagementService.getWebsites(accountId)
            .subscribe(function (res) {
            _this.websites = (res.data.website || []).map(function (website) {
                return {
                    id: website._id,
                    name: website.domain,
                    isPopupOpening: website.isPopupOpening || false,
                    popupConfig: website.popupConfig || null
                };
            });
            if (_this.websites.length > 0) {
                _this.hasWebsite = true;
                // load the initial account list
                _this.filteredWebsites.next(_this.websites.slice());
                // listen for search field value changes
                _this.websiteFilterCtrl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this._onDestroy))
                    .subscribe(function () {
                    _this.filterWebsites();
                });
                // set default option is the first item of list websites
                _this.websiteCtrl.setValue(_this.websites[0]);
                _this.setPopupConfig();
                _this._fuseProgressBarService.hide();
                _this._fuseSplashScreenService.hide();
                _this.isProcessing = false;
            }
            else {
                _this.hasWebsite = false;
                _this.isProcessing = false;
                _this._fuseProgressBarService.hide();
                _this._fuseSplashScreenService.hide();
                _this._dialogService._openInfoDialog('Tài khoản chưa có website nào. Vui lòng thêm', 'tại đây', "/quan-ly-website/" + _this._sessionService.activeAccountId);
            }
        });
        this.subscriptions.push(sub);
    };
    SendInfoComponent.prototype.filterWebsites = function () {
        if (!this.websites) {
            return;
        }
        // get the search keyword
        var search = this.websiteFilterCtrl.value;
        if (!search) {
            this.filteredWebsites.next(this.websites.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the websites
        this.filteredWebsites.next(this.websites.filter(function (website) { return website.name.toLowerCase().indexOf(search) > -1; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelect"])
    ], SendInfoComponent.prototype, "singleSelect", void 0);
    SendInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-info',
            template: __webpack_require__(/*! raw-loader!./send-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/visitor-tools/send-info/send-info.component.html"),
            styles: [__webpack_require__(/*! ./send-info.component.scss */ "./src/app/main/visitor-tools/send-info/send-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__["FuseProgressBarService"],
            _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["FuseSplashScreenService"],
            app_main_website_management_website_management_service__WEBPACK_IMPORTED_MODULE_8__["WebsiteManagementService"],
            app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"],
            _visitor_tools_service__WEBPACK_IMPORTED_MODULE_12__["VisitorToolsService"]])
    ], SendInfoComponent);
    return SendInfoComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_10__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/visitor-tools/visitor-tools-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/visitor-tools/visitor-tools-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: VisitorToolsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorToolsRoutingModule", function() { return VisitorToolsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-info/send-info.component */ "./src/app/main/visitor-tools/send-info/send-info.component.ts");
/* harmony import */ var _fake_customer_fake_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fake-customer/fake-customer.component */ "./src/app/main/visitor-tools/fake-customer/fake-customer.component.ts");





var VisitorToolsRoutingModule = /** @class */ (function () {
    function VisitorToolsRoutingModule() {
    }
    VisitorToolsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'gui-thong-tin-tu-van',
                        pathMatch: 'full',
                        component: _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__["SendInfoComponent"]
                    },
                    {
                        path: 'gia-khach-mua-hang',
                        pathMatch: 'full',
                        component: _fake_customer_fake_customer_component__WEBPACK_IMPORTED_MODULE_4__["FakeCustomerComponent"]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VisitorToolsRoutingModule);
    return VisitorToolsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/visitor-tools/visitor-tools.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/visitor-tools/visitor-tools.module.ts ***!
  \************************************************************/
/*! exports provided: VisitorToolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorToolsModule", function() { return VisitorToolsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visitor_tools_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor-tools-routing.module */ "./src/app/main/visitor-tools/visitor-tools-routing.module.ts");
/* harmony import */ var _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-info/send-info.component */ "./src/app/main/visitor-tools/send-info/send-info.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color/circle */ "./node_modules/ngx-color/circle/fesm5/ngx-color-circle.js");
/* harmony import */ var _fake_customer_fake_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fake-customer/fake-customer.component */ "./src/app/main/visitor-tools/fake-customer/fake-customer.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");











var VisitorToolsModule = /** @class */ (function () {
    function VisitorToolsModule() {
    }
    VisitorToolsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__["SendInfoComponent"],
                _fake_customer_fake_customer_component__WEBPACK_IMPORTED_MODULE_9__["FakeCustomerComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                ngx_color_circle__WEBPACK_IMPORTED_MODULE_8__["ColorCircleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__["NgxMatSelectSearchModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _visitor_tools_routing_module__WEBPACK_IMPORTED_MODULE_2__["VisitorToolsRoutingModule"]
            ]
        })
    ], VisitorToolsModule);
    return VisitorToolsModule;
}());



/***/ }),

/***/ "./src/app/main/visitor-tools/visitor-tools.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/visitor-tools/visitor-tools.service.ts ***!
  \*************************************************************/
/*! exports provided: VisitorToolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorToolsService", function() { return VisitorToolsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");




var VisitorToolsService = /** @class */ (function () {
    function VisitorToolsService(_http) {
        this._http = _http;
    }
    VisitorToolsService.prototype.updatePopupConfig = function (params, websiteId) {
        var url = app_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_3__["API"].Website.updateWebsiteSendInfoPopupConfig.replace('{website_id}', websiteId);
        return this._http.put(url, params);
    };
    VisitorToolsService.prototype.setPopupDislay = function (params, websiteId) {
        var url = app_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_3__["API"].Website.enablePopupDisplay.replace('{website_id}', websiteId);
        return this._http.put(url, params);
    };
    VisitorToolsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VisitorToolsService);
    return VisitorToolsService;
}());



/***/ }),

/***/ "./src/app/shared/validators/phone-number.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/validators/phone-number.validator.ts ***!
  \*************************************************************/
/*! exports provided: invalidPhoneNumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidPhoneNumberValidator", function() { return invalidPhoneNumberValidator; });
var invalidPhoneNumberValidator = function (control) {
    var phoneNumberPattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var isValid = phoneNumberPattern.test(control.value);
    return !isValid ? { 'invalidPhoneNumber': { value: control.value } } : null;
};


/***/ })

}]);
//# sourceMappingURL=main-visitor-tools-visitor-tools-module-es5.js.map