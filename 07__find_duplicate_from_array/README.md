## Problem Description
Given a big sized array, find duplicates in an efficient way.

## Examples
- Input = [1,2,3,4,4,5,2,3] then output = [2,3,4]

## Complexity
O(N)

## Developer notes
This problem primarily base on the lookup/search operation. We need to search for each element of the array in the remaining array to see if there is any matching element. Here again we can utilize the powers of JS objects/maps blazing search operation and solve this problem in O(N)

This problem can be posed different outcomes such as:
- Find duplicates and remove them.
- Find duplicates and return duplicates.
- Find duplicates and return the count of duplicates.

In each case, crux of the problem is to use JS objects search operation to achieve maximum performance.