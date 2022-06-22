## Problem Description
Given two arrays as input, find their intersection in an efficient way

## Examples
- Input = [1,2,3,4] & [3,4,5,6] then output = [3,4]

## Complexity
O(N)

## Developer notes
This problem primarily base on the lookup/search operation. We need to search for each element of the first array in the second array. If we keep the data structure same, then the time complexity will be O(n^2) because for each element of first array, we need to traverse the second array. If we keep the data of any one of array in JS Objects/maps, then the search operation will be O(1) and we can complete the intersection in O(N).