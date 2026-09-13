n = int(input("Enter number: "))
for i in range(1, n+1):
    if n % i == 0:
        dsum = sum(map(int, str(i)))
        print(i, "is Harshad" if i % dsum == 0 else "is not Harshad")