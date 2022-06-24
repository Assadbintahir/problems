## Problem Description
Given two positive integers h and w representing the height h and width w which forms a rectangle. Also, there are two arrays of integers horizontalCuts and verticalCuts where horizontalCuts[i] is the distance from the top of the rectangle to the ith horizontal cut and similarly, verticalCuts[j] is the distance from the left of the rectangle to the jth vertical cut. The task is to find the maximum area of the rectangle after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and . Since the answer can be a huge number, return this modulo 10^9 + 7.

## Examples
- Input: h=5, w=4, [1,2,4], [1,3] then output: 4
- Input: h=6, w=4, [2,5], [1,3] then output: 6
- Input: h=5, w=4, [3,1], [1] then output: 4

## Complexity
O(nlogn)

## Developer notes
