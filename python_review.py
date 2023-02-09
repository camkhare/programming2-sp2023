print("hello world")


# this is a single line comment

"""
Task:
- ask the user for one number
- ask the user for another number
- print the sum of their numbers
"""
number_1 = int(input("Enter a number: "))
number_2 = int(input("Enter another number: "))

total = number_1 + number_2
print(total)

if total > 10:
	print("booooo")
elif total <= 8:
	print("Yayayya")
else: #must be 10
	print("Your number is 10")

for i in range(total):
	print(i)

for i in range(4):
	