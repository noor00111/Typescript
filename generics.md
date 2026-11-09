## Title: Generics annd Typing Async Responses with Promise<T>

**Introduction:** I like to explain geerics as function parameters, but for types. Instead of hardcoding a type, we have a placeholder, usually T and it gets filled in when the code is used. We write the logic and reuse it with full type safety.

**How Generics Work:**
Here is the simple example:

```typescript

const first = <T>(items: T[]): T | undefined => {
    return items[0];
}
first([1,2,3]);  //returns number | undefined
first(["a", "b"]); //returns string | undefined

```

Typescripts infers T from the argument, so the return type is always accurate. Without generics, i would have to use 'any' type and lose that information.

**Generics with Promise<T>**
This is where generics pay off in real projects. Promise is itself generic, Promise<T> means- "a promise that will eventually give us a T". So i can write one reuseable fetch helper:

```typescript

interface Product {
    id: number;
    title: string;
}
async function fetchData<T>(url: string): Promise<T>{
    const res = await fetch(url);
    return res.json;
}

const product =  await fetchData<Product>("/api/products/1");
console.log(product.title);

```
Now 'product' is typed as 'Product', so i get autocomplete and an error if i touch a field that doesn't exist. The same helper works for users, orders, anything. One caution: Typescript doesn't validate the JSON  at runtime so for untrusted data i would add a validation library like Zod.

**Conclusion:** Generics lets us write flexible code without giving up type safety. Combined with Promise<T>, they make asyc code ad predictable as synchronous code.