class Luhn(object):
    def __init__(self, card_num):
        self.card_num = card_num

    def is_valid(self):
        if len(self.card_num.strip()) <= 1:
            return False
        try:
            static_ints, luhn_ints = self.format_number()
            # starting at -1 so I can increment at the beginning
            counter = -1

            for n in luhn_ints:
                counter += 1
                squared = int(n)*2
                if squared > 9:
                    x = squared - 9
                    luhn_ints[counter] = x
                else:
                    luhn_ints[counter] = squared

            total = sum(luhn_ints) + sum(static_ints)
            return(total % 10 == 0)

        except:
            return False 

    def format_number(self):
        """Takes a string and outputs an array that can 
        have the Luhn algorithm applied to it"""
        try:    
            ccn = self.card_num.replace(" ", "")
            slicable_ccn = list(ccn)
            static = [int(d) for d in slicable_ccn[::-2]]
            slicable_ccn.pop()
            luhn = [int(d) for d in slicable_ccn[::-2]]

            return static, luhn
        except:
            return False

