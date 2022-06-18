## Problem Description
You are given an unsorted array with both positive and negative elements. You have to find the smallest positive number missing from the array in O(n) time using constant extra space. You can modify the original array.

## Examples
 Input:  {2, 3, 7, 6, 8, -1, -10, 15}
 Output: 1

 Input:  { 2, 3, -7, 6, 8, 1, -10, 15 }
 Output: 4

 Input: {1, 1, 0, -1, -2}
 Output: 2

## Complexity
- For solution where we use sort — O(nlogn)
- For solution where we use key value — O(n)

## Developer notes
There are multiple solutions to this problem for example one where we sort the array and then keep on checking if a counter is matching the element of array. Second one is to store the array contents into a dictionary and then use search operation on the key value pair.
