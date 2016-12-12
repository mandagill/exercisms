class Hamming

  def self.compute(seq1, seq2)
    hamming_number = 0
    counter = 0

    while counter < seq1.length
      if !(seq1[counter] == seq2[counter])
        hamming_number += 1
      end
      counter += 1
    end

    hamming_number
  end
end
