from collections import deque


class Luhn(object):
    def __init__(self, card_num):
        self.card_num = card_num

    def is_valid(self):
        if len(self.card_num) <= 1:
            return False
        try:
            ccn = self.card_num
            ccn = ccn.replace(" ", "")
            ccn = deque(ccn[:-1])
            ccn_list_of_ints = [int(d) for d in ccn]
            products = []

            for n in ccn_list_of_ints[::-2]:
                squared = int(n)*2
                if squared > 9:
                    char = str(squared)
                    digits = [int(char) for char in str(n*2)]
                    print("this is digits and the type of its contents:",
                          digits, type(digits[0]))
                    products.append(sum(digits))
                    continue
                else:
                    products.append(squared)

            print("this is list of products", products)
            return sum(products) % 10 == 0

        except:
            raise Exception(
                "Please submit a string of numbers and spaces only")
