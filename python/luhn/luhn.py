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

            products = [int(n)*2 for n in ccn_list_of_ints[::-2]]
            return sum(products) % 10 == 0
        except:
            raise Exception("this isn't doing what we want")
