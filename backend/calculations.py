import random


def generate(array, length, duplicates):
    if duplicates:
        for i in range(length):
            array.append(random.randint(1, length))
    else:
        array_temp = (list(range(1, length+1)))
        random.shuffle(array_temp)
        for i in range(length):
            array.append(array_temp[i])
    return array


def swap(array, a, b):
      temp = array[a]
      array[a] = array[b]
      array[b] = temp

def shuffle(array):
    random.shuffle(array)
