"""
This script contains functions to calculate the sum of integers within a specified range and to find a specific integer 'k' such that the sum of integers from 1 to 'k' is equal to the sum of integers from 'k' to 'n'.

Functions:
- sumRange(n1, n2): Calculates the sum of integers from n1 to n2.
- findK(n, k1, k2): Recursively finds the integer 'k' such that the sum of integers from 1 to 'k' is equal to the sum of integers from 'k' to 'n'.

Usage:
- The script calculates the value of 'k' for a given 'n' and prints the result.
"""

def sumRange(n1, n2) :
    return (n2 * (n2 + 1) // 2) - (n1 * (n1 + 1) // 2) + n1

def findK(n, k1, k2):
    k = (k1 + k2) // 2
    s1 = sumRange(1, k)
    s2 = sumRange(k, n)
    print  (n, k1, k2, s1, s2)
    if k == k1 or k == k2 :
        return -1
    elif s1 == s2:
        return k
    elif s1 < s2:
        k1 = k
    else:
        k2 = k
    return findK(n, k1, k2)
n = 9800
# for i in range (1000, 11000):
#     if findK(i, 1, i) != -1:
#         print(i)
print(findK(n, 1, n))

# print(sumRange(35, 49))
