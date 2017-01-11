class Complement

  def self.of_dna(dna_string)

    dna_string.upcase!
    rna_string = ""

    dna_string.each_char {|nucleotide|
      
      case nucleotide        
      when nucleotide == "G"
        rna_string << "C"
      when nucleotide == "C"
        rna_string << "G"
      when nucleotide == "T"
        rna_string << "A"
      when nucleotide == "A"
        rna_string << "U"
      else
        return ""
      end
    }

    rna_string

  end
end