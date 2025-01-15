## Zone

### What is the releation between zone and view engine and ivy?

Zone.js, View Engine, and Ivy are all related to Angular, a popular web application framework.

**Zone.js**
- **Purpose**: Zone.js is a library that provides an execution context, known as a "zone," for asynchronous operations in JavaScript. In Angular, it is used to detect changes and automatically trigger change detection cycles.
- **Role in Angular**: It helps Angular know when to update the view by wrapping asynchronous operations (like setTimeout, Promises, etc.) and notifying Angular when these operations complete.

**View Engine**
- **Purpose**: The View Engine was Angular's original rendering engine before Ivy. It translates Angular templates into JavaScript code that can be executed by the browser.
- **Characteristics**: It compiles templates at build time (AOT) or at runtime (JIT) and was the default engine until Angular 9.

**Ivy**
- **Purpose**: Ivy is the new rendering engine introduced in Angular 9, designed to improve performance, reduce bundle size, and enhance developer experience.
- **Advantages**: 
  - **Smaller Bundle Sizes**: Ivy generates more efficient code, leading to smaller application bundles.
  - **Faster Compilation**: It provides faster build times and improved debugging.
  - **Better Tree Shaking**: Ivy can remove unused code more effectively, further optimizing the application size.
  
**Relation Among Them**
- **Zone.js and Rendering Engines**: Both View Engine and Ivy rely on Zone.js for change detection. Zone.js is independent of the rendering engine but is crucial for Angular's reactive updates.
- **Transition from View Engine to Ivy**: Angular moved from the View Engine to Ivy to leverage the benefits of improved performance and developer experience. Zone.js continues to play a critical role in both environments.

Overall, Zone.js facilitates change detection, while View Engine and Ivy are responsible for rendering Angular applications. Ivy represents a significant evolution in Angular's rendering strategy.

### Zoneless in angular 18

blog about zoneless in angular 18: https://blog.logrocket.com/zoneless-change-detection-angular-18/

official doc: https://angular.dev/guide/experimental/zoneless

#### Zone.js monkey patching

In Angular, Zone.js uses a technique called “monkey patching” to manipulate the browser’s native asynchronous APIs, such as timers, XHR requests, and DOM events. Instead of directly replacing these functions, Zone.js creates wrappers around them. These wrappers intercept the original behavior and inject additional logic. This allows Zone.js to track the start and finish of these asynchronous operations and inform Angular’s change detection mechanism when the asynchronous task is completed.

#### issues with zone.js

- Difficulties in debugging: While Zone.js effectively manages asynchronous operations in Angular, its monkey patching approach modifies browser objects, and can make debugging more challenging
- Performance issues: In current change detection, the framework examines the entire component tree when data changes. This comprehensive approach ensures updates are reflected everywhere, but it can become a performance bottleneck in large applications because it can’t pinpoint specific changes in the component tree
- Overheads of Zone.js: Zone.js itself adds some overhead, and every new asynchronous API integration within Zone.js can further increase the cost of loading and initialization, potentially slowing down the initial application launch

#### Zoneless change detection

- use signal 
- some event listeners

