# Qwik PoC

## Hydration
When an SSR/SSG application boots up on a client, it requires that the framework on the client restores three pieces of information:
1. Listeners 
    1. locate event listeners and install them on the DOM nodes to make the application interactive.
2. Component tree
    1. build up an internal data structure representing the application component tree.
3. Application state
    1. restore the application state.

It is expensive because is needed to download all of the component code associated with current page and because frameworks have to execute the templates associated with these components to rebuild listener location and internal component tree.

Its all about re-execution.

## Resumability
It is about pausing execution in the server and resuming execution in the client without replaying and downloading all of the application logic.

Any point of its lifecycle can be serialized and moved to a different VM instance (server to browser) there the application resumes where the serialization stopped.

Still need to a solve the three problems (listeners, component tree, application state) in a way that is compatible with a no-code startup.

### Listeners

`<button on:click="./chunk.js#handler_symbol">click me</button>`

Qwik setup a single global listener instead of many individuals per DOM element.

HTML contains chunk and symbol name. The attribute tells Qwikloader which code chunk to download and which symbol to retrieve from the chunk

Qwik’s event processing allows insertion of async lazy load


### Component Tree
Qwik collects component boundary information and serializes that information into HTML instead of re-executing component templates and memoize component boundary location.By doing that
- Qwik can rebuild component hierarchy information without the component code actually being present and can remain lazy
- Can lazy load only components that need to be re-rendered instead of all upfront
- Qwik collects relationship between components and stores, creating a subscription model that informs Qwik which components need to be re-rendered as a result of state change and this is also serialized into HTML


### Application State

Every framework serializes application state into HTML so that can be restored as part of hydration.
But usually component props are created by the parent component which creates a chain reaction.
In order to restore component X, its parents need to be restored as well
Qwik allows any component to be resumed without parent component code being present.

`JSON.stringify` is one way to think about serialization, but has some limitations.

###  Qwik solves some of them:
- JSON produces DAG (Directed Acyclic Graph) and it means object can’t have circular references when being serialized. Application State is often circular, so this is a problem. Qwik ensures the circular references get properly saved and then restored when the graph of objects gets serialized.
- JSON can’t serialize some object types such DOM references and Dates. Qwik serialization format enables serializing:
    - DOM References
    - Promises
    - Function closures
    - Dates
    - URL objects
    - Map and Set instances

### Qwik doesn’t solve:
- Serialization of Streams, etc…
- Serialization of classes (instance and prototype)


Other Benefits of Resumability

* Serializing existing PWA apps so that users don't lose context when they return to the application
* Improved rendering performance because only changed components need to be re-rendered
* Fine-grained lazy-loading
* Decreased memory pressure, especially on mobile devices
* Progressive interactivity of existing static websites

## References
https://qwik.builder.io/docs/concepts/resumable/
