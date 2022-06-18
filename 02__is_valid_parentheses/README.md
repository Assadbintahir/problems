## Problem Description
Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.

## Examples
Input: exp = “[()]{}{[()()]()}” 
Output: Balanced

Input: exp = “[(])” 
Output: Not Balanced 

## Complexity
O(n)

## Developer notes
In this problem, objective is to detect brackets which were opened but were not closed. We can use a stack data structure to first add opening brackets as we encounter them. We remove the first element of stack once we detect its closing bracket. At the end if the stack still have some brackets, that implies that those brackets were opened but not closed. Hence making it unbalanced pair of brackets.
- Since JS has built in pop/push/shift/unshift functions for array. We can use it as stack.
- JS objects are also key value pairs, hence using a dictionary object allows us to skip a loop with in a loop.
- Hashmap/Key value pair & Stack data structures are the crux of this problem.
