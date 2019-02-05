class Clock(object):
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute

    def __repr__(self):
        return(self.format_for_printing(self.hour) + ':' + self.format_for_printing(self.minute))

    def __eq__(self, other):
        pass

    def __add__(self, minutes):
        pass

    def __sub__(self, minutes):
        pass

    @staticmethod
    def format_for_printing(attr):
        if len(str(attr)) == 1:
            str_val = '0' + str(attr)
        else:
            str_val = str(attr)
        return(str_val)
