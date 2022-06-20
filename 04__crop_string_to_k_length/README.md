## Problem Description
You are given an a string and an limit number. Write a function which will return the cropped string upto that limit number

## Examples
 Input:  ('Codility We test coders', 14)
 Output: "Codility We"

 Input:  ('Why not', 100)
 Output: "Why not"

 Input: ('The quick brown fox jumps over the lazy dog', 39)
 Output: "The quick brown fox jumps over the lazy"

 Input: ('To crop or not to crop', 21)
 Output: "To crop or not to"

## Complexity
O(n)

## Developer notes
This is a simple string based problem which can be solved using JS built in function of substring which splits the string upto the index we provide. 
