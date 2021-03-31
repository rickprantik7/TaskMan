(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+4L4":
/*!********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.ts ***!
  \********************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/task.service */ "DK97");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/lists", a1]; };
function TaskViewComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, list_r4._id));
} }
const _c1 = function (a0) { return { "completed": a0 }; };
const _c2 = function (a1, a3) { return ["/lists", a1, "edit-task", a3]; };
function TaskViewComponent_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_10_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const task_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onTaskClick(task_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_10_div_15_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const task_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onDeleteTaskClick(task_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, task_r7.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r5.selectedListId, task_r7._id));
} }
function TaskViewComponent_div_10_h3_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are no tasks here! Click the add button to create a new task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a1) { return ["/edit-list", a1]; };
function TaskViewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_10_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onDeleteListClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskViewComponent_div_10_div_15_Template, 11, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskViewComponent_div_10_h3_16_Template, 2, 0, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r1.selectedListId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tasks.length === 0);
} }
function TaskViewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskViewComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, list_r13._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r13.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r13.name);
} }
class TaskViewComponent {
    constructor(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.listId) {
                this.selectedListId = params.listId;
                this.taskService.getTasks(params.listId).subscribe((tasks) => {
                    this.tasks = tasks;
                });
            }
            else {
                this.tasks = undefined;
            }
        });
        this.taskService.getLists().subscribe((lists) => {
            this.lists = lists;
        });
    }
    onTaskClick(task) {
        // we want to set the task to completed
        this.taskService.complete(task).subscribe(() => {
            // the task has been set to completed successfully
            console.log("Completed successully!");
            task.completed = !task.completed;
        });
    }
    onDeleteListClick() {
        this.taskService.deleteList(this.selectedListId).subscribe((res) => {
            this.router.navigate(['/lists']);
            console.log(res);
        });
    }
    onDeleteTaskClick(id) {
        this.taskService.deleteTask(this.selectedListId, id).subscribe((res) => {
            this.tasks = this.tasks.filter(val => val._id !== id);
            console.log(res);
        });
    }
}
TaskViewComponent.ɵfac = function TaskViewComponent_Factory(t) { return new (t || TaskViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TaskViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskViewComponent, selectors: [["app-task-view"]], decls: 14, vars: 4, consts: [[1, "centered-content"], [1, "task-manager-container"], [1, "sidebar", "has-background-white"], [1, "title", "has-text-primary"], [1, "list-menu"], ["class", "list-menu-item", "routerLinkActive", "is-active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/new-list", 1, "button", "is-primary", "has-text-white"], [1, "task-list-container", "has-background-light"], [4, "ngIf"], ["routerLinkActive", "is-active", 1, "list-menu-item", 3, "routerLink"], [1, "top-bar"], [1, "dropdown", "is-hoverable", "is-right"], [1, "dropdown-trigger"], ["aria-haspopup", "true", "aria-controls", "dropdown-menu4", 1, "button"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-cog"], ["id", "dropdown-menu4", "role", "menu", 1, "dropdown-menu"], [1, "dropdown-content"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", "has-text-danger", 3, "click"], ["class", "task", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state-text", 4, "ngIf"], ["routerLink", "./new-task", 1, "circle-add-button", "button", "is-primary"], ["src", "../../../assets/plus-icon.svg", 1, "has-text-white"], [1, "task", 3, "ngClass", "click"], [1, "task-text"], [1, "task-buttons"], [1, "button", 3, "routerLink"], [1, "icon"], [1, "fas", "fa-edit"], [1, "button", "is-danger", 2, "margin-left", "10px", 3, "click"], [1, "fas", "fa-trash"], [1, "empty-state-text"], [1, "img", 3, "src"]], template: function TaskViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskViewComponent_a_6_Template, 2, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+ New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskViewComponent_div_10_Template, 19, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskViewComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskViewComponent_a_13_Template, 4, 5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #44ddd0, #27d7a1);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.white-box[_ngcontent-%COMP%] {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px;\n}\n.task-manager-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  background: white;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.task-list-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 42px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.task-list-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n}\n.task-list-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 0;\n}\n.list-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n  background: #f8f8f8;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n  background-color: #cff8ef;\n  color: #006450;\n}\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  align-items: center;\n}\n.task[_ngcontent-%COMP%]:not(.complete) {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.task[_ngcontent-%COMP%]:not(.complete):active {\n  transform: scale(0.95);\n}\n.task[_ngcontent-%COMP%]:not(.complete):hover {\n  box-shadow: 0 0 0 5px #eeeeee;\n}\n.task[_ngcontent-%COMP%]:not(.complete):hover   .task-buttons[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.task.completed[_ngcontent-%COMP%]   .task-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.task[_ngcontent-%COMP%]   .task-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n.task[_ngcontent-%COMP%]   .task-buttons[_ngcontent-%COMP%] {\n  transition: opacity 0.2s, transform 0.2s;\n  opacity: 0;\n  transform: scale(0.85);\n}\n.circle-add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n.empty-state-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #777;\n  text-align: center;\n}\n.img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin-right: 50px;\n  border-radius: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHRhc2stdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxrRkFBQTtBQTBCUjtFQUNJLDJEQUFBO0FDM0JKO0FEOEJBO0VBQ0ksWUFBQTtBQzNCSjtBRDhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUMzQko7QUQ4QkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDM0JKO0FEOEJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQzNCSjtBRDhCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0FDNUJKO0FBckNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXdDSjtBQXJDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFFQSwyQkFBQTtFQUNBLDhCQUFBO0FBcUNKO0FBbENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDRCQUFBO0VBQ0EsK0JBQUE7QUFvQ0o7QUFqQ0k7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFtQ1I7QUFsQ1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtBQW9DWjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQS9CSTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBK0JSO0FBN0JRO0VBQ0ksbUJEckRKO0FDb0ZSO0FBNUJRO0VBQ0kseUJBQUE7RUFDQSxjRDVEQztBQzBGYjtBQXpCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FBMkJKO0FBekJJO0VBQ0ksZUFBQTtFQUNBLHFEQUFBO0FBMkJSO0FBekJRO0VBQ0ksc0JBQUE7QUEyQlo7QUF4QlE7RUFDSSw2QkFBQTtBQTBCWjtBQXhCWTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQTBCaEI7QUFyQkk7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QUF1QlI7QUFuQkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQXFCUjtBQWxCSTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBb0JSO0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFtQko7QUFmQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFrQko7QUFmQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFrQkoiLCJmaWxlIjoidGFzay12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB3aGVyZSB3ZSBwdXQgZ2xvYmFsIHN0eWxlcyBhbmQgY2hhbmdlIHZhcmlhYmxlIHZhbHVlc1xuXG4vLyBJbXBvcnQgRm9udHMgKExhdG8gYW5kIE51bml0bylcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XG5cbiR0dXJxdW9pc2U6ICM0NGRkZDA7XG4kZ3JlZW46ICMyN2Q3YTE7XG4kbGlnaHQtZ3JlZW46ICM0NWY2OWU7IFxuJGRhcmstZ3JlZW46IHJnYigwLCAxMDAsIDgwKTtcblxuJGxpZ2h0OiAjZjhmOGY4O1xuXG5cbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRsaW5rOiAkdHVycXVvaXNlO1xuXG5cbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xuXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGlucHV0LXNoYWRvdzogbm9uZTtcblxuXG4vLyBTZXQgY3VzdG9tIGdsb2JhbCBzdHlsZXMgKHdpbGwgYmUgYXBwbGllZCB0byB3aG9sZSBhcHApXG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICR0dXJxdW9pc2UsICRncmVlbik7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1ib3gge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTgwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDM1cHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4ud2hpdGUtYm94IHtcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIFxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxOdW5pdG86NDAwLDcwMFwiKTtcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjNDRkZGQwLCAjMjdkN2ExKTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi53aGl0ZS1ib3gge1xuICBwYWRkaW5nOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi50YXNrLW1hbmFnZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1heC1oZWlnaHQ6IDY4MHB4O1xufVxuXG4uc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDQycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xufVxuXG4udGFzay1saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiA0MnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuLnRhc2stbGlzdC1jb250YWluZXIgLnRvcC1iYXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhc2stbGlzdC1jb250YWluZXIgLnRvcC1iYXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmY4ZWY7XG4gIGNvbG9yOiAjMDA2NDUwO1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrOm5vdCguY29tcGxldGUpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cbi50YXNrOm5vdCguY29tcGxldGUpOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4udGFzazpub3QoLmNvbXBsZXRlKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZWVlZWVlO1xufVxuLnRhc2s6bm90KC5jb21wbGV0ZSk6aG92ZXIgLnRhc2stYnV0dG9ucyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4udGFzay5jb21wbGV0ZWQgLnRhc2stdGV4dCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBvcGFjaXR5OiAwLjg7XG59XG4udGFzayAudGFzay10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuLnRhc2sgLnRhc2stYnV0dG9ucyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG59XG5cbi5jaXJjbGUtYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXB4O1xuICByaWdodDogMzVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZW1wdHktc3RhdGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-view',
                templateUrl: './task-view.component.html',
                styleUrls: ['./task-view.component.scss']
            }]
    }], function () { return [{ type: src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LENOVO\taskMnager\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoginPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginButtonClicked(email, password) {
        this.authService.login(email, password).subscribe((res) => {
            if (res.status === 200) {
                // we have logged in successfully
                this.router.navigate(['/lists']);
            }
            console.log(res);
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 26, vars: 0, consts: [[1, "centered-content"], [1, "white-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "placeholder", "Email", 1, "input", "has-background-light"], ["emailInput", ""], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "control", "has-icons-left"], ["type", "password", "placeholder", "Password", 1, "input", "has-background-light"], ["pwInput", ""], [1, "fas", "fa-lock"], [1, "field", 2, "display", "flex", "justify-content", "flex-end"], [1, "control"], [1, "button", "is-success", "has-text-white", 3, "click"], [1, "has-text-grey"], ["routerLink", "/signup"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.onLoginButtonClicked(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Not got an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "6XLR":
/*!******************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.ts ***!
  \******************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/task.service */ "DK97");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NewTaskComponent {
    constructor(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params['listId'];
        });
    }
    createTask(title) {
        this.taskService.createTask(title, this.listId).subscribe((newTask) => {
            this.router.navigate(['../'], { relativeTo: this.route });
        });
    }
}
NewTaskComponent.ɵfac = function NewTaskComponent_Factory(t) { return new (t || NewTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTaskComponent, selectors: [["app-new-task"]], decls: 13, vars: 0, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter task name...", 1, "input", "has-background-light", "is-medium"], ["taskTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]], template: function NewTaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create a new task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTaskComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.createTask(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdGFzay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-task',
                templateUrl: './new-task.component.html',
                styleUrls: ['./new-task.component.scss']
            }]
    }], function () { return [{ type: src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DK97":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "pQQl");



class TaskService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getLists() {
        return this.webReqService.get('lists');
    }
    createList(title) {
        // We want to send a web request to create a list
        return this.webReqService.post('lists', { title });
    }
    updateList(id, title) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`lists/${id}`, { title });
    }
    updateTask(listId, taskId, title) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
    }
    deleteTask(listId, taskId) {
        return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
    }
    deleteList(id) {
        return this.webReqService.delete(`lists/${id}`);
    }
    getTasks(listId) {
        return this.webReqService.get(`lists/${listId}/tasks`);
    }
    createTask(title, listId) {
        // We want to send a web request to create a task
        return this.webReqService.post(`lists/${listId}/tasks`, { title });
    }
    complete(task) {
        return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
            completed: !task.completed
        });
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "M1aA":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
  \********************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "DK97");




class EditListComponent {
    constructor(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params.listId;
            console.log(params.listId);
        });
    }
    updateList(title) {
        this.taskService.updateList(this.listId, title).subscribe(() => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
}
EditListComponent.ɵfac = function EditListComponent_Factory(t) { return new (t || EditListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EditListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditListComponent, selectors: [["app-edit-list"]], decls: 13, vars: 0, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter list name...", 1, "input", "has-background-light", "is-medium"], ["listTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]], template: function EditListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditListComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.updateList(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-list',
                templateUrl: './edit-list.component.html',
                styleUrls: ['./edit-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ThA2":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SignupPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onSignupButtonClicked(email, password) {
        this.authService.signup(email, password).subscribe((res) => {
            console.log(res);
            this.router.navigate(['/lists']);
        });
    }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) { return new (t || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupPageComponent, selectors: [["app-signup-page"]], decls: 26, vars: 0, consts: [[1, "centered-content"], [1, "white-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "placeholder", "Email", 1, "input", "has-background-light"], ["emailInput", ""], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "control", "has-icons-left"], ["type", "password", "placeholder", "Password", 1, "input", "has-background-light"], ["pwInput", ""], [1, "fas", "fa-lock"], [1, "field", 2, "display", "flex", "justify-content", "flex-end"], [1, "control"], [1, "button", "is-success", "has-text-white", 3, "click"], [1, "has-text-grey"], ["routerLink", "/login"]], template: function SignupPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.onSignupButtonClicked(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Already got an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-page',
                templateUrl: './signup-page.component.html',
                styleUrls: ['./signup-page.component.scss']
            }]
    }], function () { return [{ type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "+4L4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "tPJF");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "6XLR");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-req.interceptor */ "oSNA");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "ThA2");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "M1aA");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "pnAd");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_9__["WebReqInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__["TaskViewComponent"],
        _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_6__["NewListComponent"],
        _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskComponent"],
        _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
        _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_10__["SignupPageComponent"],
        _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_11__["EditListComponent"],
        _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__["TaskViewComponent"],
                    _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_6__["NewListComponent"],
                    _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskComponent"],
                    _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                    _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_10__["SignupPageComponent"],
                    _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_11__["EditListComponent"],
                    _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_9__["WebReqInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "pQQl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthService {
    constructor(webService, router, http) {
        this.webService = webService;
        this.router = router;
        this.http = http;
    }
    login(email, password) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            // the auth tokens will be in the header of this response
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("LOGGED IN!");
        }));
    }
    signup(email, password) {
        return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            // the auth tokens will be in the header of this response
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("Successfully signed up and now logged in!");
        }));
    }
    logout() {
        this.removeSession();
        this.router.navigate(['/login']);
    }
    getAccessToken() {
        return localStorage.getItem('x-access-token');
    }
    getRefreshToken() {
        return localStorage.getItem('x-refresh-token');
    }
    getUserId() {
        return localStorage.getItem('user-id');
    }
    setAccessToken(accessToken) {
        localStorage.setItem('x-access-token', accessToken);
    }
    setSession(userId, accessToken, refreshToken) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    }
    removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
    getNewAccessToken() {
        return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getUserId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.setAccessToken(res.headers.get('x-access-token'));
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "oSNA":
/*!****************************************!*\
  !*** ./src/app/web-req.interceptor.ts ***!
  \****************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "ccyI");





class WebReqInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    intercept(request, next) {
        // Handle the request
        request = this.addAuthHeader(request);
        // call next() and handle the response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401) {
                // 401 error so we are unauthorized
                // refresh the access token
                return this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                    request = this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                    console.log(err);
                    this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request to refresh the access token
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
                console.log("Access Token Refreshed!");
                this.refreshingAccessToken = false;
                this.accessTokenRefreshed.next();
            }));
        }
    }
    addAuthHeader(request) {
        // get the access token
        const token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    }
}
WebReqInterceptor.ɵfac = function WebReqInterceptor_Factory(t) { return new (t || WebReqInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
WebReqInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebReqInterceptor, factory: WebReqInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebReqInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "pQQl":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class WebRequestService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'https://devza.com/tests/tasks';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        headers = headers.set('AuthToken', 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ');
    }
    get(uri) {
        return this.http.get(`${this.ROOT_URL}/listusers`, { headers: {
                'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
            } });
    }
    post(uri, payload) {
        return this.http.post(`${this.ROOT_URL}/create`, payload, { headers: {
                'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
            } });
    }
    patch(uri, payload) {
        return this.http.patch(`${this.ROOT_URL}/update`, payload), { headers: {
                'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
            } };
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT_URL}/delete`, { headers: {
                'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
            } });
    }
    login(email, password) {
        return this.http.post(`${this.ROOT_URL}/users/login`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
    signup(email, password) {
        return this.http.post(`${this.ROOT_URL}/users`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
}
WebRequestService.ɵfac = function WebRequestService_Factory(t) { return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRequestService, factory: WebRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pnAd":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "DK97");




class EditTaskComponent {
    constructor(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.taskId = params.taskId;
            this.listId = params.listId;
        });
    }
    updateTask(title) {
        this.taskService.updateTask(this.listId, this.taskId, title).subscribe(() => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
}
EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) { return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTaskComponent, selectors: [["app-edit-task"]], decls: 13, vars: 0, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter task name...", 1, "input", "has-background-light", "is-medium"], ["taskTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]], template: function EditTaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTaskComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.updateTask(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-task',
                templateUrl: './edit-task.component.html',
                styleUrls: ['./edit-task.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "tPJF":
/*!******************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.ts ***!
  \******************************************************/
/*! exports provided: NewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListComponent", function() { return NewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/task.service */ "DK97");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NewListComponent {
    constructor(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
    }
    createList(title) {
        this.taskService.createList(title).subscribe((list) => {
            console.log(list);
            // Now we navigate to /lists/task._id
            this.router.navigate(['/lists', list._id]);
        });
    }
}
NewListComponent.ɵfac = function NewListComponent_Factory(t) { return new (t || NewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewListComponent, selectors: [["app-new-list"]], decls: 13, vars: 0, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter list name...", 1, "input", "has-background-light", "is-medium"], ["listTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]], template: function NewListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create a new Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewListComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.createList(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-list',
                templateUrl: './new-list.component.html',
                styleUrls: ['./new-list.component.scss']
            }]
    }], function () { return [{ type: src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "+4L4");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "tPJF");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "6XLR");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "ThA2");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "M1aA");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "pnAd");











const routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    { path: 'new-list', component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_3__["NewListComponent"] },
    { path: 'edit-list/:listId', component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_7__["EditListComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_6__["SignupPageComponent"] },
    { path: 'lists', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_2__["TaskViewComponent"] },
    { path: 'lists/:listId', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_2__["TaskViewComponent"] },
    { path: 'lists/:listId/new-task', component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__["NewTaskComponent"] },
    { path: 'lists/:listId/edit-task/:taskId', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_8__["EditTaskComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map