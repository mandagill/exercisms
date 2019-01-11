class Luhn(object):
    def __init__(self, card_num):
        self.card_num = card_num

    def is_valid(self):
        if len(self.card_num) <= 1:
            return False
        try:
            ccn = self.card_num
            ccn = ccn.replace(" ", "")
            slicable_ccn = list(ccn)
            static_ints = [int(d) for d in slicable_ccn[::-2]]
            slicable_ccn.pop()
            luhn_ints = [int(d) for d in slicable_ccn[::-2]]

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
            raise Exception(
                "🎶 something's broken something's broken 🎶")
