## Problem Description
Given an array of integers, and a number ‘sum’, find the number of pairs of integers in the array whose sum is equal to ‘sum’.

## Examples
Input:  arr[] = {1, 5, 7, -1}, sum = 6
Output:  2
Explanation: Pairs with sum 6 are (1, 5) and (7, -1)

Input:  arr[] = {1, 5, 7, -1, 5}, sum = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5)         

Input:  arr[] = {1, 1, 1, 1}, sum = 2
Output:  6
Explanation: There are 3! pairs with sum 2.

## Complexity
O(n)

## Developer notes
One way of solving this problem is using brute force technique. That will yield in an O(n^2) complexity. The JS solution uses JS objects as a hash / key value pair and solves the problems in O(N) complexity.
- JS Key value pairs / hash map has a time complexity of O(1) while doing the search and insert operations.
- If we keep the data in array data structure, we will have to do expensive search for each item while iterating over the original input array. That makes this solution less performant.
- Performance of this problem depends on fact that which data structure is best suited for search operations.