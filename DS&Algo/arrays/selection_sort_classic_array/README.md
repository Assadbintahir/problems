### Selection Sort
Selection sort is another sorting algorithm with a time complexity of O(n^2). Idea is to compare each element of the array with the lowest element of each pass through. 

### Selection sort vs bubble sort
Although when we express complexity of bubble sort and selection sort in terms of Big O, we find that both are O(n^2). But in reality, bubble sort is twice slow as selection sort. Since we ignore constants when looking at Big O, it becomes O(n^2).

When two algorithms fall under the same classification of Big O, it doesn’t necessarily mean that both algorithms have the same speed. After all, Bubble Sort is twice as slow as Selection Sort even though both are O(N2). So, while Big O is perfect for contrasting algorithms that fall under different classifications of Big O, when two algorithms fall under the same classification, further analysis is required to determine which algorithm is faster.