## Typescript Assignment Solutions

Hey! This repo has my solutions for the Typescript Problems. There are 8 small problems, and for each one i tried to keep the logic simple (no 'any' anywhere).

#### Solutions:

1. **multiplyValue:** Multiplies a number by an optional multiplier, and doubles it if no multiplier is given. I added a separate check for 0 because 0 is falsy in JS, without it the function would have doubled the value instead of returning 0.

2. **processInput:** Takes a 'string | number | boolean' and uses 'typeof' narrowing to handle each type. Strings get trimmed and lowercased, numbers get multiplied by 10, and booleans become "Active" or "Inactive".

3. **formatCoordinate:** Takes a readonly tuple [latitude, longtitude, locationName], destructures it right in the parameter list, and returns a formatted location string.

4. **concatenateArrays:** A generic function that accepts any number of arrays using a rest parameter and merges them into one array, keeping the element type 'T' intact.

5. **getPopularCourses:** Goes through a list of 'Course' objects and returns only the ones that are published and have at least 'minStudents' students.

6. **pluckValues:** Uses K extedns keyof T so we can only pluck keys that actually exist on the objects. The return type is T[K][], so typescript knows exactly what type of values we get back.

7. **Employee and Manager:** A simple inheritance example. I used parameter properties to keep the constructors short. 'name' is protected so Manager can use it in 'getRoleInfo(), while 'baseSalary' stays private to Employee.

8. **validateAgeAsync:** Returns a Promise that resolves with "Access Granted" after 1 second if the age is 18 or above. Otherwise it rejects right away with an 'Error'.


## Blog Posts
Along with the code, i wrote two short blogs.

 * [Generics and Promise<T>](./generics.md)
 * [Union and intersaction](./Union-and-intersaction.md)

 *Thanks for checking it out!*