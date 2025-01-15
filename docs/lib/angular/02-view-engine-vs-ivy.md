## ivy vs view engine

view engine from Angular 2.

ivy introduced in Angular 9.

https://designtechworld.medium.com/ivy-compiler-vs-view-engine-b607c3897d3d

### Overview of View Engine

View Engine is the original rendering engine in Angular that has been used since Angular 2. It is responsible for transforming Angular component templates into JavaScript code that can be executed by the browser. The main job of the View Engine is to compile components and templates into a set of instructions that can be understood and rendered by the browser. View Engine also handles the dependency injection system and provides services like change detection, directives, and pipes.


### Overview of Ivy

Ivy is the latest rendering engine in Angular that was introduced with Angular 9. It is a complete overhaul of the View Engine, with the aim of making Angular faster, smaller, and more flexible. The main focus of Ivy is on better performance and smaller bundle sizes. Ivy achieves this by generating more efficient code that eliminates unnecessary elements from the compiled templates.

### Difference between View Engine and Ivy

- Compilation and Code Generation: View Engine uses a two-phase compilation process, where the first phase compiles the template into a component factory, and the second phase creates the view from the component factory. Ivy, on the other hand, uses a single-phase compilation process that generates code directly from the template.

- Tree Shaking: Ivy enables tree shaking, a process that eliminates unnecessary code from the compiled output. This makes the code smaller, and the application runs faster. View Engine does not support tree shaking.

- Debugging: Debugging with Ivy is easier since it provides more detailed error messages, source maps, and better tooling support. View Engine does not provide such detailed error messages.

- Performance: Ivy provides better performance than View Engine. It does this by generating more efficient code, enabling tree shaking, and using a smaller bundle size.

### Conclusion

In conclusion, both View Engine and Ivy are rendering engines in Angular that transform templates into JavaScript code that can be executed by the browser. View Engine is the original rendering engine, while Ivy is the latest rendering engine that focuses on better performance, smaller bundle sizes, and easier debugging. Ivy provides several advantages over View Engine, including better performance, tree shaking, and better tooling support. However, it also requires more memory and processing power.
