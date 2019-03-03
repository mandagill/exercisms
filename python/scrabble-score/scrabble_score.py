def build_dict():
    """this builds a dictionary using int as a key, and a set of
    str as value. The int represents the point value of the
    letters in its corresponding set."""

    # It bothers me that this is repetitive but I'm not
    # sure what a DRYer/prettier way might be since Scrabble
    # point value categories aren't linear.
    scoring_index = {}
    scoring_index[1] = set('AEIOULNRST')
    scoring_index[2] = set('DG')
    scoring_index[3] = set('BCMP')
    scoring_index[4] = set('FHVWY')
    scoring_index[5] = set('K')
    scoring_index[8] = set('JX')
    scoring_index[10] = set('QZ')
    return scoring_index


def score_lookup(letter):
    table = build_dict()
    for i in table:
        if table[i].__contains__(letter):
            return i


def score(word):
    s = word.upper()
    iterable_word = list(s)
    score = 0
    for l in iterable_word:
        score += score_lookup(l)
    return score
