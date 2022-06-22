### Benefit over linear search
As compared to linear search, binary search doesn't require us to check for each element in the ordered array. This is an algorithm associated with ordered array only with a time complexity O(logn). Time complexity of linear search is O(n)

### Ordered array vs Classic Array
- Ordered array has a better algorithm for search in the form of binary search. But ordered array has relatively expensive operation when it comes to insert or delete operation because we need to do the shift operations to maintain the order of array.
- Classic array has relatively lighter insert and delete operations because we don't need to maintain order while inserting or deleting from array. However we can't use the binary search in classic array without sorting it first.


Ordered array or classic array is no silver bullet. We will have to look constraints on problem at hand and make a choice accordingly.