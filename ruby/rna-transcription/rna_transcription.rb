class Complement

  def self.of_dna(dna_string)

    dna_string.upcase!
    rna_string = ""

    dna_string.each_char {|nucleotide|
      
      rna_string << case
      when nucleotide == "G"
        "C"
      when nucleotide == "C"
        "G"
      when nucleotide == "T"
        "A"
      when nucleotide == "A"
        "U"
      else
        return ""
      end
    }

    rna_string

  end
end