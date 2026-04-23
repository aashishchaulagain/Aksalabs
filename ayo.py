import random 
while True:
    try:
        n = int(input("Enter the number of characters: "))
        char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        password = "".join(random.choices(char, k=n))
        print(password)
    except ValueError:
        print("Please enter a valid number")