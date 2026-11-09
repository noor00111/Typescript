## Title: Combining Union(|) and Intersaction(&) Types

**Introduction:** Union and Intrsaction sound similar but they do opposite jobs. A union, A | B, means "this or that", the value is one of several types. An intersaction, A & B, means "this and that", the value has every property from both. In real projects i often use them together.

**A Practical Example: API Responses**
Imagine every API response shares some metadata, but the result can either succeed or fail.

```typescript

type Meta = {
    requistId: string; 
    timestamp: number;
    }

type Success<T> = {
    status: "success";
    data: T;
}

type Failure = {
    status: "error";
    message: string;
}

type apiResponse<T> = Meta & (Success<T> | Failure);

```
The intersaction add the shared 'Meta' fields to every response, and the union says it's either a success or a failure. Because both variants have a 'status' field with a fixed literal value. Typescript can narrow it:

```typescript

function handle(res: ApiResponse<string[]>){
    console.log(res.requestId); 

    if(res.status === "success"){
        console.log(res.data.length);
    } else{
        console.log(res.message)
    }
}
```
This pattern is called a 'discriminated union', and it removes a whole category of bugs. I can't accidentally read data on an error response, because the commpiler simply won't allow it.

**Conclusion:** Using '&' to combine pieces that always belong together, and '|' to model "one of these" situations. Together they describe real world data accurately, and typescript rewards us with smarter autocomplete and safer code.